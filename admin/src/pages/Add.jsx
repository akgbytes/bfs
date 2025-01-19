import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  // State to hold the size options
  const [sizeOptions, setSizeOptions] = useState([]);

  // State for size and price input fields
  const [sizeInput, setSizeInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  // Function to handle adding new size option
  const addSizeOption = () => {
    if (sizeInput && priceInput) {
      setSizeOptions((prevOptions) => [
        ...prevOptions,
        { size: sizeInput, price: parseFloat(priceInput) },
      ]);
      // Clear the input fields after adding
      setSizeInput("");
      setPriceInput("");
    }
  };

  // Function to handle removing a size option by index
  const removeSizeOption = (index) => {
    setSizeOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  // other state variables
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [pricePerKg, setPricePerKg] = useState("");
  const [stockinKg, setStockinKg] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("pricePerKg", pricePerKg);
      formData.append("stockInKg", stockinKg);
      formData.append("sizeOptions", JSON.stringify(sizeOptions));
      image && formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage(false);
        setPricePerKg("");
        setStockinKg("");
        setSizeOptions([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* upload product image */}
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2 border-dotted  border-gray-200 border-2 bg-slate-100">
          <label htmlFor="image">
            <img
              className="h-[100px] w-[150px]"
              src={!image ? "cloud-upload.svg" : URL.createObjectURL(image)}
              alt=""
            />

            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>
      </div>

      {/* product name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter product name"
          required
        />
      </div>

      {/* product description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter product detail"
          required
        />
      </div>

      {/* product category, price, stock */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price Per Kg</p>
          <input
            onChange={(e) => setPricePerKg(e.target.value)}
            value={pricePerKg}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="100"
          />
        </div>
        <div>
          <p className="mb-2">Stock in Kg</p>
          <input
            onChange={(e) => setStockinKg(e.target.value)}
            value={stockinKg}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="100"
          />
        </div>
      </div>

      {/* product sizeOptions */}
      <div>
        <p className="mb-2">Size Options</p>
        <div>
          {/* Input fields for size and price */}
          <div className="mb-4">
            <input
              type="text"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
              placeholder="Enter size (500g, 1kg, etc.)"
              className="border p-2 mr-2"
            />
            <input
              type="number"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              placeholder="Enter price"
              className="border p-2"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addSizeOption();
              }}
              className="ml-2 bg-blue-500 text-white px-4 py-2"
            >
              Add Size Option
            </button>
          </div>

          {/* Display list of size options */}
          <div className="flex flex-wrap gap-3">
            {sizeOptions.map((option, index) => (
              <div
                key={index}
                className="bg-pink-100 px-3 py-1 flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {option.size} - ₹{option.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeSizeOption(index);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
