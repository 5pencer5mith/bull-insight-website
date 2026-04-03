"use client";

// Hooks and utility
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline, chevronForwardOutline } from "ionicons/icons";

const listWrapperClass = "max-[768px]:text-center";
const listUlClass = "list-none";
const listLiClass = "mb-2";
/** Matches main Header nav: centered underline grows on hover */
const listLinkHoverClass =
  "relative inline-block no-underline text-sm pb-1.5 transition-colors duration-300 after:pointer-events-none after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full";

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
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  const [isMorphMenuOpen, setIsMorphMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const handleTheriogenologyClick = () => {
    setActiveCategory(false);
  };
  const handleBullcheckClick = () => {
    setActiveCategory(true);
  };

  const list = activeCategory ? bullcheck : theriogenology;

  const toggleMorphMenu = () => {
    setIsMorphMenuOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="">
      <div
        className="hidden max-[768px]:flex max-[768px]:cursor-pointer max-[768px]:flex-row max-[768px]:items-center max-[768px]:justify-center max-[768px]:gap-2"
        onClick={toggleMorphMenu}
      >
        <h4 className="m-0 hidden max-[768px]:block max-[768px]:text-text-primary font-display">
          Morphology Menu
        </h4>
        {isMorphMenuOpen ? (
          <IonIcon
            className="hidden max-[768px]:block max-[768px]:shrink-0 max-[768px]:text-xl max-[768px]:text-brand-primary"
            icon={chevronDownOutline}
          />
        ) : (
          <IonIcon
            className="hidden max-[768px]:block max-[768px]:shrink-0 max-[768px]:text-xl max-[768px]:text-brand-primary"
            icon={chevronForwardOutline}
          />
        )}
      </div>

      <div
        className={`block ${isMorphMenuOpen ? "max-[768px]:block" : "max-[768px]:hidden"}`}
      >
        <div className="pb-4">
          <p className="m-0 p-0 pb-[5px] text-center text-xs text-stone-900">
            Change <span className="text-blue-700 font-bold">View</span>
          </p>
          <div className="flex justify-center gap-x-4">
            <div
              onClick={handleTheriogenologyClick}
              className={
                activeCategory ? "" : "border-b-2 border-solid border-blue-700"
              }
            >
              <h5 className="cursor-pointer text-center text-xs text-stone-900">
                Society for Theriogenology
              </h5>
            </div>
            <div
              onClick={handleBullcheckClick}
              className={
                !activeCategory ? "" : "border-b-2 border-solid border-blue-700"
              }
            >
              <h5 className="cursor-pointer text-center text-xs text-stone-900">
                Astralian BULLCHECK
              </h5>
            </div>
          </div>
        </div>

        <h3 className="font-display text-xl text-text-primary max-[768px]:text-center">
          By <span className="text-brand-primary font-bold">Category</span>:
        </h3>

        <div className={listWrapperClass}>
          <ul className={listUlClass}>
            {list.map((item, index) => (
              <li
                key={index}
                className={`${listLiClass} ${
                  pathname === item.link ? "text-brand-primary font-bold" : ""
                }`}
              >
                <div>
                  <Link
                    href={item.link}
                    className={`${listLinkHoverClass} ${pathname === item.link ? "text-white" : "text-brand-primary"}`}
                  >
                    {item.category}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-border-primary"/>

        <div className="block pt-2 max-[768px]:hidden">
          <div className={listWrapperClass}>
            <h1 className="mb-[10px] text-xl text-text-primary font-display">
              By <span className="text-brand-primary font-bold">Morphology</span>:
            </h1>
            <ul className={listUlClass}>
              {allAbnormalities.map((item, index) => (
                <li
                  key={index}
                  className={`${listLiClass} ${
                    pathname === item.link ? "text-brand-primary font-bold" : ""
                  }`}
                >
                  <div>
                    <Link
                      href={item.link}
                      className={`${listLinkHoverClass} ${pathname === item.link ? "" : "text-brand-primary"}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
