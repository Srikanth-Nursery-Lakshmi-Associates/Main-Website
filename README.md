# Srikanth Nursery & Lakshmi Associates Website

A fully functional website for Srikanth Nursery & Lakshmi Associates, built with React, Tailwind CSS, Express.js, and Supabase.

## Project Structure

```
.
├── backend/              # Express.js backend API
│   ├── config/          # Configuration files
│   ├── routes/          # API routes
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API service
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # Entry point
│   └── package.json     # Frontend dependencies
├── supabase-schema.sql        # Database schema
└── supabase-seed-projects.sql # Project seed data
```

## Features

- Responsive design with Tailwind CSS
- Modern React components with hooks
- RESTful API with Express.js
- Supabase database integration
- Project filtering and modal views
- Contact information display
- Service categorization
- Client showcase

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

## Setup Instructions

### 1. Set Up Supabase Database

1. Create a new project on [Supabase](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL scripts in this order:
   - First: `supabase-schema.sql` (creates tables and initial data)
   - Second: `supabase-seed-projects.sql` (seeds project data)
4. Note your project URL and anon key from Settings > API

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your Supabase credentials:
# PORT=3000
# SUPABASE_URL=your_supabase_project_url
# SUPABASE_ANON_KEY=your_supabase_anon_key

# Start the backend server
npm start

# For development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:3000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add:
# VITE_API_URL=http://localhost:3000/api

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## API Endpoints

### Company
- `GET /api/company/info` - Get company information
- `GET /api/company/contact` - Get contact information

### Services
- `GET /api/services` - Get all services
- `GET /api/services/grouped` - Get services grouped by category
- `GET /api/services?category=plantation` - Filter by category

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?type=government` - Filter by type
- `GET /api/projects?featured=true` - Get featured projects
- `GET /api/projects/:slug` - Get single project with details

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients?type=government` - Filter by type

## Environment Variables

### Backend (.env)
```
PORT=3000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
```

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview  # Preview the production build
```

The build output will be in `frontend/dist/`

## Tech Stack

### Frontend
- React 19
- Tailwind CSS 4
- Vite
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Supabase JS Client
- CORS
- dotenv

### Database
- Supabase (PostgreSQL)

## Features Overview

### Hero Section
- Company name and tagline
- Key statistics (established year, area, turnover)
- Call-to-action buttons

### About Section
- Company history
- Mission and vision
- Horticultural expertise
- Information about both companies (Srikanth Nursery & Lakshmi Associates)

### Services Section
- Categorized services
- Plantation works
- Landscape development
- Specialized services
- Maintenance services

### Projects Section
- Filterable project gallery
- Government and private projects
- Project detail modal with:
  - Project description
  - Client information
  - Location
  - Species/plants used

### Clients Section
- Government clients
- Private clients
- Major client highlight

### Contact Section
- Contact person information
- Phone and email
- Address
- Expertise highlights

## Database Schema

The database includes tables for:
- `company_info` - Company details
- `services` - Services offered
- `projects` - Project portfolio
- `project_images` - Project images
- `project_species` - Plants/species used in projects
- `clients` - Client information
- `contact_info` - Contact details

All tables include Row Level Security (RLS) with public read access.

## License

ISC

## Contact

For more information, contact:
- Rajesh Kumar Dubey (MD)
- Phone: +919959714692
