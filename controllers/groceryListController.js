const db = require("../models");

module.exports = {
  addToList: function (req, res) {
    db.GroceryList.collection
      .insertMany(req.body)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  getGroceryList: function (req, res) {
    db.GroceryList.find(req.query)
      .sort({ name: 1 })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  deleteOne: function (req, res) {
    db.GroceryList.deleteMany(req.query)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  deleteAll: function (req, res) {
    db.GroceryList.deleteMany(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  },
};
