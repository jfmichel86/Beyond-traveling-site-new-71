export type MenuDish = {
  title: string;
  description: string;
  images: string[];
};

export type MenuSubcategory = {
  title: string;
  slug: string;
  description?: string;
  image: string;
  dishes: MenuDish[];
};

export type MenuCategory = {
  title: string;
  slug: string;
  image: string;
  description: string;
  intro?: string;
  subcategories: MenuSubcategory[];
};

const categoryImage = (slug: string) =>
  `/villa-dining-menu/categories/${slug}.jpg`;

const subcategoryImage = (slug: string) =>
  `/villa-dining-menu/subcategories/${slug}.jpg`;

const dishImages = (slug: string) => [
  `/villa-dining-menu/dishes/${slug}-1.jpg`,
  `/villa-dining-menu/dishes/${slug}-2.jpg`,
];

export const importantServiceDetails = [
  "Breakfast preparation is included with your rental.",
  "The cost of groceries, food, beverages, and ingredients is not included.",
  "All groceries required to prepare your selected meals will be charged separately at the end of your stay.",
  "A 15% shopping fee applies to the total grocery receipts.",
  "Lunch and dinner preparation may be arranged upon request for an additional service cost.",
  "Menus can be customized with advance notice.",
  "Leftover groceries remain at the villa and are not deducted from the final grocery bill.",
  "Please let us know in advance if you have allergies, dietary restrictions, children’s preferences, or special requests.",
];

