"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function NormalMorphology() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Normal Sperm Morphology</h1>

      <h2>Abaxial Midpiece</h2>

      <p>
        An off-center attachment of the midpiece to the head, which is
        considered normal unless motility issues are present​.
      </p>

      <Link href="/Morphology/Distal-Cytoplasmic-Droplets">
        <div className={styles.abButton}>
          <h2>Distal Droplets</h2>

          <p>
            Cytoplasmic droplets located distally on the sperm's often at the
            midpiece and tail juncture.
          </p>

          <div className={styles.learnMore}>
            <h3>Learn More About Distal Droplets</h3>

            <IonIcon
              className={` text-blue-700`}
              icon={arrowForwardOutline}
              style={{
                fontSize: "30px",
                verticalAlign: "middle",
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
