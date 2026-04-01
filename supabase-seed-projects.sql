-- Seed data for major projects

-- Insert Projects
INSERT INTO projects (title, slug, type, client, location, description, status, is_featured, year_completed) VALUES
(
  'Gandipet Lake Front Park',
  'gandipet-lake-front-park',
  'government',
  'HMDA',
  'Osman Sagar, Hyderabad',
  'The Gandipet Lake Front Park developed on the banks of Osman Sagar lake has been a famous tourist attraction since a few decades. HMDA have developed it into an Urban park giving it a new life and identity. We chose to go with contemporary landscapes which is very rarely seen in Hyderabad. The coordination and effective use of landscape elements contribute to the overall success of the design. The elements include Land Forms, Water Features, Pavement Materials, Site Amenities, Lighting and Signs.',
  'completed',
  true,
  NULL
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
  NULL
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
  NULL
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
  NULL
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
  NULL
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
  NULL
),
(
  'Nirmal District Collectorate',
  'nirmal-district-collectorate',
  'government',
  'District Administration',
  'Nirmal, Telangana',
  'Landscape development and plantation work for Nirmal District Collectorate premises.',
  'completed',
  false,
  NULL
);

-- Get project IDs for species insertion
DO $$
DECLARE
  gandipet_id UUID;
  warangal_id UUID;
  mayuri_id UUID;
  jaihind_id UUID;
  gajwel_id UUID;
  nanded_id UUID;
