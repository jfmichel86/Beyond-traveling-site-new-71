// Breakfast recipes, per ADULT portion, as the cook reviews them on /cocina/recetas.
// Amounts are in kitchen measures (taza, cucharada, piezas…). `sheetQty` / `sheetUnit`
// are the original grams/ml from the recipe spreadsheet and `factor` converts back:
//   sheet amount = qty × factor
// Portion rules: adult 1 · child (2–12) ½ · toddler (under 2) ¼ · +10% margin.

export type KitchenIngredient = {
  name: string;
  qty: number;
  unit: [string, string];
  step: number;
  type: "base" | "opcion" | "basico";
  note?: string;
  sheetQty: number;
  sheetUnit: string;
  factor: number;
};

export type KitchenDish = {
  id: string;
  name: string;
  en: string;
  img: string;
  ingredients: KitchenIngredient[];
};

export const BREAKFAST_RECIPES: KitchenDish[] = [
 {
  "id": "platn-de-fruta-de-temporada",
  "name": "Platón de fruta de temporada",
  "en": "Fresh Seasonal Fruit Platter",
  "img": "/villa-dining-menu/dishes/fresh-seasonal-fruit-platter.jpg",
  "ingredients": [
   {
    "name": "Papaya",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Piña",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Melón",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Sandía",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Fresas",
    "qty": 3,
    "unit": [
     "fresa",
     "fresas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Limón",
    "qty": 0.25,
    "unit": [
     "limón",
     "limones"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Para servir"
   }
  ]
 },
 {
  "id": "jugo-de-naranja",
  "name": "Jugo de naranja",
  "en": "Fresh Orange Juice",
  "img": "/villa-dining-menu/dishes/fresh-orange-juice-or-green-juice.jpg",
  "ingredients": [
   {
    "name": "Naranja para jugo",
    "qty": 4,
    "unit": [
     "naranja",
     "naranjas"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 0.5,
    "sheetUnit": "kg",
    "factor": 0.125,
    "note": "≈ 250 ml de jugo"
   }
  ]
 },
 {
  "id": "jugo-verde",
  "name": "Jugo verde",
  "en": "Green Juice",
  "img": "/villa-dining-menu/dishes/fresh-orange-juice-or-green-juice.jpg",
  "ingredients": [
   {
    "name": "Apio",
    "qty": 1.0,
    "unit": [
     "rama",
     "ramas"
    ],
    "step": 0.5,
    "type": "opcion",
    "sheetQty": 50,
    "sheetUnit": "g",
    "factor": 50
   },
   {
    "name": "Pepino",
    "qty": 0.5,
    "unit": [
     "pepino",
     "pepinos"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 100,
    "sheetUnit": "g",
    "factor": 200
   },
   {
    "name": "Espinaca",
    "qty": 1.0,
    "unit": [
     "puño",
     "puños"
    ],
    "step": 0.5,
    "type": "opcion",
    "sheetQty": 20,
    "sheetUnit": "g",
    "factor": 20
   },
   {
    "name": "Piña",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Manzana verde",
    "qty": 0.5,
    "unit": [
     "manzana",
     "manzanas"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Limón",
    "qty": 0.5,
    "unit": [
     "limón",
     "limones"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Jengibre",
    "qty": 1,
    "unit": [
     "trocito",
     "trocitos"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 5,
    "sheetUnit": "g",
    "factor": 5
   }
  ]
 },
 {
  "id": "caf-y-crema",
  "name": "Café y crema",
  "en": "Coffee and Creamer",
  "img": "/villa-dining-menu/dishes/coffee-and-creamer.jpg",
  "ingredients": [
   {
    "name": "Café molido",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "g",
    "factor": 7.5,
    "note": "≈ 2 tazas"
   },
   {
    "name": "Sustituto de crema (Coffee-mate)",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Leche entera",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Azúcar",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "basico",
    "sheetQty": 8,
    "sheetUnit": "g",
    "factor": 4
   }
  ]
 },
 {
  "id": "granola-con-yogurt",
  "name": "Granola con yogurt",
  "en": "Granola and Yogurt",
  "img": "/villa-dining-menu/dishes/granola-and-yogurt.jpg",
  "ingredients": [
   {
    "name": "Yogurt natural o griego",
    "qty": 0.6666666666666666,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 150,
    "sheetUnit": "g",
    "factor": 240
   },
   {
    "name": "Granola",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Miel",
    "qty": 0.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 20
   }
  ]
 },
 {
  "id": "chilaquiles-rojos-o-verdes",
  "name": "Chilaquiles rojos o verdes",
  "en": "Red or Green Chilaquiles",
  "img": "/villa-dining-menu/dishes/chilaquiles.jpg",
  "ingredients": [
   {
    "name": "Tortillas de maíz",
    "qty": 4,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 4,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Para freír en totopos"
   },
   {
    "name": "Aceite vegetal",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "ml",
    "factor": 15,
    "note": "Para freír"
   },
   {
    "name": "Crema",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Queso fresco",
    "qty": 3.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 25,
    "sheetUnit": "g",
    "factor": 8
   },
   {
    "name": "Cebolla blanca",
    "qty": 1.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "g",
    "factor": 10,
    "note": "Para decorar"
   },
   {
    "name": "Frijoles refritos",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 250,
    "note": "Guarnición"
   },
   {
    "name": "Salsa verde: tomate verde",
    "qty": 3,
    "unit": [
     "tomate verde",
     "tomates verdes"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 120,
    "sheetUnit": "g",
    "factor": 40,
    "note": "Si piden verdes"
   },
   {
    "name": "Salsa verde: chile serrano",
    "qty": 0.5,
    "unit": [
     "chile serrano",
     "chiles serranos"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Salsa verde: cilantro",
    "qty": 3,
    "unit": [
     "ramita",
     "ramitas"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 3,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Salsa roja: jitomate",
    "qty": 1,
    "unit": [
     "jitomate",
     "jitomates"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 150,
    "sheetUnit": "g",
    "factor": 120,
    "note": "Si piden rojos"
   },
   {
    "name": "Salsa roja: chile guajillo",
    "qty": 1,
    "unit": [
     "chile guajillo",
     "chiles guajillo"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Salsa: cebolla y ajo",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 20,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Con huevo: huevos",
    "qty": 2,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Si piden con huevo"
   },
   {
    "name": "Con pollo: pechuga de pollo",
    "qty": 120,
    "unit": [
     "g",
     "g"
    ],
    "step": 10,
    "type": "opcion",
    "sheetQty": 120,
    "sheetUnit": "g",
    "factor": 1,
    "note": "Si piden con pollo"
   }
  ]
 },
 {
  "id": "huevos-rancheros",
  "name": "Huevos rancheros",
  "en": "Huevos Rancheros",
  "img": "/villa-dining-menu/dishes/huevos-rancheros.jpg",
  "ingredients": [
   {
    "name": "Huevos",
    "qty": 2,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Tortillas de maíz",
    "qty": 2,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Jitomate",
    "qty": 1,
    "unit": [
     "jitomate",
     "jitomates"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 120,
    "sheetUnit": "g",
    "factor": 120,
    "note": "Salsa ranchera"
   },
   {
    "name": "Cebolla blanca",
    "qty": 2.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 25,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Chile serrano",
    "qty": 0.5,
    "unit": [
     "chile serrano",
     "chiles serranos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Ajo",
    "qty": 0.5,
    "unit": [
     "diente de ajo",
     "dientes de ajo"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "diente",
    "factor": 1
   },
   {
    "name": "Frijoles refritos",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 250
   },
   {
    "name": "Queso fresco",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "g",
    "factor": 8
   },
   {
    "name": "Aguacate",
    "qty": 0.25,
    "unit": [
     "aguacate",
     "aguacates"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Aceite vegetal",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "ml",
    "factor": 15
   }
  ]
 },
 {
  "id": "huevos-a-la-mexicana",
  "name": "Huevos a la mexicana",
  "en": "Huevos a la Mexicana",
  "img": "/villa-dining-menu/dishes/huevos-a-la-mexicana.jpg",
  "ingredients": [
   {
    "name": "Huevos",
    "qty": 3,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 3,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Jitomate",
    "qty": 0.6666666666666666,
    "unit": [
     "jitomate",
     "jitomates"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Cebolla blanca",
    "qty": 2.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 25,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Chile serrano",
    "qty": 0.5,
    "unit": [
     "chile serrano",
     "chiles serranos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Aceite vegetal",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "ml",
    "factor": 5
   },
   {
    "name": "Frijoles refritos",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 250,
    "note": "Guarnición"
   },
   {
    "name": "Tortillas de maíz",
    "qty": 3,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 3,
    "sheetUnit": "pza",
    "factor": 1
   }
  ]
 },
 {
  "id": "huevos-al-gusto",
  "name": "Huevos al gusto",
  "en": "Eggs Any Style",
  "img": "/villa-dining-menu/dishes/eggs-any-style.jpg",
  "ingredients": [
   {
    "name": "Huevos",
    "qty": 2,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Claras: usar 4 huevos"
   },
   {
    "name": "Mantequilla",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Pan para tostar",
    "qty": 2,
    "unit": [
     "rebanada",
     "rebanadas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "rebanada",
    "factor": 1
   },
   {
    "name": "Omelette: jamón",
    "qty": 2,
    "unit": [
     "rebanada",
     "rebanadas"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 15,
    "note": "Si piden omelette"
   },
   {
    "name": "Omelette: queso",
    "qty": 4.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "opcion",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 8
   },
   {
    "name": "Omelette: champiñones",
    "qty": 3,
    "unit": [
     "champiñón",
     "champiñones"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Omelette: pimiento",
    "qty": 0.25,
    "unit": [
     "pimiento",
     "pimientos"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 160
   }
  ]
 },
 {
  "id": "burrito-de-desayuno",
  "name": "Burrito de desayuno",
  "en": "Breakfast Burrito",
  "img": "/villa-dining-menu/dishes/breakfast-burrito.jpg",
  "ingredients": [
   {
    "name": "Tortilla de harina grande",
    "qty": 1,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Huevos",
    "qty": 2,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Chorizo",
    "qty": 50,
    "unit": [
     "g",
     "g"
    ],
    "step": 10,
    "type": "base",
    "sheetQty": 50,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Papa",
    "qty": 0.3333333333333333,
    "unit": [
     "papa",
     "papas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Queso cheddar",
    "qty": 3.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 25,
    "sheetUnit": "g",
    "factor": 8
   },
   {
    "name": "Cebolla blanca",
    "qty": 1.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Salsa en frasco",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 15
   },
   {
    "name": "Aguacate",
    "qty": 0.25,
    "unit": [
     "aguacate",
     "aguacates"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   }
  ]
 },
 {
  "id": "molletes",
  "name": "Molletes",
  "en": "Molletes",
  "img": "/villa-dining-menu/dishes/molletes.jpg",
  "ingredients": [
   {
    "name": "Bolillo",
    "qty": 1,
    "unit": [
     "bolillo",
     "bolillos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Frijoles refritos",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 250
   },
   {
    "name": "Queso Oaxaca o mozzarella",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 50,
    "sheetUnit": "g",
    "factor": 100
   },
   {
    "name": "Mantequilla",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Pico de gallo: jitomate",
    "qty": 0.3333333333333333,
    "unit": [
     "jitomate",
     "jitomates"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Pico de gallo: cebolla",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Pico de gallo: cilantro",
    "qty": 2,
    "unit": [
     "ramita",
     "ramitas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Pico de gallo: chile serrano",
    "qty": 0.25,
    "unit": [
     "chile serrano",
     "chiles serranos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Pico de gallo: limón",
    "qty": 0.25,
    "unit": [
     "limón",
     "limones"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   }
  ]
 },
 {
  "id": "enfrijoladas",
  "name": "Enfrijoladas",
  "en": "Enfrijoladas",
  "img": "/villa-dining-menu/dishes/enfrijoladas.jpg",
  "ingredients": [
   {
    "name": "Tortillas de maíz",
    "qty": 3,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 3,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Frijoles negros",
    "qty": 0.6666666666666666,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 150,
    "sheetUnit": "g",
    "factor": 250,
    "note": "Para la salsa de frijol"
   },
   {
    "name": "Crema",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Queso fresco",
    "qty": 4.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 8
   },
   {
    "name": "Cebolla blanca",
    "qty": 1.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Aceite vegetal",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 15,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Relleno de huevo: huevos",
    "qty": 2,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 2,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Si piden con huevo"
   },
   {
    "name": "Relleno de pollo: pechuga",
    "qty": 100,
    "unit": [
     "g",
     "g"
    ],
    "step": 10,
    "type": "opcion",
    "sheetQty": 100,
    "sheetUnit": "g",
    "factor": 1,
    "note": "Si piden con pollo"
   },
   {
    "name": "Relleno de queso: queso fresco",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 100,
    "note": "Si piden con queso"
   }
  ]
 },
 {
  "id": "quesadillas",
  "name": "Quesadillas",
  "en": "Quesadillas",
  "img": "/villa-dining-menu/dishes/quesadillas.jpg",
  "ingredients": [
   {
    "name": "Tortillas (maíz o harina)",
    "qty": 3,
    "unit": [
     "tortilla",
     "tortillas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 3,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Queso Oaxaca",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 100
   },
   {
    "name": "Salsa en frasco",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 15
   },
   {
    "name": "Aguacate",
    "qty": 0.25,
    "unit": [
     "aguacate",
     "aguacates"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Con champiñones",
    "qty": 6,
    "unit": [
     "champiñón",
     "champiñones"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Con pollo: pechuga",
    "qty": 80,
    "unit": [
     "g",
     "g"
    ],
    "step": 10,
    "type": "opcion",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Con verduras: pimiento",
    "qty": 0.25,
    "unit": [
     "pimiento",
     "pimientos"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 160
   },
   {
    "name": "Con verduras: calabacita",
    "qty": 0.25,
    "unit": [
     "calabacita",
     "calabacitas"
    ],
    "step": 0.25,
    "type": "opcion",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 200
   }
  ]
 },
 {
  "id": "pan-con-aguacate",
  "name": "Pan con aguacate",
  "en": "Avocado Toast",
  "img": "/villa-dining-menu/dishes/avocado-toast.jpg",
  "ingredients": [
   {
    "name": "Pan de masa madre",
    "qty": 2,
    "unit": [
     "rebanada",
     "rebanadas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 2,
    "sheetUnit": "rebanada",
    "factor": 1
   },
   {
    "name": "Aguacate",
    "qty": 1,
    "unit": [
     "aguacate",
     "aguacates"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Aceite de oliva extra virgen",
    "qty": 1.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 5,
    "sheetUnit": "ml",
    "factor": 5
   },
   {
    "name": "Jitomate cherry",
    "qty": 4,
    "unit": [
     "jitomate cherry",
     "jitomates cherry"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Limón",
    "qty": 0.25,
    "unit": [
     "limón",
     "limones"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Huevo",
    "qty": 1,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Si lo piden con huevo"
   },
   {
    "name": "Sal y pimienta",
    "qty": 1,
    "unit": [
     "pizca",
     "pizcas"
    ],
    "step": 1,
    "type": "basico",
    "sheetQty": 1,
    "sheetUnit": "pizca",
    "factor": 1
   }
  ]
 },
 {
  "id": "pan-o-bagel-con-salmn-ahumado",
  "name": "Pan o bagel con salmón ahumado",
  "en": "Smoked Salmon Toast or Bagel",
  "img": "/villa-dining-menu/dishes/smoked-salmon-toast-or-bagel.jpg",
  "ingredients": [
   {
    "name": "Bagel o pan",
    "qty": 1,
    "unit": [
     "bagel",
     "bagels"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1,
    "note": "Bagel, o 2 rebanadas de pan"
   },
   {
    "name": "Salmón ahumado",
    "qty": 60,
    "unit": [
     "g",
     "g"
    ],
    "step": 10,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Queso crema",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 15
   },
   {
    "name": "Alcaparras",
    "qty": 1.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 5,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Cebolla morada",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Cebollín",
    "qty": 1.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Limón amarillo",
    "qty": 0.25,
    "unit": [
     "limón",
     "limones"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.25,
    "sheetUnit": "pza",
    "factor": 1
   }
  ]
 },
 {
  "id": "hot-cakes",
  "name": "Hot cakes",
  "en": "Pancakes",
  "img": "/villa-dining-menu/dishes/pancakes.jpg",
  "ingredients": [
   {
    "name": "Harina para hot cakes",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 90,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Leche entera",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 100,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Huevo",
    "qty": 0.5,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Mantequilla",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Miel de maple",
    "qty": 2.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Fresas",
    "qty": 5,
    "unit": [
     "fresa",
     "fresas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 50,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Plátano",
    "qty": 0.5,
    "unit": [
     "plátano",
     "plátanos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   }
  ]
 },
 {
  "id": "waffles",
  "name": "Waffles",
  "en": "Waffles",
  "img": "/villa-dining-menu/dishes/waffles.jpg",
  "ingredients": [
   {
    "name": "Harina para hot cakes",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 90,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Leche entera",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 100,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Huevo",
    "qty": 0.5,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Mantequilla",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Miel de maple",
    "qty": 2.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Frutos rojos",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 140
   },
   {
    "name": "Nutella",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "opcion",
    "sheetQty": 20,
    "sheetUnit": "g",
    "factor": 20,
    "note": "Si la piden"
   }
  ]
 },
 {
  "id": "pan-francs",
  "name": "Pan francés",
  "en": "French Toast",
  "img": "/villa-dining-menu/dishes/french-toast.jpg",
  "ingredients": [
   {
    "name": "Pan blanco o brioche",
    "qty": 3,
    "unit": [
     "rebanada",
     "rebanadas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 3,
    "sheetUnit": "rebanada",
    "factor": 1
   },
   {
    "name": "Huevo",
    "qty": 1,
    "unit": [
     "huevo",
     "huevos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Leche entera",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Mantequilla",
    "qty": 2.0,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Miel de maple",
    "qty": 2.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "ml",
    "factor": 15
   },
   {
    "name": "Fruta de temporada",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Azúcar",
    "qty": 1.25,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "basico",
    "sheetQty": 5,
    "sheetUnit": "g",
    "factor": 4
   },
   {
    "name": "Canela",
    "qty": 1,
    "unit": [
     "pizca",
     "pizcas"
    ],
    "step": 1,
    "type": "basico",
    "sheetQty": 1,
    "sheetUnit": "g",
    "factor": 1
   },
   {
    "name": "Vainilla",
    "qty": 0.3333333333333333,
    "unit": [
     "cucharadita",
     "cucharaditas"
    ],
    "step": 0.5,
    "type": "basico",
    "sheetQty": 2,
    "sheetUnit": "ml",
    "factor": 5
   }
  ]
 },
 {
  "id": "avena",
  "name": "Avena",
  "en": "Oatmeal Bowl",
  "img": "/villa-dining-menu/dishes/oatmeal-bowl.jpg",
  "ingredients": [
   {
    "name": "Avena",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 50,
    "sheetUnit": "g",
    "factor": 90
   },
   {
    "name": "Leche entera",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 200,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Plátano",
    "qty": 0.5,
    "unit": [
     "plátano",
     "plátanos"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 0.5,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Moras azules",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 140
   },
   {
    "name": "Semillas de chía",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 10
   },
   {
    "name": "Miel",
    "qty": 0.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 20
   }
  ]
 },
 {
  "id": "parfait-tropical-de-yogurt",
  "name": "Parfait tropical de yogurt",
  "en": "Tropical Yogurt Parfait",
  "img": "/villa-dining-menu/dishes/tropical-yogurt-parfait.jpg",
  "ingredients": [
   {
    "name": "Yogurt griego",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 170,
    "sheetUnit": "g",
    "factor": 240
   },
   {
    "name": "Granola",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 40,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Miel",
    "qty": 0.5,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 20
   },
   {
    "name": "Mango",
    "qty": 0.5,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "g",
    "factor": 150
   },
   {
    "name": "Piña",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 60,
    "sheetUnit": "g",
    "factor": 150
   }
  ]
 },
 {
  "id": "bowl-de-aa-o-smoothie",
  "name": "Bowl de açaí o smoothie",
  "en": "Açaí or Smoothie Bowl",
  "img": "/villa-dining-menu/dishes/acai-or-smoothie-bowl.jpg",
  "ingredients": [
   {
    "name": "Pulpa de açaí congelada",
    "qty": 1,
    "unit": [
     "paquete",
     "paquetes"
    ],
    "step": 1,
    "type": "opcion",
    "sheetQty": 1,
    "sheetUnit": "paquete",
    "factor": 1
   },
   {
    "name": "Frutos rojos congelados",
    "qty": 0.75,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 100,
    "sheetUnit": "g",
    "factor": 140
   },
   {
    "name": "Plátano",
    "qty": 1,
    "unit": [
     "plátano",
     "plátanos"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Leche de almendra",
    "qty": 0.3333333333333333,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 80,
    "sheetUnit": "ml",
    "factor": 240
   },
   {
    "name": "Granola",
    "qty": 0.25,
    "unit": [
     "taza",
     "tazas"
    ],
    "step": 0.25,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 120
   },
   {
    "name": "Coco rallado",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 10,
    "sheetUnit": "g",
    "factor": 5
   },
   {
    "name": "Fresas",
    "qty": 3,
    "unit": [
     "fresa",
     "fresas"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 10
   }
  ]
 },
 {
  "id": "bagel-dulce",
  "name": "Bagel dulce",
  "en": "Sweet Bagel",
  "img": "/villa-dining-menu/dishes/sweet-bagel.jpg",
  "ingredients": [
   {
    "name": "Bagel",
    "qty": 1,
    "unit": [
     "bagel",
     "bagels"
    ],
    "step": 1,
    "type": "base",
    "sheetQty": 1,
    "sheetUnit": "pza",
    "factor": 1
   },
   {
    "name": "Queso crema",
    "qty": 2.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 30,
    "sheetUnit": "g",
    "factor": 15
   },
   {
    "name": "Mermelada",
    "qty": 1.0,
    "unit": [
     "cucharada",
     "cucharadas"
    ],
    "step": 0.5,
    "type": "base",
    "sheetQty": 20,
    "sheetUnit": "g",
    "factor": 20
   }
  ]
 }
];
