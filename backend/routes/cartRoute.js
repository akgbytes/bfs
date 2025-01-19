const express = require("express");
const Router = express.Router();
const userAuth = require("../middlewares/userAuth.js");
const {
  addToCart,
  getUserCart,
  updateCart,
} = require("../controllers/cartController.js");

Router.post("/get", userAuth, getUserCart);
Router.post("/add", userAuth, addToCart);
Router.post("/update", userAuth, updateCart);

module.exports = Router;
