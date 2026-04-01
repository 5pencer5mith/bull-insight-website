"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function HeadAndTailDefects() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Head and Tail Defects (HT)</h1>

      <p>
        This category encompasses abnormalities that often impede the sperm's
        physical structure and motility, limiting the sperm's ability to reach
        the egg.
      </p>

      <p>
        <strong>Fertility Impact: </strong>Typically, compensable since these
        defects prevent sperm from reaching the egg​​.
      </p>

      <div className={styles.section}>
        <h2>Detached or Loose Heads</h2>

        <Link href="/Morphology/Loose-and-Detached-Heads">
          <div className={styles.abButton}>
            <p>Heads detached from tails, often due to stress.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Detached or Loose Heads</h3>

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

        <h2>Decapitated Head</h2>

        <Link href="/Morphology/Decapitated-Head">
          <div className={styles.abButton}>
            <p>Complete separation of the head and tail.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Decapitated Heads</h3>

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

        <h2>Reflex/Bent Prinicpal Pieces</h2>

        <p>Bending at the principal piece that impedes movement.</p>

        <h2>Coiled Tails</h2>

        <Link href="/Morphology/Coiled-Tail">
          <div className={styles.abButton}>
            <p>Tails curled into coils, significantly reducing motility.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Decapitated Heads</h3>

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
    </div>
  );
}
