//Dependency
const mongoose = require("mongoose");

//Create instance of mongoose schema
const Schema = mongoose.Schema;

//Defines object structure for collection
const ingredientsSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
});

//Creates collection with about schema
const Ingredient = mongoose.model("Ingredient", ingredientsSchema);

//Exports model
module.exports = Ingredient;
