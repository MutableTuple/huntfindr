"use client";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { addOnboardingEmail } from "@/app/_lib/data-service";
import toast, { Toaster } from "react-hot-toast";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Attempt to add email to database
      const result = await addOnboardingEmail(email);

      // Show success toast
      toast.success("You're on the waitlist!", {
        description: "We'll reach out soon!",
      });

      // Clear input after successful submission
      setEmail("");
    } catch (error) {
      // Show error toast if submission fails
      toast.error("Failed to join waitlist", {
        description: "Please try again later",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmailValid = validateEmail(email);

  return (
    <div className="flex items-center space-x-2 w-full max-w-md">
      <div className="relative flex-grow">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="You're in!"
          className={`
            w-full px-3 py-2 pl-8 border-2 rounded-lg
            transition-all duration-300 ease-in-out bg-stone-50
            ${
              isFocused
                ? "border-blue-500 outline-none ring-2 ring-blue-200"
                : "border-gray-300"
            }
            ${isEmailValid ? "pr-10" : ""}
          `}
        />
        <MdOutlineEmail
          className={`
            absolute left-2 top-1/2 transform -translate-y-1/2 
            text-gray-400 transition-all duration-300
            ${isFocused ? "text-blue-500" : ""}
          `}
          size={20}
        />
        {isEmailValid && (
          <FaCheck
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500"
            size={20}
          />
        )}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isEmailValid || isSubmitting}
        className={`
          px-4 py-2 rounded-lg text-white font-semibold
          transition-all duration-300 ease-in-out
          ${
            isEmailValid && !isSubmitting
              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-95"
              : "bg-gray-300 cursor-not-allowed"
          }
        `}
      >
        {isSubmitting ? "Submitting..." : "Join"}
      </button>
      <Toaster richColors position="top-right" />
    </div>
  );
}
