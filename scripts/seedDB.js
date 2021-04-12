const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groceryList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ingredientSeedData = [
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Grain",
    name: "Pasta",
  },
  {
    type: "Vegetable",
    name: "Green Pepper",
  },
  {
    type: "Meat",
    name: "Ground Beef",
  },
  {
    type: "Dairy",
    name: "Milk",
  },
  {
    type: "Dairy",
    name: "Cheese",
  },
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Peach",
  },
  {
    type: "Meat",
    name: "Ribeye",
  },
  {
    type: "Vegetable",
    name: "Potato",
  },
  {
    type: "Dairy",
    name: "Cream",
  },
  {
    type: "Meat",
    name: "New York Strip",
  },
  {
    type: "Other",
    name: "Flour",
  },
  {
    type: "Other",
    name: "Sugar",
  },
  {
    type: "Other",
    name: "Baking Powder",
  },
  {
    type: "Other",
    name: "Salt",
  },
  {
    type: "Dairy",
    name: "Butter",
  },
  {
    type: "Other",
    name: "Eggs",
  },
  {
    type: "Other",
    name: "Vegetable Oil",
  },
  {
    type: "Other",
    name: "Syrup",
  },
  {
    type: "Grain",
    name: "Fettuccini Noodles",
  },
  {
    type: "Meat",
    name: "Raw Shrimp",
  },
  {
    type: "Other",
    name: "Olive Oil",
  },
  {
    type: "Vegetable",
    name: "Onion",
  },
  {
    type: "Vegetable",
    name: "Garlic Clove",
  },
  {
    type: "Other",
    name: "White Wine",
  },
  {
    type: "Dairy",
    name: "Whipping Cream",
  },
  {
    type: "Dairy",
    name: "Parmesan Cheese",
  },
  {
    type: "Other",
    name: "Black Pepper",
  },
  {
    type: "Vegetable",
    name: "Parsley",
  },
  {
    type: "Other",
    name: "Paprika",
  },
  {
    type: "Meat",
    name: "Salmon",
  },
  {
    type: "Other",
    name: "Cayenne Pepper",
  },
  {
    type: "Other",
    name: "Honey",
  },
  {
    type: "Other",
    name: "Lemon Juice",
  },
  {
    type: "Fruit",
    name: "Lemon",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
];

const ingredientType = [
  { type: "Grain" },
  { type: "Vegetable" },
  { type: "Meat" },
  { type: "Dairy" },
  { type: "Fruit" },
  { type: "Other" },
];

db.IngredientType.deleteMany({})
  .then(() => db.IngredientType.collection.insertMany(ingredientType))
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

db.Ingredient.deleteMany({})
  .then(() => db.Ingredient.collection.insertMany(ingredientSeedData))
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
