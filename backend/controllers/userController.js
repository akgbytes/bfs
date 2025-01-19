const User = require("../models/userModel");
const client = require("../config/twilio");

// logic for user register
const register = async (req, res) => {
  try {
    const { user, mobile } = req.body;
    if (!user || !mobile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // need to write logic for validation for mobile number

    // checking if user already exists
    const existingUser = await User.findOne({ mobile, accountVerified: true });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already registered, Please try to log in",
      });
    }

    // creating user in db
    const newUser = await User.create({ user, mobile });

    // sending otp
    await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: mobile,
        channel: "sms",
      });

    // response
    res.status(200).json({
      success: true,
      message: `OTP sent on ${mobile}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const verifyRegister = async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    const userAllEntries = await User.find({
      $or: [
        {
          mobile,
          accountVerified: false,
        },
      ],
    }).sort({ createdAt: -1 });

    if (!userAllEntries.length) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    let user;
    if (userAllEntries.length > 1) {
      user = userAllEntries[0];

      await User.deleteMany({
        _id: { $ne: user._id },
        $or: [{ mobile, accountVerified: false }],
      });
    } else {
      user = userAllEntries[0];
    }

    // verify otp
    const verificationsCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: mobile,
        code: otp,
      });

    if (verificationsCheck.status === "approved") {
      user.accountVerified = true;
      await user.save({ validateModifiedOnly: true });

      const token = user.generateToken();

      return res
        .status(200)
        .cookie("token", token, {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "User verified successfully",
          token,
        });
    }

    res.status(401).json({ success: false, message: error.message });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

// logic for user login
const login = async (req, res) => {
  try {
    const { mobile } = req.body;

    const user = await User.findOne({ mobile, accountVerified: true });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please register and verify your account first",
      });
    }

    await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: mobile,
        channel: "sms",
      });

    res.status(200).json({ success: true, message: "OTP sent for login" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const verifyLogin = async (req, res) => {
  try {
    const { mobile, otp } = req.body;
    const user = await User.findOne({ mobile, accountVerified: true });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const verificationChecks = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: mobile,
        code: otp,
      });

    if (verificationChecks.status === "approved") {
      const token = user.generateToken();

      return res
        .status(200)
        .cookie("token", token, {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Login successful",
          token,
        });
    }

    res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  register,
  verifyRegister,
  login,
  verifyLogin,
};
