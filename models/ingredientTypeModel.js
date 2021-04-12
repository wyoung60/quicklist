//Dependency
const mongoose = require("mongoose");

//Create instance of mongoose schema
const Schema = mongoose.Schema;

//Defines object structure for collection
const ingredientTypeSchema = new Schema({
  type: String,
});

//Creates collection with about schema
const IngredientType = mongoose.model("IngredientType", ingredientTypeSchema);

//Exports model
module.exports = IngredientType;
