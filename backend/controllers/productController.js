const cloudinary = require("cloudinary").v2;
const Product = require("../models/productModel");

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, category, stockInKg, pricePerKg, sizeOptions } =
      req.body;

    const image = req.file;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // Upload the image to Cloudinary
    let imageUrl = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const product = new Product({
      name,
      description,
      category,
      image: imageUrl.secure_url,
      stockInKg,
      stockInGrams: Number(stockInKg) * 1000,
      pricePerKg: Number(pricePerKg),
      sizeOptions: JSON.parse(sizeOptions),
    });
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for removing product
const removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
};
