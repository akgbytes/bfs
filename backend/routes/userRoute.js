const express = require("express");
const {
  register,
  login,
  verifyLogin,
  verifyRegister,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/verify-register", verifyRegister);
router.post("/login", login);
router.post("/verify-login", verifyLogin);

module.exports = router;
