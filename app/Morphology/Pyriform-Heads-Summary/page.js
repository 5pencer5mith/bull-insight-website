"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function PyriformHeadsSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Pyriform Heads (PY)</h1>

      <p>
        Pyriform heads indicate oxidative damage during spermiogenesis and are
        associated with genetic and environmental factors affecting chromatin
        integrity.
      </p>

      <p>
        <strong>Fertility Impact: </strong>This defect is non-compensable as it
        affects chromatin integrity and may impact embryo viability​.
      </p>

      <div className={styles.section}>
        <h2>Pyriform Heads</h2>

        <Link href="/Morphology/Pyriform-Heads">
          <div className={styles.abButton}>
            <p>Pear-shaped head defects, often linked to oxidative stress.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Pyriform Heads</h3>

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
