const express = require("express");
const {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
} = require("../controllers/productController.js");
const upload = require("../middlewares/multer.js");
const adminAuth = require("../middlewares/adminAuth.js");

const Router = express.Router();

Router.post("/add", adminAuth, upload.single("image"), addProduct);
Router.post("/remove", adminAuth, removeProduct);
Router.post("/single", singleProduct);
Router.get("/all", listProducts);

module.exports = Router;
