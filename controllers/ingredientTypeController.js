const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.IngredientType.find()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
  matchIngredient: function (req, res) {
    db.IngredientType.aggregate([
      {
        $lookup: {
          from: "ingredients",
          localField: "type",
          foreignField: "type",
          as: "ingredientMatch",
        },
      },
    ])
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
};
