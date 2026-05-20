const { Pool } = require('pg');
const { resolve4 } = require('dns').promises;
const { parse } = require('pg-connection-string');
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable. Please check your .env file.');
}

// Resolve hostname to an IPv4 address before connecting.
// Render's network is IPv4-only; without this, Node.js may pick the AAAA record
// and fail with ENETUNREACH.
const poolPromise = (async () => {
  const config = parse(databaseUrl);
  try {
    const [ipv4] = await resolve4(config.host);
    config.host = ipv4;
  } catch {
    // DNS lookup failed — let pg try with the original hostname
  }
  const pool = new Pool({
    ...config,
    ssl: { rejectUnauthorized: false },
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
