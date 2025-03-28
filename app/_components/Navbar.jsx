"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home"];
  // const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="flex justify-center p-4 mt-4">
      <div className="bg-gray-100 rounded-full flex items-center space-x-2 p-2 shadow-md">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:cursor-pointer
                ${
                  activeItem === item
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }
              `}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
