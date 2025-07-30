"use client";

// Hooks and utility
import { useState } from "react";
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";
import MorphCategorySwitch from "../../MorphCategorySwitch";

// Styles
import styles from "./morphNav.module.css";

const theriogenology = [
  {
    category: "Normal Sperm Morphology",
    link: "/Morphology/Normal-Morphology",
  },
  {
    category: "Head Abnormalities",
    link: "/Morphology/Head-Abnormalities",
  },
  {
    category: "Midpiece Abnormalities",
    link: "/Morphology/Midpiece-Abnormalities",
  },
  {
    category: "Principal Piece Abnormalities",
    link: "/Morphology/Principal-Piece-Abnormalities",
  },
  {
    category: "Other",
    link: "/Morphology/Other-Abnormalities",
  },
];

const bullcheck = [
  {
    category: "Normal Sperm",
    link: "/Morphology/Normal-Sperm",
  },
  {
    category: "Proximal Cytoplasmic Droplets",
    link: "/Morphology/Proximal-Cytoplasmic-Droplets-Summary",
  },
  {
    category: "Midpiece Defects",
    link: "/Morphology/Midpiece-Defects",
  },
  {
    category: "Head and Tail Defects",
    link: "/Morphology/Head-and-Tail-Defects",
  },
  {
    category: "Pyriform Heads",
    link: "/Morphology/Pyriform-Heads-Summary",
  },
  {
    category: "Knobbed Acrosomes",
    link: "/Morphology/Knobbed-Acrosomes-Summary",
  },
  {
    category: "Vacuoles/Teratoids",
    link: "/Morphology/Vacuoles-and-Teratoids",
  },
  {
    category: "Swollen Acrosomes",
    link: "/Morphology/Swollen-Acrosomes-Summary",
  },
];

const allAbnormalities = [
  {
    name: "Abnormal DNA Condensation",
    link: "/Morphology/Abnormal-DNA-Condensation",
  },
  { name: "Coiled Tail", link: "/Morphology/Coiled-Tail" },
  { name: "Dag Defect", link: "/Morphology/Dag-Defect" },
  { name: "Decapitated Head", link: "/Morphology/Decapitated-Head" },
  { name: "Diadem Defect", link: "/Morphology/Diadem-Defect" },
  {
    name: "Distal Cytoplasmic Droplets",
    link: "/Morphology/Distal-Cytoplasmic-Droplets",
  },
  {
    name: "Distal Midpiece Reflex",
    link: "/Morphology/Distal-Mid-Piece-Reflex",
  },
  { name: "Double Forms", link: "/Morphology/Double-Forms" },
  { name: "Knobbed Acrosomes", link: "/Morphology/Knobbed-Acrosomes" },
  { name: "Large Vacuoles", link: "/Morphology/Large-Vacuoles" },
  {
    name: "Loose and Detached Heads",
    link: "/Morphology/Loose-and-Detached-Heads",
  },
  {
    name: "Proximal Cytoplasmic Droplets",
    link: "/Morphology/Proximal-Cytoplasmic-Droplets",
  },
  { name: "Pseudo Droplet", link: "/Morphology/Pseudo-Droplet" },
  { name: "Pyriform Heads", link: "/Morphology/Pyriform-Heads" },
  { name: "Reflex Tail", link: "/Morphology/Reflex-Tail" },
  {
    name: "Segmental Mitochondrial Aplasia",
    link: "/Morphology/Segmental-Aplasia-of-the-Mitochondrial-Sheath",
  },
  {
    name: "Small Apical Vacuoles",
    link: "/Morphology/Small-Apical-Vacuoles",
  },
  {
    name: "Small Nuclear Vacuoles",
    link: "/Morphology/Small-Nuclear-Vacuoles",
  },
  { name: "Swollen Acrosomes", link: "/Morphology/Swollen-Acrosomes" },
  { name: "Teratoid Sperm", link: "/Morphology/Teratoid-Sperm" },
];

export default function SubNav() {
  const [enabled, setEnabled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  const pathname = usePathname();

  const categoryList = activeCategory ? bullcheck : theriogenology;

  return (
    <div>
      <div className="text-center pb-2">
        <h5 className="text-xl">
          Browse by <span className="text-blue-700 font-bold">Category</span>:
        </h5>
      </div>
      <div>
        <MorphCategorySwitch
          enabled={enabled}
          setEnabled={setEnabled}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <div className="pt-2">
        <div className="text-center">
          <ul>
            {categoryList.map((item, index) => (
              <li
                key={index}
                className={`${pathname === item.link ? "underline decoration-blue-700" : ""}`}
              >
                <div className="p-1 text-stone-900 hover:curser-pointer md:text-left md:hover:underline md:hover:decoration-blue-700">
                  <Link href={item.link}>{item.category}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="text-center pt-4">
          <h5 className="text-xl">
            Browse by <span className="text-blue-700 font-bold">Abnormality</span>:
          </h5>
        </div>

        <div className="text-center">
          <ul>
            {allAbnormalities.map((item, index) => (
              <li
                key={index}
                className={`${pathname === item.link ? "underline decoration-blue-700" : ""}`}
              >
                <div className="p-1 text-stone-900 hover:curser-pointer md:text-left md:hover:underline md:hover:decoration-blue-700">
                  <Link href={item.link}>{item.name}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
}
