// Labels for the codes stored on Mexican Reserve "Property" documents.
// Snapshot of the option lists in the Mexican Reserve Studio
// (schemas/property.jsx and components/*Input.jsx). Unknown codes fall back
// to a prettified version (e.g. "new-thing" → "New Thing").

export const AMENITIES: Record<string, { label: string; section: string }> = {
  "air-conditioning": {
    "label": "Air Conditioning",
    "section": "Essential Features"
  },
  "wifi": {
    "label": "High Speed Internet & WiFi",
    "section": "Essential Features"
  },
  "safe": {
    "label": "Safe",
    "section": "Essential Features"
  },
  "washing-machine": {
    "label": "Washing Machine",
    "section": "Essential Features"
  },
  "clothes-dryer": {
    "label": "Clothes Dryer",
    "section": "Essential Features"
  },
  "linens-provided": {
    "label": "Linens Provided",
    "section": "Essential Features"
  },
  "towels-provided": {
    "label": "Towels Provided",
    "section": "Essential Features"
  },
  "first-aid-kit": {
    "label": "First-Aid Kit",
    "section": "Essential Features"
  },
  "bar": {
    "label": "Bar",
    "section": "Kitchen & Dining"
  },
  "coffee-grinder": {
    "label": "Coffee Grinder",
    "section": "Kitchen & Dining"
  },
  "coffee-maker": {
    "label": "Coffee Maker",
    "section": "Kitchen & Dining"
  },
  "nespresso": {
    "label": "Nespresso Coffee Machine",
    "section": "Kitchen & Dining"
  },
  "wine-cellar": {
    "label": "Wine Cellar",
    "section": "Kitchen & Dining"
  },
  "basketball-court": {
    "label": "Basketball Court",
    "section": "Entertainment & Health"
  },
  "bocce-ball-court": {
    "label": "Bocce Ball Court",
    "section": "Entertainment & Health"
  },
  "bowling-alley": {
    "label": "Bowling Alley",
    "section": "Entertainment & Health"
  },
  "cinema-room": {
    "label": "Cinema Room",
    "section": "Entertainment & Health"
  },
  "foosball": {
    "label": "Foosball",
    "section": "Entertainment & Health"
  },
  "games": {
    "label": "Games",
    "section": "Entertainment & Health"
  },
  "golf-simulator": {
    "label": "Golf Simulator",
    "section": "Entertainment & Health"
  },
  "gym": {
    "label": "Gym / Fitness Room",
    "section": "Entertainment & Health"
  },
  "golf-clubs": {
    "label": "High End Golf Clubs",
    "section": "Entertainment & Health"
  },
  "media-room": {
    "label": "Media Room",
    "section": "Entertainment & Health"
  },
  "petanque": {
    "label": "Pétanque",
    "section": "Entertainment & Health"
  },
  "piano": {
    "label": "Piano",
    "section": "Entertainment & Health"
  },
  "pickleball-court": {
    "label": "Pickleball Court",
    "section": "Entertainment & Health"
  },
  "ping-pong": {
    "label": "Ping Pong Table",
    "section": "Entertainment & Health"
  },
  "pool-table": {
    "label": "Pool Table",
    "section": "Entertainment & Health"
  },
  "putting-green": {
    "label": "Putting Green",
    "section": "Entertainment & Health"
  },
  "satellite-cable-tv": {
    "label": "Satellite & Cable TV",
    "section": "Entertainment & Health"
  },
  "shuffleboard": {
    "label": "Shuffleboard Table",
    "section": "Entertainment & Health"
  },
  "smart-tv": {
    "label": "Smart TV",
    "section": "Entertainment & Health"
  },
  "sonos": {
    "label": "SONOS Sound System",
    "section": "Entertainment & Health"
  },
  "sound-system": {
    "label": "Sound System",
    "section": "Entertainment & Health"
  },
  "tennis-court": {
    "label": "Tennis Court",
    "section": "Entertainment & Health"
  },
  "video-games": {
    "label": "Video Games",
    "section": "Entertainment & Health"
  },
  "yoga-room": {
    "label": "Yoga Room",
    "section": "Entertainment & Health"
  },
  "beach-chairs": {
    "label": "Beach Chairs",
    "section": "Outdoor Features"
  },
  "bicycles": {
    "label": "Bicycles",
    "section": "Outdoor Features"
  },
  "boat-yacht": {
    "label": "Boat / Yacht",
    "section": "Outdoor Features"
  },
  "boogie-boards": {
    "label": "Boogie Boards",
    "section": "Outdoor Features"
  },
  "cornhole": {
    "label": "Cornhole",
    "section": "Outdoor Features"
  },
  "croquet": {
    "label": "Croquet",
    "section": "Outdoor Features"
  },
  "kayaks": {
    "label": "Kayaks",
    "section": "Outdoor Features"
  },
  "paddle-boards": {
    "label": "Paddle Boards",
    "section": "Outdoor Features"
  },
  "snorkel-equipment": {
    "label": "Snorkel Equipment",
    "section": "Outdoor Features"
  },
  "surf-boards": {
    "label": "Surf Boards",
    "section": "Outdoor Features"
  },
  "alfresco-dining": {
    "label": "Alfresco Dining",
    "section": "Pool & Spa Facilities"
  },
  "palapa-roof": {
    "label": "Alfresco Palapa Roof",
    "section": "Pool & Spa Facilities"
  },
  "bbq-grill": {
    "label": "BBQ / Grill",
    "section": "Pool & Spa Facilities"
  },
  "firepit": {
    "label": "Firepit",
    "section": "Pool & Spa Facilities"
  },
  "heated-infinity-pool": {
    "label": "Heated Infinity Pool",
    "section": "Pool & Spa Facilities"
  },
  "heated-pool": {
    "label": "Heated Pool",
    "section": "Pool & Spa Facilities"
  },
  "hot-tub": {
    "label": "Hot Tub",
    "section": "Pool & Spa Facilities"
  },
  "jacuzzi": {
    "label": "Jacuzzi",
    "section": "Pool & Spa Facilities"
  },
  "private-spa": {
    "label": "Private Spa",
    "section": "Pool & Spa Facilities"
  },
  "sauna": {
    "label": "Sauna",
    "section": "Pool & Spa Facilities"
  },
  "steam-room": {
    "label": "Steam Room",
    "section": "Pool & Spa Facilities"
  },
  "sun-loungers": {
    "label": "Sun Loungers",
    "section": "Pool & Spa Facilities"
  },
  "volleyball-pool": {
    "label": "Volleyball Pool",
    "section": "Pool & Spa Facilities"
  },
  "wet-bar": {
    "label": "Wet Bar",
    "section": "Pool & Spa Facilities"
  },
  "computer-monitor": {
    "label": "Computer Monitor",
    "section": "Office"
  },
  "desk": {
    "label": "Desk",
    "section": "Office"
  },
  "desk-chair": {
    "label": "Desk Chair",
    "section": "Office"
  },
  "printer": {
    "label": "Printer",
    "section": "Office"
  },
  "communal-heated-pool": {
    "label": "Communal Heated Pool",
    "section": "Community Amenities"
  },
  "community-foosball": {
    "label": "Foosball Table (Shared)",
    "section": "Community Amenities"
  },
  "community-ping-pong": {
    "label": "Ping Pong Table (Shared)",
    "section": "Community Amenities"
  },
  "shared-gym": {
    "label": "Shared Gym",
    "section": "Community Amenities"
  },
  "elevator": {
    "label": "Elevator",
    "section": "Accessibility"
  },
  "ground-floor-bedroom": {
    "label": "Ground Floor Bedroom",
    "section": "Accessibility"
  },
  "wheelchair-accessible": {
    "label": "Wheelchair Accessible",
    "section": "Accessibility"
  }
};

