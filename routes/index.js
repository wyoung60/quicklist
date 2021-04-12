//Initial direct to required routes folder.
//Using express router and routing to apiRoutes folder
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

//Routes
router.use("/api", apiRoutes);

module.exports = router;