export const villaDiningCategories: MenuCategory[] = [
  {
    title: "Breakfast",
    slug: "breakfast",
    image: categoryImage("breakfast"),
    description: "Preparation Included with Your Rental",
    intro:
      "Each morning, our housekeeper can prepare a fresh villa breakfast with seasonal fruit, juice, coffee, yogurt, and granola, plus a daily selection of savory and sweet dishes. Please note that breakfast preparation is included, but the cost of all food, groceries, and ingredients used for breakfast is charged separately.",
    subcategories: [
      {
        title: "Daily Breakfast Includes",
        slug: "daily-breakfast-includes",
        image: subcategoryImage("daily-breakfast-includes"),
        description:
          "Fresh morning essentials prepared at the villa using groceries purchased for your stay.",
        dishes: [
          {
            title: "Fresh Seasonal Fruit Platter",
            description: "A fresh selection of seasonal fruit prepared each morning.",
            images: dishImages("fresh-seasonal-fruit-platter"),
          },
          {
            title: "Fresh Orange Juice or Green Juice",
            description: "Fresh juice served with breakfast, based on availability and preference.",
            images: dishImages("fresh-orange-juice-green-juice"),
          },
          {
            title: "Coffee and Creamer",
            description: "Morning coffee service with creamer.",
            images: dishImages("coffee-and-creamer"),
          },
          {
            title: "Granola and Yogurt",
            description: "A light breakfast option served with yogurt and granola.",
            images: dishImages("granola-and-yogurt"),
          },
        ],
      },
      {
        title: "Savory Breakfast Options",
        slug: "savory-breakfast-options",
        image: subcategoryImage("savory-breakfast-options"),
        description:
          "Mexican classics, eggs, toasts, and warm breakfast dishes prepared fresh in the villa.",
        dishes: [
          {
            title: "Red or Green Chilaquiles with Eggs or Chicken",
            description:
              "Crispy tortilla chips with salsa, crema, cheese, and eggs or chicken.",
            images: dishImages("red-green-chilaquiles-eggs-chicken"),
          },
          {
            title: "Huevos Rancheros",
            description:
              "Fried eggs served with ranchero sauce, beans, and tortillas.",
            images: dishImages("huevos-rancheros"),
          },
          {
            title: "Huevos a la Mexicana",
            description: "Scrambled eggs with tomato, onion, and chile.",
            images: dishImages("huevos-a-la-mexicana"),
          },
          {
            title: "Eggs Any Style",
            description: "Scrambled, fried, omelette, or egg whites.",
            images: dishImages("eggs-any-style"),
          },
          {
            title: "Breakfast Burrito",
            description: "Flour tortilla filled with eggs and chorizo.",
            images: dishImages("breakfast-burrito"),
          },
          {
            title: "Molletes",
            description:
              "Toasted bread with refried beans, melted cheese, and pico de gallo.",
            images: dishImages("molletes"),
          },
          {
            title: "Enfrijoladas",
            description:
              "Tortillas dipped in creamy bean sauce, filled with egg, cheese, or chicken.",
            images: dishImages("enfrijoladas"),
          },
          {
            title: "Quesadillas",
            description:
              "Fresh tortillas with Oaxaca cheese, mushrooms, vegetables, or chicken.",
            images: dishImages("quesadillas"),
          },
          {
            title: "Avocado Toast",
            description: "Toasted bread with avocado, olive oil, and fresh toppings.",
            images: dishImages("avocado-toast"),
          },
          {
            title: "Smoked Salmon Toast or Bagel",
            description: "Served with cream cheese, capers, and herbs.",
            images: dishImages("smoked-salmon-toast-bagel"),
          },
        ],
      },
      {
        title: "Sweet Breakfast Options",
        slug: "sweet-breakfast-options",
        image: subcategoryImage("sweet-breakfast-options"),
        description:
          "Sweet morning favorites served with fruit, maple syrup, berries, yogurt, or toppings.",
        dishes: [
          {
            title: "Pancakes",
            description: "Served with maple syrup and fresh fruit.",
            images: dishImages("pancakes"),
          },
          {
            title: "Waffles",
            description: "Served with maple syrup, Nutella, or berries.",
            images: dishImages("waffles"),
          },
          {
            title: "French Toast",
            description: "Served with maple syrup and seasonal fruit.",
            images: dishImages("french-toast"),
          },
          {
            title: "Oatmeal Bowl",
            description: "With seeds, berries, banana, and honey.",
            images: dishImages("oatmeal-bowl"),
          },
          {
            title: "Tropical Yogurt Parfait",
            description: "Greek yogurt, granola, honey, and seasonal fruit.",
            images: dishImages("tropical-yogurt-parfait"),
          },
          {
            title: "Açaí or Smoothie Bowl",
            description:
              "Blended fruit bowl with granola, coconut, banana, and berries.",
            images: dishImages("acai-smoothie-bowl"),
          },
          {
            title: "Sweet Bagel",
            description: "With cream cheese and jam.",
            images: dishImages("sweet-bagel"),
          },
        ],
      },
    ],
  },
  {
  title: "Lunch",
  slug: "lunch",
  image: categoryImage("lunch"),
  description: "Fresh, Casual & Perfect for Villa Days",
    intro:
      "Lunch may be arranged upon request for an additional preparation/service cost. The cost of groceries and ingredients is charged separately.",
    subcategories: [
      {
        title: "Starters & Sides",
        slug: "starters-sides",
        image: subcategoryImage("starters-sides"),
        description:
          "Easy villa lunch additions for sharing by the pool or pairing with main dishes.",
        dishes: [
          {
            title: "Guacamole and Pico de Gallo",
            description: "Fresh guacamole served with pico de gallo.",
            images: dishImages("guacamole-pico-de-gallo"),
          },
          {
            title: "Cheese and Arrachera Nachos",
            description: "Nachos with cheese and arrachera.",
            images: dishImages("cheese-arrachera-nachos"),
          },
          {
            title: "Grilled Vegetables",
            description: "Seasonal vegetables prepared on the grill.",
            images: dishImages("grilled-vegetables"),
          },
          {
            title: "Mexican Rice",
            description: "Classic Mexican rice served as a side.",
            images: dishImages("mexican-rice"),
          },
          {
            title: "Refried or Whole Beans",
            description: "Beans prepared refried or whole.",
            images: dishImages("refried-whole-beans"),
          },
          {
            title: "French Fries",
            description: "Crispy fries for a casual villa lunch.",
            images: dishImages("french-fries"),
          },
          {
            title: "Seasonal Vegetable Crudités with House Dip",
            description: "Fresh vegetables served with house dip.",
            images: dishImages("seasonal-vegetable-crudites-house-dip"),
          },
        ],
      },
      {
        title: "Salads",
        slug: "salads",
        image: subcategoryImage("salads"),
        description:
          "Fresh, simple salads for lighter lunches or as a side to seafood and tacos.",
        dishes: [
          {
            title: "Caesar Salad",
            description: "Classic Caesar with romaine, parmesan, and dressing.",
            images: dishImages("caesar-salad"),
          },
          {
            title: "Caprese Salad",
            description: "Tomato, mozzarella, basil, and olive oil.",
            images: dishImages("caprese-salad"),
          },
          {
            title: "Mixed Green Salad",
            description: "Fresh greens with seasonal vegetables.",
            images: dishImages("mixed-green-salad"),
          },
          {
            title: "Citrus Salad",
            description:
              "Fresh greens with citrus, avocado, and light vinaigrette.",
            images: dishImages("citrus-salad"),
          },
          {
            title: "Greek Salad with Grilled Shrimp",
            description:
              "Cucumber, tomato, olives, cheese, and grilled shrimp.",
            images: dishImages("greek-salad-grilled-shrimp"),
          },
        ],
      },
      {
        title: "Fresh Coastal Options",
        slug: "fresh-coastal-options",
        image: subcategoryImage("fresh-coastal-options"),
        description:
          "Fresh ceviches, aguachiles, tostadas, and coastal dishes for warm villa days.",
        dishes: [
          {
            title: "Vallarta-Style Fish Ceviche",
            description: "Fresh fish marinated in lime juice with vegetables.",
            images: dishImages("vallarta-style-fish-ceviche"),
          },
          {
            title: "Shrimp Ceviche",
            description:
              "Shrimp with lime, tomato, onion, cilantro, and cucumber.",
            images: dishImages("shrimp-ceviche"),
          },
          {
            title: "Green or Black Aguachile",
            description: "Shrimp marinated in spicy lime sauce.",
            images: dishImages("green-black-aguachile"),
          },
          {
            title: "Tuna Sashimi",
            description: "Fresh tuna with ponzu-style sauce.",
            images: dishImages("tuna-sashimi"),
          },
          {
            title: "Tuna Tostadas",
            description:
              "Crispy tostadas with fresh tuna, avocado, cucumber, and spicy mayo.",
            images: dishImages("tuna-tostadas"),
          },
          {
            title: "Fish Tostadas",
            description:
              "Fresh fish ceviche over crispy tostadas with avocado and salsa.",
            images: dishImages("fish-tostadas"),
          },
        ],
      },
      {
        title: "Lunch Mains",
        slug: "lunch-mains",
        image: subcategoryImage("lunch-mains"),
        description:
          "Tacos, tostadas, bowls, fajitas, sandwiches, and familiar villa lunch favorites.",
        dishes: [
          {
            title: "Baja Fish or Shrimp Tacos",
            description:
              "Breaded fish or shrimp in homemade corn tortillas with cabbage, salsa, and chipotle dressing.",
            images: dishImages("baja-fish-shrimp-tacos"),
          },
          {
            title: "Grilled Fish Tacos",
            description:
              "A lighter option with avocado, cabbage, and house salsa.",
            images: dishImages("grilled-fish-tacos"),
          },
          {
            title: "Shrimp Gobernador Tacos",
            description: "Shrimp with melted cheese, peppers, and onions.",
            images: dishImages("shrimp-gobernador-tacos"),
          },
          {
            title: "Mexican Tacos",
            description:
              "Arrachera, pastor, or chicken served in homemade corn tortillas.",
            images: dishImages("mexican-tacos"),
          },
          {
            title: "Chicken Tinga Tostadas",
            description:
              "Crispy tostadas with shredded chicken in tomato-chipotle sauce, lettuce, cream, and cheese.",
            images: dishImages("chicken-tinga-tostadas"),
          },
          {
            title: "Fajitas",
            description:
              "Beef, chicken, shrimp, or mixed fajitas with homemade tortillas.",
            images: dishImages("fajitas"),
          },
          {
            title: "Mexican Bowl",
            description:
              "Rice, beans, grilled chicken or shrimp, avocado, pico de gallo, corn, and salsa.",
            images: dishImages("mexican-bowl"),
          },
          {
            title: "Club Sandwich or Turkey Panini",
            description: "A simple, familiar option for casual lunches.",
            images: dishImages("club-sandwich-turkey-panini"),
          },
        ],
      },
    ],
  },
  {
    title: "Private Dinner at Home",
    slug: "private-dinner-at-home",
    image: categoryImage("private-dinner-at-home"),
    description: "Relaxed Villa Dining After a Day in Punta Mita",
    intro:
      "Dinner may be arranged upon request for an additional preparation/service cost. The cost of groceries and ingredients is charged separately.",
    subcategories: [
      {
        title: "Mexican Favorites",
        slug: "mexican-favorites",
        image: subcategoryImage("mexican-favorites"),
        description:
          "Comforting Mexican dishes prepared at home for a relaxed villa dinner.",
        dishes: [
          {
            title: "Chicken Mole Enchiladas",
            description:
              "Corn tortillas filled with chicken and topped with mole sauce, sesame, crema, and queso fresco.",
            images: dishImages("chicken-mole-enchiladas"),
          },
          {
            title: "Mexican Antojitos",
            description:
              "Sopes, enchiladas, tostadas, huaraches, or flautas with chicken tinga, pork, or beef.",
            images: dishImages("mexican-antojitos"),
          },
          {
            title: "Cochinita Pibil Tacos",
            description:
              "Slow-cooked Yucatán-style pork with pickled onion and habanero salsa.",
            images: dishImages("cochinita-pibil-tacos"),
          },
          {
            title: "Stuffed Poblano Peppers",
            description:
              "Poblano peppers filled with cheese, beef, chicken, or vegetables.",
            images: dishImages("stuffed-poblano-peppers"),
          },
          {
            title: "Arrachera Dinner Plate",
            description:
              "Grilled arrachera with guacamole, beans, grilled onions, tortillas, and salsa.",
            images: dishImages("arrachera-dinner-plate"),
          },
          {
            title: "Chicken in Creamy Poblano Sauce",
            description: "Served with rice and vegetables.",
            images: dishImages("chicken-creamy-poblano-sauce"),
          },
        ],
      },
      {
        title: "Seafood & Grill",
        slug: "seafood-grill",
        image: subcategoryImage("seafood-grill"),
        description:
          "Fresh fish, shrimp, zarandeado-style seafood, and grilled dishes.",
        dishes: [
          {
            title: "Catch of the Day with Garlic Butter",
            description:
              "Fresh fish served with rice, grilled vegetables, and house salsa.",
            images: dishImages("catch-of-the-day-garlic-butter"),
          },
          {
            title: "Pescado a la Veracruzana",
            description: "Fish with tomato, olives, capers, peppers, and herbs.",
            images: dishImages("pescado-a-la-veracruzana"),
          },
          {
            title: "Fish to Taste",
            description: "Prepared garlic-style, diabla-style, or breaded.",
            images: dishImages("fish-to-taste"),
          },
          {
            title: "Shrimp to Taste",
            description:
              "Prepared garlic-style, coconut, diabla-style, mummy-style or breaded.",
            images: dishImages("shrimp-to-taste"),
          },
          {
            title: "Zarandeado-Style Seafood",
            description:
              "Fish, shrimp, octopus, or mixed seafood prepared zarandeado-style.",
            images: dishImages("zarandeado-style-seafood"),
          },
          {
            title: "Garlic Fish Fillet or Shrimp",
            description:
              "Served with white rice, sauces, and garlic bread.",
            images: dishImages("garlic-fish-fillet-shrimp"),
          },
          {
            title: "Grilled Platter",
            description:
              "Grilled chicken, arrachera, and chorizo with homemade corn tortillas.",
            images: dishImages("grilled-platter"),
          },
        ],
      },
      {
        title: "Pasta & Comfort Dishes",
        slug: "pasta-comfort-dishes",
        image: subcategoryImage("pasta-comfort-dishes"),
        description:
          "Casual dinner options including pasta, seafood pasta, fajitas, and burgers.",
        dishes: [
          {
            title: "Pasta",
            description:
              "Marinara, Alfredo, bolognese, mushroom, or shrimp.",
            images: dishImages("pasta"),
          },
          {
            title: "Seafood Pasta",
            description:
              "Pasta with shrimp, fish, or mixed seafood in garlic, tomato, or creamy sauce.",
            images: dishImages("seafood-pasta"),
          },
          {
            title: "Fajitas",
            description:
              "Beef, chicken, shrimp, or mixed fajitas with homemade tortillas.",
            images: dishImages("dinner-fajitas"),
          },
          {
            title: "Burgers",
            description: "Available upon request for casual dinners.",
            images: dishImages("burgers"),
          },
        ],
      },
    ],
  },
 {
  title: "Children’s Favorites",
  slug: "childrens-favorites",
  image: categoryImage("childrens-favorites"),
  description: "Familiar Favorites for Younger Guests",
  intro:
  "Familiar dishes can be prepared for children or guests who prefer relaxed, casual meals.",
  subcategories: [
    {
      title: "Children’s Favorites",
      slug: "childrens-favorites",
      image: subcategoryImage("childrens-favorites"),
      description:
  "Familiar favorites for younger guests and relaxed villa meals.",
        dishes: [
          {
            title: "Chicken Tenders",
            description: "A simple, familiar option for children.",
            images: dishImages("chicken-tenders"),
          },
          {
            title: "Chicken Nuggets",
            description: "A casual children’s favorite.",
            images: dishImages("chicken-nuggets"),
          },
          {
            title: "Cheese Quesadillas",
            description: "Fresh tortillas with melted cheese.",
            images: dishImages("cheese-quesadillas"),
          },
          {
            title: "French Fries",
            description: "Crispy fries served as a simple side.",
            images: dishImages("children-french-fries"),
          },
          {
            title: "Pasta with Butter, Tomato Sauce, or Alfredo",
            description:
              "Simple pasta prepared with butter, tomato sauce, or Alfredo.",
            images: dishImages("children-pasta"),
          },
          {
            title: "Mini Pancakes",
            description:
              "Small pancakes for children or light breakfast requests.",
            images: dishImages("mini-pancakes"),
          },
          {
            title: "Fruit Plate",
            description: "Fresh seasonal fruit served simply.",
            images: dishImages("fruit-plate"),
          },
          {
            title: "Turkey and Cheese Wrap",
            description: "A simple wrap with turkey and cheese.",
            images: dishImages("turkey-cheese-wrap"),
          },
          {
            title: "Banana, Strawberry, and Nutella Wrap",
            description:
              "A sweet wrap with banana, strawberry, and Nutella.",
            images: dishImages("banana-strawberry-nutella-wrap"),
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    slug: "desserts",
    image: categoryImage("desserts"),
    description: "Sweet Finishes for Villa Meals",
    intro:
      "Desserts may be arranged as part of lunch or dinner service, depending on your selected menu and preferences.",
    subcategories: [
      {
        title: "Desserts",
        slug: "desserts",
        image: subcategoryImage("desserts"),
        description:
          "Classic sweet options to finish a villa lunch or dinner.",
        dishes: [
          {
            title: "Vanilla Flan with Caramel Sauce",
            description: "Classic vanilla flan served with caramel sauce.",
            images: dishImages("vanilla-flan-caramel-sauce"),
          },
          {
            title: "Churros with Chocolate Sauce",
            description: "Warm churros served with chocolate sauce.",
            images: dishImages("churros-chocolate-sauce"),
          },
          {
            title: "Crepes with Cajeta and Strawberries",
            description: "Crepes served with cajeta and strawberries.",
            images: dishImages("crepes-cajeta-strawberries"),
          },
          {
            title: "Brownie with Vanilla Ice Cream",
            description: "Warm brownie served with vanilla ice cream.",
            images: dishImages("brownie-vanilla-ice-cream"),
          },
          {
            title: "Apple Pie",
            description: "Classic apple pie.",
            images: dishImages("apple-pie"),
          },
          {
            title: "Cheesecake",
            description: "Classic cheesecake.",
            images: dishImages("cheesecake"),
          },
          {
            title: "Chocolate Lava Cake",
            description: "Warm chocolate lava cake.",
            images: dishImages("chocolate-lava-cake"),
          },
          {
            title: "Cajeta Lava Cake",
            description: "Warm cajeta lava cake.",
            images: dishImages("cajeta-lava-cake"),
          },
          {
            title: "Premium Assorted Ice Cream",
            description: "A selection of premium ice cream.",
            images: dishImages("premium-assorted-ice-cream"),
          },
        ],
      },
    ],
  },
];

export function getVillaDiningCategoryBySlug(slug: string) {
  return villaDiningCategories.find((category) => category.slug === slug);
}

export function getVillaDiningSubcategoryBySlug(
  categorySlug: string,
  subcategorySlug: string
) {
  const category = getVillaDiningCategoryBySlug(categorySlug);

  if (!category) {
    return undefined;
  }

  return category.subcategories.find(
    (subcategory) => subcategory.slug === subcategorySlug
  );
}
