"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function ProximalCytoDropletsSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Proximal Cytoplasmic Droplets (PC)</h1>

      <p>
        These droplets are indicative of epididymal immaturity or spermiogenesis
        issues, particularly in mature bulls, and have been shown to affect
        sperm’s binding ability with oocytes.{" "}
      </p>

      <p>
        <strong>Fertility Impact: </strong>These droplets are non-compensable if
        they exceed 20%, often associated with poor fertility outcomes​​.
      </p>

      <div className={styles.section}>
        <h2>Proximal Cytoplasmic Droplets</h2>

        <Link href="/Morphology/Proximal-Cytoplasmic-Droplets">
          <div className={styles.abButton}>
            <p>
              Common in pubertal bulls, but significant in mature bulls,
              indicating potential for impaired fertility.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Proximal Cytoplasmic Droplets</h3>

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
