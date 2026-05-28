type InfoItem = {
  label: string;
  value: string;
};

type ExperienceOption = {
  title: string;
  description: string;
  bestFor: string;
  duration: string;
  experience: string;
  whatToExpect: string;
  whatToBring: string;
  goodToKnow?: string;
};

type Activity = {
  title: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  standardInfo: InfoItem[];
  customInfo: InfoItem[];
  whatToExpect: string;
  whatToBring: string;
  gallery: string[];
  tags: string[];
  experienceOptions: ExperienceOption[];
};

type DiscoverCategory = {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  description: string;
  activities: Activity[];
};

function option({
  title,
  description,
  bestFor,
  duration,
  experience,
  whatToExpect,
  whatToBring,
  goodToKnow,
}: ExperienceOption): ExperienceOption {
  return {
    title,
    description,
    bestFor,
    duration,
    experience,
    whatToExpect,
    whatToBring,
    goodToKnow,
  };
}

function createActivity({
  title,
  slug,
  image,
  heroImage,
  description,
  overview,
  bestFor,
  duration,
  seasonality,
  tags,
  notes,
  whatToExpect,
  whatToBring,
  experienceOptions,
}: {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  description: string;
  overview: string;
  bestFor: string;
  duration: string;
  seasonality: string;
  tags: string[];
  notes: string;
  whatToExpect: string;
  whatToBring: string;
  experienceOptions: ExperienceOption[];
}): Activity {
  return {
    title,
    slug,
    image,
    description,
    overview,
    standardInfo: [
      { label: "Best For", value: bestFor },
      { label: "Typical Duration", value: duration },
      { label: "Seasonality", value: seasonality },
    ],
    customInfo: [
      { label: "Planning Notes", value: notes },
      { label: "Tags", value: tags.join(", ") },
    ],
    whatToExpect,
    whatToBring,
    gallery: [image, heroImage],
    tags,
    experienceOptions,
  };
}

const oceanImage = "/discover-punta-mita/ocean-water-activities.jpg";
const oceanHero = "/discover-punta-mita/heroes/ocean-water-activities-hero.jpg";

const wellnessImage = "/discover-punta-mita/luxury-relaxation.jpg";
const wellnessHero = "/discover-punta-mita/heroes/luxury-relaxation-hero.jpg";

const sportsImage = "/discover-punta-mita/golf-sports.jpg";
const sportsHero = "/discover-punta-mita/heroes/golf-sports-hero.jpg";

const beachClubImage = "/discover-punta-mita/beach-clubs-day-clubs.jpg";
const beachClubHero = "/discover-punta-mita/heroes/beach-clubs-day-clubs-hero.jpg";

const foodImage = "/discover-punta-mita/food-dining-experiences.jpg";
const foodHero = "/discover-punta-mita/heroes/food-dining-experiences-hero.jpg";

const nightlifeImage = "/discover-punta-mita/nightlife-parties.jpg";
const nightlifeHero = "/discover-punta-mita/heroes/nightlife-parties-hero.jpg";

const destinationsImage = "/discover-punta-mita/nearby-destinations-day-trips.jpg";
const destinationsHero =
  "/discover-punta-mita/heroes/nearby-destinations-day-trips-hero.jpg";

const seasonalImage = "/discover-punta-mita/seasonal-experiences.jpg";
const seasonalHero = "/discover-punta-mita/heroes/seasonal-experiences-hero.jpg";

const vipImage = "/discover-punta-mita/high-end-vip-experiences.jpg";
const vipHero = "/discover-punta-mita/heroes/high-end-vip-experiences-hero.jpg";

