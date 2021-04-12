//Dependency
const mongoose = require("mongoose");

//Create instance of mongoose schema
const Schema = mongoose.Schema;

//Defines object structure for collection
const recipeSchema = new Schema({
  user: String,
  name: String,
  ingredients: [],
  favorite: {
    type: Boolean,
    default: false,
  },
});

//Creates collection with about schema
const Recipe = mongoose.model("Recipe", recipeSchema);

//Exports model
module.exports = Recipe;
