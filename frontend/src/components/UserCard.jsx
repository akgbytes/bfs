// import React from "react";
// import { ReactComponent as CardIcon } from "../assets/user-card-icon.svg";
// import { StarFilledIcon } from "@radix-ui/react-icons";

// const UserCard = () => {
//   return (
//     <div className="w-[424px] h-[254px] border rounded-sm shadow-sm overflow-hidden bg-white p-6">
//       <CardIcon className="w-8 h-7" />
//       <p className="pt-3">
//         The vegetables are always so fresh and crisp! I've been ordering from
//         here for months, and the quality has never disappointed. Highly
//         recommended!
//       </p>

//       {/* user */}
//       <div className="flex justify-between pt-2">
//         <div className="flex gap-4 mt-2">
//           <img
//             className="rounded-full h-12 w-12 object-cover"
//             src="/user-1.png"
//             alt="user"
//           />
//           <div className="flex flex-col">
//             <p className="font-semibold">Josh</p>
//             <div className="flex gap-1.5 items-center text-zinc-600">
//               <p className="text-sm">Customer</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-0.5 pt-1.5 justify-center items-center">
//           <StarFilledIcon className="h-4 w-4 warning star-fill" />
//           <StarFilledIcon className="h-4 w-4 warning star-fill" />
//           <StarFilledIcon className="h-4 w-4 warning star-fill" />
//           <StarFilledIcon className="h-4 w-4 warning star-fill" />
//           <StarFilledIcon className="h-4 w-4 warning star-fill" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React from "react";
import { ReactComponent as CardIcon } from "../assets/user-card-icon.svg";
import { StarFilledIcon } from "@radix-ui/react-icons";

const UserCard = ({ image, review, user, rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarFilledIcon
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "warning star-fill" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-[424px] h-[254px] border rounded-sm shadow-sm overflow-hidden bg-white p-6">
      <CardIcon className="w-8 h-7" />
      <p className="pt-3">{review}</p>

      {/* User Information */}
      <div className="flex justify-between pt-2">
        <div className="flex gap-4 mt-2">
          <img
            className="rounded-full h-12 w-12 object-cover"
            src={image}
            alt={user.name}
          />
          <div className="flex flex-col">
            <p className="font-semibold">{user}</p>
            <div className="flex gap-1.5 items-center text-zinc-600">
              <p className="text-sm">Customer</p>
            </div>
          </div>
        </div>
        <div className="flex gap-0.5 pt-1.5 justify-center items-center">
          {renderStars(rating)}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