export const discoverCategories: DiscoverCategory[] = [
  {
    title: "Ocean & Water",
    slug: "ocean-water",
    image: oceanImage,
    heroImage: oceanHero,
    description:
      "Private yacht days, surf experiences, ocean adventures, fishing, wildlife, and water activities around Punta Mita.",
    activities: [
      createActivity({
        title: "Private Yacht, Sailing & Marietas Days",
        slug: "private-yacht-sailing-marietas-days",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "Private boat, yacht, sailing, catamaran, Marietas, Hidden Beach, and luxury ocean-day experiences.",
        overview:
          "A private day on the water is one of the signature Punta Mita experiences. This activity can be relaxed, romantic, family-friendly, adventurous, or fully VIP depending on the boat, route, catering, and occasion.",
        bestFor:
          "Families, couples, groups, celebrations, romantic trips, VIP travelers, and guests who want a premium ocean experience.",
        duration: "Half-day, full-day, or sunset itinerary.",
        seasonality:
          "Available year-round. Hidden Beach is permit-dependent. Whale watching is seasonal.",
        tags: ["Ocean", "Family-Friendly", "Romantic", "VIP", "Adventure", "Seasonal"],
        notes:
          "Every detail can be tailored, from the boat style and departure point to the route, catering, open bar, water toys, and special access requests.",
        whatToExpect:
          "Expect a tailored ocean day with a captain and crew, flexible routing, beautiful water, time to swim or snorkel, and the option to add food, drinks, music, paddleboards, water toys, photography, or a special celebration setup.",
        whatToBring:
          "Swimwear, sunglasses, hat, sandals, reef-safe sunscreen, a light cover-up, dry clothes if needed, and a camera or phone.",
        experienceOptions: [
          option({
            title: "Private Yacht Charter",
            description:
              "A polished private yacht experience arranged around the guest’s preferred style: relaxed cruising, swimming, music, drinks, snorkeling, or a full celebration on the water.",
            bestFor: "VIP travelers, groups, families, birthdays, couples, and celebrations.",
            duration: "Usually half-day or full-day.",
            experience:
              "Guests board a private yacht with crew and enjoy a customized route around Punta Mita, Banderas Bay, or the Marietas area. The day can include open bar, chef-style catering, music, paddleboards, snorkel gear, water toys, and time anchored in beautiful water.",
            whatToExpect:
              "A comfortable, private, highly flexible experience with a captain handling logistics and the itinerary adapted to ocean conditions and the group’s mood.",
            whatToBring:
              "Swimwear, cover-up, sunglasses, sunscreen, hat, sandals, and any preferred personal items.",
            goodToKnow:
              "The boat is selected to fit the group’s style, comfort expectations, occasion, and preferred pace on the water.",
          }),
          option({
            title: "Luxury Boat Day",
            description:
              "A more casual private boat experience that still feels elevated, ideal for families or groups who want the ocean without needing a large yacht.",
            bestFor: "Families, friend groups, active travelers, and relaxed luxury guests.",
            duration: "Usually 3 to 6 hours.",
            experience:
              "This version focuses on easy cruising, swimming, snorkeling, beach stops, snacks, drinks, and flexible time on the water. It can be arranged with smaller luxury boats, pangas, or sport boats depending on the guest’s preference.",
            whatToExpect:
              "A lighter, easier, and often more practical boat experience than a formal yacht charter, while still private and curated.",
            whatToBring:
              "Swimwear, towel, sandals, sunscreen, sunglasses, and a dry bag if needed.",
            goodToKnow:
              "This is often the best option for families who want a beautiful ocean day without overcomplicating the logistics.",
          }),
          option({
            title: "Sailing Trip",
            description:
              "A slower, more elegant ocean experience centered on the feeling of sailing, views, breeze, and conversation.",
            bestFor: "Couples, adults, relaxed groups, sunset lovers, and guests who prefer atmosphere over speed.",
            duration: "Usually half-day or sunset itinerary.",
            experience:
              "Guests enjoy a private or semi-private sailing route with time to relax on deck, take in the coastline, enjoy drinks, and possibly stop for a swim depending on the boat and conditions.",
            whatToExpect:
              "A quieter, more graceful experience than a typical boat day, with a stronger focus on mood, scenery, and comfort.",
            whatToBring:
              "Resort wear, swimwear if swimming, light layer, sunglasses, sunscreen, and flat sandals.",
            goodToKnow:
              "Sailing is weather-dependent. Wind and sea conditions influence the route and feel of the experience.",
          }),
          option({
            title: "Catamaran Sunset Cruise",
            description:
              "A comfortable sunset cruise with drinks, music, ocean views, and a relaxed social atmosphere.",
            bestFor: "Couples, families, groups, first-night arrivals, and sunset celebrations.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests board before sunset and cruise along the coast or bay while enjoying drinks, snacks, music, and golden-hour views. It can be romantic and quiet or more social depending on the group.",
            whatToExpect:
              "A scenic, low-effort evening on the water with beautiful light, easy movement on board, and a celebratory but relaxed atmosphere.",
            whatToBring:
              "Comfortable resort wear, light layer, sunglasses, phone or camera, and flat shoes.",
            goodToKnow:
              "This is one of the easiest ocean experiences to recommend for mixed-age groups.",
          }),
          option({
            title: "Marietas Islands Tour",
            description:
              "A boat experience to one of the most iconic natural areas near Punta Mita, with snorkeling, wildlife, rock formations, and dramatic ocean scenery.",
            bestFor: "Families, couples, photographers, ocean lovers, and first-time visitors.",
            duration: "Usually half-day.",
            experience:
              "Guests travel by boat to the Marietas area for views, snorkeling when conditions allow, birdlife, marine scenery, and time in protected waters. The experience can be private and premium or more casual depending on boat type.",
            whatToExpect:
              "Beautiful ocean views, nature-focused stops, possible snorkeling, and a memorable sense of place very close to Punta Mita.",
            whatToBring:
              "Swimwear, towel, sunscreen, hat, sunglasses, and camera.",
            goodToKnow:
              "Conditions, park rules, and access restrictions can affect the route and what guests are allowed to do.",
          }),
          option({
            title: "Hidden Beach Experience",
            description:
              "A permit-dependent visit to the famous Playa del Amor, usually treated as a special upgrade inside a Marietas itinerary.",
            bestFor: "Adventurous couples, active adults, bucket-list travelers, and guests who understand the restrictions.",
            duration: "Usually part of a half-day Marietas experience.",
            experience:
              "When permits, conditions, and guest eligibility allow, the boat itinerary includes access to Hidden Beach. It is a more regulated and active experience than a normal beach stop.",
            whatToExpect:
              "A memorable but controlled visit with time limitations, rules, and possible physical requirements depending on the operator and conditions.",
            whatToBring:
              "Swimwear, towel, sunscreen, and comfort in the water.",
            goodToKnow:
              "Access is limited and depends on permits, ocean conditions, and guest suitability, so it is best treated as a special request within a Marietas itinerary.",
          }),
          option({
            title: "Family Boat Day",
            description:
              "A family-friendly ocean day designed around comfort, safety, easy swimming, snacks, and activities for kids and adults.",
            bestFor: "Families with kids, multigenerational groups, and relaxed villa guests.",
            duration: "Usually 3 to 5 hours.",
            experience:
              "The route and timing are adapted for children and families. The focus is on calm water when possible, safe swimming, snacks, shade, music, and easy activities like paddleboards or snorkeling.",
            whatToExpect:
              "A private, low-pressure day where the crew keeps the experience flexible and comfortable for different ages.",
            whatToBring:
              "Swimwear, towels, hats, sunscreen, kids’ sun protection, water shirts, and any special snacks or medication.",
            goodToKnow:
              "For families, the best boat is not always the largest; shade, bathrooms, easy boarding, and crew attitude matter more.",
          }),
          option({
            title: "Yacht Proposal or Romantic Ocean Moment",
            description:
              "A private yacht or sunset boat experience designed around a proposal, anniversary, honeymoon, or romantic celebration.",
            bestFor: "Couples, proposals, anniversaries, honeymoons, and romantic trips.",
            duration: "Usually sunset or half-day.",
            experience:
              "The yacht itinerary is planned around timing, privacy, décor, champagne, flowers, music, photography, and the key moment. It can be simple and elegant or fully produced.",
            whatToExpect:
              "A discreet, highly planned experience with attention to timing, mood, views, and privacy.",
            whatToBring:
              "Resort-elegant clothing, sunglasses, light layer, and any personal items for the surprise.",
            goodToKnow:
              "Photography, flowers, music, champagne, and timing can be arranged in advance to make the moment feel effortless.",
          }),
        ],
      }),

      createActivity({
        title: "Surf Experiences",
        slug: "surf-experiences",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "Private surf lessons, surf safaris, La Lancha surf days, and surf-town experiences near Punta Mita.",
        overview:
          "Surfing around Punta Mita can be accessible for beginners, fun for families, and rewarding for experienced surfers. The best version depends on the guest’s level, the swell, the tide, and the desired vibe.",
        bestFor:
          "Active travelers, families, kids, teens, couples, surfers, and guests who want a classic Punta Mita ocean experience.",
        duration: "Usually 1.5 to 4 hours.",
        seasonality: "Available year-round, with conditions varying by swell, tide, and season.",
        tags: ["Ocean", "Adventure", "Family-Friendly", "Sports"],
        notes:
          "The best surf spot is selected around the group’s experience level, tide, swell, and comfort in the water.",
        whatToExpect:
          "Expect board setup, local guidance, ocean-safety briefing, instruction when needed, and time in the water at the best available surf spot for the group.",
        whatToBring:
          "Swimwear, rash guard, towel, sunscreen, sandals, and a change of clothes.",
        experienceOptions: [
          option({
            title: "Private Surf Lesson",
            description:
              "A personalized surf session for beginners or intermediate guests who want instruction, safety, and confidence in the water.",
            bestFor: "Kids, teens, adults, first-time surfers, and families.",
            duration: "Usually 1.5 to 2 hours.",
            experience:
              "Guests meet a private instructor, receive a safety briefing and land-based technique introduction, then practice in the water with guidance adapted to their level.",
            whatToExpect:
              "Patient instruction, beginner-friendly pacing, help with positioning and waves, and a fun active session.",
            whatToBring:
              "Swimwear, rash guard, sunscreen, towel, and water.",
            goodToKnow:
              "Beginner sessions are planned around safe, friendly conditions with patient instruction and the right timing.",
          }),
          option({
            title: "La Lancha Surf Day",
            description:
              "A surf-focused outing to one of the area’s most recognizable breaks, often paired with beach time or El Surf Club.",
            bestFor: "Surfers, active couples, teens, and guests who want a local surf experience.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests head to La Lancha with boards and guidance. The session can be instructional or simply supported by a local surf guide who helps choose the right timing and setup.",
            whatToExpect:
              "A relaxed but active surf outing with a stronger local feel than a resort-based lesson.",
            whatToBring:
              "Swimwear, rash guard, towel, sandals, sunscreen, and dry clothes.",
            goodToKnow:
              "La Lancha works best when timing, beach access, boards, and local surf guidance are arranged in advance.",
          }),
          option({
            title: "Private Surf Safari",
            description:
              "A guided surf outing designed for more experienced surfers who want to chase the best break available that day.",
            bestFor: "Intermediate and advanced surfers.",
            duration: "Usually half-day.",
            experience:
              "A local surf guide selects the best break based on swell, wind, tide, and guest ability. Options may include Punta de Mita breaks, La Lancha, Burros, Stinky’s, or other nearby surf spots.",
            whatToExpect:
              "A more flexible and condition-driven experience, focused on better waves rather than a fixed location.",
            whatToBring:
              "Surfwear, sunscreen, water, towel, and personal board if preferred.",
            goodToKnow:
              "Best for surfers who enjoy a flexible, condition-driven outing and are comfortable with changing ocean conditions.",
          }),
          option({
            title: "Kid-Friendly Surf Session",
            description:
              "A gentle, safe, confidence-building surf lesson designed specifically for children and families.",
            bestFor: "Families with children and beginner teens.",
            duration: "Usually 1 to 1.5 hours.",
            experience:
              "The instructor keeps the session simple, safe, and encouraging, focusing on ocean comfort, balance, paddling basics, and small waves when conditions are appropriate.",
            whatToExpect:
              "A playful and supervised surf experience with close attention to safety and child comfort.",
            whatToBring:
              "Rash guard, sunscreen, towel, water, hat for before and after, and dry clothes.",
            goodToKnow:
              "For younger kids, ocean conditions matter more than schedule preference.",
          }),
        ],
      }),

      createActivity({
        title: "Foil, Paddle & Kayak Experiences",
        slug: "foil-paddle-kayak-experiences",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "E-foil, wing-foil, paddleboarding, and kayaking for active guests looking for modern ocean sports.",
        overview:
          "This parent activity groups active but accessible water sports that work well for guests who want something fun, modern, and close to Punta Mita without committing to a full boat day.",
        bestFor:
          "Active travelers, teens, couples, groups, and guests who want a fun water-sports session.",
        duration: "Usually 1 to 3 hours.",
        seasonality: "Available year-round, subject to ocean and wind conditions.",
        tags: ["Ocean", "Adventure", "Sports", "Family-Friendly"],
        notes:
          "E-foil and wing-foil are more premium and distinctive than generic water toys. Paddle and kayak experiences work best in calm conditions.",
        whatToExpect:
          "Expect instruction, equipment, safety guidance, and a session adapted to the guest’s comfort level and ocean conditions.",
        whatToBring:
          "Swimwear, towel, sunscreen, sunglasses with strap if needed, and dry clothes.",
        experienceOptions: [
          option({
            title: "E-Foil Lesson",
            description:
              "A premium modern water-sports session where guests learn to ride an electric hydrofoil above the water.",
            bestFor: "Active adults, teens, adventurous couples, and guests looking for something new.",
            duration: "Usually 1 to 1.5 hours.",
            experience:
              "Guests receive instruction on board control, balance, speed, and safety before progressing into the water with coaching.",
            whatToExpect:
              "A learning curve, plenty of laughs, and a very memorable feeling once the board lifts above the water.",
            whatToBring:
              "Swimwear, towel, sunscreen, and comfort in the ocean.",
            goodToKnow:
              "This is easier for guests with board-sport experience, but beginners can still enjoy it with the right conditions.",
          }),
          option({
            title: "Wing-Foil Session",
            description:
              "A wind-powered foil experience for sporty guests who want a more technical and dynamic ocean activity.",
            bestFor: "Athletic guests, board-sport enthusiasts, and adventurous travelers.",
            duration: "Usually 1.5 to 2 hours.",
            experience:
              "Guests learn to handle the wing, understand wind direction, balance on the board, and begin combining wind power with foil movement.",
            whatToExpect:
              "A more technical session than e-foil, with instruction heavily dependent on wind and water conditions.",
            whatToBring:
              "Swimwear, towel, sunscreen, and athletic comfort in the water.",
            goodToKnow:
              "Wing-foil is best when wind and water conditions align, so timing is selected around the right conditions.",
          }),
          option({
            title: "Paddleboarding",
            description:
              "A relaxed ocean activity that can be peaceful, active, or family-friendly depending on the route and conditions.",
            bestFor: "Families, couples, beginners, wellness travelers, and calm-water days.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "Guests paddle along calm water with instruction and support if needed. It can be arranged as a simple board rental, guided paddle, or part of a beach-club or yacht day.",
            whatToExpect:
              "A low-pressure water activity with beautiful views, light exercise, and a slower pace.",
            whatToBring:
              "Swimwear, sunscreen, hat, sunglasses with strap, and towel.",
            goodToKnow:
              "Morning is often better because water and wind are usually calmer.",
          }),
          option({
            title: "Kayaking",
            description:
              "A simple, accessible water activity for couples, families, and guests who want to explore the coastline at a relaxed pace.",
            bestFor: "Families, couples, beginners, and light-adventure guests.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "Guests paddle with single or double kayaks, either independently in a protected area or with a guide depending on the location.",
            whatToExpect:
              "A scenic, easygoing session that can be active without being intense.",
            whatToBring:
              "Swimwear, sunscreen, hat, sunglasses, towel, and water.",
            goodToKnow:
              "Kayaking is best when wind and sea conditions are calm.",
          }),
        ],
      }),

      createActivity({
        title: "Underwater Exploration",
        slug: "underwater-exploration",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "Snorkeling, scuba diving, freediving, and underwater exploration around Marietas and nearby ocean sites.",
        overview:
          "This activity is for guests who specifically want to explore below the surface. It can be a relaxed snorkeling outing, a private dive charter, or a more advanced freediving experience.",
        bestFor:
          "Ocean lovers, families, certified divers, adventurous couples, and guests interested in marine life.",
        duration: "Usually 2 to 5 hours depending on route and activity.",
        seasonality: "Available year-round, subject to visibility and sea conditions.",
        tags: ["Ocean", "Adventure", "Family-Friendly", "Wildlife"],
        notes:
          "Scuba and freediving may require experience level, certification, or additional safety screening.",
        whatToExpect:
          "Expect a guided ocean session with equipment, safety briefing, boat transfer when needed, and time to explore marine life and underwater scenery.",
        whatToBring:
          "Swimwear, towel, reef-safe sunscreen, dry clothes, and certification card if scuba diving.",
        experienceOptions: [
          option({
            title: "Marietas Snorkeling",
            description:
              "A relaxed guided snorkeling experience in one of the most attractive marine areas near Punta Mita.",
            bestFor: "Families, couples, beginners, and ocean lovers.",
            duration: "Usually part of a half-day boat experience.",
            experience:
              "Guests travel by boat to a suitable snorkeling area, receive gear and guidance, and enter the water to explore marine life and rock formations when visibility allows.",
            whatToExpect:
              "A beautiful nature-focused ocean experience with a relaxed pace and easy integration into a boat day.",
            whatToBring:
              "Swimwear, towel, sunscreen, hat, and dry clothes.",
            goodToKnow:
              "Visibility changes by day and season, which makes each outing feel natural, varied, and connected to the ocean conditions.",
          }),
          option({
            title: "Private Scuba Dive",
            description:
              "A dive-focused outing for certified divers or guests arranging a beginner discovery dive with a qualified operator.",
            bestFor: "Certified divers, adventurous adults, and ocean-focused travelers.",
            duration: "Usually half-day.",
            experience:
              "Guests dive with professional supervision at a suitable site chosen by conditions and certification level. The focus is marine life, underwater scenery, and a more immersive ocean experience.",
            whatToExpect:
              "A safety-first dive experience with gear, briefing, boat transfer, and professional guidance.",
            whatToBring:
              "Certification card if certified, swimwear, towel, dry clothes, and any personal dive gear if preferred.",
            goodToKnow:
              "Certified divers should bring their certification details, and timing after diving should be considered when planning flights.",
          }),
          option({
            title: "Freediving Experience",
            description:
              "A breath-focused underwater session for guests who want a quieter, more athletic connection with the ocean.",
            bestFor: "Strong swimmers, adventurous travelers, and guests interested in breath and underwater movement.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests learn or practice breath control, relaxation, safety principles, and guided dives under professional supervision.",
            whatToExpect:
              "A calm but serious experience that combines mental focus, ocean comfort, and underwater technique.",
            whatToBring:
              "Swimwear, towel, sunscreen, and comfort swimming in open water.",
            goodToKnow:
              "This is not casual snorkeling. Safety, instruction, and guest suitability matter.",
          }),
        ],
      }),

      createActivity({
        title: "Fishing & Spearfishing Experiences",
        slug: "fishing-spearfishing-experiences",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "Private sportfishing, spearfishing, deep-sea fishing, and sea-to-table fishing experiences.",
        overview:
          "This activity combines the different fishing-related experiences into one premium category. It can be casual and family-friendly or a serious offshore fishing day, depending on the group.",
        bestFor:
          "Fishing enthusiasts, families, groups, adventurous travelers, and guests interested in sea-to-table dining.",
        duration: "Half-day or full-day.",
        seasonality: "Available year-round, with target species and conditions varying by season.",
        tags: ["Ocean", "Adventure", "Food & Drink", "Groups", "Seasonal"],
        notes:
          "When possible, the day can be paired with a villa chef or selected restaurant for a fresh sea-to-table meal.",
        whatToExpect:
          "Expect a private captain or crew, fishing gear, route planning based on conditions, and the possibility of preparing the catch afterward depending on the experience.",
        whatToBring:
          "Sun protection, comfortable boat clothing, non-slip shoes, motion-sickness support if needed, and a light layer.",
        experienceOptions: [
          option({
            title: "Private Sportfishing",
            description:
              "A private fishing charter for guests who want a serious ocean fishing experience with captain, crew, and gear.",
            bestFor: "Fishing enthusiasts, groups, families with older kids, and competitive guests.",
            duration: "Half-day or full-day.",
            experience:
              "The captain selects the route and target species based on season, weather, and guest goals. The day may focus on inshore or offshore fishing depending on conditions.",
            whatToExpect:
              "A classic fishing charter with professional guidance, ocean time, gear, and the possibility of a memorable catch.",
            whatToBring:
              "Hat, sunscreen, sunglasses, boat shoes, light layer, and motion-sickness support if needed.",
            goodToKnow:
              "Fishing is never guaranteed. The value is in the experience, the ocean day, and the chance of a catch.",
          }),
          option({
            title: "Spearfishing",
            description:
              "An active, skill-based ocean experience for strong swimmers and adventurous guests.",
            bestFor: "Strong swimmers, experienced ocean guests, and adventurous adults.",
            duration: "Usually half-day.",
            experience:
              "Guests go with a qualified guide to suitable areas, review safety and technique, then enter the water for a guided spearfishing session.",
            whatToExpect:
              "A physically active experience with focus, patience, safety, and direct connection to the ocean.",
            whatToBring:
              "Swimwear, towel, reef-safe sunscreen, and comfort in open water.",
            goodToKnow:
              "This is best for confident ocean swimmers and guests who want a more active, skill-based experience.",
          }),
          option({
            title: "Sea-to-Table Fishing Experience",
            description:
              "A fishing or spearfishing experience followed by a private chef or restaurant preparation when possible.",
            bestFor: "Food lovers, groups, families, and guests who want a story behind the meal.",
            duration: "Half-day plus meal timing.",
            experience:
              "Guests fish in the morning or afternoon, then the catch is prepared as ceviche, grilled fish, tacos, or a more refined dinner depending on the chef and what is caught.",
            whatToExpect:
              "A memorable link between the ocean and the table, combining adventure with food and storytelling.",
            whatToBring:
              "Boat clothing, sun protection, and appetite for a fresh local meal.",
            goodToKnow:
              "Because the catch depends on the day, the meal can be complemented with a planned chef’s menu.",
          }),
        ],
      }),

      createActivity({
        title: "Marine Wildlife & Conservation Experiences",
        slug: "marine-wildlife-conservation-experiences",
        image: oceanImage,
        heroImage: oceanHero,
        description:
          "Whale watching, wild marine-life tours, turtle releases, and conservation-focused experiences.",
        overview:
          "This category focuses on natural, seasonal, and conservation-oriented experiences, with an emphasis on wild marine life, responsible viewing, and meaningful family moments.",
        bestFor:
          "Families, kids, nature lovers, couples, photographers, and guests who want a meaningful seasonal experience.",
        duration: "Usually 1 to 4 hours depending on the experience.",
        seasonality:
          "Whale watching and turtle releases are seasonal. Marine-life tours depend on conditions.",
        tags: ["Ocean", "Wildlife", "Family-Friendly", "Seasonal"],
        notes:
          "These experiences focus on wild, respectful, and conservation-minded encounters with the natural environment.",
        whatToExpect:
          "Expect a nature-focused experience with local guidance, seasonal timing, respectful viewing, and an educational component when available.",
        whatToBring:
          "Comfortable clothing, camera, sunscreen, hat, and a light layer for boat-based experiences.",
        experienceOptions: [
          option({
            title: "Private Whale Watching",
            description:
              "A seasonal ocean experience focused on observing humpback whales in the bay with privacy and comfort.",
            bestFor: "Families, couples, photographers, nature lovers, and first-time visitors.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests go out by private boat during whale season with a captain or naturalist-style guide. The route is adapted to responsible viewing and current whale activity.",
            whatToExpect:
              "A moving and memorable nature experience, with the possibility of seeing whales breach, tail slap, or travel through the bay.",
            whatToBring:
              "Camera, hat, sunglasses, sunscreen, and a light layer.",
            goodToKnow:
              "The experience is guided by respectful distance, responsible viewing, and appreciation for the natural behavior of the whales.",
          }),
          option({
            title: "Wild Dolphin & Marine-Life Tour",
            description:
              "A responsible ocean outing focused on wild marine life, birds, turtles, rays, and dolphins when naturally encountered.",
            bestFor: "Families, kids, nature lovers, and photographers.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "The boat route is planned around likely marine-life areas, with the understanding that wildlife is observed naturally and never guaranteed.",
            whatToExpect:
              "A relaxed ocean nature experience with education, observation, and beautiful time on the water.",
            whatToBring:
              "Sun protection, camera, comfortable boat clothing, and patience for wildlife viewing.",
            goodToKnow:
              "This experience focuses on wild marine life observed naturally in the bay.",
          }),
          option({
            title: "Turtle Release",
            description:
              "A seasonal conservation-oriented experience that can be especially meaningful for families and children.",
            bestFor: "Families, kids, couples, and guests interested in conservation.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "When available, guests participate in or observe a supervised turtle release with guidance from a conservation program or qualified host.",
            whatToExpect:
              "A quiet, emotional, and educational moment connected to the local coastline and turtle nesting season.",
            whatToBring:
              "Comfortable beach clothing, sandals, camera without flash if instructed, and respect for the conservation rules.",
            goodToKnow:
              "This is seasonal and cannot be guaranteed on every date.",
          }),
        ],
      }),
    ],
  },

  {
    title: "Wellness, Relaxation & Beach Lifestyle",
    slug: "wellness-relaxation-beach-lifestyle",
    image: wellnessImage,
    heroImage: wellnessHero,
    description:
      "In-villa spa, wellness, ritual experiences, private beach setups, sunset dinners, and relaxed luxury moments.",
    activities: [
      createActivity({
        title: "In-Villa Spa & Wellness",
        slug: "in-villa-spa-wellness",
        image: wellnessImage,
        heroImage: wellnessHero,
        description:
          "Spa treatments, massage, yoga, sound healing, breathwork, ice baths, and private wellness sessions at the villa.",
        overview:
          "This is the main wellness category for villa renters. It turns the villa into a private wellness space with spa treatments, movement, recovery, and restorative experiences.",
        bestFor:
          "Couples, families, wellness-focused guests, groups, pre-wedding stays, and guests who want to relax without leaving the villa.",
        duration: "Usually 1 to 4 hours, or a half-day wellness program.",
        seasonality: "Available year-round.",
        tags: ["Wellness", "Romantic", "Family-Friendly", "VIP", "Rainy Day"],
        notes:
          "Wellness sessions can be combined into a personalized program, from a single treatment to a half-day retreat at the villa.",
        whatToExpect:
          "Expect therapists, instructors, or wellness practitioners to come to the villa and create a private session adapted to the group.",
        whatToBring:
          "Comfortable clothing, swimwear if using cold plunge or pool, and a quiet space at the villa.",
        experienceOptions: [
          option({
            title: "In-Villa Massage & Spa Treatments",
            description:
              "A private spa experience brought directly to the villa, ideal for guests who want to relax without leaving the property.",
            bestFor: "Couples, families, groups, wellness travelers, and arrival-day recovery.",
            duration: "Usually 60 to 120 minutes per guest.",
            experience:
              "Massage therapists or spa providers set up inside the villa, terrace, or a quiet shaded area. Treatments may include massage, facials, body treatments, or recovery-focused services.",
            whatToExpect:
              "A calm, private experience with spa-level service adapted to the villa environment.",
            whatToBring:
              "Comfortable clothing and a quiet space. Providers usually bring treatment equipment.",
            goodToKnow:
              "For larger groups, treatments can be scheduled in a smooth sequence so everyone has time to relax.",
          }),
          option({
            title: "Private Yoga",
            description:
              "A personalized yoga session at the villa, beach, terrace, or garden depending on the property and group preference.",
            bestFor: "Couples, families, wellness travelers, beginners, and experienced practitioners.",
            duration: "Usually 60 to 90 minutes.",
            experience:
              "A private instructor leads a class adapted to the group’s level and goals, from gentle stretching to more active flow.",
            whatToExpect:
              "A peaceful, grounding session that can be scheduled in the morning, at sunset, or as part of a full wellness day.",
            whatToBring:
              "Comfortable clothing and water. Mats can often be arranged.",
            goodToKnow:
              "This pairs well with breakfast, sound healing, breathwork, or massage.",
          }),
          option({
            title: "Sound Healing & Breathwork",
            description:
              "A restorative session using guided breathing, sound, stillness, and relaxation.",
            bestFor: "Couples, small groups, wellness guests, and guests wanting a slower experience.",
            duration: "Usually 60 to 90 minutes.",
            experience:
              "A practitioner guides the group through breath, meditation, and sound using instruments such as bowls, gongs, or chimes depending on the provider.",
            whatToExpect:
              "A calming and introspective experience designed to reduce stress and create a deeper sense of relaxation.",
            whatToBring:
              "Comfortable clothing and an open mindset.",
            goodToKnow:
              "This works best in a quiet villa space without interruptions.",
          }),
          option({
            title: "Cold Plunge & Recovery Session",
            description:
              "A recovery-focused wellness experience with ice bath, breathwork, mobility, or massage elements.",
            bestFor: "Athletes, active travelers, wellness groups, and guests interested in performance recovery.",
            duration: "Usually 60 to 120 minutes.",
            experience:
              "The session may include breath preparation, guided cold exposure, mobility work, recovery coaching, and optional massage or healthy refreshments.",
            whatToExpect:
              "A more active wellness experience that feels energizing, challenging, and memorable.",
            whatToBring:
              "Swimwear, towel, comfortable clothes, and water.",
            goodToKnow:
              "Cold exposure is best for guests who are comfortable with intense temperature contrast and want a more active recovery experience.",
          }),
        ],
      }),

      createActivity({
        title: "Temazcal & Ritual Wellness",
        slug: "temazcal-ritual-wellness",
        image: wellnessImage,
        heroImage: wellnessHero,
        description:
          "Temazcal, cacao ceremonies, spiritual wellness, and ritual-style healing experiences.",
        overview:
          "This activity is separate from regular wellness because it feels more unique, local, and memorable. It is best for guests looking for something deeper than a standard spa treatment.",
        bestFor:
          "Couples, wellness travelers, small groups, spiritual travelers, and guests looking for a meaningful experience.",
        duration: "Usually 1.5 to 3 hours.",
        seasonality: "Available year-round, subject to provider availability.",
        tags: ["Wellness", "Romantic", "VIP", "By Request"],
        notes:
          "These experiences are best for guests seeking a deeper, more intentional wellness moment.",
        whatToExpect:
          "Expect a guided ritual-style experience focused on relaxation, renewal, heat, breath, sound, or ceremony depending on the provider.",
        whatToBring:
          "Comfortable clothing, swimwear if needed, water, and an open mindset.",
        experienceOptions: [
          option({
            title: "Temazcal Ceremony",
            description:
              "A traditional heat and renewal ceremony for guests seeking a deeper wellness experience.",
            bestFor: "Wellness travelers, couples, spiritual guests, and small groups.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "Guests are guided through a ceremonial heat experience that may include intention setting, steam, herbs, breath, silence, and reflection.",
            whatToExpect:
              "A powerful, warm, and introspective experience for guests who are comfortable with heat, stillness, and a deeper wellness setting.",
            whatToBring:
              "Swimwear or comfortable ceremony clothing, towel, water, and light clothing for after.",
            goodToKnow:
              "Best for guests who are comfortable with heat, enclosed spaces, and a more ceremonial wellness environment.",
          }),
          option({
            title: "Cacao Ceremony",
            description:
              "A softer ritual experience centered on cacao, intention, meditation, and connection.",
            bestFor: "Couples, small groups, wellness travelers, and guests looking for a reflective moment.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "A facilitator guides guests through a cacao-based ritual that may include meditation, conversation, sound, or intention setting.",
            whatToExpect:
              "A gentle, grounded, and emotional experience that works well in a quiet villa or natural setting.",
            whatToBring:
              "Comfortable clothing and an open mindset.",
            goodToKnow:
              "The experience is quiet, intentional, and centered on wellness rather than entertainment.",
          }),
          option({
            title: "Ritual Wellness Evening",
            description:
              "A customized wellness evening combining elements such as breathwork, sound healing, cacao, meditation, or a private chef wellness dinner.",
            bestFor: "Couples, groups, retreats, and milestone trips.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "The experience is built around the group’s mood and can include multiple practitioners, quiet décor, healthy drinks, music, and a nourishing dinner after the session.",
            whatToExpect:
              "A curated, atmospheric evening that feels private, slow, and meaningful.",
            whatToBring:
              "Comfortable clothing and any personal intentions for the experience.",
            goodToKnow:
              "This is ideal for guests who want wellness to feel special and produced.",
          }),
        ],
      }),

      createActivity({
        title: "Private Beach Setups & Sunset Experiences",
        slug: "private-beach-setups-sunset-experiences",
        image: wellnessImage,
        heroImage: wellnessHero,
        description:
          "Luxury picnics, sunset beach dinners, beach bonfires, cabana setups, and private sunset moments.",
        overview:
          "This category is ideal for romantic moments, family celebrations, birthdays, anniversaries, and relaxed luxury afternoons by the beach.",
        bestFor:
          "Couples, families, birthdays, anniversaries, proposals, groups, and guests who want a beautiful low-effort experience.",
        duration: "Usually 2 to 4 hours.",
        seasonality: "Available year-round, weather and beach rules permitting.",
        tags: ["Romantic", "Family-Friendly", "VIP", "Food & Drink", "Beach"],
        notes:
          "Setups are planned around the location, tide, wind, access rules, and the atmosphere the guest wants to create.",
        whatToExpect:
          "Expect a styled outdoor setup with seating, décor, food or drinks, and a relaxed atmosphere timed around sunset or the guest’s preferred moment.",
        whatToBring:
          "Comfortable resort wear, sandals, light layer, camera, and anything personal for the occasion.",
        experienceOptions: [
          option({
            title: "Luxury Beach Picnic",
            description:
              "A styled beach picnic with comfortable seating, beautiful décor, and curated food and drinks.",
            bestFor: "Couples, families, birthdays, anniversaries, and relaxed celebrations.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "A private setup is arranged before guests arrive, with blankets or low seating, table styling, florals or décor, and a menu adapted to the occasion.",
            whatToExpect:
              "An easy, beautiful, photo-friendly experience that feels special without being too formal.",
            whatToBring:
              "Resort wear, sandals, sunglasses, and camera.",
            goodToKnow:
              "The location is selected around the tide, wind, view, and atmosphere desired for the occasion.",
          }),
          option({
            title: "Sunset Beach Dinner",
            description:
              "A private dinner arranged near the beach or oceanfront, timed around the golden-hour and sunset moment.",
            bestFor: "Couples, proposals, anniversaries, families, and VIP guests.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests arrive to a styled table, private service, and a dinner menu designed for the occasion. It can be romantic, elegant, family-style, or celebration-focused.",
            whatToExpect:
              "A polished evening with atmosphere, dining, and a strong sense of place.",
            whatToBring:
              "Elegant resort wear, sandals or comfortable shoes, and a light layer.",
            goodToKnow:
              "Some locations may require permits or property approval.",
          }),
          option({
            title: "Beach Bonfire",
            description:
              "A relaxed evening by the fire with drinks, music, casual food, and a comfortable beach atmosphere.",
            bestFor: "Families, groups, birthdays, and relaxed evening gatherings.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "A bonfire-style setup is arranged with seating, lighting, drinks, snacks, and optional music or s’mores-style elements for families.",
            whatToExpect:
              "A warm, casual, memorable evening that works well after a beach day or villa dinner.",
            whatToBring:
              "Comfortable evening clothing, sandals, and a light layer.",
            goodToKnow:
              "Availability depends on the location, property rules, and beach regulations.",
          }),
          option({
            title: "Private Cabana or Daybed Setup",
            description:
              "A daytime beach setup designed for comfort, shade, service, and a more elevated beach day.",
            bestFor: "Families, couples, beach lovers, and relaxed luxury guests.",
            duration: "Half-day or full-day.",
            experience:
              "Guests enjoy reserved loungers, daybeds, cabana-style shade, refreshments, towels, and a curated beach setting depending on location and access.",
            whatToExpect:
              "A low-effort luxury beach day with comfort, privacy, and service.",
            whatToBring:
              "Swimwear, cover-up, sunscreen, hat, sunglasses, and sandals.",
            goodToKnow:
              "Availability depends on beach access, club rules, property rules, or provider setup permissions.",
          }),
        ],
      }),
    ],
  },

  {
    title: "Golf, Sports & Adventure",
    slug: "golf-sports-adventure",
    image: sportsImage,
    heroImage: sportsHero,
    description:
      "Golf, racket sports, fitness, adventure tours, hiking, horseback riding, polo, and equestrian experiences.",
    activities: [
      createActivity({
        title: "Punta Mita Golf Experiences",
        slug: "punta-mita-golf-experiences",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "Punta Mita Golf Club, Pacifico, Bahia, Tail of the Whale, clinics, tournaments, and golf events.",
        overview:
          "Golf is one of Punta Mita’s signature luxury activities. This parent activity includes casual rounds, serious golf days, instruction, group tournaments, and special events.",
        bestFor:
          "Golfers, couples, groups, corporate-style trips, families with golfers, and VIP travelers.",
        duration: "Usually 3 to 5 hours, depending on format.",
        seasonality: "Available year-round, with some special events seasonally.",
        tags: ["Sports", "VIP", "Groups", "Seasonal"],
        notes:
          "Access depends on the villa, club rules, reservation policies, and availability.",
        whatToExpect:
          "Expect a polished golf experience with ocean views, premium service, and options ranging from relaxed rounds to competitive group formats.",
        whatToBring:
          "Golf attire, golf shoes, sunglasses, sunscreen, and personal clubs if preferred.",
        experienceOptions: [
          option({
            title: "Pacifico or Bahia Golf Round",
            description:
              "A classic Punta Mita golf day on one of the destination’s signature courses.",
            bestFor: "Golfers, couples, groups, and VIP travelers.",
            duration: "Usually 4 to 5 hours.",
            experience:
              "Guests enjoy a round of golf with ocean views, premium service, and course conditions that make the game feel like part of the destination.",
            whatToExpect:
              "A polished golf experience with reservation coordination, tee time planning, and optional club rental or transportation.",
            whatToBring:
              "Golf attire, golf shoes, sunglasses, sunscreen, and clubs if preferred.",
            goodToKnow:
              "Course access and tee times depend on villa access, club rules, and availability.",
          }),
          option({
            title: "Tail of the Whale Experience",
            description:
              "A special golf moment centered on Punta Mita’s famous optional island-green hole.",
            bestFor: "Golfers, bucket-list travelers, photographers, and VIP guests.",
            duration: "Part of a Pacifico round, conditions permitting.",
            experience:
              "When available, guests play or visit the iconic oceanfront hole that creates one of the most memorable golf moments in Punta Mita.",
            whatToExpect:
              "A dramatic and highly photogenic golf experience tied to tide and course conditions.",
            whatToBring:
              "Golf attire, camera, sunglasses, and course-ready equipment.",
            goodToKnow:
              "This experience depends on tide, course conditions, and availability.",
          }),
          option({
            title: "Private Golf Clinic",
            description:
              "A private instruction session with a golf professional for beginners, improving players, or groups.",
            bestFor: "Beginners, families, groups, and golfers wanting instruction.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "A golf professional works with the guest or group on swing, short game, putting, or course strategy depending on level.",
            whatToExpect:
              "Focused instruction in a premium environment, with exercises adapted to the player’s goals.",
            whatToBring:
              "Golf attire, shoes, clubs if preferred, and water.",
            goodToKnow:
              "This is a strong option for mixed groups where not everyone wants a full round.",
          }),
          option({
            title: "Private Golf Tournament",
            description:
              "A group golf format designed for friends, families, corporate groups, or celebration trips.",
            bestFor: "Groups, bachelor trips, corporate-style trips, families, and competitive friends.",
            duration: "Usually half-day.",
            experience:
              "The round is organized as a friendly tournament with formats such as scramble, team play, closest-to-the-pin, or custom prizes.",
            whatToExpect:
              "A social, elevated, and organized golf experience that can include branding, scoring, awards, and post-round dining.",
            whatToBring:
              "Golf attire, shoes, clubs, and any custom items or prizes.",
            goodToKnow:
              "Advance planning is important for group tee times and tournament details.",
          }),
        ],
      }),

      createActivity({
        title: "Racket Sports",
        slug: "racket-sports",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "Tennis, pickleball, padel, private lessons, clinics, and friendly tournaments.",
        overview:
          "Racket sports are a strong fit for Punta Mita guests because they can be social, active, family-friendly, and easy to schedule around beach or villa time.",
        bestFor:
          "Families, groups, active couples, kids, teens, and guests who want a social sport.",
        duration: "Usually 1 to 2 hours.",
        seasonality: "Available year-round.",
        tags: ["Sports", "Family-Friendly", "Groups", "VIP"],
        notes:
          "Availability depends on court access, instructor schedules, and property or club rules.",
        whatToExpect:
          "Expect private instruction, court time, social games, or tournament-style play depending on the group.",
        whatToBring:
          "Athletic clothing, court shoes, water, sunscreen, and racket if preferred.",
        experienceOptions: [
          option({
            title: "Private Tennis Lesson",
            description:
              "A tailored tennis lesson for beginners, improving players, or active guests who want a polished sports session.",
            bestFor: "Adults, kids, teens, and active travelers.",
            duration: "Usually 1 hour.",
            experience:
              "A tennis coach adapts the session to the guest’s level, focusing on technique, drills, match play, or a fun family format.",
            whatToExpect:
              "Professional instruction, active movement, and a session that can be relaxed or technical.",
            whatToBring:
              "Court shoes, athletic clothing, water, and racket if preferred.",
            goodToKnow:
              "Court time and instructor schedules vary, so sessions are arranged around availability.",
          }),
          option({
            title: "Pickleball Session",
            description:
              "A social and accessible racket activity for groups, families, and guests of different ages.",
            bestFor: "Families, groups, beginners, and mixed-level players.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "Guests play casually or with a coach who explains rules, organizes teams, and keeps the session fun and social.",
            whatToExpect:
              "A lively and easy-to-learn activity that works well for mixed ages and groups.",
            whatToBring:
              "Athletic clothing, court shoes, water, and sunscreen.",
            goodToKnow:
              "This is one of the best sports activities for groups with different skill levels.",
          }),
          option({
            title: "Padel Match or Clinic",
            description:
              "A modern racket sport experience that feels social, stylish, and active.",
            bestFor: "Groups, couples, adults, and active travelers.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "Guests can book a court for casual play or arrange a coach-led clinic that introduces technique, scoring, and match play.",
            whatToExpect:
              "A fast, social, energetic session that works especially well for adults and groups.",
            whatToBring:
              "Athletic clothing, court shoes, water, and racket if preferred.",
            goodToKnow:
              "Padel is more specific in terms of court availability, so planning ahead matters.",
          }),
          option({
            title: "Private Racket Tournament",
            description:
              "A friendly tournament format for tennis, pickleball, or padel groups.",
            bestFor: "Families, friend groups, corporate-style trips, and celebration groups.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "A coach or host can organize teams, match formats, timing, scoring, and optional prizes.",
            whatToExpect:
              "A social, competitive, and memorable group activity that can be paired with drinks or lunch afterward.",
            whatToBring:
              "Athletic clothing, court shoes, water, and group energy.",
            goodToKnow:
              "This works best when the group has enough players and similar activity interest.",
          }),
        ],
      }),

      createActivity({
        title: "Private Fitness & Recovery",
        slug: "private-fitness-recovery",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "Private training, beach workouts, boxing, pilates, mobility, recovery, and performance sessions.",
        overview:
          "This activity is for guests who want to stay active during the trip without leaving the villa or beach environment.",
        bestFor:
          "Active travelers, wellness guests, groups, pre-wedding stays, and guests maintaining a fitness routine.",
        duration: "Usually 1 to 2 hours.",
        seasonality: "Available year-round.",
        tags: ["Sports", "Wellness", "Groups", "Rainy Day"],
        notes:
          "This can be paired with in-villa wellness, healthy chef menus, massage, or cold plunge.",
        whatToExpect:
          "Expect a private trainer or coach to design a session based on the group’s goals, level, and available space.",
        whatToBring:
          "Athletic clothing, training shoes, towel, water, and swimwear if using pool or cold plunge.",
        experienceOptions: [
          option({
            title: "Private Training Session",
            description:
              "A custom workout at the villa, gym, terrace, or beach depending on the property and guest preference.",
            bestFor: "Active travelers, groups, couples, and guests maintaining a routine.",
            duration: "Usually 60 minutes.",
            experience:
              "A private trainer creates a session around strength, conditioning, mobility, or general fitness based on guest goals.",
            whatToExpect:
              "A focused and efficient workout adapted to the group’s level and available equipment.",
            whatToBring:
              "Athletic clothing, training shoes, towel, and water.",
            goodToKnow:
              "This can be scheduled as a one-time session or repeated during the stay.",
          }),
          option({
            title: "Boxing or Beach Training",
            description:
              "A high-energy workout that can be done at the villa, beach, or outdoor space.",
            bestFor: "Groups, active adults, teens, and guests who like energetic workouts.",
            duration: "Usually 60 minutes.",
            experience:
              "A coach leads boxing drills, conditioning, partner exercises, or beach-style training adapted to the group.",
            whatToExpect:
              "A fun, sweaty, motivating workout with a strong group energy.",
            whatToBring:
              "Athletic clothing, shoes if needed, towel, and water.",
            goodToKnow:
              "Morning sessions are usually best because of heat.",
          }),
          option({
            title: "Pilates, Mobility or Stretch Session",
            description:
              "A gentler private movement session focused on posture, flexibility, recovery, and body awareness.",
            bestFor: "Wellness travelers, couples, older guests, and active recovery days.",
            duration: "Usually 60 minutes.",
            experience:
              "A private coach guides movement, stretching, mobility, and breathing exercises adapted to guest needs.",
            whatToExpect:
              "A calm but useful session that pairs well with massage, yoga, or recovery treatments.",
            whatToBring:
              "Comfortable clothing and water.",
            goodToKnow:
              "Ideal after golf, surfing, hiking, or travel.",
          }),
        ],
      }),

      createActivity({
        title: "Higuera Blanca Adventure Experiences",
        slug: "higuera-blanca-adventure-experiences",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "ATV, RZR, zipline, canopy, and family adventure experiences close to Punta Mita.",
        overview:
          "These adventure experiences stay close to Punta Mita, avoiding the long transfers required by farther adventure parks while still adding energy, scenery, and excitement to the stay.",
        bestFor:
          "Families, groups, teens, active travelers, and guests wanting a half-day adventure.",
        duration: "Usually 2 to 4 hours.",
        seasonality: "Available year-round, weather permitting.",
        tags: ["Adventure", "Family-Friendly", "Groups", "Sports"],
        notes:
          "Good for guests who want excitement without committing to a full-day excursion far from Punta Mita.",
        whatToExpect:
          "Expect a guided adventure route with safety briefing, equipment, and a mix of jungle, views, or trail experiences depending on the selected tour.",
        whatToBring:
          "Closed-toe shoes, comfortable clothes, sunscreen, sunglasses, and clothes that can get dusty.",
        experienceOptions: [
          option({
            title: "ATV Tour",
            description:
              "A guided off-road adventure close to Punta Mita with dust, views, trails, and a fun group atmosphere.",
            bestFor: "Families with older kids, groups, teens, and active travelers.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "Guests ride ATVs on guided routes with safety equipment, instruction, and stops depending on the selected tour.",
            whatToExpect:
              "A dusty, energetic, scenic experience that adds adventure without requiring a long drive.",
            whatToBring:
              "Closed-toe shoes, clothes that can get dusty, sunglasses, sunscreen, and ID if required.",
            goodToKnow:
              "Drivers may need to meet age and license requirements.",
          }),
          option({
            title: "RZR Adventure",
            description:
              "A more comfortable off-road vehicle experience for guests who want adventure with a slightly more substantial ride.",
            bestFor: "Groups, couples, families, and guests who prefer side-by-side vehicles.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "Guests ride in RZR vehicles with a guided route through trails and scenic areas near Higuera Blanca.",
            whatToExpect:
              "A fun, social, off-road activity with less individual riding pressure than ATVs.",
            whatToBring:
              "Closed-toe shoes, comfortable clothes, sunglasses, sunscreen, and dust-friendly clothing.",
            goodToKnow:
              "This can be better than ATVs for guests who want to ride together.",
          }),
          option({
            title: "Zipline & Canopy Experience",
            description:
              "A guided canopy adventure for guests who want height, views, and adrenaline.",
            bestFor: "Families, teens, groups, and adventure travelers.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "Guests follow a guided zipline or canopy route with safety equipment and staff supervision.",
            whatToExpect:
              "An active, confidence-building adventure with scenic views and light adrenaline.",
            whatToBring:
              "Closed-toe shoes, comfortable clothing, sunscreen, and hair tied back if needed.",
            goodToKnow:
              "Weight, age, and health restrictions may apply.",
          }),
        ],
      }),

      createActivity({
        title: "Monkey Mountain & Guided Nature Hikes",
        slug: "monkey-mountain-guided-nature-hikes",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "Guided hikes, sunrise routes, nature walks, and scenic active experiences near Punta Mita.",
        overview:
          "This is the only hiking category I would keep as a main Punta Mita activity because it is close, scenic, active, and easy to understand.",
        bestFor:
          "Active guests, couples, families with older kids, nature lovers, and guests who enjoy sunrise activities.",
        duration: "Usually 2 to 4 hours.",
        seasonality: "Best in cooler morning hours. Available most of the year.",
        tags: ["Adventure", "Sports", "Nature", "Family-Friendly"],
        notes:
          "Guided support adds safety, local context, navigation, and comfort in warmer conditions.",
        whatToExpect:
          "Expect an active outdoor hike with scenic views, local guidance, and an early departure for the best conditions.",
        whatToBring:
          "Athletic shoes, breathable clothing, hat, sunscreen, water, and camera.",
        experienceOptions: [
          option({
            title: "Monkey Mountain Sunrise Hike",
            description:
              "A scenic guided hike timed for cooler weather, softer light, and panoramic views.",
            bestFor: "Active couples, families with older kids, photographers, and nature lovers.",
            duration: "Usually 2.5 to 4 hours.",
            experience:
              "Guests depart early with a guide and hike toward viewpoint areas with views of Punta Mita, the coastline, and surrounding jungle.",
            whatToExpect:
              "A physically active morning with rewarding views and a strong sense of place.",
            whatToBring:
              "Athletic shoes, hat, sunscreen, water, breathable clothing, and camera.",
            goodToKnow:
              "Heat can be significant later in the day, so morning is strongly preferred.",
          }),
          option({
            title: "Private Guided Nature Walk",
            description:
              "A softer nature-focused outing for guests who want scenery and local context without a strenuous hike.",
            bestFor: "Families, older guests, nature lovers, and relaxed active travelers.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "A guide leads a gentler route focused on views, local plants, birds, coastline, and the surrounding landscape.",
            whatToExpect:
              "A slower and more educational outdoor experience than a fitness hike.",
            whatToBring:
              "Comfortable shoes, hat, sunscreen, water, and camera.",
            goodToKnow:
              "This is best customized to the group’s fitness level.",
          }),
        ],
      }),

      createActivity({
        title: "Horseback, Polo & Equestrian Experiences",
        slug: "horseback-polo-equestrian-experiences",
        image: sportsImage,
        heroImage: sportsHero,
        description:
          "Beach horseback riding, polo brunch, polo lessons, and curated equestrian experiences.",
        overview:
          "This category combines casual horseback riding with more elevated polo and equestrian experiences in the San Pancho area.",
        bestFor:
          "Couples, families, groups, horse lovers, and guests looking for an elegant outdoor experience.",
        duration: "Usually 1.5 to 4 hours depending on experience.",
        seasonality: "Available year-round. Polo brunch and matches may be seasonal.",
        tags: ["Sports", "Family-Friendly", "Romantic", "VIP", "Seasonal"],
        notes:
          "This can be casual and family-friendly or more refined with brunch and polo.",
        whatToExpect:
          "Expect guided riding, equestrian facilities, beach or countryside scenery, or a more social polo-club experience depending on the option selected.",
        whatToBring:
          "Comfortable clothing, closed-toe shoes, hat, sunscreen, and sunglasses.",
        experienceOptions: [
          option({
            title: "Beach Horseback Ride",
            description:
              "A scenic guided horseback ride that can feel romantic, family-friendly, or adventurous depending on timing and route.",
            bestFor: "Couples, families, first-time riders, and relaxed outdoor guests.",
            duration: "Usually 1 to 2 hours.",
            experience:
              "Guests ride with a guide through beach or coastal scenery, often timed for softer light or sunset when available.",
            whatToExpect:
              "A scenic, accessible, and memorable outdoor experience with horses and ocean atmosphere.",
            whatToBring:
              "Closed-toe shoes, comfortable clothing, sunscreen, hat, and sunglasses.",
            goodToKnow:
              "Rider comfort level, age, and weight restrictions may apply.",
          }),
          option({
            title: "Polo Brunch",
            description:
              "An elegant social outing built around polo, brunch, countryside atmosphere, and a refined day-club feeling.",
            bestFor: "Couples, adults, families, groups, and guests looking for something different.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Guests attend a polo-focused brunch or social experience, combining food, drinks, equestrian atmosphere, and the chance to watch the sport in a beautiful setting.",
            whatToExpect:
              "A stylish and slower-paced outing that feels more elevated than a normal activity tour.",
            whatToBring:
              "Resort casual clothing, sunglasses, hat, and camera.",
            goodToKnow:
              "Polo programming is seasonal, with schedules varying by date.",
          }),
          option({
            title: "Polo Lesson or Equestrian Session",
            description:
              "A more hands-on equestrian experience for guests interested in learning, riding, or trying something rare.",
            bestFor: "Horse lovers, adventurous adults, families with older kids, and VIP guests.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "Depending on the provider, guests may receive instruction, ride in an arena, learn polo basics, or enjoy a private equestrian experience.",
            whatToExpect:
              "A guided, specialized activity that feels unique and memorable.",
            whatToBring:
              "Closed-toe shoes, comfortable riding clothing, sunscreen, and water.",
            goodToKnow:
              "The session can be adapted around each guest’s riding experience and comfort level.",
          }),
        ],
      }),
    ],
  },

    {
    title: "Beach Clubs & Day Clubs",
    slug: "beach-clubs-day-clubs",
    image: beachClubImage,
    heroImage: beachClubHero,
    description:
      "Curated beach club experiences in Punta Mita and select destination beach clubs for guests looking for a more social or party atmosphere.",
    activities: [
      createActivity({
        title: "Punta Mita Beach Clubs",
        slug: "punta-mita-beach-clubs",
        image: beachClubImage,
        heroImage: beachClubHero,
        description:
          "A curated guide to the private and resort-style beach clubs inside Punta Mita, including Kupuri, Pacifico, Sufi, Sea Breeze, and El Surf Club.",
        overview:
          "Punta Mita’s beach clubs are one of the main advantages of staying in the destination. Each club has a different personality: some are better for families, some for long lunches, some for ocean sports, and others for a relaxed beach day with polished service.",
        bestFor:
          "Families, couples, villa guests, beach lovers, relaxed luxury travelers, and guests who want an easy day close to the villa.",
        duration: "Half-day, full-day, lunch, or sunset visit.",
        seasonality:
          "Available year-round, subject to villa access, club rules, reservations, and seasonal schedules.",
        tags: ["Beach", "Family-Friendly", "Romantic", "VIP", "Food & Drink"],
        notes:
          "Access depends on the villa, guest privileges, club rules, reservation availability, and the specific Punta Mita community or resort relationship.",
        whatToExpect:
          "Expect a polished beach-club day with loungers, dining, beach access, ocean views, pools or club amenities depending on the venue, and a more effortless way to enjoy the Punta Mita lifestyle.",
        whatToBring:
          "Resort wear, swimwear, sunglasses, sunscreen, sandals, hat, and reservation or access details.",
        experienceOptions: [
          option({
            title: "Kupuri Beach Club",
            description:
              "A polished Punta Mita beach club experience with a family-friendly feel, beach service, dining, pool time, and a relaxed luxury atmosphere.",
            bestFor:
              "Families, couples, villa guests, kids, and guests who want a comfortable full beach day.",
            duration: "Half-day or full-day.",
            experience:
              "Guests spend the day at Kupuri enjoying the beach, loungers, food, drinks, pool areas, and easy access to a refined Punta Mita beach-club setting. It works especially well for families because it feels relaxed, comfortable, and complete.",
            whatToExpect:
              "A smooth and easy beach day with polished service, casual luxury, and enough amenities to keep different ages comfortable.",
            whatToBring:
              "Swimwear, cover-up, sunscreen, sunglasses, sandals, and a hat.",
            goodToKnow:
              "Access depends on the villa and guest privileges. This is usually one of the easiest Punta Mita beach-club options for families.",
          }),
          option({
            title: "Pacifico Beach Club",
            description:
              "A classic Punta Mita beach club option with oceanfront atmosphere, dining, beach time, and a relaxed resort-style setting.",
            bestFor:
              "Couples, families, villa guests, and travelers who want a calm and elegant beach-club day.",
            duration: "Half-day, lunch, or full-day.",
            experience:
              "Guests enjoy an oceanfront beach-club environment with time for swimming, lounging, lunch, drinks, and a slow day close to the water.",
            whatToExpect:
              "A refined but relaxed experience that feels very connected to the Punta Mita lifestyle.",
            whatToBring:
              "Resort wear, swimwear, sunscreen, sunglasses, sandals, and a light cover-up.",
            goodToKnow:
              "A good fit for guests who want something polished without needing a high-energy or party atmosphere.",
          }),
          option({
            title: "Sufi Ocean Club",
            description:
              "A more intimate ocean-club experience with a refined setting, beautiful views, dining, and a quieter Punta Mita atmosphere.",
            bestFor:
              "Couples, adults, relaxed luxury travelers, small groups, and guests who want a more elegant oceanfront setting.",
            duration: "Lunch, sunset, half-day, or relaxed afternoon.",
            experience:
              "Guests visit Sufi for a slower and more refined ocean-club experience. It can be arranged around lunch, drinks, sunset, or simply a quiet afternoon by the water.",
            whatToExpect:
              "A calmer and more elegant beach-club style with strong atmosphere and ocean views.",
            whatToBring:
              "Resort casual clothing, swimwear if planning to swim, sunglasses, sunscreen, and a light layer for sunset.",
            goodToKnow:
              "This is a strong option for couples or adults who want something less family-oriented and more serene.",
          }),
          option({
            title: "Sea Breeze Beach Club",
            description:
              "A convenient Punta Mita beach club experience with resort-style dining, beach access, and a relaxed social atmosphere.",
            bestFor:
              "Families, couples, villa guests, casual lunches, and guests wanting a simple beach-club outing.",
            duration: "Lunch, half-day, or casual beach afternoon.",
            experience:
              "Guests enjoy a resort-style beach-club setting with food, drinks, beach time, and easy service. It is a good option when the goal is comfort and simplicity.",
            whatToExpect:
              "A relaxed and accessible beach-club day that works well for mixed groups.",
            whatToBring:
              "Swimwear, resort wear, sunscreen, sunglasses, sandals, and a hat.",
            goodToKnow:
              "Best used when guests want an easy, comfortable beach-club option without over-planning.",
          }),
          option({
            title: "El Surf Club",
            description:
              "A barefoot-luxury surf club experience near La Lancha, ideal for guests who want beach, surf atmosphere, lunch, and a more casual coastal vibe.",
            bestFor:
              "Surfers, couples, younger guests, families with teens, and guests who want a stylish but relaxed beach day.",
            duration: "Half-day, lunch, or surf-and-beach outing.",
            experience:
              "Guests can combine beach time, surf atmosphere, lunch, drinks, and optional surf lessons or board time. It feels more casual and lifestyle-driven than a traditional beach club.",
            whatToExpect:
              "A beach-club day with more surf culture, open-air energy, and a relaxed barefoot feel.",
            whatToBring:
              "Swimwear, beachwear, sunscreen, towel, sunglasses, and surf gear if needed.",
            goodToKnow:
              "This pairs very well with the Surf Experiences activity and is one of the best options for guests who want a more active beach day.",
          }),
        ],
      }),

      createActivity({
        title: "Party Beach Clubs",
        slug: "party-beach-clubs",
        image: beachClubImage,
        heroImage: beachClubHero,
        description:
          "High-energy beach club experiences for guests looking for music, boat access, social atmosphere, and a more festive day outside Punta Mita.",
        overview:
          "Party beach clubs are not the right fit for every Punta Mita guest, but they can be very attractive for younger groups, birthdays, bachelor or bachelorette trips, and guests specifically looking for a social beach-club scene.",
        bestFor:
          "Adults, younger groups, birthdays, bachelor and bachelorette groups, social travelers, and guests who want music and energy.",
        duration: "Usually half-day to full-day, depending on transfer and boat logistics.",
        seasonality:
          "Available year-round, with atmosphere, programming, and music varying by date and season.",
        tags: ["Beach", "Nightlife", "Adults", "Groups", "By Request"],
        notes:
          "These outings involve more planning than Punta Mita’s local beach clubs, including transportation, boat transfers, reservations, minimum spends, and return timing.",
        whatToExpect:
          "Expect a more social, music-driven beach-club experience with a younger atmosphere, drinks, dining, boat access, and a stronger party energy than Punta Mita’s private beach clubs.",
        whatToBring:
          "Swimwear, stylish beachwear, sunglasses, sunscreen, sandals, ID, payment card, and a light layer for the return.",
        experienceOptions: [
          option({
            title: "Majahuitas Beach Club",
            description:
              "A destination beach club known for its music, boat-access setting, social atmosphere, and more festive beach-club energy.",
            bestFor:
              "Adults, younger groups, birthdays, bachelor and bachelorette trips, and guests who want a party beach-club experience.",
            duration: "Usually half-day to full-day including transfer logistics.",
            experience:
              "Guests travel to Majahuitas for a beach-club day centered on music, drinks, lunch, oceanfront lounging, and a social atmosphere. It is more of a destination outing than a simple beach day.",
            whatToExpect:
              "A lively beach-club experience with music, social energy, and a stronger party mood than the beach clubs inside Punta Mita.",
            whatToBring:
              "Stylish beachwear, swimwear, sunglasses, sunscreen, sandals, ID, and payment card.",
            goodToKnow:
              "This is a more involved outing with transport, reservations, and return timing, best for guests who want the full party beach-club scene.",
          }),
          option({
            title: "Anima Beach Club",
            description:
              "A popular south-bay beach club option for guests looking for music, beach, drinks, and a more social day outside Punta Mita.",
            bestFor:
              "Young adults, friend groups, social travelers, birthdays, and bachelor or bachelorette groups.",
            duration: "Usually half-day to full-day including transfer logistics.",
            experience:
              "Guests visit Anima for a beach-club day with food, drinks, loungers, ocean time, and a more energetic atmosphere than the quiet beach-club options in Punta Mita.",
            whatToExpect:
              "A fun and social beach-club outing with music, drinks, and a more casual party atmosphere.",
            whatToBring:
              "Swimwear, beachwear, sunglasses, sunscreen, sandals, ID, and payment card.",
            goodToKnow:
              "From Punta Mita, this is a more involved outing, best suited to guests who are specifically looking for a social beach-club scene.",
          }),
        ],
      }),

      createActivity({
        title: "Other Beach Clubs",
        slug: "other-beach-clubs",
        image: beachClubImage,
        heroImage: beachClubHero,
        description:
          "Select beach-club and polo-club experiences outside Punta Mita that are worth considering for the right guest.",
        overview:
          "This category is intentionally selective. It is not a list of every beach club nearby, but a place for distinctive off-property experiences that can make sense for Punta Mita guests.",
        bestFor:
          "Couples, families, groups, polo lovers, relaxed luxury travelers, and guests wanting a change of scene outside Punta Mita.",
        duration: "Usually half-day.",
        seasonality:
          "Available year-round for beach-club style visits. Polo and equestrian programming may be seasonal.",
        tags: ["Beach", "Food & Drink", "Family-Friendly", "Romantic", "By Request"],
        notes:
          "This section stays intentionally selective, focused only on off-property beach clubs that feel relevant to a Punta Mita stay.",
        whatToExpect:
          "Expect a curated outing outside Punta Mita with dining, beach-club atmosphere, and possibly polo or equestrian elements depending on the day and season.",
        whatToBring:
          "Resort casual clothing, swimwear if beach-focused, sunglasses, sunscreen, sandals, and camera.",
        experienceOptions: [
          option({
            title: "Tierra Tropical Beach & Polo Club Day",
            description:
              "A distinctive San Pancho-area experience combining beach-club atmosphere, dining, sunset drinks, and possible polo or equestrian programming.",
            bestFor:
              "Couples, families, groups, polo lovers, and guests who want something elegant outside Punta Mita.",
            duration: "Usually half-day.",
            experience:
              "Guests enjoy a refined beach-club or polo-club style outing with lunch, drinks, sunset atmosphere, and seasonal polo or equestrian elements when available.",
            whatToExpect:
              "A more distinctive and elegant outing than a standard beach day, with a countryside-meets-coast feeling.",
            whatToBring:
              "Resort casual clothing, swimwear if beach-focused, sunglasses, sunscreen, and camera.",
            goodToKnow:
              "Polo-related programming is seasonal. The experience is best for guests who want a quieter, more refined outing than a party beach club.",
          }),
        ],
      }),
    ],
  },
  {
    title: "Food & Dining",
    slug: "food-dining",
    image: foodImage,
    heroImage: foodHero,
    description:
      "Private chef experiences, Punta Mita restaurants, agave tastings, mixology, farm-to-table, and culinary experiences.",
    activities: [
      createActivity({
        title: "Private Chef & In-Villa Dining",
        slug: "private-chef-in-villa-dining",
        image: foodImage,
        heroImage: foodHero,
        description:
          "Private chefs, tasting menus, taco nights, sushi chefs, seafood bars, ceviche stations, and cooking classes at the villa.",
        overview:
          "This is one of the most important categories for luxury villa renters. It gives guests restaurant-level dining without leaving the property.",
        bestFor:
          "Families, couples, groups, celebrations, food lovers, and guests who prefer private service.",
        duration: "Meal-based, half-day, or multi-day depending on service.",
        seasonality: "Available year-round.",
        tags: ["Food & Drink", "Family-Friendly", "Romantic", "VIP", "Rainy Day"],
        notes:
          "Menus are customized around the group, allergies, dietary needs, preferred cuisine, and level of formality.",
        whatToExpect:
          "Expect menu planning, ingredient sourcing, chef preparation, service, and a private dining experience at the villa.",
        whatToBring:
          "No special items required. Share dietary restrictions, favorite cuisines, allergies, and preferred timing.",
        experienceOptions: [
          option({
            title: "Private Chef Dinner",
            description:
              "A private dinner at the villa with a chef-designed menu and restaurant-style service.",
            bestFor: "Families, couples, groups, celebrations, and VIP guests.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "The chef prepares a customized dinner at the villa, with menu planning based on guest preferences, dietary needs, occasion, and desired level of formality.",
            whatToExpect:
              "A polished, comfortable dining experience without leaving the villa.",
            whatToBring:
              "No special items required. Share dietary restrictions and preferences in advance.",
            goodToKnow:
              "This is one of the highest-value experiences for villa renters.",
          }),
          option({
            title: "Chef’s Tasting Menu",
            description:
              "A more refined in-villa culinary experience with multiple courses and a stronger fine-dining feeling.",
            bestFor: "Couples, food lovers, anniversaries, birthdays, and VIP guests.",
            duration: "Usually 2.5 to 4 hours.",
            experience:
              "The chef creates a multi-course menu, often with local seafood, seasonal produce, Mexican flavors, or a theme selected by the guest.",
            whatToExpect:
              "A slower, more elevated dinner with stronger attention to plating, pacing, and storytelling.",
            whatToBring:
              "Elegant resort wear and any wine or pairing preferences.",
            goodToKnow:
              "This works best for smaller or medium-sized groups that want a true dining experience.",
          }),
          option({
            title: "Private Taco Night",
            description:
              "A fun, casual, high-quality taco experience brought into the villa.",
            bestFor: "Families, groups, kids, casual celebration nights, and arrival dinners.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "A chef or team prepares tacos, salsas, sides, and optional margaritas or aguas frescas in a relaxed format.",
            whatToExpect:
              "A lively and easy dinner that feels local, social, and guest-friendly.",
            whatToBring:
              "No special items required. Share spice level and dietary restrictions.",
            goodToKnow:
              "This is a great first-night or family dinner option.",
          }),
          option({
            title: "Seafood, Ceviche or Aguachile Bar",
            description:
              "A fresh seafood-focused experience for lunch, poolside dining, or a sunset appetizer moment.",
            bestFor: "Seafood lovers, groups, pool days, yacht return days, and casual lunches.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "The chef prepares fresh ceviche, aguachile, tostadas, oysters, grilled seafood, or a seafood bar depending on preferences and sourcing.",
            whatToExpect:
              "A bright, fresh, coastal dining experience that feels perfect for Punta Mita.",
            whatToBring:
              "No special items required. Share seafood preferences and allergies.",
            goodToKnow:
              "Best when planned with trusted sourcing and proper timing.",
          }),
          option({
            title: "Private Sushi Chef",
            description:
              "A refined in-villa sushi or Japanese-inspired dinner experience.",
            bestFor: "Couples, groups, birthdays, adults, and food lovers.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "A sushi chef prepares rolls, sashimi, nigiri, or a chef’s selection in the villa, often with a bar-style setup or plated service.",
            whatToExpect:
              "A clean, elegant, interactive dining experience that works well for adults and celebrations.",
            whatToBring:
              "No special items required. Share preferences and allergies.",
            goodToKnow:
              "The experience is strongest when planned with excellent sourcing, timing, and a chef whose style matches the group.",
          }),
        ],
      }),

      createActivity({
        title: "Punta Mita Fine Dining & Oceanfront Restaurants",
        slug: "punta-mita-fine-dining-oceanfront-restaurants",
        image: foodImage,
        heroImage: foodHero,
        description:
          "Fine dining, oceanfront restaurants, seafood experiences, and curated restaurant reservations around Punta Mita.",
        overview:
          "This category keeps restaurant recommendations focused on places that are actually worth leaving the villa for.",
        bestFor:
          "Couples, families, groups, food lovers, and guests wanting a polished restaurant experience.",
        duration: "Usually 1.5 to 3 hours.",
        seasonality: "Available year-round, subject to restaurant schedules and reservation availability.",
        tags: ["Food & Drink", "Romantic", "Family-Friendly", "VIP"],
        notes:
          "Avoid sending guests too far unless the restaurant is truly worth the transfer.",
        whatToExpect:
          "Expect curated recommendations and reservations based on the guest’s style, group, occasion, and preferred cuisine.",
        whatToBring:
          "Resort casual or elegant resort wear, depending on the restaurant.",
        experienceOptions: [
          option({
            title: "Punta Mita Fine Dining",
            description:
              "A curated restaurant reservation focused on the strongest dining options in and around Punta Mita.",
            bestFor: "Couples, families, groups, and food lovers.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "The concierge recommends and reserves a restaurant based on cuisine, atmosphere, occasion, guest profile, and logistics from the villa.",
            whatToExpect:
              "A polished dinner or lunch experience with minimal travel and strong fit for the group.",
            whatToBring:
              "Resort casual or elegant resort wear depending on venue.",
            goodToKnow:
              "The best restaurant choice depends heavily on the group’s style and exact villa location.",
          }),
          option({
            title: "Oceanfront Restaurant Experience",
            description:
              "A dining experience centered on views, sunset, seafood, and the coastal atmosphere.",
            bestFor: "Couples, families, first-night dinners, and sunset lovers.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "Guests dine at a restaurant chosen for its ocean setting, atmosphere, food quality, and ease of access.",
            whatToExpect:
              "A relaxed but beautiful meal with the destination feeling strongly present.",
            whatToBring:
              "Resort casual clothing, light layer, and camera.",
            goodToKnow:
              "Sunset reservations should be planned early during high season.",
          }),
          option({
            title: "Curated Local Favorite",
            description:
              "A more local or hidden dining recommendation selected carefully so it still fits a luxury guest.",
            bestFor: "Food lovers, repeat guests, adventurous couples, and guests asking for something less obvious.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "The concierge recommends a trusted local restaurant that is worth the trip for flavor, authenticity, or atmosphere.",
            whatToExpect:
              "A less formal but more local dining experience, selected carefully to avoid disappointing luxury guests.",
            whatToBring:
              "Casual resort clothing and an open mind.",
            goodToKnow:
              "This should be curated, not generic. Do not send guests to places just because they are popular online.",
          }),
        ],
      }),

      createActivity({
        title: "Agave, Mixology, Cigar & Farm-to-Table Experiences",
        slug: "agave-mixology-cigar-farm-to-table-experiences",
        image: foodImage,
        heroImage: foodHero,
        description:
          "Tequila, mezcal, raicilla, mixology, cigars, pairing dinners, Cachasol, and farm-to-table experiences.",
        overview:
          "This category groups the most interesting tasting and culinary-culture experiences into one premium activity.",
        bestFor:
          "Couples, groups, food lovers, adults, celebrations, and guests interested in Mexican spirits and local flavors.",
        duration: "Usually 1.5 to 4 hours.",
        seasonality: "Available year-round.",
        tags: ["Food & Drink", "Adults", "Romantic", "VIP", "Groups"],
        notes:
          "Raicilla and farm-to-glass experiences feel more local and distinctive than generic wine tastings.",
        whatToExpect:
          "Expect a guided tasting, private mixology session, pairing dinner, or curated farm-to-table experience depending on the format selected.",
        whatToBring:
          "Comfortable clothing, valid ID if required, and transportation if the experience is outside the villa.",
        experienceOptions: [
          option({
            title: "Private Tequila, Mezcal or Raicilla Tasting",
            description:
              "A guided Mexican spirits tasting brought to the villa or arranged at a curated venue.",
            bestFor: "Adults, couples, groups, birthdays, and food-and-drink lovers.",
            duration: "Usually 1.5 to 2 hours.",
            experience:
              "A host guides guests through selected spirits, flavor profiles, production methods, regions, and pairing notes.",
            whatToExpect:
              "A social, educational, and premium tasting that can be serious or relaxed depending on the group.",
            whatToBring:
              "Valid ID if required and comfortable evening clothing.",
            goodToKnow:
              "Raicilla gives the experience a more local and distinctive angle.",
          }),
          option({
            title: "In-Villa Mixology Class",
            description:
              "A private cocktail-making experience with a bartender or mixologist.",
            bestFor: "Groups, couples, adults, birthdays, and pre-dinner entertainment.",
            duration: "Usually 1.5 to 2 hours.",
            experience:
              "Guests learn to make selected cocktails using tequila, mezcal, raicilla, tropical ingredients, or classic techniques.",
            whatToExpect:
              "A fun, interactive, social experience that works especially well before dinner or a villa party.",
            whatToBring:
              "No special items required. Share spirit preferences and cocktail style.",
            goodToKnow:
              "This pairs well with a private chef dinner or villa party.",
          }),
          option({
            title: "Cigar & Spirits Evening",
            description:
              "A sophisticated adults-only evening with cigars, spirits, and a relaxed lounge atmosphere.",
            bestFor: "Adults, groups, bachelor trips, celebrations, and cigar enthusiasts.",
            duration: "Usually 1.5 to 3 hours.",
            experience:
              "The experience can include selected cigars, tequila, mezcal, whisky, rum, or raicilla pairings, plus a host to guide the evening.",
            whatToExpect:
              "A slower, elegant, after-dinner atmosphere with conversation and premium pairings.",
            whatToBring:
              "Comfortable evening clothing.",
            goodToKnow:
              "Confirm smoking rules at the villa or venue before arranging.",
          }),
          option({
            title: "Cachasol Farm-to-Table & Mixology Experience",
            description:
              "A nearby culinary and farm-to-glass experience built around agave, gardens, cooking, and cocktails.",
            bestFor: "Food lovers, couples, groups, adults, and guests wanting something local but polished.",
            duration: "Usually 3 to 4 hours including transfers.",
            experience:
              "Guests visit a curated farm and distillery-style setting for cooking, cocktails, agave, local ingredients, and a more immersive culinary experience.",
            whatToExpect:
              "A distinctive outing that feels more local and memorable than a normal restaurant reservation.",
            whatToBring:
              "Comfortable resort casual clothing, sunglasses, and transportation arrangements.",
            goodToKnow:
              "This is one of the strongest off-villa food experiences for Punta Mita guests.",
          }),
        ],
      }),
    ],
  },

  {
    title: "Nightlife & Entertainment",
    slug: "nightlife-entertainment",
    image: nightlifeImage,
    heroImage: nightlifeHero,
    description:
      "Private villa parties, entertainment, poker nights, casino experiences, curated nights out, and signature dinner shows.",
    activities: [
      createActivity({
        title: "Private Villa Parties & Entertainment",
        slug: "private-villa-parties-entertainment",
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description:
          "Private villa parties, DJs, bartenders, mariachi, movie nights, family entertainment, and celebration setups.",
        overview:
          "For Punta Mita luxury renters, the best nightlife is often private. This category turns the villa into the evening venue.",
        bestFor:
          "Families, groups, birthdays, bachelor and bachelorette groups, celebrations, and guests who prefer private entertainment.",
        duration: "Usually 2 to 6 hours.",
        seasonality: "Available year-round, subject to property rules and provider availability.",
        tags: ["Nightlife", "Groups", "VIP", "Family-Friendly", "Rainy Day"],
        notes:
          "Always confirm villa rules, noise restrictions, community policies, and guest count limits.",
        whatToExpect:
          "Expect a tailored private event at the villa with entertainment, drinks, music, food, décor, or family programming depending on the occasion.",
        whatToBring:
          "No special items required. Share music preferences, guest count, timing, and celebration details.",
        experienceOptions: [
          option({
            title: "Private DJ Villa Party",
            description:
              "A private music-focused evening at the villa with DJ, sound, lighting, and party atmosphere.",
            bestFor: "Groups, birthdays, bachelor and bachelorette trips, and celebrations.",
            duration: "Usually 3 to 6 hours.",
            experience:
              "A DJ sets up at the villa and plays a music program adapted to the group, with optional bartender, chef, lighting, décor, and event staffing.",
            whatToExpect:
              "A private, controlled party atmosphere without needing to travel to a club.",
            whatToBring:
              "Party attire and music preferences.",
            goodToKnow:
              "Noise rules and community restrictions must be confirmed before promising this.",
          }),
          option({
            title: "Private Bartender & Cocktail Night",
            description:
              "A polished drinks experience at the villa with a bartender, curated cocktail menu, and relaxed social atmosphere.",
            bestFor: "Adults, groups, couples, and pre-dinner gatherings.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "A bartender prepares cocktails, margaritas, mezcal drinks, mocktails, or a custom bar menu for the evening.",
            whatToExpect:
              "A social and elevated evening that can be casual or formal depending on setup.",
            whatToBring:
              "No special items required. Share drink preferences in advance.",
            goodToKnow:
              "This pairs well with private chef dinner, DJ, or cigar experience.",
          }),
          option({
            title: "Private Mariachi Dinner",
            description:
              "A classic Mexican celebration moment with live mariachi arranged during dinner or sunset.",
            bestFor: "Families, birthdays, anniversaries, first-time visitors, and celebration groups.",
            duration: "Usually 45 to 90 minutes as part of an evening.",
            experience:
              "A mariachi group performs at the villa during cocktails, dinner, or a surprise celebration moment.",
            whatToExpect:
              "A festive, emotional, and memorable cultural moment that works well for all ages.",
            whatToBring:
              "No special items required.",
            goodToKnow:
              "Timing matters. Mariachi is strongest as a highlight during a larger evening, not necessarily the full event.",
          }),
          option({
            title: "Private Movie Night or Family Entertainment",
            description:
              "A relaxed villa evening with movie setup, snacks, kids’ entertainment, games, or a family celebration.",
            bestFor: "Families, kids, rainy evenings, relaxed groups, and multi-generational stays.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "The concierge arranges outdoor or indoor movie setup, popcorn, snacks, themed décor, games, piñata, or family-friendly entertainment.",
            whatToExpect:
              "An easy, warm, private evening that keeps families entertained without leaving the villa.",
            whatToBring:
              "Comfortable clothing and movie preferences.",
            goodToKnow:
              "This is a strong option for families after a busy beach or boat day.",
          }),
        ],
      }),

      createActivity({
        title: "Poker & Casino Experiences",
        slug: "poker-casino-experiences",
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description:
          "Private poker nights, casino-style villa evenings, and calendar-dependent poker tournaments nearby.",
        overview:
          "This is a niche but strong option for certain groups. It works especially well for adult group trips, birthdays, bachelor groups, and guests who want a private evening activity.",
        bestFor:
          "Adults, groups, bachelor trips, birthdays, and guests who enjoy cards or casino-style entertainment.",
        duration: "Usually 2 to 5 hours.",
        seasonality: "Private events are year-round. Public tournaments are calendar-dependent.",
        tags: ["Nightlife", "Adults", "Groups", "By Request"],
        notes:
          "Public tournament schedules should be checked before offering. Private villa events should follow property rules.",
        whatToExpect:
          "Expect a private game night or casino-style setup with dealers, tables, cards, and a social adults-only atmosphere.",
        whatToBring:
          "Comfortable evening clothing. Confirm guest count and preferred format in advance.",
        experienceOptions: [
          option({
            title: "Private Villa Poker Night",
            description:
              "A private poker evening at the villa with table setup, cards, chips, and optional dealer or host.",
            bestFor: "Adults, groups, bachelor trips, birthdays, and poker players.",
            duration: "Usually 2 to 5 hours.",
            experience:
              "A poker table is set up at the villa with chips, cards, and a format chosen for the group, from casual friendly play to a more structured tournament.",
            whatToExpect:
              "A private, social, adults-only evening that keeps the group together at the villa.",
            whatToBring:
              "Comfortable evening clothing and preferred game format.",
            goodToKnow:
              "Confirm villa rules and local legal considerations before arranging.",
          }),
          option({
            title: "Private Casino Night",
            description:
              "A casino-style entertainment setup with games such as blackjack, roulette-style tables, poker, or other social formats.",
            bestFor: "Groups, birthdays, corporate-style trips, and celebration evenings.",
            duration: "Usually 2 to 4 hours.",
            experience:
              "Dealers or hosts create a casino-style atmosphere at the villa using entertainment chips, tables, and guest-friendly game formats.",
            whatToExpect:
              "A fun, produced evening with a strong social and event feel.",
            whatToBring:
              "Evening clothing and guest count details.",
            goodToKnow:
              "This should be positioned as entertainment unless a fully legal licensed gaming environment is being used.",
          }),
          option({
            title: "Poker Tournament in Bucerías",
            description:
              "A by-request outing for guests interested in local or regional poker events nearby.",
            bestFor: "Adults, serious poker players, and niche-interest guests.",
            duration: "Varies by tournament.",
            experience:
              "The concierge checks current tournament schedules and arranges transportation or reservations when a relevant event is available.",
            whatToExpect:
              "A more specific outing that only makes sense when the tournament schedule fits the guest’s dates.",
            whatToBring:
              "Valid ID, payment method, and tournament details.",
            goodToKnow:
              "This should never be promised without checking the current calendar.",
          }),
        ],
      }),

      createActivity({
        title: "Curated Nights Out",
        slug: "curated-nights-out",
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description:
          "Sayulita nightlife, live music, Zona Romántica bar crawls, VIP nightlife tables, rooftops, and cocktail-bar experiences by request.",
        overview:
          "This category is designed for guests who specifically want a curated night outside the villa.",
        bestFor:
          "Adults, younger groups, nightlife-focused guests, bachelor and bachelorette groups, and guests requesting Puerto Vallarta or Sayulita nightlife.",
        duration: "Usually 3 to 6 hours including transportation.",
        seasonality: "Available year-round, with quality varying by night and season.",
        tags: ["Nightlife", "Adults", "Groups", "By Request"],
        notes:
          "Transportation, safety, group profile, and return logistics matter. This should be curated carefully.",
        whatToExpect:
          "Expect a planned evening route with reservations, transportation, and venues selected based on the group’s style.",
        whatToBring:
          "Evening clothing, ID, payment card, and comfortable shoes.",
        experienceOptions: [
          option({
            title: "Sayulita Night Out",
            description:
              "A casual surf-town night with bars, live music, and a younger, more relaxed atmosphere.",
            bestFor: "Younger groups, casual adults, and guests wanting nightlife close to Punta Mita.",
            duration: "Usually 3 to 5 hours.",
            experience:
              "The evening is planned around a few selected bars, live music spots, or casual venues in Sayulita with transportation arranged.",
            whatToExpect:
              "A more relaxed, bohemian, and social night than Puerto Vallarta clubs.",
            whatToBring:
              "Casual evening clothing, comfortable shoes, ID, and payment card.",
            goodToKnow:
              "Sayulita can be crowded and informal. It is not the right fit for every luxury guest.",
          }),
          option({
            title: "Zona Romántica Bar Crawl",
            description:
              "A curated Puerto Vallarta nightlife outing focused on cocktail bars, energy, and walkable nightlife.",
            bestFor: "Adults, LGBTQ+ travelers, bachelor and bachelorette groups, and nightlife-focused guests.",
            duration: "Usually 5 to 7 hours including transfers.",
            experience:
              "The concierge plans a route through selected bars, lounges, or clubs with transportation and timing arranged.",
            whatToExpect:
              "A longer night out with more energy and variety than Punta Mita or Sayulita.",
            whatToBring:
              "Evening clothing, ID, payment card, and comfortable shoes.",
            goodToKnow:
              "This is farther from Punta Mita and should be offered only to groups actively requesting nightlife.",
          }),
          option({
            title: "VIP Nightclub Table",
            description:
              "A by-request club experience with reserved table, bottle service, and transportation.",
            bestFor: "Adults, nightlife groups, bachelor and bachelorette trips.",
            duration: "Usually late evening.",
            experience:
              "The concierge coordinates venue selection, table reservation, bottle service, driver, and return timing.",
            whatToExpect:
              "A high-energy nightlife experience that requires careful logistics and group fit.",
            whatToBring:
              "Dress-code-appropriate clothing, ID, and payment method.",
            goodToKnow:
              "Best for guests who want a high-energy club experience outside Punta Mita.",
          }),
        ],
      }),

      createActivity({
        title: "Signature Dinner Shows",
        slug: "signature-dinner-shows",
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description:
          "Produced evening experiences that combine boat transfer, dinner, entertainment, and a memorable night out.",
        overview:
          "This category is separate from regular nightlife because it is a complete produced excursion rather than a bar or club night.",
        bestFor:
          "Couples, families with older kids, groups, first-time visitors, and guests who want an organized evening experience.",
        duration: "Usually a full evening.",
        seasonality: "Available most of the year, subject to operator schedules.",
        tags: ["Nightlife", "Romantic", "Family-Friendly", "By Request"],
        notes:
          "This involves more logistics than a local dinner, so it should be recommended selectively.",
        whatToExpect:
          "Expect transportation, a boat-based transfer, dinner, show elements, and a longer evening outside Punta Mita.",
        whatToBring:
          "Comfortable evening resort wear, light layer, comfortable shoes, and camera.",
        experienceOptions: [
          option({
            title: "Rhythms of the Night",
            description:
              "A signature evening excursion with boat transfer, dinner, and a staged show in a dramatic coastal setting.",
            bestFor: "Couples, families with older kids, groups, and first-time visitors.",
            duration: "Usually a full evening.",
            experience:
              "Guests travel by boat to the venue, enjoy dinner, atmosphere, and a produced performance experience before returning later in the evening.",
            whatToExpect:
              "A memorable, theatrical night that feels more like an excursion than a normal dinner.",
            whatToBring:
              "Comfortable evening clothing, light layer, and comfortable shoes.",
            goodToKnow:
              "The logistics are heavier from Punta Mita, so recommend it selectively.",
          }),
          option({
            title: "Special Dinner Show Experience",
            description:
              "A more general produced evening format for guests who want entertainment, dining, and a planned night out.",
            bestFor: "Families, couples, groups, and guests who prefer organized experiences.",
            duration: "Usually 3 to 6 hours.",
            experience:
              "The concierge selects a show or entertainment dinner that fits the guest’s interests and coordinates transportation, timing, and reservations.",
            whatToExpect:
              "A structured night with less decision-making for guests.",
            whatToBring:
              "Evening resort wear, ID if needed, and comfortable shoes.",
            goodToKnow:
              "Quality varies, so only recommend vetted options.",
          }),
        ],
      }),
    ],
  },

  {
    title: "Nearby Destinations & Day Trips",
    slug: "nearby-destinations-day-trips",
    image: destinationsImage,
    heroImage: destinationsHero,
    description:
      "Curated nearby outings that are close enough or special enough to make sense for Punta Mita renters.",
    activities: [
      createActivity({
        title: "Sayulita & San Pancho Half-Day Experiences",
        slug: "sayulita-san-pancho-half-day-experiences",
        image: destinationsImage,
        heroImage: destinationsHero,
        description:
          "Curated half-day visits to Sayulita and San Pancho for surf, beach, boutiques, casual dining, and local atmosphere.",
        overview:
          "This parent activity combines the nearby surf towns into one practical half-day outing. It should be curated, not presented as an endless town guide.",
        bestFor:
          "Families, couples, younger guests, shoppers, surfers, and guests who want a casual local outing.",
        duration: "Usually 3 to 5 hours.",
        seasonality: "Available year-round.",
        tags: ["Culture", "Family-Friendly", "Shopping", "Food & Drink", "By Request"],
        notes:
          "Best for guests who want a change of scene without going all the way to Puerto Vallarta.",
        whatToExpect:
          "Expect a casual curated outing with time for walking, beach, boutiques, lunch, drinks, or surf-town atmosphere.",
        whatToBring:
          "Comfortable walking shoes, sunglasses, hat, sunscreen, and casual resort clothing.",
        experienceOptions: [
          option({
            title: "Sayulita Half-Day",
            description:
              "A curated visit to Sayulita for beach, surf-town energy, boutiques, lunch, and casual exploring.",
            bestFor: "Younger guests, families, shoppers, surfers, and first-time visitors.",
            duration: "Usually 3 to 5 hours.",
            experience:
              "Guests visit Sayulita with planned time for walking, shopping, beach, lunch, drinks, or surf atmosphere depending on the group.",
            whatToExpect:
              "A colorful, casual, lively town experience close enough to make sense from Punta Mita.",
            whatToBring:
              "Comfortable shoes, casual clothing, sunscreen, sunglasses, and payment card.",
            goodToKnow:
              "Sayulita can feel busy and informal. It is better for guests who want local energy, not quiet luxury.",
          }),
          option({
            title: "San Pancho Half-Day",
            description:
              "A quieter, more refined nearby town outing with beach, restaurants, galleries, and a slower rhythm.",
            bestFor: "Couples, families, relaxed guests, and people who prefer less crowded towns.",
            duration: "Usually 3 to 5 hours.",
            experience:
              "Guests visit San Pancho for beach time, lunch, boutique browsing, coffee, galleries, or a sunset moment depending on timing.",
            whatToExpect:
              "A calmer and more polished town experience than Sayulita.",
            whatToBring:
              "Comfortable shoes, resort casual clothing, sunglasses, and camera.",
            goodToKnow:
              "San Pancho is often a better fit for luxury guests than Sayulita.",
          }),
          option({
            title: "Surf Town Shopping & Lunch",
            description:
              "A curated shopping and dining outing through selected boutiques, galleries, and restaurants.",
            bestFor: "Couples, families, shoppers, and guests wanting a light off-villa outing.",
            duration: "Usually 3 to 4 hours.",
            experience:
              "The concierge suggests a route with selected boutiques, artisan shops, galleries, cafés, and lunch or drinks.",
            whatToExpect:
              "A relaxed, low-pressure outing with a clear plan and no need to over-research.",
            whatToBring:
              "Comfortable walking shoes, casual clothing, sunglasses, and payment card.",
            goodToKnow:
              "This should be curated carefully so it feels elevated and not touristy.",
          }),
        ],
      }),

      createActivity({
        title: "La Cruz & Bucerías Specialty Outings",
        slug: "la-cruz-bucerias-specialty-outings",
        image: destinationsImage,
        heroImage: destinationsHero,
        description:
          "Nearby specialty outings for marina departures, selected dinners, casino, poker, and specific guest requests.",
        overview:
          "La Cruz and Bucerías should not be major headline destinations, but they are useful when there is a specific reason to go.",
        bestFor:
          "Guests with yacht departures, dinner plans, casino interest, poker interest, or a specific nearby outing request.",
        duration: "Usually 2 to 5 hours depending on purpose.",
        seasonality: "Available year-round. Poker and event schedules vary.",
        tags: ["Food & Drink", "Nightlife", "By Request", "Groups"],
        notes:
          "This is a practical specialty category, not a broad tourism recommendation.",
        whatToExpect:
          "Expect a targeted outing built around one clear reason: marina, dinner, casino, poker, or logistics.",
        whatToBring:
          "Depends on the outing. Bring ID for casino or poker-related activities.",
        experienceOptions: [
          option({
            title: "La Cruz Marina Departure or Dinner",
            description:
              "A practical nearby outing centered on the marina, yacht departure, or a selected dinner reservation.",
            bestFor: "Yacht guests, dinner guests, and groups with marina logistics.",
            duration: "Usually 2 to 4 hours unless part of a boat day.",
            experience:
              "Guests go to La Cruz for a marina departure, waterfront dinner, or selected restaurant experience when it makes logistical sense.",
            whatToExpect:
              "A targeted nearby outing rather than a full tourist day.",
            whatToBring:
              "Depends on the plan. For marina departures, bring boat-day essentials.",
            goodToKnow:
              "La Cruz is most useful when connected to a specific reason.",
          }),
          option({
            title: "Bucerías Casino or Poker Outing",
            description:
              "A by-request outing for adults interested in casino or poker experiences nearby.",
            bestFor: "Adults, groups, poker players, and niche nightlife guests.",
            duration: "Usually 3 to 5 hours.",
            experience:
              "The concierge checks the schedule or venue details, then coordinates transportation and timing for a casino or poker-focused outing.",
            whatToExpect:
              "A specific adults-only evening that only makes sense when guests are genuinely interested.",
            whatToBring:
              "Valid ID, payment method, and evening clothing.",
            goodToKnow:
              "Schedules and quality should be checked before recommending.",
          }),
          option({
            title: "Selected Bucerías or La Cruz Dinner",
            description:
              "A specific dinner outing only when the restaurant or occasion justifies leaving Punta Mita.",
            bestFor: "Food lovers, guests with a specific request, and groups wanting a nearby change of scene.",
            duration: "Usually 2 to 3 hours.",
            experience:
              "The concierge recommends a selected restaurant based on cuisine, atmosphere, availability, and travel time.",
            whatToExpect:
              "A nearby dinner experience with clear purpose, not a generic day trip.",
            whatToBring:
              "Resort casual or evening clothing depending on the venue.",
            goodToKnow:
              "Do not promote this broadly; use it when there is a strong match.",
          }),
        ],
      }),

      createActivity({
        title: "Las Caletas Day or Evening Excursion",
        slug: "las-caletas-day-evening-excursion",
        image: destinationsImage,
        heroImage: destinationsHero,
        description:
          "A special exception excursion for guests interested in Las Caletas, beach adventure, or the evening dinner show format.",
        overview:
          "Las Caletas is farther than most Punta Mita activities, but it remains one of the few farther excursions that can justify the logistics for the right guest.",
        bestFor:
          "Families, couples, first-time visitors, groups, and guests who want a produced excursion.",
        duration: "Usually half-day, full-day, or full evening depending on format.",
        seasonality: "Available most of the year, subject to operator schedules.",
        tags: ["Adventure", "Family-Friendly", "Romantic", "By Request"],
        notes:
          "Recommend selectively because it requires more travel and logistics from Punta Mita.",
        whatToExpect:
          "Expect a structured excursion with transportation, boat transfer, beach or evening programming, and a longer time commitment.",
        whatToBring:
          "Swimwear for day trips, comfortable resort wear for evening trips, sandals, sunscreen, and a light layer.",
        experienceOptions: [
          option({
            title: "Las Caletas Beach Day",
            description:
              "A produced beach excursion with boat transfer, beach time, nature, food, and activities.",
            bestFor: "Families, first-time visitors, groups, and soft-adventure guests.",
            duration: "Usually half-day to full-day.",
            experience:
              "Guests travel to Las Caletas for a structured beach experience with activities, swimming, food, and a scenic coastal setting.",
            whatToExpect:
              "A more organized and operator-led day than a private yacht experience.",
            whatToBring:
              "Swimwear, towel, sunscreen, sandals, hat, and dry clothes.",
            goodToKnow:
              "This requires more logistics from Punta Mita and should be recommended selectively.",
          }),
          option({
            title: "Las Caletas Evening Experience",
            description:
              "An evening version centered on atmosphere, dinner, performance, and a memorable night outside Punta Mita.",
            bestFor: "Couples, groups, families with older kids, and first-time visitors.",
            duration: "Usually a full evening.",
            experience:
              "Guests travel by boat for an evening with dinner, lighting, show elements, and a more theatrical coastal setting.",
            whatToExpect:
              "A full evening excursion with more structure and travel time than a local dinner.",
            whatToBring:
              "Comfortable evening resort wear, light layer, and comfortable shoes.",
            goodToKnow:
              "This overlaps with Signature Dinner Shows and can be cross-linked later.",
          }),
        ],
      }),
    ],
  },

  {
    title: "Seasonal & Special Events",
    slug: "seasonal-special-events",
    image: seasonalImage,
    heroImage: seasonalHero,
    description:
      "Punta Mita seasonal events, holidays, golf events, polo season, fishing tournaments, and private celebrations.",
    activities: [
      createActivity({
        title: "Punta Mita Seasonal Events & Holidays",
        slug: "punta-mita-seasonal-events-holidays",
        image: seasonalImage,
        heroImage: seasonalHero,
        description:
          "Gourmet & Golf, club events, holidays, New Year’s Eve, polo season, fishing tournaments, surf season, and seasonal celebrations.",
        overview:
          "This category keeps seasonal events focused on what matters to Punta Mita luxury guests instead of listing every regional event.",
        bestFor:
          "Families, groups, golfers, food lovers, holiday travelers, and guests visiting during event weeks.",
        duration: "Varies by event.",
        seasonality: "Seasonal and date-dependent.",
        tags: ["Seasonal", "VIP", "Groups", "Family-Friendly", "Food & Drink", "Sports"],
        notes:
          "Event calendars should be checked before recommending specific dates or promising availability.",
        whatToExpect:
          "Expect date-specific experiences that may require advance reservations, guest access, tickets, or concierge coordination.",
        whatToBring:
          "Depends on the event. Confirm dress code, access rules, and timing in advance.",
        experienceOptions: [
          option({
            title: "Punta Mita Gourmet & Golf",
            description:
              "A seasonal luxury event combining golf, food, wine, spirits, and destination atmosphere.",
            bestFor: "Golfers, food lovers, couples, groups, and VIP travelers.",
            duration: "Multi-day event or selected event attendance.",
            experience:
              "Guests attend selected culinary, golf, or social events connected to the Punta Mita Gourmet & Golf calendar.",
            whatToExpect:
              "A polished seasonal experience that connects directly to the Punta Mita lifestyle.",
            whatToBring:
              "Event-appropriate resort wear, golf attire if needed, and reservation details.",
            goodToKnow:
              "Dates, access, and programming change each year.",
          }),
          option({
            title: "Holiday Villa Experiences",
            description:
              "Private Thanksgiving, Christmas, New Year’s Eve, or holiday events arranged at the villa.",
            bestFor: "Families, groups, holiday travelers, and celebration trips.",
            duration: "Meal, evening, or full-day programming.",
            experience:
              "The concierge coordinates holiday dinner, décor, music, staff, chef, fireworks alternatives, beach setup, or family programming depending on the holiday.",
            whatToExpect:
              "A private holiday celebration without the stress of planning locally.",
            whatToBring:
              "Share traditions, guest count, dietary needs, and preferred holiday style.",
            goodToKnow:
              "Holidays require advance planning because vendors and chefs book early.",
          }),
          option({
            title: "New Year’s Eve Yacht, Villa or Beach-Club Event",
            description:
              "A high-demand seasonal celebration arranged as a private villa event, yacht celebration, or curated beach-club night.",
            bestFor: "Groups, families, couples, and VIP travelers.",
            duration: "Usually full evening.",
            experience:
              "The night is designed around dinner, music, countdown, champagne, transportation, and the desired energy level.",
            whatToExpect:
              "A premium celebration with high logistical complexity and strong need for advance planning.",
            whatToBring:
              "Evening resort wear and any celebration preferences.",
            goodToKnow:
              "New Year’s Eve should be planned as early as possible.",
          }),
          option({
            title: "Seasonal Sports & Local Events",
            description:
              "A flexible seasonal category for fishing tournaments, surf season, polo season, poker events, and Punta Mita club events.",
            bestFor: "Guests visiting during specific event windows.",
            duration: "Varies.",
            experience:
              "The concierge checks event calendars and matches relevant events to the guest’s dates and interests.",
            whatToExpect:
              "A date-specific recommendation rather than a guaranteed activity.",
            whatToBring:
              "Depends on the event.",
            goodToKnow:
              "This should always be confirmed against current schedules.",
          }),
        ],
      }),
    ],
  },

  {
    title: "High-End / VIP Experiences",
    slug: "high-end-vip-experiences",
    image: vipImage,
    heroImage: vipHero,
    description:
      "Private aviation, scenic flights, celebrations, proposals, VIP hosting, security, drivers, and full-stay concierge planning.",
    activities: [
      createActivity({
        title: "Private Aviation & Scenic Flights",
        slug: "private-aviation-scenic-flights",
        image: vipImage,
        heroImage: vipHero,
        description:
          "Private aviation transfers, helicopter tours, scenic flights, and VIP arrival or departure logistics.",
        overview:
          "This is a VIP-only category for guests who want premium arrival, departure, transfer, or aerial experiences.",
        bestFor:
          "VIP travelers, high-end groups, special occasions, time-sensitive guests, and guests looking for a rare experience.",
        duration: "Varies by transfer or flight format.",
        seasonality: "Available by request, subject to weather, aircraft, permits, and provider availability.",
        tags: ["VIP", "By Request", "Romantic", "Adventure"],
        notes:
          "This should always be confirmed directly with trusted providers before presenting details to guests.",
        whatToExpect:
          "Expect a highly customized experience with aircraft availability, weather checks, scheduling, and premium logistics.",
        whatToBring:
          "Valid identification, comfortable clothing, and luggage details if transfer-related.",
        experienceOptions: [
          option({
            title: "Private Aviation Transfer",
            description:
              "A premium arrival or departure solution for guests who want speed, privacy, and high-touch logistics.",
            bestFor: "VIP travelers, time-sensitive guests, families, and high-end groups.",
            duration: "Varies by route.",
            experience:
              "The concierge coordinates aircraft, transfer timing, luggage details, ground transportation, and arrival or departure logistics.",
            whatToExpect:
              "A smoother, more private travel experience with fewer friction points.",
            whatToBring:
              "Valid identification, luggage details, and travel documents.",
            goodToKnow:
              "Aircraft availability, weather, and permits must be confirmed.",
          }),
          option({
            title: "Helicopter or Scenic Flight",
            description:
              "A rare aerial experience over the coastline, bay, or nearby landmarks.",
            bestFor: "VIP guests, photographers, proposals, and special occasions.",
            duration: "Usually 30 to 90 minutes depending on route.",
            experience:
              "Guests take a scenic flight arranged around views, timing, route, and weather conditions.",
            whatToExpect:
              "A dramatic perspective of the destination and a memorable luxury moment.",
            whatToBring:
              "Valid ID, comfortable clothing, sunglasses, and camera.",
            goodToKnow:
              "Weather and aircraft availability are critical. This is always by request.",
          }),
        ],
      }),

      createActivity({
        title: "Luxury Celebrations & Proposals",
        slug: "luxury-celebrations-proposals",
        image: vipImage,
        heroImage: vipHero,
        description:
          "Proposal planning, photographers, videographers, yacht proposals, beach setups, birthdays, anniversaries, and celebration production.",
        overview:
          "This category is very important for luxury villa rentals because many guests travel to Punta Mita for milestone moments.",
        bestFor:
          "Couples, families, birthdays, anniversaries, proposals, wedding-weekend guests, and celebration groups.",
        duration: "Varies by event.",
        seasonality: "Available year-round, with holidays requiring extra advance planning.",
        tags: ["Romantic", "VIP", "Groups", "Family-Friendly"],
        notes:
          "This should be handled carefully with mood boards, timing, privacy, guest preferences, and backup plans.",
        whatToExpect:
          "Expect a custom-produced experience with planning, setup, décor, photography, dining, music, and logistics depending on the occasion.",
        whatToBring:
          "Share occasion details, inspiration images, guest count, timing, and any surprise requirements.",
        experienceOptions: [
          option({
            title: "Proposal Planning",
            description:
              "A fully coordinated proposal experience designed around privacy, emotion, timing, and the couple’s style.",
            bestFor: "Couples and surprise proposals.",
            duration: "Usually a planned moment plus optional dinner or celebration.",
            experience:
              "The concierge coordinates location, timing, flowers, candles, photographer, music, champagne, dinner, and backup plans.",
            whatToExpect:
              "A discreet and highly detailed production designed to feel effortless for the guest.",
            whatToBring:
              "The ring, inspiration images if available, and preferred style details.",
            goodToKnow:
              "Weather, privacy, and backup planning matter.",
          }),
          option({
            title: "Birthday or Anniversary Production",
            description:
              "A custom celebration at the villa, beach, yacht, restaurant, or beach club.",
            bestFor: "Families, couples, groups, birthdays, and anniversaries.",
            duration: "Usually 2 to 6 hours.",
            experience:
              "The concierge coordinates décor, chef, cake, music, entertainment, photographer, flowers, table styling, and event flow.",
            whatToExpect:
              "A polished celebration built around the person, occasion, and group dynamic.",
            whatToBring:
              "Guest count, mood-board references, dietary needs, and preferred timing.",
            goodToKnow:
              "More elaborate events require more lead time and property approval.",
          }),
          option({
            title: "Private Photographer or Content Creator",
            description:
              "A professional photo, video, or social content session during the stay.",
            bestFor: "Families, couples, proposals, influencers, celebrations, and groups.",
            duration: "Usually 1 to 3 hours.",
            experience:
              "A photographer or content creator captures villa moments, beach portraits, yacht days, proposals, family sessions, or social content.",
            whatToExpect:
              "A polished visual record of the trip with direction and location planning.",
            whatToBring:
              "Outfits, inspiration references, and preferred shot list.",
            goodToKnow:
              "Best scheduled around sunrise, sunset, yacht days, or key celebration moments.",
          }),
          option({
            title: "Wedding-Weekend Activity Planning",
            description:
              "A curated program of activities for guests traveling for a wedding or multi-day celebration.",
            bestFor: "Wedding groups, families, and destination celebration hosts.",
            duration: "Multi-day planning.",
            experience:
              "The concierge designs yacht days, welcome dinners, recovery brunches, beach activities, wellness sessions, and guest-friendly outings around the wedding schedule.",
            whatToExpect:
              "A smoother and more memorable guest experience across the full wedding weekend.",
            whatToBring:
              "Guest count, schedule, priorities, budget, and any must-have activities.",
            goodToKnow:
              "This should be planned early to secure providers and avoid schedule conflicts.",
          }),
        ],
      }),

      createActivity({
        title: "Full-Stay Concierge & VIP Hosting",
        slug: "full-stay-concierge-vip-hosting",
        image: vipImage,
        heroImage: vipHero,
        description:
          "Full itinerary design, private driver, bilingual host, security, reservations, activity planning, and VIP coordination.",
        overview:
          "This is not a traditional activity, but it is one of the most valuable services for luxury travelers. It turns the full stay into a curated experience.",
        bestFor:
          "VIP travelers, families, groups, first-time visitors, destination celebrations, and guests who want everything handled.",
        duration: "Full stay.",
        seasonality: "Available year-round.",
        tags: ["VIP", "Groups", "Family-Friendly", "By Request"],
        notes:
          "Avoid promising access that cannot be guaranteed. Phrase exclusive access carefully.",
        whatToExpect:
          "Expect itinerary planning, reservations, vendor coordination, transportation, guest support, and personalized recommendations before and during the stay.",
        whatToBring:
          "Share travel dates, group profile, villa location, priorities, dietary needs, celebration details, and preferred pace of travel.",
        experienceOptions: [
          option({
            title: "Full Itinerary Design",
            description:
              "A complete travel plan built around the guest’s villa, dates, group, pace, and interests.",
            bestFor: "Families, VIP travelers, first-time visitors, and groups.",
            duration: "Full stay.",
            experience:
              "The concierge designs a balanced itinerary with villa time, beach, dining, activities, wellness, transport, and special moments.",
            whatToExpect:
              "A stay that feels curated without being over-scheduled.",
            whatToBring:
              "Travel dates, group profile, preferred pace, interests, and must-do activities.",
            goodToKnow:
              "The best itineraries leave space for rest.",
          }),
          option({
            title: "Private Driver & Bilingual Host",
            description:
              "High-touch local support for transportation, reservations, activities, and guest comfort.",
            bestFor: "VIP guests, families, groups, and travelers who want support during the stay.",
            duration: "Hourly, daily, or full stay.",
            experience:
              "A driver or bilingual host helps guests move smoothly between activities, dinners, errands, airport transfers, and special experiences.",
            whatToExpect:
              "A more seamless trip with local knowledge and fewer logistics for the guest to manage.",
            whatToBring:
              "Schedule details, guest count, luggage details if relevant, and preferred communication style.",
            goodToKnow:
              "This is especially valuable for groups with multiple reservations and moving parts.",
          }),
          option({
            title: "Private Security",
            description:
              "Discreet security support for high-profile guests, events, transfers, or special circumstances.",
            bestFor: "High-profile guests, VIP groups, events, and guests requesting additional privacy.",
            duration: "Hourly, daily, event-based, or full stay.",
            experience:
              "Security is arranged based on guest profile, property, schedule, privacy needs, and movement during the stay.",
            whatToExpect:
              "Professional, discreet support designed to protect privacy and comfort without disrupting the vacation atmosphere.",
            whatToBring:
              "Guest profile details, schedule, access needs, and privacy expectations.",
            goodToKnow:
              "This should be handled with discretion and trusted providers only.",
          }),
          option({
            title: "VIP Access & Reservation Coordination",
            description:
              "A concierge-led service for restaurants, activities, beach clubs, nightlife, and special requests.",
            bestFor: "VIP travelers, groups, celebrations, and guests who want a frictionless stay.",
            duration: "Before and during the stay.",
            experience:
              "The concierge coordinates reservations, provider availability, activity timing, transportation, and special requests.",
            whatToExpect:
              "A smoother vacation with fewer decisions and better timing.",
            whatToBring:
              "Preferences, dates, guest count, dietary needs, and any non-negotiable experiences.",
            goodToKnow:
              "Use careful language: some access depends on availability, villa privileges, venue rules, or provider approval.",
          }),
        ],
      }),
    ],
  },
];

export function getDiscoverCategoryBySlug(slug: string) {
  return discoverCategories.find((category) => category.slug === slug);
}

export function getActivityBySlug(categorySlug: string, activitySlug: string) {
  const category = getDiscoverCategoryBySlug(categorySlug);

  return category?.activities.find((activity) => activity.slug === activitySlug);
}
