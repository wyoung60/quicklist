//Route to controller commands
const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

//Route to required method of controller
router.route("/all").get(ingredientController.getAll);

//Export router
module.exports = router;
