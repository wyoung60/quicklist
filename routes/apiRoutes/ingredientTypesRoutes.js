//Route to controller commands
const router = require("express").Router();
const ingredientTypeController = require("../../controllers/ingredientTypeController");

//Route to required method of controller
router.route("/all").get(ingredientTypeController.getAll);
router.route("/match").post(ingredientTypeController.matchIngredient);

//Export router
module.exports = router;
