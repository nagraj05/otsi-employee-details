import React from "react";
import otsilogo from "../../public/assets/images/otsi.png";

export default function Header({ buttonName }) {
  return (
    <div className="flex justify-between items-center h-20 bg-gray-300 text-white px-6">
      <div className="">
        <img src={otsilogo} alt="" className="h-14" />
      </div>
      <div className="flex items-center gap-2">{buttonName}</div>
    </div>
  );
}
