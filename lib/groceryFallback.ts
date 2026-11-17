// Built-in copy of the grocery list, used only when Sanity has no grocery
// items yet (or can't be reached). The live list is edited in the Sanity
// Studio → Groceries. Generated from the original Beyond Traveling grocery forms.

import type { GroceryCategory } from "@/lib/groceries";

export const GROCERY_FALLBACK: GroceryCategory[] = [
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
    "id": "groceryItem-fruits-peaches",
    "name": "Peaches",
    "nameEs": "Duraznos",
    "unit": "kg",
    "seasonal": true
   },
   {
    "id": "groceryItem-fruits-oranges",
    "name": "Oranges",
    "nameEs": "Naranjas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-grapefruit",
    "name": "Grapefruit",
    "nameEs": "Toronja",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-lemons",
    "name": "Lemons",
    "nameEs": "Limones amarillos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-fruits-limes",
    "name": "Limes",
    "nameEs": "Limones",
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
    "nameEs": "Melón chino verde",
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
    "id": "groceryItem-fruits-cranberries",
    "name": "Cranberries",
    "nameEs": "Arándanos rojos",
    "unit": "package",
    "seasonal": true
   },
   {
    "id": "groceryItem-fruits-kiwis",
    "name": "Kiwis",
    "nameEs": "Kiwis",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-coconut",
    "name": "Coconut",
    "nameEs": "Coco",
    "unit": "piece"
   },
   {
    "id": "groceryItem-fruits-guava",
    "name": "Guava",
    "nameEs": "Guayaba",
    "unit": "kg",
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
    "id": "groceryItem-vegetables-potatoes",
    "name": "Potatoes",
    "nameEs": "Papas",
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
    "id": "groceryItem-vegetables-eggplant",
    "name": "Eggplant",
    "nameEs": "Berenjena",
    "unit": "piece"
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
    "id": "groceryItem-vegetables-cabbage",
    "name": "Cabbage",
    "nameEs": "Col",
    "unit": "piece"
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
    "id": "groceryItem-vegetables-jicama",
    "name": "Jicama",
    "nameEs": "Jícama",
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
    "id": "groceryItem-herbs-chives",
    "name": "Chives",
    "nameEs": "Cebollín",
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
    "id": "groceryItem-herbs-dill",
    "name": "Dill",
    "nameEs": "Eneldo",
    "unit": "bunch"
   }
  ]
 },
 {
  "id": "groceryCategory-salads",
  "slug": "salads",
  "title": "Salads & Lettuce",
  "titleEs": "Ensaladas y lechugas",
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
    "id": "groceryItem-salads-red-leaf-lettuce",
    "name": "Red Leaf Lettuce",
    "nameEs": "Lechuga morada",
    "unit": "piece"
   },
   {
    "id": "groceryItem-salads-boston-lettuce",
    "name": "Boston Lettuce",
    "nameEs": "Lechuga Boston",
    "unit": "piece"
   },
   {
    "id": "groceryItem-salads-baby-mix-lettuce",
    "name": "Baby Mix Lettuce",
    "nameEs": "Mezcla de lechugas baby",
    "unit": "package"
   },
   {
    "id": "groceryItem-salads-arugula",
    "name": "Arugula",
    "nameEs": "Arúgula",
    "unit": "package"
   },
   {
    "id": "groceryItem-salads-spinach",
    "name": "Spinach",
    "nameEs": "Espinaca",
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
  "titleEs": "Pan y tortillas",
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
    "id": "groceryItem-bread-rye-bread",
    "name": "Rye Bread",
    "nameEs": "Pan de centeno",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-sourdough-bread",
    "name": "Sourdough Bread",
    "nameEs": "Pan de masa madre",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-italian-bread",
    "name": "Italian Bread",
    "nameEs": "Pan italiano",
    "unit": "loaf"
   },
   {
    "id": "groceryItem-bread-french-baguette",
    "name": "French Baguette",
    "nameEs": "Baguette",
    "unit": "piece"
   },
   {
    "id": "groceryItem-bread-croissants",
    "name": "Croissants",
    "nameEs": "Cuernitos",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-plain-bagels",
    "name": "Plain Bagels",
    "nameEs": "Bagels naturales",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-everything-bagels",
    "name": "Everything Bagels",
    "nameEs": "Bagels everything",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-sesame-bagels",
    "name": "Sesame Bagels",
    "nameEs": "Bagels de ajonjolí",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-blueberry-bagels",
    "name": "Blueberry Bagels",
    "nameEs": "Bagels de mora azul",
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
    "id": "groceryItem-bread-corn-tortillas",
    "name": "Corn Tortillas",
    "nameEs": "Tortillas de maíz",
    "unit": "package"
   },
   {
    "id": "groceryItem-bread-flour-tortillas",
    "name": "Flour Tortillas",
    "nameEs": "Tortillas de harina",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-dairy",
  "slug": "dairy",
  "title": "Dairy & Eggs",
  "titleEs": "Lácteos y huevos",
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
    "id": "groceryItem-dairy-soy-milk",
    "name": "Soy Milk",
    "nameEs": "Leche de soya",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-vanilla-soy-milk",
    "name": "Vanilla Soy Milk",
    "nameEs": "Leche de soya sabor vainilla",
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
    "id": "groceryItem-dairy-half-half",
    "name": "Half & Half",
    "nameEs": "Half & Half",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-heavy-cream",
    "name": "Heavy Cream",
    "nameEs": "Crema para batir",
    "unit": "carton"
   },
   {
    "id": "groceryItem-dairy-coffee-creamer",
    "name": "Coffee Creamer",
    "nameEs": "Sustituto de crema para café",
    "unit": "bottle"
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
    "id": "groceryItem-dairy-margarine",
    "name": "Margarine",
    "nameEs": "Margarina",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-sour-cream",
    "name": "Sour Cream",
    "nameEs": "Crema ácida",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-plain-yogurt",
    "name": "Plain Yogurt",
    "nameEs": "Yogurt natural",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-plain-low-fat-yogurt",
    "name": "Plain Low-Fat Yogurt",
    "nameEs": "Yogurt natural bajo en grasa",
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
    "id": "groceryItem-dairy-blueberry-yogurt",
    "name": "Blueberry Yogurt",
    "nameEs": "Yogurt de mora azul",
    "unit": "package"
   },
   {
    "id": "groceryItem-dairy-drinking-yogurt",
    "name": "Drinking Yogurt",
    "nameEs": "Yogurt bebible",
    "unit": "bottle"
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
    "id": "groceryItem-cheese-cream-cheese",
    "name": "Cream Cheese",
    "nameEs": "Queso crema",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-oaxaca-cheese",
    "name": "Oaxaca Cheese",
    "nameEs": "Queso Oaxaca",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-panela-cheese",
    "name": "Panela Cheese",
    "nameEs": "Queso panela",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-fresh-mozzarella",
    "name": "Fresh Mozzarella",
    "nameEs": "Mozzarella fresco",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-shredded-mozzarella",
    "name": "Shredded Mozzarella",
    "nameEs": "Mozzarella rallado",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-parmesan",
    "name": "Parmesan",
    "nameEs": "Parmesano",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-medium-cheddar",
    "name": "Medium Cheddar",
    "nameEs": "Cheddar medio",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-sharp-cheddar",
    "name": "Sharp Cheddar",
    "nameEs": "Cheddar añejo",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-sliced-swiss",
    "name": "Sliced Swiss",
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
    "id": "groceryItem-cheese-muenster",
    "name": "Muenster",
    "nameEs": "Muenster",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-brie",
    "name": "Brie",
    "nameEs": "Brie",
    "unit": "piece"
   },
   {
    "id": "groceryItem-cheese-camembert",
    "name": "Camembert",
    "nameEs": "Camembert",
    "unit": "piece"
   },
   {
    "id": "groceryItem-cheese-goat-cheese",
    "name": "Goat Cheese",
    "nameEs": "Queso de cabra",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-boursin",
    "name": "Boursin",
    "nameEs": "Boursin",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-ricotta",
    "name": "Ricotta",
    "nameEs": "Ricotta",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-cottage-cheese",
    "name": "Cottage Cheese",
    "nameEs": "Queso cottage",
    "unit": "package"
   },
   {
    "id": "groceryItem-cheese-roquefort",
    "name": "Roquefort",
    "nameEs": "Roquefort",
    "unit": "package"
   }
  ]
 },
 {
  "id": "groceryCategory-coldcuts",
  "slug": "coldcuts",
  "title": "Cold Cuts",
  "titleEs": "Carnes frías",
  "items": [
   {
    "id": "groceryItem-coldcuts-sliced-ham",
    "name": "Sliced Ham",
    "nameEs": "Jamón rebanado",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-serrano-ham",
    "name": "Serrano Ham",
    "nameEs": "Jamón serrano",
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
    "id": "groceryItem-coldcuts-bologna",
    "name": "Bologna",
    "nameEs": "Bolonia",
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
    "id": "groceryItem-coldcuts-italian-sausage",
    "name": "Italian Sausage",
    "nameEs": "Salchicha italiana",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-turkey-sausage",
    "name": "Turkey Sausage",
    "nameEs": "Salchicha de pavo",
    "unit": "package"
   },
   {
    "id": "groceryItem-coldcuts-hot-dog-sausages",
    "name": "Hot Dog Sausages",
    "nameEs": "Salchichas para hot dog",
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
    "id": "groceryItem-meat-whole-tenderloin",
    "name": "Whole Tenderloin",
    "nameEs": "Filete entero",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-beef-medallions",
    "name": "Beef Medallions",
    "nameEs": "Medallones de res",
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
    "id": "groceryItem-meat-arrachera-flank-steak",
    "name": "Arrachera (Flank Steak)",
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
    "id": "groceryItem-meat-pork-loin",
    "name": "Pork Loin",
    "nameEs": "Lomo de cerdo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-rack-of-lamb",
    "name": "Rack of Lamb",
    "nameEs": "Costillar de cordero",
    "unit": "kg"
   },
   {
    "id": "groceryItem-meat-leg-of-lamb",
    "name": "Leg of Lamb",
    "nameEs": "Pierna de cordero",
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
    "id": "groceryItem-poultry-chicken-pieces",
    "name": "Chicken Pieces",
    "nameEs": "Pollo en piezas",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-chicken-wings",
    "name": "Chicken Wings",
    "nameEs": "Alitas de pollo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-chicken-nuggets",
    "name": "Chicken Nuggets",
    "nameEs": "Nuggets de pollo",
    "unit": "package"
   },
   {
    "id": "groceryItem-poultry-ground-turkey",
    "name": "Ground Turkey",
    "nameEs": "Carne molida de pavo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-poultry-turkey-breast",
    "name": "Turkey Breast",
    "nameEs": "Pechuga de pavo",
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
  "titleEs": "Pescados y mariscos",
  "items": [
   {
    "id": "groceryItem-seafood-fresh-catch-of-the-day",
    "name": "Fresh Catch of the Day",
    "nameEs": "Pesca del día",
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
    "id": "groceryItem-seafood-salmon",
    "name": "Salmon",
    "nameEs": "Salmón",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-tuna",
    "name": "Tuna",
    "nameEs": "Atún fresco",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-smoked-salmon",
    "name": "Smoked Salmon",
    "nameEs": "Salmón ahumado",
    "unit": "package"
   },
   {
    "id": "groceryItem-seafood-shrimp",
    "name": "Shrimp",
    "nameEs": "Camarón",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-prawns",
    "name": "Prawns",
    "nameEs": "Langostinos",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-whole-lobster",
    "name": "Whole Lobster",
    "nameEs": "Langosta entera",
    "unit": "piece",
    "seasonal": true
   },
   {
    "id": "groceryItem-seafood-lobster-tails",
    "name": "Lobster Tails",
    "nameEs": "Colas de langosta",
    "unit": "piece"
   },
   {
    "id": "groceryItem-seafood-octopus",
    "name": "Octopus",
    "nameEs": "Pulpo",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-mussels",
    "name": "Mussels",
    "nameEs": "Mejillones",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-scallops",
    "name": "Scallops",
    "nameEs": "Callo de hacha",
    "unit": "kg"
   },
   {
    "id": "groceryItem-seafood-crab",
    "name": "Crab",
    "nameEs": "Cangrejo",
    "unit": "kg"
   }
  ]
 },
 {
  "id": "groceryCategory-pasta",
  "slug": "pasta",
  "title": "Pasta, Rice & Beans",
  "titleEs": "Pasta, arroz y frijoles",
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
    "id": "groceryItem-pasta-gnocchi",
    "name": "Gnocchi",
    "nameEs": "Gnocchi",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-ravioli",
    "name": "Ravioli",
    "nameEs": "Ravioles",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-mac-cheese",
    "name": "Mac & Cheese",
    "nameEs": "Mac & Cheese",
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
    "id": "groceryItem-pasta-brown-rice",
    "name": "Brown Rice",
    "nameEs": "Arroz integral",
    "unit": "package"
   },
   {
    "id": "groceryItem-pasta-yellow-rice",
    "name": "Yellow Rice",
    "nameEs": "Arroz amarillo",
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
    "id": "groceryItem-pasta-black-beans-vegetarian",
    "name": "Black Beans (Vegetarian)",
    "nameEs": "Frijoles negros vegetarianos",
    "unit": "can"
   },
   {
    "id": "groceryItem-pasta-refried-beans",
    "name": "Refried Beans",
    "nameEs": "Frijoles refritos",
    "unit": "can"
   },
   {
    "id": "groceryItem-pasta-refried-beans-vegetarian",
    "name": "Refried Beans (Vegetarian)",
    "nameEs": "Frijoles refritos vegetarianos",
    "unit": "can"
   }
  ]
 },
 {
  "id": "groceryCategory-oils",
  "slug": "oils",
  "title": "Oils & Vinegars",
  "titleEs": "Aceites y vinagres",
  "items": [
   {
    "id": "groceryItem-oils-extra-virgin-olive-oil",
    "name": "Extra Virgin Olive Oil",
    "nameEs": "Aceite de oliva extra virgen",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-olive-oil",
    "name": "Olive Oil",
    "nameEs": "Aceite de oliva",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-canola-oil",
    "name": "Canola Oil",
    "nameEs": "Aceite de canola",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-corn-oil",
    "name": "Corn Oil",
    "nameEs": "Aceite de maíz",
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
   },
   {
    "id": "groceryItem-oils-raspberry-vinegar",
    "name": "Raspberry Vinegar",
    "nameEs": "Vinagre de frambuesa",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-sherry-vinegar",
    "name": "Sherry Vinegar",
    "nameEs": "Vinagre de jerez",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-oils-white-vinegar",
    "name": "White Vinegar",
    "nameEs": "Vinagre blanco",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-condiments",
  "slug": "condiments",
  "title": "Condiments & Sauces",
  "titleEs": "Condimentos y salsas",
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
    "id": "groceryItem-condiments-tabasco",
    "name": "Tabasco",
    "nameEs": "Tabasco",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-red-hot-sauce-valentina",
    "name": "Red Hot Sauce (Valentina)",
    "nameEs": "Salsa picante roja (Valentina)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-green-hot-sauce",
    "name": "Green Hot Sauce",
    "nameEs": "Salsa picante verde",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-fresh-salsa",
    "name": "Fresh Salsa",
    "nameEs": "Salsa fresca",
    "unit": "package"
   },
   {
    "id": "groceryItem-condiments-soy-sauce",
    "name": "Soy Sauce",
    "nameEs": "Salsa de soya",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-condiments-tomato-sauce",
    "name": "Tomato Sauce",
    "nameEs": "Puré de tomate",
    "unit": "can"
   },
   {
    "id": "groceryItem-condiments-kosher-pickles",
    "name": "Kosher Pickles",
    "nameEs": "Pepinillos kosher",
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
    "id": "groceryItem-condiments-kosher-salt",
    "name": "Kosher Salt",
    "nameEs": "Sal kosher",
    "unit": "package"
   },
   {
    "id": "groceryItem-condiments-sea-salt",
    "name": "Sea Salt",
    "nameEs": "Sal de mar",
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
    "id": "groceryItem-dressings-italian-dressing",
    "name": "Italian Dressing",
    "nameEs": "Aderezo italiano",
    "unit": "bottle"
   },
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
    "id": "groceryItem-dressings-thousand-island-dressing",
    "name": "Thousand Island Dressing",
    "nameEs": "Aderezo mil islas",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-blue-cheese-dressing",
    "name": "Blue Cheese Dressing",
    "nameEs": "Aderezo de queso azul",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-balsamic-dressing",
    "name": "Balsamic Dressing",
    "nameEs": "Aderezo balsámico",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-light-balsamic-dressing",
    "name": "Light Balsamic Dressing",
    "nameEs": "Aderezo balsámico light",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-mango-dressing",
    "name": "Mango Dressing",
    "nameEs": "Aderezo de mango",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-dressings-soy-dressing",
    "name": "Soy Dressing",
    "nameEs": "Aderezo de soya",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-breakfast",
  "slug": "breakfast",
  "title": "Cereal & Breakfast",
  "titleEs": "Cereales y desayuno",
  "items": [
   {
    "id": "groceryItem-breakfast-cheerios",
    "name": "Cheerios",
    "nameEs": "Cheerios",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-apple-cinnamon-cheerios",
    "name": "Apple Cinnamon Cheerios",
    "nameEs": "Cheerios manzana canela",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-special-k",
    "name": "Special K",
    "nameEs": "Special K",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-raisin-bran",
    "name": "Raisin Bran",
    "nameEs": "Raisin Bran",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-bran-flakes",
    "name": "Bran Flakes",
    "nameEs": "Bran Flakes",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-corn-flakes",
    "name": "Corn Flakes",
    "nameEs": "Corn Flakes",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-frosted-flakes",
    "name": "Frosted Flakes",
    "nameEs": "Zucaritas",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-froot-loops",
    "name": "Froot Loops",
    "nameEs": "Froot Loops",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-corn-pops",
    "name": "Corn Pops",
    "nameEs": "Corn Pops",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-choco-krispis",
    "name": "Choco Krispis",
    "nameEs": "Choco Krispis",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-cini-minis",
    "name": "Cini-Minis",
    "nameEs": "Cini-Minis",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-crusli",
    "name": "Crüsli",
    "nameEs": "Crüsli",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-kellogg-s-variety-pack",
    "name": "Kellogg's Variety Pack",
    "nameEs": "Kellogg's paquete surtido",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-granola",
    "name": "Granola",
    "nameEs": "Granola",
    "unit": "package"
   },
   {
    "id": "groceryItem-breakfast-quaker-oatmeal",
    "name": "Quaker Oatmeal",
    "nameEs": "Avena Quaker",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-instant-oatmeal",
    "name": "Instant Oatmeal",
    "nameEs": "Avena instantánea",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-pancake-mix",
    "name": "Pancake Mix",
    "nameEs": "Harina para hot cakes",
    "unit": "box"
   },
   {
    "id": "groceryItem-breakfast-breakfast-bars",
    "name": "Breakfast Bars",
    "nameEs": "Barras de cereal",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-pantry",
  "slug": "pantry",
  "title": "Pantry & Canned Goods",
  "titleEs": "Despensa y enlatados",
  "items": [
   {
    "id": "groceryItem-pantry-tuna-in-water",
    "name": "Tuna in Water",
    "nameEs": "Atún en agua",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-tuna-in-oil",
    "name": "Tuna in Oil",
    "nameEs": "Atún en aceite",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-green-olives",
    "name": "Green Olives",
    "nameEs": "Aceitunas verdes",
    "unit": "jar"
   },
   {
    "id": "groceryItem-pantry-black-olives",
    "name": "Black Olives",
    "nameEs": "Aceitunas negras",
    "unit": "jar"
   },
   {
    "id": "groceryItem-pantry-evaporated-milk",
    "name": "Evaporated Milk",
    "nameEs": "Leche evaporada",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-condensed-milk-la-lechera",
    "name": "Condensed Milk (La Lechera)",
    "nameEs": "Leche condensada (La Lechera)",
    "unit": "can"
   },
   {
    "id": "groceryItem-pantry-chicken-broth",
    "name": "Chicken Broth",
    "nameEs": "Caldo de pollo",
    "unit": "carton"
   },
   {
    "id": "groceryItem-pantry-canned-tomatoes",
    "name": "Canned Tomatoes",
    "nameEs": "Tomate enlatado",
    "unit": "can"
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
   },
   {
    "id": "groceryItem-pantry-bacon-bits",
    "name": "Bacon Bits",
    "nameEs": "Trocitos de tocino",
    "unit": "package"
   },
   {
    "id": "groceryItem-pantry-croutons",
    "name": "Croutons",
    "nameEs": "Crutones",
    "unit": "package"
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
    "id": "groceryItem-snacks-potato-chips-lay-s",
    "name": "Potato Chips (Lay's)",
    "nameEs": "Papas fritas (Sabritas)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-pringles",
    "name": "Pringles",
    "nameEs": "Pringles",
    "unit": "can"
   },
   {
    "id": "groceryItem-snacks-tortilla-chips",
    "name": "Tortilla Chips",
    "nameEs": "Totopos",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-doritos-nacho",
    "name": "Doritos Nacho",
    "nameEs": "Doritos Nacho",
    "unit": "bag"
   },
   {
    "id": "groceryItem-snacks-corn-chips",
    "name": "Corn Chips",
    "nameEs": "Fritos",
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
    "id": "groceryItem-snacks-butter-microwave-popcorn",
    "name": "Butter Microwave Popcorn",
    "nameEs": "Palomitas con mantequilla para microondas",
    "unit": "box"
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
    "id": "groceryItem-snacks-peanuts",
    "name": "Peanuts",
    "nameEs": "Cacahuates",
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
    "id": "groceryItem-snacks-cheese-dip",
    "name": "Cheese Dip",
    "nameEs": "Dip de queso",
    "unit": "jar"
   },
   {
    "id": "groceryItem-snacks-onion-dip",
    "name": "Onion Dip",
    "nameEs": "Dip de cebolla",
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
    "id": "groceryItem-snacks-assorted-cookies",
    "name": "Assorted Cookies",
    "nameEs": "Galletas surtidas",
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
    "id": "groceryItem-snacks-milky-way",
    "name": "Milky Way",
    "nameEs": "Milky Way",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-toblerone",
    "name": "Toblerone",
    "nameEs": "Toblerone",
    "unit": "piece"
   },
   {
    "id": "groceryItem-snacks-dark-chocolate",
    "name": "Dark Chocolate",
    "nameEs": "Chocolate amargo",
    "unit": "piece"
   }
  ]
 },
 {
  "id": "groceryCategory-frozen",
  "slug": "frozen",
  "title": "Frozen",
  "titleEs": "Congelados",
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
    "id": "groceryItem-frozen-frozen-waffles",
    "name": "Frozen Waffles",
    "nameEs": "Waffles congelados",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-french-fries",
    "name": "French Fries",
    "nameEs": "Papas a la francesa",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-fish-sticks",
    "name": "Fish Sticks",
    "nameEs": "Dedos de pescado",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-cooked-large-shrimp",
    "name": "Cooked Large Shrimp",
    "nameEs": "Camarón grande cocido",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-beef-tacos",
    "name": "Beef Tacos",
    "nameEs": "Tacos de res",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-chicken-tacos",
    "name": "Chicken Tacos",
    "nameEs": "Tacos de pollo",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-meat-lasagna",
    "name": "Meat Lasagna",
    "nameEs": "Lasaña de carne",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-veggie-lasagna",
    "name": "Veggie Lasagna",
    "nameEs": "Lasaña de verduras",
    "unit": "box"
   },
   {
    "id": "groceryItem-frozen-frozen-strawberries-for-smoothies",
    "name": "Frozen Strawberries (for smoothies)",
    "nameEs": "Fresas congeladas (para smoothies)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-blueberries-for-smoothies",
    "name": "Frozen Blueberries (for smoothies)",
    "nameEs": "Moras azules congeladas (para smoothies)",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-frozen-mixed-fruit",
    "name": "Frozen Mixed Fruit",
    "nameEs": "Fruta mixta congelada",
    "unit": "bag"
   },
   {
    "id": "groceryItem-frozen-vanilla-ice-cream",
    "name": "Vanilla Ice Cream",
    "nameEs": "Helado de vainilla",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-chocolate-ice-cream",
    "name": "Chocolate Ice Cream",
    "nameEs": "Helado de chocolate",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-strawberry-ice-cream",
    "name": "Strawberry Ice Cream",
    "nameEs": "Helado de fresa",
    "unit": "carton"
   },
   {
    "id": "groceryItem-frozen-haagen-dazs-assorted-flavors",
    "name": "Häagen-Dazs (assorted flavors)",
    "nameEs": "Häagen-Dazs (sabores surtidos)",
    "unit": "carton"
   }
  ]
 },
 {
  "id": "groceryCategory-coffeetea",
  "slug": "coffeetea",
  "title": "Coffee & Tea",
  "titleEs": "Café y té",
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
    "id": "groceryItem-coffeetea-espresso",
    "name": "Espresso",
    "nameEs": "Café espresso",
    "unit": "package"
   },
   {
    "id": "groceryItem-coffeetea-coffee-beans",
    "name": "Coffee Beans",
    "nameEs": "Café en grano",
    "unit": "package"
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
    "id": "groceryItem-coffeetea-darjeeling-tea",
    "name": "Darjeeling Tea",
    "nameEs": "Té Darjeeling",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-earl-grey-tea",
    "name": "Earl Grey Tea",
    "nameEs": "Té Earl Grey",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-english-breakfast-tea",
    "name": "English Breakfast Tea",
    "nameEs": "Té English Breakfast",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-green-tea",
    "name": "Green Tea",
    "nameEs": "Té verde",
    "unit": "box"
   },
   {
    "id": "groceryItem-coffeetea-orange-blossom-tea",
    "name": "Orange Blossom Tea",
    "nameEs": "Té de azahar",
    "unit": "box"
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
    "id": "groceryItem-water-still-water-large-jug",
    "name": "Still Water (large jug)",
    "nameEs": "Garrafón de agua",
    "unit": "piece"
   },
   {
    "id": "groceryItem-water-bottled-water-500-ml",
    "name": "Bottled Water 500 ml",
    "nameEs": "Agua embotellada 500 ml",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-bonafont",
    "name": "Bonafont",
    "nameEs": "Bonafont",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-ciel",
    "name": "Ciel",
    "nameEs": "Ciel",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-evian",
    "name": "Evian",
    "nameEs": "Evian",
    "unit": "bottle"
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
    "id": "groceryItem-water-topo-chico",
    "name": "Topo Chico",
    "nameEs": "Topo Chico",
    "unit": "package"
   },
   {
    "id": "groceryItem-water-sparkling-water",
    "name": "Sparkling Water",
    "nameEs": "Agua mineral",
    "unit": "package"
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
    "id": "groceryItem-juices-orange-juice",
    "name": "Orange Juice",
    "nameEs": "Jugo de naranja",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-grapefruit-juice",
    "name": "Grapefruit Juice",
    "nameEs": "Jugo de toronja",
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
    "id": "groceryItem-juices-grape-juice",
    "name": "Grape Juice",
    "nameEs": "Jugo de uva",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-mango-juice",
    "name": "Mango Juice",
    "nameEs": "Jugo de mango",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-tomato-juice",
    "name": "Tomato Juice",
    "nameEs": "Jugo de tomate",
    "unit": "carton"
   },
   {
    "id": "groceryItem-juices-v8",
    "name": "V8",
    "nameEs": "V8",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-clamato",
    "name": "Clamato",
    "nameEs": "Clamato",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-lemonade",
    "name": "Lemonade",
    "nameEs": "Limonada",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-juices-capri-sun",
    "name": "Capri Sun",
    "nameEs": "Capri Sun",
    "unit": "box"
   },
   {
    "id": "groceryItem-juices-minute-maid-juice-boxes",
    "name": "Minute Maid Juice Boxes",
    "nameEs": "Jugos Minute Maid en caja",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-sodas",
  "slug": "sodas",
  "title": "Sodas & Sports Drinks",
  "titleEs": "Refrescos y bebidas deportivas",
  "items": [
   {
    "id": "groceryItem-sodas-coca-cola",
    "name": "Coca-Cola",
    "nameEs": "Coca-Cola",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-coca-cola-light-diet-coke",
    "name": "Coca-Cola Light / Diet Coke",
    "nameEs": "Coca-Cola Light",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-coca-cola-zero",
    "name": "Coca-Cola Zero",
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
    "id": "groceryItem-sodas-diet-pepsi",
    "name": "Diet Pepsi",
    "nameEs": "Pepsi Light",
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
    "nameEs": "Sprite Zero",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-mountain-dew",
    "name": "Mountain Dew",
    "nameEs": "Mountain Dew",
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
    "id": "groceryItem-sodas-ginger-ale",
    "name": "Ginger Ale",
    "nameEs": "Ginger ale",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-sodas-arizona-iced-tea-sweetened",
    "name": "Arizona Iced Tea – Sweetened",
    "nameEs": "Arizona té helado – endulzado",
    "unit": "can"
   },
   {
    "id": "groceryItem-sodas-arizona-iced-tea-unsweetened",
    "name": "Arizona Iced Tea – Unsweetened",
    "nameEs": "Arizona té helado – sin azúcar",
    "unit": "can"
   },
   {
    "id": "groceryItem-sodas-powdered-iced-tea",
    "name": "Powdered Iced Tea",
    "nameEs": "Té helado en polvo",
    "unit": "package"
   },
   {
    "id": "groceryItem-sodas-gatorade-assorted-flavors",
    "name": "Gatorade (assorted flavors)",
    "nameEs": "Gatorade (sabores surtidos)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-sodas-red-bull",
    "name": "Red Bull",
    "nameEs": "Red Bull",
    "unit": "can"
   }
  ]
 },
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
    "id": "groceryItem-beer-corona-barrilito",
    "name": "Corona Barrilito",
    "nameEs": "Corona Barrilito",
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
    "id": "groceryItem-beer-dos-equis-xx-lager",
    "name": "Dos Equis XX Lager",
    "nameEs": "Dos Equis XX Lager",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-beer-bohemia",
    "name": "Bohemia",
    "nameEs": "Bohemia",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-beer-heineken",
    "name": "Heineken",
    "nameEs": "Heineken",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-beer-amstel-ultra",
    "name": "Amstel Ultra",
    "nameEs": "Amstel Ultra",
    "unit": "six-pack"
   },
   {
    "id": "groceryItem-beer-michelob-ultra",
    "name": "Michelob Ultra",
    "nameEs": "Michelob Ultra",
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
    "id": "groceryItem-wine-chianti",
    "name": "Chianti",
    "nameEs": "Chianti",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-wine-rioja",
    "name": "Rioja",
    "nameEs": "Rioja",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-wine-red-zinfandel",
    "name": "Red Zinfandel",
    "nameEs": "Zinfandel tinto",
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
    "id": "groceryItem-wine-chablis",
    "name": "Chablis",
    "nameEs": "Chablis",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-wine-rose",
    "name": "Rosé",
    "nameEs": "Rosado",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-champagne",
  "slug": "champagne",
  "title": "Champagne & Sparkling",
  "titleEs": "Champagne y espumosos",
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
   }
  ]
 },
 {
  "id": "groceryCategory-tequila",
  "slug": "tequila",
  "title": "Tequila & Mezcal",
  "titleEs": "Tequila y mezcal",
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
    "id": "groceryItem-tequila-herradura-blanco",
    "name": "Herradura Blanco",
    "nameEs": "Herradura Blanco",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-herradura-reposado",
    "name": "Herradura Reposado",
    "nameEs": "Herradura Reposado",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-3-generaciones",
    "name": "3 Generaciones",
    "nameEs": "3 Generaciones",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-cazadores",
    "name": "Cazadores",
    "nameEs": "Cazadores",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-cuervo-especial",
    "name": "Cuervo Especial",
    "nameEs": "Cuervo Especial",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-casamigos",
    "name": "Casamigos",
    "nameEs": "Casamigos",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-patron-silver",
    "name": "Patrón Silver",
    "nameEs": "Patrón Silver",
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
    "name": "Mezcal 400 Conejos",
    "nameEs": "Mezcal 400 Conejos",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-tequila-mezcal-montelobos",
    "name": "Mezcal Montelobos",
    "nameEs": "Mezcal Montelobos",
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
    "id": "groceryItem-whisky-buchanan-s",
    "name": "Buchanan's",
    "nameEs": "Buchanan's",
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
    "id": "groceryItem-whisky-canadian-club",
    "name": "Canadian Club",
    "nameEs": "Canadian Club",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-whisky-macallan-12",
    "name": "Macallan 12",
    "nameEs": "Macallan 12",
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
    "id": "groceryItem-rum-bacardi-blanco",
    "name": "Bacardí Blanco",
    "nameEs": "Bacardí Blanco",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-rum-bacardi-anejo",
    "name": "Bacardí Añejo",
    "nameEs": "Bacardí Añejo",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-rum-appleton-white",
    "name": "Appleton White",
    "nameEs": "Appleton Blanco",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-rum-captain-morgan",
    "name": "Captain Morgan",
    "nameEs": "Captain Morgan",
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
    "id": "groceryItem-vodka-absolut-assorted-flavors",
    "name": "Absolut (assorted flavors)",
    "nameEs": "Absolut (sabores surtidos)",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-vodka-grey-goose",
    "name": "Grey Goose",
    "nameEs": "Grey Goose",
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
    "id": "groceryItem-vodka-stolichnaya",
    "name": "Stolichnaya",
    "nameEs": "Stolichnaya",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-vodka-smirnoff",
    "name": "Smirnoff",
    "nameEs": "Smirnoff",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-vodka-wyborowa",
    "name": "Wyborowa",
    "nameEs": "Wyborowa",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-vodka-tito-s",
    "name": "Tito's",
    "nameEs": "Tito's",
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
   }
  ]
 },
 {
  "id": "groceryCategory-liqueurs",
  "slug": "liqueurs",
  "title": "Liqueurs & Spirits",
  "titleEs": "Licores y digestivos",
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
    "id": "groceryItem-liqueurs-amaretto",
    "name": "Amaretto",
    "nameEs": "Amaretto",
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
    "id": "groceryItem-liqueurs-frangelico",
    "name": "Frangelico",
    "nameEs": "Frangelico",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-galliano",
    "name": "Galliano",
    "nameEs": "Galliano",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-sambuca",
    "name": "Sambuca",
    "nameEs": "Sambuca",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-midori",
    "name": "Midori",
    "nameEs": "Midori",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-damiana",
    "name": "Damiana",
    "nameEs": "Damiana",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-aperol",
    "name": "Aperol",
    "nameEs": "Aperol",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-martell-cognac",
    "name": "Martell Cognac",
    "nameEs": "Coñac Martell",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-liqueurs-tio-pepe-sherry",
    "name": "Tío Pepe Sherry",
    "nameEs": "Jerez Tío Pepe",
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
    "id": "groceryItem-mixers-natural-syrup",
    "name": "Natural Syrup",
    "nameEs": "Jarabe natural",
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
    "id": "groceryItem-mixers-tajin",
    "name": "Tajín",
    "nameEs": "Tajín",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-mixers-chamoy",
    "name": "Chamoy",
    "nameEs": "Chamoy",
    "unit": "bottle"
   }
  ]
 },
 {
  "id": "groceryCategory-baby",
  "slug": "baby",
  "title": "Baby Items",
  "titleEs": "Artículos para bebé",
  "items": [
   {
    "id": "groceryItem-baby-diapers-specify-size",
    "name": "Diapers (specify size)",
    "nameEs": "Pañales (indique talla)",
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
    "nameEs": "Fórmula para bebé (indique marca)",
    "unit": "can"
   },
   {
    "id": "groceryItem-baby-baby-food",
    "name": "Baby Food",
    "nameEs": "Papillas",
    "unit": "jar"
   }
  ]
 },
 {
  "id": "groceryCategory-personal",
  "slug": "personal",
  "title": "Personal Care",
  "titleEs": "Cuidado personal",
  "items": [
   {
    "id": "groceryItem-personal-sunscreen",
    "name": "Sunscreen",
    "nameEs": "Bloqueador solar",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-aloe-vera-gel",
    "name": "Aloe Vera Gel",
    "nameEs": "Gel de aloe vera",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-insect-repellent",
    "name": "Insect Repellent",
    "nameEs": "Repelente de insectos",
    "unit": "bottle"
   },
   {
    "id": "groceryItem-personal-toothpaste",
    "name": "Toothpaste",
    "nameEs": "Pasta de dientes",
    "unit": "piece"
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
    "id": "groceryItem-personal-razors",
    "name": "Razors",
    "nameEs": "Rastrillos",
    "unit": "package"
   },
   {
    "id": "groceryItem-personal-pain-reliever-tylenol-advil",
    "name": "Pain Reliever (Tylenol / Advil)",
    "nameEs": "Analgésico (Tylenol / Advil)",
    "unit": "box"
   }
  ]
 },
 {
  "id": "groceryCategory-household",
  "slug": "household",
  "title": "Cleaning & Household",
  "titleEs": "Limpieza y hogar",
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
 }
];
