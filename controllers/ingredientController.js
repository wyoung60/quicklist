const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.Ingredient.find()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
};
