"use client";

// Hooks and utility
import { useState, useEffect } from "react";

// Components
// import { IonIcon } from "@ionic/react";
// import { menuOutline, closeOutline } from "ionicons/icons";
import Link from "next/link";

import { 
  Menu,
  X
} from 'lucide-react'

// Styles
import styles from "./header.module.css";

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
    <div className="flex flex-end bg-white/75 text-stone-900 h-16 items-center p-4 shadow-lg backdrop-blur-xl backdrop-opacity-60 sticky top-0 z-50">
      <div className="flex flex-1 items-center text-xl">
        <Link href="/"><span className=" text-stone-900">Bull</span><span className="font-bold text-blue-700">Insight</span></Link>
      </div>

      <div className="max-md:block max-md:shrink-0 max-md:cursor-pointer md:hidden : " onClick={toggleMenu}>
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

      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.active : ""
        } ${styles.desktop}`}
      >
        <ul className={styles.menuList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
