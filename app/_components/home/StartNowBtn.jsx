import React from "react";

export default function StartNowBtn() {
  return (
    <div>
      <button className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] cursor-pointer">
        {/* Text (Visible by default, disappears on hover) */}
        <span className="transition-opacity duration-300 group-hover:opacity-0">
          Add me to the clan
        </span>

        {/* Arrow (Hidden by default, appears on hover) */}
        <span className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          →
        </span>
      </button>
    </div>
  );
}
