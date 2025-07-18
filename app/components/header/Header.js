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
  { name: "Store", href: "/Store" },
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
      <div className="flex flex-end bg-white text-stone-900 h-16 items-center p-4 sticky top-0 z-50">
        <div className="flex flex-1 items-center text-xl">
          <Link href="/">
            <span className="">Bull-</span>
            <span className="font-bold text-blue-700">Insight</span>
            <span className="text-stone-900">.com</span>
          </Link>
        </div>

        <div
          className="max-md:block max-md:shrink-0 max-md:cursor-pointer md:hidden : "
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? (
            <div className="text-stone-900">
              <X size={24} />
            </div>
          ) : (
            <div className="text-stone-900">
              <Menu size={24} />
            </div>
          )}
        </div>

        <nav className="hidden md:block">
          <ul className="p-4">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <li
                  className="inline px-4 py-2.5 rounded-lg hover:bg-blue-700 hover:text-white"
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`fixed z-49 w-full h-84 bg-white/60 rounded-bl-lg rounded-br-lg backdrop-blur-[20px] backdrop-opacity-75 shadow-lg transform transition-transform duration-800 ease-in-out ${isMobileMenuOpen ? "" : "-translate-y-100"}`}
      >
        <nav className="md:hidden">
          <ul className="text-stone-900 text-xl p-2 text-center">
            {links.map((link, index) => (
              <li className="p-3" key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
