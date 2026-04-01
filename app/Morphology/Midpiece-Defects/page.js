"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function MidpieceDefects() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Midpiece Defects (MP)</h1>

      <p>
        Midpiece abnormalities generally affect sperm motility and energy
        production, reducing the sperm's capacity to reach the oocyte, although
        these defects are often compensable in higher sperm concentrations.
      </p>

      <p>
        <strong>Fertility Impact: </strong>These are compensable defects as
        increased sperm numbers can overcome their motility impairments​​.
      </p>

      <div className={styles.section}>
        <h2>Distal Midpiece Reflex (DMR)</h2>

        <Link href="/Morphology/Distal-Mid-Piece-Reflex">
          <div className={styles.abButton}>
            <p>A bend in the distal midpiece.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Distal Midpiece Reflex</h3>

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

        <h2>Dag Defect</h2>

        <Link href="/Morphology/Dag-Defect">
          <div className={styles.abButton}>
            <p>Characterized by a coiled midpiece, impacting motility.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Dag Defect</h3>

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

        <h2>Stump Tails</h2>

        <p>Short or absent principal pieces.</p>

        <h2>Multiple (Accessory) Tails</h2>

        <p>Presence of extra tail structures.</p>
      </div>
    </div>
  );
}
