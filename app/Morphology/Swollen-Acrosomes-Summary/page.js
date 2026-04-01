"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function SwollenAcrosomesSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Swollen Acrosomes</h1>

      <p>Aged sperm such as “rusty loads”.</p>

      <p>
        <strong>Fertility Impact: </strong>Generally considered compensable.
      </p>

      <div className={styles.section}>
        <h2>Swollen Acrosomes</h2>

        <Link href="/Morphology/Swollen-Acrosomes">
          <div className={styles.abButton}>
            <p>
              Enlarged or deformed acrosome membranes, affecting enzyme release.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Swollen Acrosomes</h3>

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

        <h2>Ruffled/Incomplete Acrosomes</h2>

        <p>
          {" "}
          Irregular or incomplete acrosome formation that may impair
          fertilization capability.
        </p>
      </div>
    </div>
  );
}
