require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const connectCloudinary = require("./config/cloudinary");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");

// app configs
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//
app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
