// Built-in copy of the grocery list, used only when Sanity has no grocery
// items yet (or can't be reached). The live list is edited in the Sanity
// Studio → Groceries. Groceries: what La Comer carries; family vacation favorites.

import type { GroceryCategory } from "@/lib/groceries";

export const GROCERY_FALLBACK: GroceryCategory[] = [
 {
  "id": "groceryCategory-breakfast",
  "slug": "breakfast",
  "title": "Cereal & Breakfast",
  "titleEs": "Cereales y Desayuno",
  "items": [
   {
    "id": "groceryItem-breakfast-honey-cheerios",
    "name": "Honey Cheerios",
    "nameEs": "Cheerios Miel",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-frosted-flakes",
    "name": "Frosted Flakes",
    "nameEs": "Zucaritas",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-corn-flakes",
    "name": "Corn Flakes",
    "nameEs": "Corn Flakes",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-special-k",
    "name": "Special K",
    "nameEs": "Special K",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-froot-loops",
    "name": "Froot Loops",
    "nameEs": "Froot Loops",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-cocoa-krispies",
    "name": "Cocoa Krispies",
    "nameEs": "Choco Krispis",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-corn-pops",
    "name": "Corn Pops",
    "nameEs": "Corn Pops",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-cinnamon-toast-crunch",
    "name": "Cinnamon Toast Crunch",
    "nameEs": "Cinnamon Toast Crunch",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-mini-cereal-boxes-variety",
    "name": "Mini Cereal Boxes (variety)",
    "nameEs": "Cajitas de cereal surtidas",
    "unit": "package"
   },
   {
    "id": "groceryItem-breakfast-granola",
    "name": "Granola",
    "nameEs": "Granola",
    "unit": "package"
   },
   {
    "id": "groceryItem-breakfast-quaker-oats",
    "name": "Quaker Oats",
    "nameEs": "Avena Quaker",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-instant-oatmeal-packets",
    "name": "Instant Oatmeal Packets",
    "nameEs": "Avena instantánea en sobres",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-pancake-mix",
    "name": "Pancake Mix",
    "nameEs": "Harina para hot cakes",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-pop-tarts",
    "name": "Pop-Tarts",
    "nameEs": "Pop-Tarts",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-cereal-bars",
    "name": "Cereal Bars",
    "nameEs": "Barras de cereal",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-hot-cocoa-mix-nesquik",
    "name": "Hot Cocoa Mix (Nesquik)",
    "nameEs": "Chocolate en polvo (Nesquik)",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-snacks",
  "slug": "snacks",
  "title": "Snacks",
  "titleEs": "Botanas",
  "items": [
   {
    "id": "groceryItem-snacks-potato-chips-lay-s-sabritas",
    "name": "Potato Chips (Lay's / Sabritas)",
    "nameEs": "Papas fritas (Sabritas)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-ruffles",
    "name": "Ruffles",
    "nameEs": "Ruffles",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-doritos-nacho",
    "name": "Doritos Nacho",
    "nameEs": "Doritos Nacho",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-cheetos",
    "name": "Cheetos",
    "nameEs": "Cheetos",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-takis",
    "name": "Takis",
    "nameEs": "Takis",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-pringles",
    "name": "Pringles",
    "nameEs": "Pringles",
    "unit": "can"
   },
   {
    "id": "groceryItem-snacks-tortilla-chips-tostitos",
    "name": "Tortilla Chips (Tostitos)",
    "nameEs": "Totopos (Tostitos)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-pretzels",
    "name": "Pretzels",
    "nameEs": "Pretzels",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-ritz-crackers",
    "name": "Ritz Crackers",
    "nameEs": "Galletas Ritz",
    "unit": "box"
   },
   {
    "id": "groceryItem-snacks-microwave-popcorn",
    "name": "Microwave Popcorn",
    "nameEs": "Palomitas para microondas",
    "unit": "box"
   },
   {
    "id": "groceryItem-snacks-peanuts",
    "name": "Peanuts",
    "nameEs": "Cacahuates",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-almonds",
    "name": "Almonds",
    "nameEs": "Almendras",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-cashews",
    "name": "Cashews",
    "nameEs": "Nuez de la India",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-pistachios",
    "name": "Pistachios",
    "nameEs": "Pistaches",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-mixed-nuts",
    "name": "Mixed Nuts",
    "nameEs": "Nueces mixtas",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-salsa-con-queso-dip",
    "name": "Salsa con Queso Dip",
    "nameEs": "Dip de queso",
    "unit": "jar"
   },
   {
    "id": "groceryItem-snacks-guacamole",
    "name": "Guacamole",
    "nameEs": "Guacamole",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-hummus",
    "name": "Hummus",
    "nameEs": "Hummus",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-oreo-cookies",
    "name": "Oreo Cookies",
    "nameEs": "Galletas Oreo",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-chips-ahoy-cookies",
    "name": "Chips Ahoy! Cookies",
    "nameEs": "Galletas Chips Ahoy!",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-granola-bars",
    "name": "Granola Bars",
    "nameEs": "Barras de granola",
    "unit": "box"
   },
   {
    "id": "groceryItem-snacks-snickers",
    "name": "Snickers",
    "nameEs": "Snickers",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-m-m-s",
    "name": "M&M's",
    "nameEs": "M&M's",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-kit-kat",
    "name": "Kit Kat",
    "nameEs": "Kit Kat",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-hershey-s-chocolate-bars",
    "name": "Hershey's Chocolate Bars",
    "nameEs": "Chocolates Hershey's",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-toblerone",
    "name": "Toblerone",
    "nameEs": "Toblerone",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-kinder-chocolate",
    "name": "Kinder Chocolate",
    "nameEs": "Chocolate Kinder",
    "unit": "package"
   },
   {
    "id": "groceryItem-snacks-dark-chocolate",
    "name": "Dark Chocolate",
    "nameEs": "Chocolate amargo",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-gummy-bears",
    "name": "Gummy Bears",
    "nameEs": "Gomitas",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-marshmallows",
    "name": "Marshmallows",
    "nameEs": "Malvaviscos",
    "unit": "bag"
   }
  ]
 },
 {
  "id": "groceryCategory-frozen-desserts",
  "slug": "frozen-desserts",
  "title": "Frozen Desserts",
  "titleEs": "Postres Congelados",
  "items": [
   {
    "id": "groceryItem-frozen-desserts-vanilla-ice-cream",
    "name": "Vanilla Ice Cream",
    "nameEs": "Helado de vainilla",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-chocolate-ice-cream",
    "name": "Chocolate Ice Cream",
    "nameEs": "Helado de chocolate",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-strawberry-ice-cream",
    "name": "Strawberry Ice Cream",
    "nameEs": "Helado de fresa",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-neapolitan-ice-cream",
    "name": "Neapolitan Ice Cream",
    "nameEs": "Helado napolitano",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-haagen-dazs-assorted-flavors",
    "name": "Häagen-Dazs (assorted flavors)",
    "nameEs": "Häagen-Dazs (sabores surtidos)",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-ben-jerry-s-assorted-flavors",
    "name": "Ben & Jerry's (assorted flavors)",
    "nameEs": "Ben & Jerry's (sabores surtidos)",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-desserts-magnum-ice-cream-bars",
    "name": "Magnum Ice Cream Bars",
    "nameEs": "Paletas Magnum",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-desserts-ice-cream-sandwiches",
    "name": "Ice Cream Sandwiches",
    "nameEs": "Sándwiches de helado",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-desserts-fruit-popsicles",
    "name": "Fruit Popsicles",
    "nameEs": "Paletas de fruta",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-frozen",
  "slug": "frozen",
  "title": "Frozen Food",
  "titleEs": "Comida Congelada",
  "items": [
   {
    "id": "groceryItem-frozen-bag-of-ice",
    "name": "Bag of Ice",
    "nameEs": "Bolsa de hielo",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-pizza-cheese",
    "name": "Frozen Pizza – Cheese",
    "nameEs": "Pizza congelada de queso",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-frozen-pizza-pepperoni",
    "name": "Frozen Pizza – Pepperoni",
    "nameEs": "Pizza congelada de pepperoni",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-eggo-waffles",
    "name": "Eggo Waffles",
    "nameEs": "Waffles Eggo",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-french-fries",
    "name": "French Fries",
    "nameEs": "Papas a la francesa",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-chicken-nuggets",
    "name": "Chicken Nuggets",
    "nameEs": "Nuggets de pollo",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-fish-sticks",
    "name": "Fish Sticks",
    "nameEs": "Dedos de pescado",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-taquitos",
    "name": "Taquitos",
    "nameEs": "Taquitos dorados",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-cooked-shrimp",
    "name": "Cooked Shrimp",
    "nameEs": "Camarón cocido",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-mixed-vegetables",
    "name": "Frozen Mixed Vegetables",
    "nameEs": "Verduras mixtas congeladas",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-strawberries-for-smoothies",
    "name": "Frozen Strawberries (for smoothies)",
    "nameEs": "Fresas congeladas (para smoothies)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-mango-for-smoothies",
    "name": "Frozen Mango (for smoothies)",
    "nameEs": "Mango congelado (para smoothies)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-mixed-berries-for-smoothies",
    "name": "Frozen Mixed Berries (for smoothies)",
    "nameEs": "Frutos rojos congelados (para smoothies)",
    "unit": "bag"
   }
  ]
 },
 {
  "id": "groceryCategory-sodas",
  "slug": "sodas",
  "title": "Sodas & Sport Drinks",
  "titleEs": "Refrescos y Bebidas Deportivas",
  "items": [
   {
    "id": "groceryItem-sodas-coca-cola",
    "name": "Coca-Cola",
    "nameEs": "Coca-Cola",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-diet-coke",
    "name": "Diet Coke",
    "nameEs": "Coca-Cola Light",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-coke-zero",
    "name": "Coke Zero",
    "nameEs": "Coca-Cola Sin Azúcar",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-pepsi",
    "name": "Pepsi",
    "nameEs": "Pepsi",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-sprite",
    "name": "Sprite",
    "nameEs": "Sprite",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-sprite-zero",
    "name": "Sprite Zero",
    "nameEs": "Sprite Sin Azúcar",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-fanta-orange",
    "name": "Fanta Orange",
    "nameEs": "Fanta naranja",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-squirt",
    "name": "Squirt",
    "nameEs": "Squirt",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-mountain-dew",
    "name": "Mountain Dew",
    "nameEs": "Mountain Dew",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-ginger-ale",
    "name": "Ginger Ale",
    "nameEs": "Ginger ale",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-jarritos-assorted-flavors",
    "name": "Jarritos (assorted flavors)",
    "nameEs": "Jarritos (sabores surtidos)",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-arizona-iced-tea",
    "name": "Arizona Iced Tea",
    "nameEs": "Arizona té helado",
    "unit": "can"
   },
   {
    "id": "groceryItem-sodas-gatorade-assorted-flavors",
    "name": "Gatorade (assorted flavors)",
    "nameEs": "Gatorade (sabores surtidos)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-sodas-powerade-assorted-flavors",
    "name": "Powerade (assorted flavors)",
    "nameEs": "Powerade (sabores surtidos)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-sodas-electrolit-assorted-flavors",
    "name": "Electrolit (assorted flavors)",
    "nameEs": "Electrolit (sabores surtidos)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-sodas-red-bull",
    "name": "Red Bull",
    "nameEs": "Red Bull",
    "unit": "can"
   },
   {
    "id": "groceryItem-sodas-monster-energy",
    "name": "Monster Energy",
    "nameEs": "Monster Energy",
    "unit": "can"
   }
  ]
 },
 {
  "id": "groceryCategory-water",
  "slug": "water",
  "title": "Water",
  "titleEs": "Agua",
  "items": [
   {
    "id": "groceryItem-water-water-jug-20-l",
    "name": "Water Jug 20 L",
    "nameEs": "Garrafón de agua 20 L",
    "unit": "piece"
   },
   {
    "id": "groceryItem-water-bottled-water-500-ml-24-pack",
    "name": "Bottled Water 500 ml (24-pack)",
    "nameEs": "Agua embotellada 500 ml (paquete de 24)",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-bottled-water-1-5-l",
    "name": "Bottled Water 1.5 L",
    "nameEs": "Agua embotellada 1.5 L",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-sparkling-mineral-water",
    "name": "Sparkling Mineral Water",
    "nameEs": "Agua mineral",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-water-topo-chico",
    "name": "Topo Chico",
    "nameEs": "Topo Chico",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-san-pellegrino",
    "name": "San Pellegrino",
    "nameEs": "San Pellegrino",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-water-perrier",
    "name": "Perrier",
    "nameEs": "Perrier",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-water-evian",
    "name": "Evian",
    "nameEs": "Evian",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-water-coconut-water",
    "name": "Coconut Water",
    "nameEs": "Agua de coco",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-juices",
  "slug": "juices",
  "title": "Juices",
  "titleEs": "Jugos",
  "items": [
   {
    "id": "groceryItem-juices-fresh-orange-juice",
    "name": "Fresh Orange Juice",
    "nameEs": "Jugo de naranja natural",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-orange-juice-carton",
    "name": "Orange Juice (carton)",
    "nameEs": "Jugo de naranja (envase)",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-apple-juice",
    "name": "Apple Juice",
    "nameEs": "Jugo de manzana",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-cranberry-juice",
    "name": "Cranberry Juice",
    "nameEs": "Jugo de arándano",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-pineapple-juice",
    "name": "Pineapple Juice",
    "nameEs": "Jugo de piña",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-grapefruit-juice",
    "name": "Grapefruit Juice",
    "nameEs": "Jugo de toronja",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-grape-juice",
    "name": "Grape Juice",
    "nameEs": "Jugo de uva",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-mango-nectar",
    "name": "Mango Nectar",
    "nameEs": "Néctar de mango",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-lemonade",
    "name": "Lemonade",
    "nameEs": "Limonada",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-clamato",
    "name": "Clamato",
    "nameEs": "Clamato",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-kids-juice-boxes",
    "name": "Kids' Juice Boxes",
    "nameEs": "Juguitos para niños",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-coffeetea",
  "slug": "coffeetea",
  "title": "Coffee & Tea",
  "titleEs": "Café y Té",
  "items": [
   {
    "id": "groceryItem-coffeetea-ground-coffee-regular",
    "name": "Ground Coffee – Regular",
    "nameEs": "Café molido – regular",
    "unit": "package"
   },
   {
    "id": "groceryItem-coffeetea-ground-coffee-decaf",
    "name": "Ground Coffee – Decaf",
    "nameEs": "Café molido – descafeinado",
    "unit": "package"
   },
   {
    "id": "groceryItem-coffeetea-coffee-beans",
    "name": "Coffee Beans",
    "nameEs": "Café en grano",
    "unit": "package"
   },
   {
    "id": "groceryItem-coffeetea-instant-coffee-nescafe",
    "name": "Instant Coffee (Nescafé)",
    "nameEs": "Café soluble (Nescafé)",
    "unit": "jar"
   },
   {
    "id": "groceryItem-coffeetea-nespresso-capsules",
    "name": "Nespresso Capsules",
    "nameEs": "Cápsulas Nespresso",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-coffee-filters",
    "name": "Coffee Filters",
    "nameEs": "Filtros para café",
    "unit": "package"
   },
   {
    "id": "groceryItem-coffeetea-chamomile-tea",
    "name": "Chamomile Tea",
    "nameEs": "Té de manzanilla",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-peppermint-tea",
    "name": "Peppermint Tea",
    "nameEs": "Té de menta",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-green-tea",
    "name": "Green Tea",
    "nameEs": "Té verde",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-english-breakfast-tea",
    "name": "English Breakfast Tea",
    "nameEs": "Té English Breakfast",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-earl-grey-tea",
    "name": "Earl Grey Tea",
    "nameEs": "Té Earl Grey",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-alcohol",
  "slug": "alcohol",
  "title": "Alcoholic Drinks",
  "titleEs": "Bebidas Alcohólicas",
  "items": [],
  "children": [
   {
    "id": "groceryCategory-beer",
    "slug": "beer",
    "title": "Beer",
    "titleEs": "Cerveza",
    "items": [
     {
      "id": "groceryItem-beer-corona",
      "name": "Corona",
      "nameEs": "Corona",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-corona-light",
      "name": "Corona Light",
      "nameEs": "Corona Light",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-pacifico",
      "name": "Pacífico",
      "nameEs": "Pacífico",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-modelo-especial",
      "name": "Modelo Especial",
      "nameEs": "Modelo Especial",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-negra-modelo",
      "name": "Negra Modelo",
      "nameEs": "Negra Modelo",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-victoria",
      "name": "Victoria",
      "nameEs": "Victoria",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-dos-equis-lager",
      "name": "Dos Equis Lager",
      "nameEs": "Dos Equis Lager",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-tecate",
      "name": "Tecate",
      "nameEs": "Tecate",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-heineken",
      "name": "Heineken",
      "nameEs": "Heineken",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-stella-artois",
      "name": "Stella Artois",
      "nameEs": "Stella Artois",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-michelob-ultra",
      "name": "Michelob Ultra",
      "nameEs": "Michelob Ultra",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-coors-light",
      "name": "Coors Light",
      "nameEs": "Coors Light",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-bud-light",
      "name": "Bud Light",
      "nameEs": "Bud Light",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-beer-local-craft-beer",
      "name": "Local Craft Beer",
      "nameEs": "Cerveza artesanal local",
      "unit": "six-pack"
     }
    ]
   },
   {
    "id": "groceryCategory-wine",
    "slug": "wine",
    "title": "Wine",
    "titleEs": "Vino",
    "items": [
     {
      "id": "groceryItem-wine-cabernet-sauvignon",
      "name": "Cabernet Sauvignon",
      "nameEs": "Cabernet Sauvignon",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-merlot",
      "name": "Merlot",
      "nameEs": "Merlot",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-pinot-noir",
      "name": "Pinot Noir",
      "nameEs": "Pinot Noir",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-malbec",
      "name": "Malbec",
      "nameEs": "Malbec",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-rioja-tempranillo",
      "name": "Rioja / Tempranillo",
      "nameEs": "Rioja / Tempranillo",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-chardonnay",
      "name": "Chardonnay",
      "nameEs": "Chardonnay",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-pinot-grigio",
      "name": "Pinot Grigio",
      "nameEs": "Pinot Grigio",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-sauvignon-blanc",
      "name": "Sauvignon Blanc",
      "nameEs": "Sauvignon Blanc",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-rose",
      "name": "Rosé",
      "nameEs": "Rosado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-wine-mexican-wine-red-or-white",
      "name": "Mexican Wine (red or white)",
      "nameEs": "Vino mexicano (tinto o blanco)",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-champagne",
    "slug": "champagne",
    "title": "Champagne & Sparkling",
    "titleEs": "Champagne y Espumosos",
    "items": [
     {
      "id": "groceryItem-champagne-veuve-clicquot",
      "name": "Veuve Clicquot",
      "nameEs": "Veuve Clicquot",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-champagne-moet-chandon",
      "name": "Moët & Chandon",
      "nameEs": "Moët & Chandon",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-champagne-taittinger",
      "name": "Taittinger",
      "nameEs": "Taittinger",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-champagne-prosecco",
      "name": "Prosecco",
      "nameEs": "Prosecco",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-champagne-cava",
      "name": "Cava",
      "nameEs": "Cava",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-tequila",
    "slug": "tequila",
    "title": "Tequila & Mezcal",
    "titleEs": "Tequila y Mezcal",
    "items": [
     {
      "id": "groceryItem-tequila-don-julio-blanco",
      "name": "Don Julio Blanco",
      "nameEs": "Don Julio Blanco",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-don-julio-reposado",
      "name": "Don Julio Reposado",
      "nameEs": "Don Julio Reposado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-don-julio-anejo",
      "name": "Don Julio Añejo",
      "nameEs": "Don Julio Añejo",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-don-julio-70",
      "name": "Don Julio 70",
      "nameEs": "Don Julio 70",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-don-julio-1942",
      "name": "Don Julio 1942",
      "nameEs": "Don Julio 1942",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-casamigos-blanco",
      "name": "Casamigos Blanco",
      "nameEs": "Casamigos Blanco",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-casamigos-reposado",
      "name": "Casamigos Reposado",
      "nameEs": "Casamigos Reposado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-patron-silver",
      "name": "Patrón Silver",
      "nameEs": "Patrón Silver",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-herradura-reposado",
      "name": "Herradura Reposado",
      "nameEs": "Herradura Reposado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-cazadores",
      "name": "Cazadores",
      "nameEs": "Cazadores",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-jose-cuervo-especial",
      "name": "Jose Cuervo Especial",
      "nameEs": "José Cuervo Especial",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-1800-reposado",
      "name": "1800 Reposado",
      "nameEs": "1800 Reposado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-clase-azul-reposado",
      "name": "Clase Azul Reposado",
      "nameEs": "Clase Azul Reposado",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-tequila-mezcal-400-conejos",
      "name": "Mezcal (400 Conejos)",
      "nameEs": "Mezcal (400 Conejos)",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-whisky",
    "slug": "whisky",
    "title": "Whisky",
    "titleEs": "Whisky",
    "items": [
     {
      "id": "groceryItem-whisky-johnnie-walker-red-label",
      "name": "Johnnie Walker Red Label",
      "nameEs": "Johnnie Walker Etiqueta Roja",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-johnnie-walker-black-label",
      "name": "Johnnie Walker Black Label",
      "nameEs": "Johnnie Walker Etiqueta Negra",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-johnnie-walker-blue-label",
      "name": "Johnnie Walker Blue Label",
      "nameEs": "Johnnie Walker Etiqueta Azul",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-buchanan-s-12",
      "name": "Buchanan's 12",
      "nameEs": "Buchanan's 12",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-chivas-regal-12",
      "name": "Chivas Regal 12",
      "nameEs": "Chivas Regal 12",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-macallan-12",
      "name": "Macallan 12",
      "nameEs": "Macallan 12",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-jack-daniel-s",
      "name": "Jack Daniel's",
      "nameEs": "Jack Daniel's",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-crown-royal",
      "name": "Crown Royal",
      "nameEs": "Crown Royal",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-whisky-jameson",
      "name": "Jameson",
      "nameEs": "Jameson",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-rum",
    "slug": "rum",
    "title": "Rum",
    "titleEs": "Ron",
    "items": [
     {
      "id": "groceryItem-rum-bacardi-white",
      "name": "Bacardí White",
      "nameEs": "Bacardí Blanco",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-rum-bacardi-gold-anejo",
      "name": "Bacardí Gold / Añejo",
      "nameEs": "Bacardí Añejo",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-rum-captain-morgan",
      "name": "Captain Morgan",
      "nameEs": "Captain Morgan",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-rum-malibu",
      "name": "Malibu",
      "nameEs": "Malibu",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-vodka",
    "slug": "vodka",
    "title": "Vodka",
    "titleEs": "Vodka",
    "items": [
     {
      "id": "groceryItem-vodka-tito-s",
      "name": "Tito's",
      "nameEs": "Tito's",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-vodka-grey-goose",
      "name": "Grey Goose",
      "nameEs": "Grey Goose",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-vodka-absolut",
      "name": "Absolut",
      "nameEs": "Absolut",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-vodka-belvedere",
      "name": "Belvedere",
      "nameEs": "Belvedere",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-vodka-ketel-one",
      "name": "Ketel One",
      "nameEs": "Ketel One",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-vodka-smirnoff",
      "name": "Smirnoff",
      "nameEs": "Smirnoff",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-gin",
    "slug": "gin",
    "title": "Gin",
    "titleEs": "Ginebra",
    "items": [
     {
      "id": "groceryItem-gin-bombay-sapphire",
      "name": "Bombay Sapphire",
      "nameEs": "Bombay Sapphire",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-gin-tanqueray",
      "name": "Tanqueray",
      "nameEs": "Tanqueray",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-gin-hendrick-s",
      "name": "Hendrick's",
      "nameEs": "Hendrick's",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-gin-beefeater",
      "name": "Beefeater",
      "nameEs": "Beefeater",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-liqueurs",
    "slug": "liqueurs",
    "title": "Liqueurs & Spirits",
    "titleEs": "Licores y Digestivos",
    "items": [
     {
      "id": "groceryItem-liqueurs-baileys",
      "name": "Baileys",
      "nameEs": "Baileys",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-kahlua",
      "name": "Kahlúa",
      "nameEs": "Kahlúa",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-aperol",
      "name": "Aperol",
      "nameEs": "Aperol",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-campari",
      "name": "Campari",
      "nameEs": "Campari",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-cointreau",
      "name": "Cointreau",
      "nameEs": "Cointreau",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-grand-marnier",
      "name": "Grand Marnier",
      "nameEs": "Grand Marnier",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-licor-43",
      "name": "Licor 43",
      "nameEs": "Licor 43",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-amaretto",
      "name": "Amaretto",
      "nameEs": "Amaretto",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-frangelico",
      "name": "Frangelico",
      "nameEs": "Frangelico",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-jagermeister",
      "name": "Jägermeister",
      "nameEs": "Jägermeister",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-liqueurs-cognac-hennessy-martell",
      "name": "Cognac (Hennessy / Martell)",
      "nameEs": "Coñac (Hennessy / Martell)",
      "unit": "bottle"
     }
    ]
   },
   {
    "id": "groceryCategory-mixers",
    "slug": "mixers",
    "title": "Mixers",
    "titleEs": "Mezcladores",
    "items": [
     {
      "id": "groceryItem-mixers-margarita-mix",
      "name": "Margarita Mix",
      "nameEs": "Mezcla para margarita",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-mixers-simple-syrup",
      "name": "Simple Syrup",
      "nameEs": "Jarabe natural",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-mixers-grenadine",
      "name": "Grenadine",
      "nameEs": "Granadina",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-mixers-coconut-cream-for-pina-coladas",
      "name": "Coconut Cream (for piña coladas)",
      "nameEs": "Crema de coco (para piñas coladas)",
      "unit": "can"
     },
     {
      "id": "groceryItem-mixers-tonic-water",
      "name": "Tonic Water",
      "nameEs": "Agua tónica",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-mixers-club-soda",
      "name": "Club Soda",
      "nameEs": "Agua quina / club soda",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-mixers-ginger-beer",
      "name": "Ginger Beer",
      "nameEs": "Ginger beer",
      "unit": "six-pack"
     },
     {
      "id": "groceryItem-mixers-bloody-mary-mix",
      "name": "Bloody Mary Mix",
      "nameEs": "Mezcla para Bloody Mary",
      "unit": "bottle"
     },
     {
      "id": "groceryItem-mixers-tajin-for-rims",
      "name": "Tajín (for rims)",
      "nameEs": "Tajín (para escarchar)",
      "unit": "bottle"
     }
    ]
   }
  ]
 },
 {
  "id": "groceryCategory-baby",
  "slug": "baby",
  "title": "Baby Items",
  "titleEs": "Artículos para Bebé",
  "items": [
   {
    "id": "groceryItem-baby-diapers-specify-size",
    "name": "Diapers (specify size)",
    "nameEs": "Pañales (indica la talla)",
    "unit": "package"
   },
   {
    "id": "groceryItem-baby-swim-diapers",
    "name": "Swim Diapers",
    "nameEs": "Pañales para agua",
    "unit": "package"
   },
   {
    "id": "groceryItem-baby-baby-wipes",
    "name": "Baby Wipes",
    "nameEs": "Toallitas húmedas",
    "unit": "package"
   },
   {
    "id": "groceryItem-baby-baby-formula-specify-brand",
    "name": "Baby Formula (specify brand)",
    "nameEs": "Fórmula para bebé (indica la marca)",
    "unit": "can"
   },
   {
    "id": "groceryItem-baby-baby-food-jars-gerber",
    "name": "Baby Food Jars (Gerber)",
    "nameEs": "Papillas (Gerber)",
    "unit": "jar"
   },
   {
    "id": "groceryItem-baby-baby-shampoo-wash",
    "name": "Baby Shampoo & Wash",
    "nameEs": "Shampoo y jabón para bebé",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-baby-baby-sunscreen",
    "name": "Baby Sunscreen",
    "nameEs": "Bloqueador solar para bebé",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-personal",
  "slug": "personal",
  "title": "Personal Care",
  "titleEs": "Cuidado Personal",
  "items": [
   {
    "id": "groceryItem-personal-sunscreen",
    "name": "Sunscreen",
    "nameEs": "Bloqueador solar",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-after-sun-aloe-vera-gel",
    "name": "After-Sun Aloe Vera Gel",
    "nameEs": "Gel de aloe vera",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-insect-repellent-off",
    "name": "Insect Repellent (OFF!)",
    "nameEs": "Repelente de insectos (OFF!)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-toothpaste",
    "name": "Toothpaste",
    "nameEs": "Pasta de dientes",
    "unit": "piece"
   },
   {
    "id": "groceryItem-personal-toothbrushes",
    "name": "Toothbrushes",
    "nameEs": "Cepillos de dientes",
    "unit": "package"
   },
   {
    "id": "groceryItem-personal-shampoo",
    "name": "Shampoo",
    "nameEs": "Shampoo",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-conditioner",
    "name": "Conditioner",
    "nameEs": "Acondicionador",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-body-wash",
    "name": "Body Wash",
    "nameEs": "Jabón líquido de baño",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-deodorant",
    "name": "Deodorant",
    "nameEs": "Desodorante",
    "unit": "piece"
   },
   {
    "id": "groceryItem-personal-razors",
    "name": "Razors",
    "nameEs": "Rastrillos",
    "unit": "package"
   },
   {
    "id": "groceryItem-personal-feminine-hygiene",
    "name": "Feminine Hygiene",
    "nameEs": "Toallas femeninas / tampones",
    "unit": "package"
   },
   {
    "id": "groceryItem-personal-tissues",
    "name": "Tissues",
    "nameEs": "Pañuelos desechables",
    "unit": "box"
   },
   {
    "id": "groceryItem-personal-band-aids",
    "name": "Band-Aids",
    "nameEs": "Curitas",
    "unit": "box"
   },
   {
    "id": "groceryItem-personal-pain-reliever-tylenol-advil",
    "name": "Pain Reliever (Tylenol / Advil)",
    "nameEs": "Analgésico (Tylenol / Advil)",
    "unit": "box"
   },
   {
    "id": "groceryItem-personal-children-s-pain-reliever",
    "name": "Children's Pain Reliever",
    "nameEs": "Analgésico infantil",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-pepto-bismol",
    "name": "Pepto-Bismol",
    "nameEs": "Pepto-Bismol",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-pedialyte",
    "name": "Pedialyte",
    "nameEs": "Pedialyte",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-household",
  "slug": "household",
  "title": "Cleaning & Household",
  "titleEs": "Limpieza y Hogar",
  "items": [
   {
    "id": "groceryItem-household-paper-towels",
    "name": "Paper Towels",
    "nameEs": "Toallas de papel",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-toilet-paper",
    "name": "Toilet Paper",
    "nameEs": "Papel higiénico",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-napkins",
    "name": "Napkins",
    "nameEs": "Servilletas",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-paper-plates-cups",
    "name": "Paper Plates & Cups",
    "nameEs": "Platos y vasos desechables",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-dish-soap",
    "name": "Dish Soap",
    "nameEs": "Jabón para trastes",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-household-laundry-detergent",
    "name": "Laundry Detergent",
    "nameEs": "Detergente para ropa",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-household-disinfectant-wipes",
    "name": "Disinfectant Wipes",
    "nameEs": "Toallitas desinfectantes",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-trash-bags",
    "name": "Trash Bags",
    "nameEs": "Bolsas de basura",
    "unit": "package"
   },
   {
    "id": "groceryItem-household-aluminum-foil",
    "name": "Aluminum Foil",
    "nameEs": "Papel aluminio",
    "unit": "piece"
   },
   {
    "id": "groceryItem-household-plastic-wrap",
    "name": "Plastic Wrap",
    "nameEs": "Plástico autoadherible",
    "unit": "piece"
   },
   {
    "id": "groceryItem-household-zip-top-bags",
    "name": "Zip-Top Bags",
    "nameEs": "Bolsas resellables",
    "unit": "box"
   },
   {
    "id": "groceryItem-household-charcoal-for-grill",
    "name": "Charcoal (for grill)",
    "nameEs": "Carbón (para asador)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-household-lighter-matches",
    "name": "Lighter / Matches",
    "nameEs": "Encendedor / cerillos",
    "unit": "piece"
   }
  ]
 },
 {
  "id": "groceryCategory-fruits",
  "slug": "fruits",
  "title": "Fruits",
  "titleEs": "Frutas",
  "items": [
   {
    "id": "groceryItem-fruits-avocado",
    "name": "Avocado",
    "nameEs": "Aguacate",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-bananas",
    "name": "Bananas",
    "nameEs": "Plátanos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-red-apples",
    "name": "Red Apples",
    "nameEs": "Manzanas rojas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-green-apples",
    "name": "Green Apples",
    "nameEs": "Manzanas verdes",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-pears",
    "name": "Pears",
    "nameEs": "Peras",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-oranges",
    "name": "Oranges",
    "nameEs": "Naranjas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-mandarins",
    "name": "Mandarins",
    "nameEs": "Mandarinas",
    "unit": "kg",
    "seasonal": true
   },
   {
    "id": "groceryItem-fruits-grapefruit",
    "name": "Grapefruit",
    "nameEs": "Toronja",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-limes",
    "name": "Limes",
    "nameEs": "Limones",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-lemons",
    "name": "Lemons",
    "nameEs": "Limones amarillos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-mango",
    "name": "Mango",
    "nameEs": "Mango",
    "unit": "piece",
    "seasonal": true
   },
   {
    "id": "groceryItem-fruits-papaya",
    "name": "Papaya",
    "nameEs": "Papaya",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-pineapple",
    "name": "Pineapple",
    "nameEs": "Piña",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-watermelon",
    "name": "Watermelon",
    "nameEs": "Sandía",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-cantaloupe",
    "name": "Cantaloupe",
    "nameEs": "Melón",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-honeydew",
    "name": "Honeydew",
    "nameEs": "Melón verde (honeydew)",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-grapes-green-or-red",
    "name": "Grapes (green or red)",
    "nameEs": "Uvas (verdes o rojas)",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-strawberries",
    "name": "Strawberries",
    "nameEs": "Fresas",
    "unit": "package"
   },
   {
    "id": "groceryItem-fruits-blueberries",
    "name": "Blueberries",
    "nameEs": "Moras azules",
    "unit": "package"
   },
   {
    "id": "groceryItem-fruits-raspberries",
    "name": "Raspberries",
    "nameEs": "Frambuesas",
    "unit": "package"
   },
   {
    "id": "groceryItem-fruits-blackberries",
    "name": "Blackberries",
    "nameEs": "Zarzamoras",
    "unit": "package"
   },
   {
    "id": "groceryItem-fruits-kiwis",
    "name": "Kiwis",
    "nameEs": "Kiwis",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-peaches",
    "name": "Peaches",
    "nameEs": "Duraznos",
    "unit": "kg",
    "seasonal": true
   },
   {
    "id": "groceryItem-fruits-cherries",
    "name": "Cherries",
    "nameEs": "Cerezas",
    "unit": "package",
    "seasonal": true
   }
  ]
 },
 {
  "id": "groceryCategory-vegetables",
  "slug": "vegetables",
  "title": "Vegetables",
  "titleEs": "Verduras",
  "items": [
   {
    "id": "groceryItem-vegetables-tomatoes",
    "name": "Tomatoes",
    "nameEs": "Jitomates",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-roma-tomatoes",
    "name": "Roma Tomatoes",
    "nameEs": "Jitomates saladet",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-cherry-tomatoes",
    "name": "Cherry Tomatoes",
    "nameEs": "Jitomates cherry",
    "unit": "package"
   },
   {
    "id": "groceryItem-vegetables-tomatillos",
    "name": "Tomatillos",
    "nameEs": "Tomates verdes",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-potatoes",
    "name": "Potatoes",
    "nameEs": "Papas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-baby-potatoes",
    "name": "Baby Potatoes",
    "nameEs": "Papas cambray",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-sweet-potatoes",
    "name": "Sweet Potatoes",
    "nameEs": "Camotes",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-white-onion",
    "name": "White Onion",
    "nameEs": "Cebolla blanca",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-red-onion",
    "name": "Red Onion",
    "nameEs": "Cebolla morada",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-garlic",
    "name": "Garlic",
    "nameEs": "Ajo",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-carrots",
    "name": "Carrots",
    "nameEs": "Zanahorias",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-baby-carrots",
    "name": "Baby Carrots",
    "nameEs": "Zanahorias baby",
    "unit": "package"
   },
   {
    "id": "groceryItem-vegetables-celery",
    "name": "Celery",
    "nameEs": "Apio",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-vegetables-cucumbers",
    "name": "Cucumbers",
    "nameEs": "Pepinos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-zucchini",
    "name": "Zucchini",
    "nameEs": "Calabacitas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-broccoli",
    "name": "Broccoli",
    "nameEs": "Brócoli",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-cauliflower",
    "name": "Cauliflower",
    "nameEs": "Coliflor",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-asparagus",
    "name": "Asparagus",
    "nameEs": "Espárragos",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-vegetables-green-beans",
    "name": "Green Beans",
    "nameEs": "Ejotes",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-white-mushrooms",
    "name": "White Mushrooms",
    "nameEs": "Champiñones",
    "unit": "package"
   },
   {
    "id": "groceryItem-vegetables-corn-on-the-cob",
    "name": "Corn on the Cob",
    "nameEs": "Elote",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-green-bell-pepper",
    "name": "Green Bell Pepper",
    "nameEs": "Pimiento verde",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-red-bell-pepper",
    "name": "Red Bell Pepper",
    "nameEs": "Pimiento rojo",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-yellow-bell-pepper",
    "name": "Yellow Bell Pepper",
    "nameEs": "Pimiento amarillo",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-jalapeno-peppers",
    "name": "Jalapeño Peppers",
    "nameEs": "Chiles jalapeños",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-serrano-peppers",
    "name": "Serrano Peppers",
    "nameEs": "Chiles serranos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-poblano-peppers",
    "name": "Poblano Peppers",
    "nameEs": "Chiles poblanos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-vegetables-eggplant",
    "name": "Eggplant",
    "nameEs": "Berenjena",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-cabbage",
    "name": "Cabbage",
    "nameEs": "Col",
    "unit": "piece"
   },
   {
    "id": "groceryItem-vegetables-scallions",
    "name": "Scallions",
    "nameEs": "Cebollitas cambray",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-vegetables-ginger",
    "name": "Ginger",
    "nameEs": "Jengibre",
    "unit": "piece"
   }
  ]
 },
 {
  "id": "groceryCategory-herbs",
  "slug": "herbs",
  "title": "Herbs",
  "titleEs": "Hierbas",
  "items": [
   {
    "id": "groceryItem-herbs-cilantro",
    "name": "Cilantro",
    "nameEs": "Cilantro",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-parsley",
    "name": "Parsley",
    "nameEs": "Perejil",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-basil",
    "name": "Basil",
    "nameEs": "Albahaca",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-mint",
    "name": "Mint",
    "nameEs": "Hierbabuena",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-rosemary",
    "name": "Rosemary",
    "nameEs": "Romero",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-thyme",
    "name": "Thyme",
    "nameEs": "Tomillo",
    "unit": "bunch"
   },
   {
    "id": "groceryItem-herbs-chives",
    "name": "Chives",
    "nameEs": "Cebollín",
    "unit": "bunch"
   }
  ]
 },
 {
  "id": "groceryCategory-salads",
  "slug": "salads",
  "title": "Salads & Lettuce",
  "titleEs": "Ensaladas y Lechugas",
  "items": [
   {
    "id": "groceryItem-salads-romaine-lettuce",
    "name": "Romaine Lettuce",
    "nameEs": "Lechuga romana",
    "unit": "piece"
   },
   {
    "id": "groceryItem-salads-iceberg-lettuce",
    "name": "Iceberg Lettuce",
    "nameEs": "Lechuga iceberg",
    "unit": "piece"
   },
   {
    "id": "groceryItem-salads-baby-mix-lettuce",
    "name": "Baby Mix Lettuce",
    "nameEs": "Mezcla de lechugas baby",
    "unit": "package"
   },
   {
    "id": "groceryItem-salads-spinach",
    "name": "Spinach",
    "nameEs": "Espinaca",
    "unit": "package"
   },
   {
    "id": "groceryItem-salads-arugula",
    "name": "Arugula",
    "nameEs": "Arúgula",
    "unit": "package"
   },
   {
    "id": "groceryItem-salads-kale",
    "name": "Kale",
    "nameEs": "Kale",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-bread",
  "slug": "bread",
  "title": "Bread & Tortillas",
  "titleEs": "Pan y Tortillas",
  "items": [
   {
    "id": "groceryItem-bread-white-bread",
    "name": "White Bread",
    "nameEs": "Pan blanco",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-whole-wheat-bread",
    "name": "Whole Wheat Bread",
    "nameEs": "Pan integral",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-multigrain-bread",
    "name": "Multigrain Bread",
    "nameEs": "Pan multigrano",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-sourdough-bread",
    "name": "Sourdough Bread",
    "nameEs": "Pan de masa madre",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-french-baguette",
    "name": "French Baguette",
    "nameEs": "Baguette",
    "unit": "piece"
   },
   {
    "id": "groceryItem-bread-dinner-rolls",
    "name": "Dinner Rolls",
    "nameEs": "Bolillos",
    "unit": "piece"
   },
   {
    "id": "groceryItem-bread-croissants",
    "name": "Croissants",
    "nameEs": "Cuernitos",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-mexican-sweet-bread-conchas",
    "name": "Mexican Sweet Bread (conchas)",
    "nameEs": "Pan dulce (conchas)",
    "unit": "piece"
   },
   {
    "id": "groceryItem-bread-muffins",
    "name": "Muffins",
    "nameEs": "Panqués / muffins",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-bagels",
    "name": "Bagels",
    "nameEs": "Bagels",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-english-muffins",
    "name": "English Muffins",
    "nameEs": "Muffins ingleses",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-burger-buns",
    "name": "Burger Buns",
    "nameEs": "Pan para hamburguesa",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-hot-dog-buns",
    "name": "Hot Dog Buns",
    "nameEs": "Pan para hot dog",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-flour-tortillas",
    "name": "Flour Tortillas",
    "nameEs": "Tortillas de harina",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-corn-tortillas",
    "name": "Corn Tortillas",
    "nameEs": "Tortillas de maíz",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-tostadas",
    "name": "Tostadas",
    "nameEs": "Tostadas",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-dairy",
  "slug": "dairy",
  "title": "Dairy & Eggs",
  "titleEs": "Lácteos y Huevos",
  "items": [
   {
    "id": "groceryItem-dairy-eggs",
    "name": "Eggs",
    "nameEs": "Huevos",
    "unit": "dozen"
   },
   {
    "id": "groceryItem-dairy-whole-milk",
    "name": "Whole Milk",
    "nameEs": "Leche entera",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-2-milk",
    "name": "2% Milk",
    "nameEs": "Leche semidescremada",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-skim-milk",
    "name": "Skim Milk",
    "nameEs": "Leche descremada",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-lactose-free-milk",
    "name": "Lactose-Free Milk",
    "nameEs": "Leche deslactosada",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-almond-milk",
    "name": "Almond Milk",
    "nameEs": "Leche de almendra",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-oat-milk",
    "name": "Oat Milk",
    "nameEs": "Leche de avena",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-chocolate-milk",
    "name": "Chocolate Milk",
    "nameEs": "Leche con chocolate",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-heavy-cream",
    "name": "Heavy Cream",
    "nameEs": "Crema para batir",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-coffee-creamer-coffee-mate",
    "name": "Coffee Creamer (Coffee-mate)",
    "nameEs": "Sustituto de crema (Coffee-mate)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dairy-sour-cream",
    "name": "Sour Cream",
    "nameEs": "Crema ácida",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-salted-butter",
    "name": "Salted Butter",
    "nameEs": "Mantequilla con sal",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-unsalted-butter",
    "name": "Unsalted Butter",
    "nameEs": "Mantequilla sin sal",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-plain-yogurt",
    "name": "Plain Yogurt",
    "nameEs": "Yogurt natural",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-greek-yogurt",
    "name": "Greek Yogurt",
    "nameEs": "Yogurt griego",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-strawberry-yogurt",
    "name": "Strawberry Yogurt",
    "nameEs": "Yogurt de fresa",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-kids-yogurt-cups",
    "name": "Kids' Yogurt Cups",
    "nameEs": "Yogurt para niños",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-cheese",
  "slug": "cheese",
  "title": "Cheese",
  "titleEs": "Quesos",
  "items": [
   {
    "id": "groceryItem-cheese-cream-cheese-philadelphia",
    "name": "Cream Cheese (Philadelphia)",
    "nameEs": "Queso crema (Philadelphia)",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-american-cheese-slices",
    "name": "American Cheese Slices",
    "nameEs": "Queso amarillo rebanado",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-cheddar",
    "name": "Cheddar",
    "nameEs": "Queso cheddar",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-shredded-cheese",
    "name": "Shredded Cheese",
    "nameEs": "Queso rallado",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-mozzarella",
    "name": "Mozzarella",
    "nameEs": "Mozzarella",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-fresh-mozzarella",
    "name": "Fresh Mozzarella",
    "nameEs": "Mozzarella fresco",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-parmesan",
    "name": "Parmesan",
    "nameEs": "Parmesano",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-swiss-cheese-slices",
    "name": "Swiss Cheese Slices",
    "nameEs": "Queso suizo rebanado",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-gouda",
    "name": "Gouda",
    "nameEs": "Gouda",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-manchego",
    "name": "Manchego",
    "nameEs": "Manchego",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-brie",
    "name": "Brie",
    "nameEs": "Brie",
    "unit": "piece"
   },
   {
    "id": "groceryItem-cheese-goat-cheese",
    "name": "Goat Cheese",
    "nameEs": "Queso de cabra",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-ricotta",
    "name": "Ricotta",
    "nameEs": "Ricotta",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-oaxaca-cheese-for-quesadillas",
    "name": "Oaxaca Cheese (for quesadillas)",
    "nameEs": "Queso Oaxaca",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-queso-fresco",
    "name": "Queso Fresco",
    "nameEs": "Queso fresco",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-coldcuts",
  "slug": "coldcuts",
  "title": "Cold Cuts",
  "titleEs": "Carnes Frías",
  "items": [
   {
    "id": "groceryItem-coldcuts-sliced-ham",
    "name": "Sliced Ham",
    "nameEs": "Jamón rebanado",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-sliced-turkey-breast",
    "name": "Sliced Turkey Breast",
    "nameEs": "Pechuga de pavo rebanada",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-salami",
    "name": "Salami",
    "nameEs": "Salami",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-pepperoni",
    "name": "Pepperoni",
    "nameEs": "Pepperoni",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-prosciutto",
    "name": "Prosciutto",
    "nameEs": "Prosciutto",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-bacon",
    "name": "Bacon",
    "nameEs": "Tocino",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-breakfast-sausage",
    "name": "Breakfast Sausage",
    "nameEs": "Salchicha para desayuno",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-hot-dogs",
    "name": "Hot Dogs",
    "nameEs": "Salchichas para hot dog",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-italian-sausage",
    "name": "Italian Sausage",
    "nameEs": "Salchicha italiana",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-chorizo",
    "name": "Chorizo",
    "nameEs": "Chorizo",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-meat",
  "slug": "meat",
  "title": "Meat",
  "titleEs": "Carnes",
  "items": [
   {
    "id": "groceryItem-meat-filet-mignon",
    "name": "Filet Mignon",
    "nameEs": "Filete mignon",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-rib-eye",
    "name": "Rib Eye",
    "nameEs": "Rib eye",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-new-york-steak",
    "name": "New York Steak",
    "nameEs": "New York",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-t-bone",
    "name": "T-Bone",
    "nameEs": "T-bone",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-sirloin",
    "name": "Sirloin",
    "nameEs": "Sirloin",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-flank-steak-arrachera",
    "name": "Flank Steak (arrachera)",
    "nameEs": "Arrachera",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-ground-beef",
    "name": "Ground Beef",
    "nameEs": "Carne molida de res",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-burger-patties",
    "name": "Burger Patties",
    "nameEs": "Carne para hamburguesa",
    "unit": "package"
   },
   {
    "id": "groceryItem-meat-baby-back-ribs",
    "name": "Baby Back Ribs",
    "nameEs": "Costillas baby back",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-pork-chops",
    "name": "Pork Chops",
    "nameEs": "Chuletas de cerdo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-pork-tenderloin",
    "name": "Pork Tenderloin",
    "nameEs": "Lomo de cerdo",
    "unit": "kg"
   }
  ]
 },
 {
  "id": "groceryCategory-poultry",
  "slug": "poultry",
  "title": "Poultry",
  "titleEs": "Aves",
  "items": [
   {
    "id": "groceryItem-poultry-rotisserie-chicken",
    "name": "Rotisserie Chicken",
    "nameEs": "Pollo rostizado",
    "unit": "piece"
   },
   {
    "id": "groceryItem-poultry-whole-chicken",
    "name": "Whole Chicken",
    "nameEs": "Pollo entero",
    "unit": "piece"
   },
   {
    "id": "groceryItem-poultry-chicken-breast",
    "name": "Chicken Breast",
    "nameEs": "Pechuga de pollo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-chicken-thighs",
    "name": "Chicken Thighs",
    "nameEs": "Muslos de pollo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-chicken-wings",
    "name": "Chicken Wings",
    "nameEs": "Alitas de pollo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-whole-turkey",
    "name": "Whole Turkey",
    "nameEs": "Pavo entero",
    "unit": "piece",
    "seasonal": true
   }
  ]
 },
 {
  "id": "groceryCategory-seafood",
  "slug": "seafood",
  "title": "Fish & Seafood",
  "titleEs": "Pescados y Mariscos",
  "items": [
   {
    "id": "groceryItem-seafood-shrimp",
    "name": "Shrimp",
    "nameEs": "Camarón",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-salmon",
    "name": "Salmon",
    "nameEs": "Salmón",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-fresh-fish-fillet-catch-of-the-day",
    "name": "Fresh Fish Fillet (catch of the day)",
    "nameEs": "Filete de pescado fresco (pesca del día)",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-mahi-mahi",
    "name": "Mahi Mahi",
    "nameEs": "Dorado",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-red-snapper",
    "name": "Red Snapper",
    "nameEs": "Huachinango",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-tuna-steak",
    "name": "Tuna Steak",
    "nameEs": "Atún fresco",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-smoked-salmon",
    "name": "Smoked Salmon",
    "nameEs": "Salmón ahumado",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-pasta",
  "slug": "pasta",
  "title": "Pasta, Rice & Beans",
  "titleEs": "Pasta, Arroz y Frijoles",
  "items": [
   {
    "id": "groceryItem-pasta-spaghetti",
    "name": "Spaghetti",
    "nameEs": "Espagueti",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-penne",
    "name": "Penne",
    "nameEs": "Penne",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-fettuccine",
    "name": "Fettuccine",
    "nameEs": "Fettuccine",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-lasagna-sheets",
    "name": "Lasagna Sheets",
    "nameEs": "Láminas para lasaña",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-mac-cheese-kraft",
    "name": "Mac & Cheese (Kraft)",
    "nameEs": "Mac & Cheese (Kraft)",
    "unit": "box"
   },
   {
    "id": "groceryItem-pasta-pasta-sauce",
    "name": "Pasta Sauce",
    "nameEs": "Salsa para pasta",
    "unit": "jar"
   },
   {
    "id": "groceryItem-pasta-white-rice",
    "name": "White Rice",
    "nameEs": "Arroz blanco",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-quinoa",
    "name": "Quinoa",
    "nameEs": "Quinoa",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-black-beans",
    "name": "Black Beans",
    "nameEs": "Frijoles negros",
    "unit": "can"
   },
   {
    "id": "groceryItem-pasta-refried-beans",
    "name": "Refried Beans",
    "nameEs": "Frijoles refritos",
    "unit": "can"
   }
  ]
 },
 {
  "id": "groceryCategory-oils",
  "slug": "oils",
  "title": "Oils & Vinegars",
  "titleEs": "Aceites y Vinagres",
  "items": [
   {
    "id": "groceryItem-oils-extra-virgin-olive-oil",
    "name": "Extra Virgin Olive Oil",
    "nameEs": "Aceite de oliva extra virgen",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-vegetable-canola-oil",
    "name": "Vegetable / Canola Oil",
    "nameEs": "Aceite vegetal / canola",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-avocado-oil",
    "name": "Avocado Oil",
    "nameEs": "Aceite de aguacate",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-cooking-spray-pam",
    "name": "Cooking Spray (Pam)",
    "nameEs": "Aceite en aerosol (Pam)",
    "unit": "can"
   },
   {
    "id": "groceryItem-oils-balsamic-vinegar",
    "name": "Balsamic Vinegar",
    "nameEs": "Vinagre balsámico",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-red-wine-vinegar",
    "name": "Red Wine Vinegar",
    "nameEs": "Vinagre de vino tinto",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-condiments",
  "slug": "condiments",
  "title": "Condiments & Sauces",
  "titleEs": "Condimentos y Salsas",
  "items": [
   {
    "id": "groceryItem-condiments-ketchup",
    "name": "Ketchup",
    "nameEs": "Catsup",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-mayonnaise",
    "name": "Mayonnaise",
    "nameEs": "Mayonesa",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-yellow-mustard",
    "name": "Yellow Mustard",
    "nameEs": "Mostaza amarilla",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-dijon-mustard",
    "name": "Dijon Mustard",
    "nameEs": "Mostaza Dijon",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-bbq-sauce",
    "name": "BBQ Sauce",
    "nameEs": "Salsa BBQ",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-a1-steak-sauce",
    "name": "A1 Steak Sauce",
    "nameEs": "Salsa A1",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-worcestershire-sauce",
    "name": "Worcestershire Sauce",
    "nameEs": "Salsa inglesa",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-soy-sauce",
    "name": "Soy Sauce",
    "nameEs": "Salsa de soya",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-tabasco",
    "name": "Tabasco",
    "nameEs": "Tabasco",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-cholula",
    "name": "Cholula",
    "nameEs": "Cholula",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-sriracha",
    "name": "Sriracha",
    "nameEs": "Sriracha",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-jarred-salsa-herdez",
    "name": "Jarred Salsa (Herdez)",
    "nameEs": "Salsa en frasco (Herdez)",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-fresh-pico-de-gallo",
    "name": "Fresh Pico de Gallo",
    "nameEs": "Pico de gallo fresco",
    "unit": "package"
   },
   {
    "id": "groceryItem-condiments-pickles",
    "name": "Pickles",
    "nameEs": "Pepinillos",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-honey",
    "name": "Honey",
    "nameEs": "Miel",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-maple-syrup",
    "name": "Maple Syrup",
    "nameEs": "Miel de maple",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-peanut-butter",
    "name": "Peanut Butter",
    "nameEs": "Crema de cacahuate",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-jam-jelly",
    "name": "Jam / Jelly",
    "nameEs": "Mermelada",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-nutella",
    "name": "Nutella",
    "nameEs": "Nutella",
    "unit": "jar"
   },
   {
    "id": "groceryItem-condiments-chocolate-syrup-hershey-s",
    "name": "Chocolate Syrup (Hershey's)",
    "nameEs": "Jarabe de chocolate (Hershey's)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-salt",
    "name": "Salt",
    "nameEs": "Sal",
    "unit": "package"
   },
   {
    "id": "groceryItem-condiments-black-pepper",
    "name": "Black Pepper",
    "nameEs": "Pimienta negra",
    "unit": "jar"
   }
  ]
 },
 {
  "id": "groceryCategory-dressings",
  "slug": "dressings",
  "title": "Dressings",
  "titleEs": "Aderezos",
  "items": [
   {
    "id": "groceryItem-dressings-ranch-dressing",
    "name": "Ranch Dressing",
    "nameEs": "Aderezo ranch",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-caesar-dressing",
    "name": "Caesar Dressing",
    "nameEs": "Aderezo césar",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-italian-dressing",
    "name": "Italian Dressing",
    "nameEs": "Aderezo italiano",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-thousand-island-dressing",
    "name": "Thousand Island Dressing",
    "nameEs": "Aderezo mil islas",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-balsamic-vinaigrette",
    "name": "Balsamic Vinaigrette",
    "nameEs": "Vinagreta balsámica",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-pantry",
  "slug": "pantry",
  "title": "Pantry & Canned Goods",
  "titleEs": "Despensa y Enlatados",
  "items": [
   {
    "id": "groceryItem-pantry-tuna-in-water",
    "name": "Tuna in Water",
    "nameEs": "Atún en agua",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-olives",
    "name": "Olives",
    "nameEs": "Aceitunas",
    "unit": "jar"
   },
   {
    "id": "groceryItem-pantry-chicken-broth",
    "name": "Chicken Broth",
    "nameEs": "Caldo de pollo",
    "unit": "carton"
   },
   {
    "id": "groceryItem-pantry-canned-soup-campbell-s",
    "name": "Canned Soup (Campbell's)",
    "nameEs": "Sopa enlatada (Campbell's)",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-instant-noodles-maruchan",
    "name": "Instant Noodles (Maruchan)",
    "nameEs": "Sopa instantánea (Maruchan)",
    "unit": "package"
   },
   {
    "id": "groceryItem-pantry-sugar",
    "name": "Sugar",
    "nameEs": "Azúcar",
    "unit": "package"
   },
   {
    "id": "groceryItem-pantry-brown-sugar",
    "name": "Brown Sugar",
    "nameEs": "Azúcar morena",
    "unit": "package"
   },
   {
    "id": "groceryItem-pantry-sweetener-splenda-stevia",
    "name": "Sweetener (Splenda / Stevia)",
    "nameEs": "Endulzante (Splenda / Stevia)",
    "unit": "box"
   },
   {
    "id": "groceryItem-pantry-all-purpose-flour",
    "name": "All-Purpose Flour",
    "nameEs": "Harina de trigo",
    "unit": "package"
   }
  ]
 }
];