BEGIN
  -- Get project IDs
  SELECT id INTO gandipet_id FROM projects WHERE slug = 'gandipet-lake-front-park';
  SELECT id INTO warangal_id FROM projects WHERE slug = 'warangal-highway-nh-163';
  SELECT id INTO mayuri_id FROM projects WHERE slug = 'mayuri-nagar-rock-garden';
  SELECT id INTO jaihind_id FROM projects WHERE slug = 'jai-hind-colony-park';
  SELECT id INTO gajwel_id FROM projects WHERE slug = 'gajwel-ring-road';
  SELECT id INTO nanded_id FROM projects WHERE slug = 'nanded-highway-nh-161';

  -- Gandipet Lake species
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (gandipet_id, 'Cannas Variegated', 'flowering'),
  (gandipet_id, 'Cannas Wild (Orange, Red, Yellow)', 'flowering'),
  (gandipet_id, 'Heliconia', 'flowering'),
  (gandipet_id, 'Ruellia', 'flowering'),
  (gandipet_id, 'Spider Lily', 'flowering'),
  (gandipet_id, 'Lantanas (White, Purple, Red, Orange)', 'shrub'),
  (gandipet_id, 'Gomphrena Globosa', 'flowering'),
  (gandipet_id, 'Areca Palms', 'palm'),
  (gandipet_id, 'Raphis Excelsa', 'palm'),
  (gandipet_id, 'Black Bamboo', 'bamboo'),
  (gandipet_id, 'Green Bamboo', 'bamboo'),
  (gandipet_id, 'Yellow Bamboo', 'bamboo'),
  (gandipet_id, 'Buddha Belly Bamboo', 'bamboo'),
  (gandipet_id, 'Variegated/White Cluster Bamboo', 'bamboo'),
  (gandipet_id, 'Pennisetum Rubra', 'grass'),
  (gandipet_id, 'Pennisetum Green', 'grass'),
  (gandipet_id, 'Lemon Grass', 'grass'),
  (gandipet_id, 'Bamboo Grass', 'grass'),
  (gandipet_id, 'Tabebuia Rosea', 'tree'),
  (gandipet_id, 'Tabebuia Argentea', 'tree'),
  (gandipet_id, 'Jacaranda', 'tree'),
  (gandipet_id, 'Spathodea (Lipstick Tree)', 'tree'),
  (gandipet_id, 'Red Palm', 'palm'),
  (gandipet_id, 'Duranta Erecta', 'shrub'),
  (gandipet_id, 'Colocasia', 'flowering'),
  (gandipet_id, 'Musa (Banana)', 'tree');

  -- Warangal Highway species
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (warangal_id, 'Mimusops Elengi', 'tree'),
  (warangal_id, 'Terminalia Mantaly', 'tree'),
  (warangal_id, 'Dracaena Mahatma', 'shrub'),
  (warangal_id, 'Acalypha (Green, Brown, Red)', 'shrub'),
  (warangal_id, 'Duranta Erecta', 'shrub'),
  (warangal_id, 'Pandanus Foedus', 'shrub'),
  (warangal_id, 'Clerodendrum Inerme', 'shrub'),
  (warangal_id, 'Caesalpinia Pulcherrima', 'shrub'),
  (warangal_id, 'Tecoma Orange', 'flowering'),
  (warangal_id, 'Allamanda', 'flowering'),
  (warangal_id, 'Nerium (White, Pink, Red)', 'flowering'),
  (warangal_id, 'Plumeria Pudica', 'flowering'),
  (warangal_id, 'Plumeria Rubra', 'flowering'),
  (warangal_id, 'Plumeria Alba', 'flowering'),
  (warangal_id, 'Leucophyllum Candidum', 'shrub'),
  (warangal_id, 'Bougainvillea', 'flowering'),
  (warangal_id, 'Lantana x Hybrida', 'shrub'),
  (warangal_id, 'Pennisetum Alopecuroides', 'grass'),
  (warangal_id, 'Pennisetum Setaceum Rubrum', 'grass'),
  (warangal_id, 'Delonix Regia (Gulmohar)', 'tree'),
  (warangal_id, 'Peltophorum Ferrugineum', 'tree'),
  (warangal_id, 'Ficus Religiosa (Peepal)', 'tree'),
  (warangal_id, 'Syzygium Cumini (Jamun)', 'tree'),
  (warangal_id, 'Azadirachta Indica (Neem)', 'tree'),
  (warangal_id, 'Swietenia Mahagoni', 'tree'),
  (warangal_id, 'Dendrolobium Umbellatum', 'tree'),
  (warangal_id, 'Bignonia', 'flowering'),
  (warangal_id, 'Tecoma Gadichodi', 'flowering');

  -- Mayuri Nagar species (similar to Gandipet)
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (mayuri_id, 'Cannas Variegated', 'flowering'),
  (mayuri_id, 'Cannas Wild (Orange, Red, Yellow)', 'flowering'),
  (mayuri_id, 'Heliconia', 'flowering'),
  (mayuri_id, 'Ruellia', 'flowering'),
  (mayuri_id, 'Spider Lily', 'flowering'),
  (mayuri_id, 'Lantanas (White, Purple, Red, Orange)', 'shrub'),
  (mayuri_id, 'Areca Palms', 'palm'),
  (mayuri_id, 'Black Bamboo', 'bamboo'),
  (mayuri_id, 'Green Bamboo', 'bamboo'),
  (mayuri_id, 'Yellow Bamboo', 'bamboo'),
  (mayuri_id, 'Tabebuia Rosea', 'tree'),
  (mayuri_id, 'Jacaranda', 'tree'),
  (mayuri_id, 'Red Palm', 'palm');

  -- Jai Hind Colony species (similar to above parks)
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (jaihind_id, 'Cannas Variegated', 'flowering'),
  (jaihind_id, 'Heliconia', 'flowering'),
  (jaihind_id, 'Lantanas (White, Purple, Red, Orange)', 'shrub'),
  (jaihind_id, 'Areca Palms', 'palm'),
  (jaihind_id, 'Bamboo Varieties', 'bamboo'),
  (jaihind_id, 'Tabebuia Species', 'tree'),
  (jaihind_id, 'Jacaranda', 'tree');

  -- Gajwel Ring Road species (similar to highway projects)
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (gajwel_id, 'Mimusops Elengi', 'tree'),
  (gajwel_id, 'Terminalia Mantaly', 'tree'),
  (gajwel_id, 'Acalypha (Green, Brown, Red)', 'shrub'),
  (gajwel_id, 'Duranta Erecta', 'shrub'),
  (gajwel_id, 'Caesalpinia Pulcherrima', 'shrub'),
  (gajwel_id, 'Bougainvillea', 'flowering'),
  (gajwel_id, 'Delonix Regia', 'tree'),
  (gajwel_id, 'Azadirachta Indica (Neem)', 'tree');

  -- Nanded Highway species
  INSERT INTO project_species (project_id, species_name, category) VALUES
  (nanded_id, 'Mimusops Elengi', 'tree'),
  (nanded_id, 'Terminalia Mantaly', 'tree'),
  (nanded_id, 'Plumeria Species', 'flowering'),
  (nanded_id, 'Nerium (White, Pink, Red)', 'flowering'),
  (nanded_id, 'Delonix Regia', 'tree'),
  (nanded_id, 'Ficus Religiosa', 'tree');

END $$;
