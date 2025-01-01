"use client";
import React from 'react'
import Image from 'next/image';
import Logo from "@/public/ChessClubLogo.png"

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navbar bg-white">
      <Image className="m-4" src={Logo} alt="Chess Club Logo" height={80} />
      <div className="navbar-buttons text-green">
        <button onClick={() => scrollToSection("announcements")}>Announcements</button>
        <button onClick={() => scrollToSection("about-us")}>About Us</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
      <div className="admin-button text-green">
        <button onClick={() => scrollToSection("admin")}>Admin</button>
      </div>
    </div>
  );
};

export default Navbar