"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function OtherAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Other Abnormalities</h1>

      <div className={styles.section}>
        <h2>Teratoid Sperm</h2>

        <Link href="/Morphology/Teratoid-Sperm">
          <div className={styles.abButton}>
            <p>
              Grossly malformed, sometimes indicative of severe spermatogenic
              disturbance.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Teratoid Sperm</h3>

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

        <h2>Round Cells</h2>

        <p>
          Typically, immature sperm precursors. If there is a presence of white
          blood cells (WBCs) it suggests possible infection or inflammation.{" "}
        </p>

        <h2>Epithelial Cells</h2>

        <p>Sloughed cells from the reproductive tract.</p>

        <h2>Medusa Cells:</h2>
        <p>
          Ciliated epithelial cells often observed but typically non-significant
          unless in large numbers.
        </p>
      </div>
    </div>
  );
}
