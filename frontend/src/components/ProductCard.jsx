import React, { useContext } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ReactComponent as Cart } from "../assets/Cart.svg";
import { ShopContext } from "@/context/ShopContext";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="w-[248px] h-[338px] border rounded-lg shadow-sm overflow-hidden">
        {/* Image */}
        <div className="w-[248px] h-[248px] flex items-center justify-center">
          <img src={image} alt="product" className=" object-contain" />
        </div>

        <div className="w-[248px] h-[91px] flex justify-between items-center p-4">
          {/* Details */}
          <div>
            <p className="text-gray-700 font-thin truncate text-sm">{name}</p>
            <p className="font-medium pt-0.5">
              {currency}
              {price}/kg
            </p>
            {/* ratings */}

            <div className="flex gap-0.5 pt-1.5">
              <StarFilledIcon className="h-3 w-3 warning star-fill" />
              <StarFilledIcon className="h-3 w-3 warning star-fill" />
              <StarFilledIcon className="h-3 w-3 warning star-fill" />
              <StarFilledIcon className="h-3 w-3 warning star-fill" />
              <StarFilledIcon className="h-3 w-3 text-gray-300 fill-gray-300" />
            </div>
          </div>
          {/* Add to cart */}
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Cart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