export const AMENITY_SECTIONS: string[] = ["Essential Features", "Kitchen & Dining", "Entertainment & Health", "Outdoor Features", "Pool & Spa Facilities", "Office", "Community Amenities", "Accessibility"];

export const VIEWS: Record<string, string> = {
  "oceanfront": "Oceanfront",
  "beachfront": "Beachfront",
  "golf-course": "Golf Course",
  "hillside": "Hillside",
  "ocean-view": "Ocean View",
  "golf-course-view": "Golf Course View",
  "nature-view": "Nature View",
  "lake-view": "Lake View",
  "private-pool": "Private Pool",
  "communal-pool": "Communal Pool"
};

// Bed types + bathroom extras
export const BEDS: Record<string, string> = {
  "king": "King",
  "queen": "Queen",
  "full": "Full/Double",
  "twin": "Twin",
  "bunk": "Bunk",
  "sofa-bed": "Sofa Bed",
  "hot-tub": "Hot Tub",
  "jacuzzi": "Jacuzzi",
  "outdoor-shower": "Outdoor Shower",
  "double-shower": "Double Shower"
};

export const STAFF_ROLES: Record<string, string> = {
  "housekeeper": "Housekeeper",
  "chef": "Chef",
  "sous-chef": "Sous Chef / Chef Assistant",
  "cook": "Cook",
  "butler": "Butler",
  "concierge": "Concierge",
  "waiter": "Waiter / Server",
  "bartender": "Bartender"
};

export const STAFF_SERVICES: Record<string, string> = {
  "daily-cleaning": "Daily Cleaning",
  "laundry": "Laundry",
  "linen-changes": "Linen Changes",
  "turndown-service": "Turndown Service",
  "breakfast": "Breakfast",
  "lunch": "Lunch",
  "dinner": "Dinner",
  "menu-planning": "Menu Planning",
  "meal-preparation": "Meal Preparation",
  "kitchen-assistance": "Kitchen Assistance",
  "table-service": "Table Service",
  "beverage-service": "Beverage Service",
  "guest-attention": "Personalized Guest Attention",
  "activity-bookings": "Activity Bookings",
  "restaurant-reservations": "Restaurant Reservations",
  "transportation-arrangements": "Transportation Arrangements",
  "table-meal-service": "Meal & Beverage Table Service",
  "cocktail-preparation": "Cocktail Preparation",
  "bar-service": "Bar Service"
};

export const MEMBERSHIPS: Record<string, string> = {
  "golf-membership": "Premier Golf Membership",
  "sport-membership": "Sport Membership",
};

export const pretty = (s = "") =>
  String(s).replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();
