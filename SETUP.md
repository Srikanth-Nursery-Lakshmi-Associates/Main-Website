# Quick Setup Guide

Follow these steps to get the website up and running:

## Step 1: Supabase Setup (5 minutes)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the database to be provisioned
4. Go to the SQL Editor (left sidebar)
5. Copy and paste the contents of `supabase-schema.sql` and click "Run"
6. Copy and paste the contents of `supabase-seed-projects.sql` and click "Run"
7. Go to Settings > API and copy:
   - Project URL
   - anon/public key

## Step 2: Backend Setup (2 minutes)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your favorite text editor
# Add your Supabase URL and anon key
nano .env  # or use: code .env (VS Code), vim .env, etc.
```

Your `.env` file should look like:
```
PORT=3000
SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

```bash
# Start the backend server
npm start
```

Keep this terminal open. The backend should now be running on `http://localhost:3000`

## Step 3: Frontend Setup (2 minutes)

Open a NEW terminal window:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file
nano .env  # or use: code .env, vim .env, etc.
```

Your `.env` file should look like:
```
VITE_API_URL=http://localhost:3000/api
```

```bash
# Start the development server
npm run dev
```

The frontend should now be running. Open your browser to the URL shown (usually `http://localhost:5173`)

## Troubleshooting

### Backend won't start
- Make sure you have Node.js installed: `node --version` (should be v16+)
- Check that `.env` file exists in the backend folder
- Verify Supabase credentials are correct
- Check if port 3000 is already in use

### Frontend won't start
- Make sure backend is running first
- Check that `.env` file exists in the frontend folder
- Try clearing cache: `rm -rf node_modules package-lock.json && npm install`

### Website shows "Connection Error"
- Ensure backend server is running on port 3000
- Check browser console for errors (F12)
- Verify VITE_API_URL in frontend/.env is correct
- Test backend directly: `curl http://localhost:3000/api/company/info`

### Database queries failing
- Verify you ran both SQL scripts in Supabase
- Check Row Level Security policies are enabled
- Ensure anon key has proper permissions

## Adding More Data

You can add more projects, services, or update company info directly in Supabase:

1. Go to your Supabase project
2. Click "Table Editor" in the sidebar
3. Select the table you want to edit
4. Click "Insert row" or edit existing rows

Changes will be reflected immediately on the website!

## Next Steps

- Add images to projects by uploading to Supabase Storage
- Customize colors in Tailwind config
- Add more sections or features
- Deploy to production (Vercel, Netlify, etc.)

## Need Help?

Check the main README.md for more detailed information about:
- API endpoints
- Database schema
- Component structure
- Building for production
