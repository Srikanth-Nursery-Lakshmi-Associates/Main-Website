-- Database Schema for Srikanth Nursery Website
-- Run this in your Supabase SQL Editor

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS project_species CASCADE;
DROP TABLE IF EXISTS project_images CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS contact_info CASCADE;
DROP TABLE IF EXISTS company_info CASCADE;

-- Company Information Table
CREATE TABLE company_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tagline TEXT,
  location TEXT,
  established_year INTEGER,
  area_acres INTEGER,
  annual_turnover TEXT,
  mission TEXT,
  vision TEXT,
  about TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects Table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  client TEXT,
  location TEXT,
  description TEXT,
  project_value TEXT,
  year_completed INTEGER,
  status TEXT DEFAULT 'completed',
  is_featured BOOLEAN DEFAULT false,
  thumbnail_url TEXT,
  image_folder TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Images Table
CREATE TABLE project_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Species/Plants Used Table
CREATE TABLE project_species (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  species_name TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clients Table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT,
  logo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Information Table
CREATE TABLE contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_person TEXT NOT NULL,
  designation TEXT,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  is_primary BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial company data
INSERT INTO company_info (name, tagline, location, established_year, area_acres, annual_turnover, mission, vision, about)
VALUES (
  'Srikanth Nursery & Lakshmi Associates',
  'Landscape Design | Plantations | Park Development',
  'Hyderabad, Telangana',
  2008,
  20,
  '₹25 Crores',
  'At Srikanth Nursery, our mission is to transform outdoor spaces into beautiful, sustainable, and functional environments that enrich the lives of our clients. We are committed to providing exceptional craftsmanship, innovative design, and a client-focused approach to every project, ensuring that we not only meet but exceed expectations.',
  'To be the leading landscape design and build firm in our region, recognized for our commitment to quality, environmental stewardship, and the creation of unique, lasting landscapes that inspire and delight.',
  'With over 17 years of experience, Srikanth Nursery is a leading landscaping firm dedicated to transforming outdoor spaces into sustainable and visually appealing environments. We combine horticultural expertise with innovative landscape design to deliver high-quality projects across Hyderabad and Telangana.'
);

-- Insert contact information
INSERT INTO contact_info (contact_person, designation, phone, is_primary)
VALUES ('Rajesh Kumar Dubey', 'MD', '+919959714692', true);

-- Insert services with image URLs
INSERT INTO services (category, name, description, image_url, display_order) VALUES
('plantation', 'Central Median Plantation', 'Professional median landscaping for highways and roads', '/images/Other images/plantation works.png', 1),
('plantation', 'Avenue Plantation', 'Tree-lined avenue development for urban beautification', '/images/Other images/plantation works.png', 2),
('plantation', 'Highway Plantation', 'Large-scale highway greening projects', '/images/Other images/plantation works.png', 3),
('plantation', 'Block Plantation', 'Organized block planting for structured landscapes', '/images/Other images/planting saplings.png', 4),
('landscape', 'Theme Parks', 'Creative and engaging theme park development', '/images/Other images/landscape development.png', 5),
('landscape', 'Colony Parks', 'Community park design and development', '/images/Other images/landscape development.png', 6),
('landscape', 'Rock Gardens', 'Artistic rock garden installations', '/images/Other images/landscape development.png', 7),
('landscape', 'Lake Beautification', 'Waterfront and lakeside landscaping', '/images/Other images/landscape development.png', 8),
('specialized', 'Vertical Gardens', 'Modern vertical garden installations', '/images/Other images/specialized services.png', 9),
('specialized', 'Irrigation Systems', 'Efficient watering system design and installation', '/images/Other images/specialized services.png', 10),
('specialized', 'Water Features', 'Fountains, ponds, and water elements', '/images/Other images/specialized services.png', 11),
('specialized', 'Lawn Development', 'Professional lawn creation and maintenance', '/images/Other images/specialized services.png', 12),
('maintenance', 'Plant Supply', 'Wide variety of high-quality plants', '/images/Other images/plant supply and maintenance.png', 13),
('maintenance', 'Trees and Shrubs', 'Native and ornamental tree supply', '/images/Other images/plant supply and maintenance.png', 14),
('maintenance', 'Garden Maintenance', 'Ongoing garden care and upkeep', '/images/Other images/plant supply and maintenance.png', 15);

-- Insert clients
INSERT INTO clients (name, type, display_order) VALUES
('HMDA (Hyderabad Metropolitan Development Authority)', 'government', 1),
('Municipal Departments', 'government', 2),
('Forest Department', 'government', 3),
('G Square Developers', 'private', 4),
('Lulu Group', 'private', 5);

-- Insert Projects with image folders
INSERT INTO projects (title, slug, type, client, location, description, status, is_featured, image_folder, thumbnail_url) VALUES
(
  'Gandipet Lake Front Park',
  'gandipet-lake-front-park',
  'government',
  'HMDA',
  'Osman Sagar, Hyderabad',
  'The Gandipet Lake Front Park developed on the banks of Osman Sagar lake has been a famous tourist attraction since a few decades. HMDA have developed it into an Urban park giving it a new life and identity. We chose to go with contemporary landscapes which is very rarely seen in Hyderabad. The coordination and effective use of landscape elements contribute to the overall success of the design. The elements include Land Forms, Water Features, Pavement Materials, Site Amenities, Lighting and Signs.',
  'completed',
  true,
  'Gandipet Lake Front Park',
  '/images/Gandipet Lake Front Park/Screenshot 2026-04-02 at 3.20.40 AM.png'
),
(
  'Warangal Highway NH-163',
  'warangal-highway-nh-163',
  'government',
  'HMDA',
  'Warangal, Telangana',
  'The Warangal Highway is a vital transportation corridor connecting the city of Warangal to other major cities in the region. To improve safety, traffic flow, and aesthetics, we designed and implemented central medians and landscaping along the highway with carefully selected topiary plants, shrubs, flowering plants, and avenue plantations.',
  'completed',
  true,
  'Wrangal Higway',
  '/images/Wrangal Higway/Screenshot 2026-04-02 at 3.14.20 AM.png'
),
(
  'Mayuri Nagar Rock Garden',
  'mayuri-nagar-rock-garden',
  'government',
  'HMDA',
  'Miyapur, Hyderabad',
  'The Mayuri Nagar Rock Garden situated at Miyapur, Hyderabad developed into an Urban park giving it a new life and identity. We chose to go with contemporary landscapes which is very rarely seen in Hyderabad. The coordination and effective use of landscape elements contribute to the overall success of the design including Land Forms, Water Features, Pavement Materials, Site Amenities, Lighting and Signs.',
  'completed',
  true,
  'Mayuri Nagar Rock Garden',
  '/images/Mayuri Nagar Rock Garden/Screenshot 2026-04-02 at 3.15.24 AM.png'
),
(
  'Jai Hind Colony Park',
  'jai-hind-colony-park',
  'government',
  'HMDA',
  'Hayathnagar, Hyderabad',
  'The Jai Hind Colony Park situated at Hayathnagar, Hyderabad developed into an Urban park giving it a new life and identity. We chose to go with contemporary landscapes creating oneness and an easy flow in the park with carefully coordinated landscape elements including Land Forms, Water Features, Pavement Materials, Site Amenities, Lighting and Signs.',
  'completed',
  true,
  'Jai Hind Colony Park',
  '/images/Jai Hind Colony Park/Screenshot 2026-04-02 at 3.16.30 AM.png'
),
(
  'Gajwel Ring Road',
  'gajwel-ring-road',
  'government',
  'HMDA',
  'Gajwel, Telangana',
  'The Gajwel Ring Road is a vital transportation corridor connecting the city to other major cities in the region. We designed and implemented central medians and landscaping along the highway to improve safety, traffic flow, and aesthetics with diverse topiary plants, shrubs, flowering plants, grasses, and avenue plantations.',
  'completed',
  true,
  'Gajwel Ring Road',
  '/images/Gajwel Ring Road/Screenshot 2026-04-02 at 3.17.21 AM.png'
),
(
  'Nanded Highway NH-161',
  'nanded-highway-nh-161',
  'government',
  'HMDA',
  'Nanded, Telangana',
  'The Nanded Highway (NH-161) is a vital transportation corridor. To improve safety, traffic flow, and aesthetics, we designed and implemented central medians and comprehensive landscaping along the highway featuring topiary plants, flowering shrubs, grasses, and avenue plantations.',
  'completed',
  true,
  'Nanded Highway',
  '/images/Nanded Highway/Screenshot 2026-04-02 at 3.17.48 AM.png'
),
(
  'G Square City Coimbatore',
  'g-square-city-coimbatore',
  'private',
  'G Square Developers',
  'Coimbatore, Tamil Nadu',
  'Large-scale residential township landscaping project for G Square Developers. Comprehensive plantation and landscape development work including avenue trees, garden areas, community parks, and green spaces throughout the township.',
  'completed',
  true,
  'G Square City Coimbatore',
  '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.18.21 AM.png'
),
(
  'Fair Company - Lulu Group Malegaon',
  'fair-company-lulu-group-malegaon',
  'private',
  'Lulu Group',
  'Malegaon, Maharashtra',
  'Commercial landscape development for Lulu Group''s Fair Company facility. Professional landscaping with modern design elements, structured plantations, and maintenance services.',
  'completed',
  true,
  'Fair Company of lulu group, malegain',
  '/images/Fair Company of lulu group, malegain/Screenshot 2026-04-02 at 3.19.00 AM.png'
);

-- Insert project images
INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Gandipet Lake Front Park/Screenshot 2026-04-02 at 3.20.40 AM.png', 1 FROM projects WHERE slug = 'gandipet-lake-front-park'
UNION ALL
SELECT id, '/images/Gandipet Lake Front Park/Screenshot 2026-04-02 at 3.20.49 AM.png', 2 FROM projects WHERE slug = 'gandipet-lake-front-park';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Wrangal Higway/Screenshot 2026-04-02 at 3.14.20 AM.png', 1 FROM projects WHERE slug = 'warangal-highway-nh-163'
UNION ALL
SELECT id, '/images/Wrangal Higway/Screenshot 2026-04-02 at 3.14.41 AM.png', 2 FROM projects WHERE slug = 'warangal-highway-nh-163'
UNION ALL
SELECT id, '/images/Wrangal Higway/Screenshot 2026-04-02 at 3.14.52 AM.png', 3 FROM projects WHERE slug = 'warangal-highway-nh-163';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Mayuri Nagar Rock Garden/Screenshot 2026-04-02 at 3.15.24 AM.png', 1 FROM projects WHERE slug = 'mayuri-nagar-rock-garden'
UNION ALL
SELECT id, '/images/Mayuri Nagar Rock Garden/Screenshot 2026-04-02 at 3.15.38 AM.png', 2 FROM projects WHERE slug = 'mayuri-nagar-rock-garden'
UNION ALL
SELECT id, '/images/Mayuri Nagar Rock Garden/Screenshot 2026-04-02 at 3.15.51 AM.png', 3 FROM projects WHERE slug = 'mayuri-nagar-rock-garden'
UNION ALL
SELECT id, '/images/Mayuri Nagar Rock Garden/Screenshot 2026-04-02 at 3.16.05 AM.png', 4 FROM projects WHERE slug = 'mayuri-nagar-rock-garden';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Jai Hind Colony Park/Screenshot 2026-04-02 at 3.16.30 AM.png', 1 FROM projects WHERE slug = 'jai-hind-colony-park'
UNION ALL
SELECT id, '/images/Jai Hind Colony Park/Screenshot 2026-04-02 at 3.16.42 AM.png', 2 FROM projects WHERE slug = 'jai-hind-colony-park'
UNION ALL
SELECT id, '/images/Jai Hind Colony Park/Screenshot 2026-04-02 at 3.16.50 AM.png', 3 FROM projects WHERE slug = 'jai-hind-colony-park'
UNION ALL
SELECT id, '/images/Jai Hind Colony Park/Screenshot 2026-04-02 at 3.17.01 AM.png', 4 FROM projects WHERE slug = 'jai-hind-colony-park';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Gajwel Ring Road/Screenshot 2026-04-02 at 3.17.21 AM.png', 1 FROM projects WHERE slug = 'gajwel-ring-road'
UNION ALL
SELECT id, '/images/Gajwel Ring Road/Screenshot 2026-04-02 at 3.17.30 AM.png', 2 FROM projects WHERE slug = 'gajwel-ring-road';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Nanded Highway/Screenshot 2026-04-02 at 3.17.48 AM.png', 1 FROM projects WHERE slug = 'nanded-highway-nh-161'
UNION ALL
SELECT id, '/images/Nanded Highway/Screenshot 2026-04-02 at 3.17.57 AM.png', 2 FROM projects WHERE slug = 'nanded-highway-nh-161';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.18.21 AM.png', 1 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.18.29 AM.png', 2 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.18.38 AM.png', 3 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.18.46 AM.png', 4 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.19.00 AM.png', 5 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.19.09 AM.png', 6 FROM projects WHERE slug = 'g-square-city-coimbatore'
UNION ALL
SELECT id, '/images/G Square City Coimbatore/Screenshot 2026-04-02 at 3.19.20 AM.png', 7 FROM projects WHERE slug = 'g-square-city-coimbatore';

INSERT INTO project_images (project_id, image_url, display_order)
SELECT id, '/images/Fair Company of lulu group, malegain/Screenshot 2026-04-02 at 3.19.00 AM.png', 1 FROM projects WHERE slug = 'fair-company-lulu-group-malegaon'
UNION ALL
SELECT id, '/images/Fair Company of lulu group, malegain/Screenshot 2026-04-02 at 3.19.09 AM.png', 2 FROM projects WHERE slug = 'fair-company-lulu-group-malegaon'
UNION ALL
SELECT id, '/images/Fair Company of lulu group, malegain/Screenshot 2026-04-02 at 3.19.20 AM.png', 3 FROM projects WHERE slug = 'fair-company-lulu-group-malegaon'
UNION ALL
SELECT id, '/images/Fair Company of lulu group, malegain/Screenshot 2026-04-02 at 3.19.58 AM.png', 4 FROM projects WHERE slug = 'fair-company-lulu-group-malegaon';
