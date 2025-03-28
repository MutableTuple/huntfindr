import React from "react";
import Navbar from "../Navbar";
import StartNowBtn from "./StartNowBtn";
import EmailInput from "./EmailInput";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 bg-[radial-gradient(circle_at_15%_25%,_#0f172a_10%,_transparent_50%),radial-gradient(circle_at_85%_15%,_#1e293b_10%,_transparent_50%),radial-gradient(circle_at_40%_80%,_#334155_10%,_transparent_60%),radial-gradient(circle_at_70%_60%,_#1e1b4b_10%,_transparent_50%),conic-gradient(from_180deg_at_50%_50%,_#0f172a,_#1e1b4b,_#111827),linear-gradient(to_bottom,_#0f172a,_#1e1b4b)]">
      <Navbar />

      {/* Responsive Text */}
      <div className="my-8 text-center text-stone-200 max-w-4xl">
        <div className="text-xs sm:text-sm px-3 py-1 rounded-full border border-red-400 text-red-400 bg-red-100 max-w-fit mx-auto my-4 sm:my-6">
          huntfindr.io
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-light">
          Get{" "}
          <span className="font-extrabold animate-gradient-x bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
            Upvotes,
          </span>{" "}
          Build Reach, <br className="hidden sm:block" /> and Earn{" "}
          <span className="font-extrabold animate-gradient-x bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Backlinks.
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal mt-4 relative inline-block">
          For your{" "}
          <span className="px-2 text-[#f87165] font-bold relative">
            ProductHunt
            {/* Handwritten underline */}
            <svg
              className="absolute left-0 bottom-[-6px] sm:bottom-[-8px] w-full h-3 sm:h-4 text-[#f87165]"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15C50 5 120 25 198 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="5,5"
              />
            </svg>
          </span>{" "}
          launches
        </h2>
      </div>
      <EmailInput />
      <p className="text-xs text-stone-50 mt-2 text-center ">
        You will recieve a legacy badge <br /> if you join before March 31st
        2025
      </p>
      {/* Call to Action Button */}
      {/* <div className="mt-6 sm:mt-10">
        <StartNowBtn />
      </div> */}
    </div>
  );
}
