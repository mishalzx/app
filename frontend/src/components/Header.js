import React, { useState } from "react";

const Header = ({ scrollY }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://customer-assets.emergentagent.com/job_5f2f4da9-f311-4324-ba20-5edbfc7b4dcf/artifacts/3q3yn9wl_Ariflex%20Logo-01.png"
              alt="Ariflex Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;