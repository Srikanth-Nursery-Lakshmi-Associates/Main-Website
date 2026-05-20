const { Pool } = require('pg');
const { resolve4 } = require('dns').promises;
const { parse } = require('pg-connection-string');
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable. Please check your .env file.');
}

// Resolve hostname to an IPv4 address before connecting.
// Render's network does not support IPv6 outbound; without this, Node.js may
// pick an AAAA record and fail with ENETUNREACH.
const poolPromise = (async () => {
  const config = parse(databaseUrl);
  try {
    const [ipv4] = await resolve4(config.host);
    config.host = ipv4;
    console.log(`DB host resolved to IPv4: ${ipv4}`);
  } catch (err) {
    console.warn(`resolve4 failed for "${config.host}": ${err.message} — falling back to hostname`);
  }
  const pool = new Pool({
    ...config,
    ssl: { rejectUnauthorized: false },
    family: 4, // tell pg's dns.lookup to only return IPv4, belt-and-suspenders
  });
  pool.on('connect', () => console.log('Connected to PostgreSQL database'));
  pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });
  return pool;
})();

module.exports = {
  query: async (text, params) => {
    const pool = await poolPromise;
    return pool.query(text, params);
  },
  pool: poolPromise,
};
