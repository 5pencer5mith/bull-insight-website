"use client";

// useState is used to determine whether or not the menu or "hamburger" has been clicked to open the mobile menu
import { useState } from "react";

import Link from "next/link";

// icons ussed for the hamburger menu
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Sperm In-Cyte", href: "/Sperm-In-Cyte" },
  { name: "Morphology", href: "/Morphology" },
  { name: "Resources", href: "/Resources" },
  { name: "Blog", href: "/Blog" },
  // { name: "Store", href: "/Store" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => {
      console.log("Menu state: ", !prev);
      return !prev;
    });
  };

  return (
    <>
      <div className="relative z-50 flex flex-end bg-background-primary h-20 items-center p-4 border-b border-border-primary">
        <div className="flex flex-1 items-center text-xl pl-4">
          <Link href="/">
            <span className="font-body text-2xl">Bull</span>
            <span className="font-bold text-brand-primary text-4xl font-display">Insight</span>
          </Link>
        </div>
        

        <div
          className="max-md:block max-md:shrink-0 max-md:cursor-pointer md:hidden : "
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? (
            <div className="text-text-primary">
              <X size={24} />
            </div>
          ) : (
            <div className="text-text-primary">
              <Menu size={24} />
            </div>
          )}
        </div>

        <nav className="hidden md:block">
          <ul className="p-4">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <li className="relative inline px-4 py-2.5 text-text-primary transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:h-0.5 after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* <div className="h-1 w-full bg-blue-100 sticky top-16 z-50" /> */}

      <div
        className={`fixed top-20 z-40 w-full h-75 bg-white/60 rounded-bl-lg rounded-br-lg backdrop-blur-[20px] backdrop-opacity-75 shadow-lg transform transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? "" : "-translate-y-95"}`}
      >
        <nav className="md:hidden">
          <ul className="text-text-primary text-xl p-2 text-center">
            {links.map((link, index) => (
              <li className="p-3" key={index}>
                <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
