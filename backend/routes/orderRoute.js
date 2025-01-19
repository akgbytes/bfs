const express = require("express");
const {
  placeOrderCOD,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyRazorpay,
} = require("../controllers/orderController.js");
const adminAuth = require("../middlewares/adminAuth.js");
const userAuth = require("../middlewares/userAuth.js");

const Router = express.Router();

// Admin Features
Router.post("/list", adminAuth, allOrders);
Router.post("/status", adminAuth, updateStatus);

// Payment Features
Router.post("/place", userAuth, placeOrderCOD);
Router.post("/razorpay", userAuth, placeOrderRazorpay);

// User Feature
Router.post("/userorders", userAuth, userOrders);

// verify payment
Router.post("/verifyRazorpay", userAuth, verifyRazorpay);

module.exports = Router;
