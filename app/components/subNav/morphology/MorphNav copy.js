"use client";

// Hooks and utility
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline, chevronForwardOutline } from "ionicons/icons";

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
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.morphMenuButton} onClick={toggleMorphMenu}>
          <h4>Morphology Menu</h4>
          {isMorphMenuOpen ? (
            <IonIcon
              className={styles.menuIcon}
              icon={chevronDownOutline}
              style={{ verticalAlign: "middle" }}
            />
          ) : (
            <IonIcon
              className={styles.menuIcon}
              icon={chevronForwardOutline}
              style={{ verticalAlign: "middle" }}
            />
          )}
        </div>
        <div
          className={`${styles.morphMenu} ${
            isMorphMenuOpen ? styles.active : ""
          }`}
        >
          <h1>By Category:</h1>
          <div className={styles.viewChange}>
            <p>Change View</p>
            <div className={styles.buttons}>
              <div
                onClick={handleTheriogenologyClick}
                className={activeCategory ? "" : styles.activeButton}
              >
                <h5>Society for Theriogenology</h5>
              </div>
              <div
                onClick={handleBullcheckClick}
                className={!activeCategory ? "" : styles.activeButton}
              >
                <h5>Astralian BULLCHECK</h5>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  className={pathname === item.link ? styles.activeItem : ""}
                >
                  <div className={styles.listItem}>
                    <Link href={item.link}>{item.category}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.abList}>
            <div className={styles.list}>
              <h1>By Morphology:</h1>
              <ul>
                {allAbnormalities.map((item, index) => (
                  <li
                    key={index}
                    className={pathname === item.link ? styles.activeItem : ""}
                  >
                    <div className={styles.listItem}>
                      <Link href={item.link}>{item.name}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
