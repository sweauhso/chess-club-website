"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the correct hook for App Router
import Image from "next/image";
import Logo from "@/public/ChessClubLogo.png";

const Navbar = () => {
  const router = useRouter(); // Initialize the router

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-medium-bg w-full">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 sm:px-6 sm:py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            className="h-auto w-16 sm:w-20 lg:w-24 xl:w-32"
            src={Logo}
            alt="Chess Club Logo"
            height={80}
            width={80} // Add width to prevent resizing issues
          />
        </div>

        {/* Navbar Links */}
        <div className="flex-grow flex justify-center mx-4 space-x-4 sm:space-x-6 lg:space-x-8 text-green font-semibold">
          <button onClick={() => scrollToSection("about-us")} className="text-sm sm:text-lg">
            About Us
          </button>
          <button onClick={() => scrollToSection("announcements")} className="text-sm sm:text-lg">
            Announcements
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm sm:text-lg">
            Contact
          </button>
        </div>

        {/* Admin Button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => router.push("/login")}
            className="text-sm sm:text-lg font-semibold py-1 sm:py-2 px-2 sm:px-4 bg-green hover:bg-green-700 text-black rounded-md"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;