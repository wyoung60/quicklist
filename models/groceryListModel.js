//Dependency
const mongoose = require("mongoose");

//Create instance of mongoose schema
const Schema = mongoose.Schema;

//Defines object structure for collection
const groceryListSchema = new Schema({
  name: { type: String, required: true },
  user: String,
});

//Creates collection with about schema
const GroceryListModel = mongoose.model("GroceryList", groceryListSchema);

//Exports model
module.exports = GroceryListModel;
