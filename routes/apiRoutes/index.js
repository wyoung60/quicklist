//Next redirect for route to specific collection router
const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");
const ingredientRoutes = require("./ingredientRoutes");
const ingredientTypeRoutes = require("./ingredientTypesRoutes");
const groceryListRoutes = require("./groceryListRoutes");

//Routes
router.use("/types", ingredientTypeRoutes);
router.use("/recipes", recipeRoutes);
router.use("/ingredient", ingredientRoutes);
router.use("/groceryList", groceryListRoutes);

//Export router
module.exports = router;
