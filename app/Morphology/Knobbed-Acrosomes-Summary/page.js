"use client";
// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function KnobbedAcrosomesSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Knobbed Acrosomes (KA)</h1>

      <p>
        Knobbed acrosomes may have a genetic origin and present as bulbous
        structures on the sperm head, which can impede the acrosomal reaction
        needed for fertilization.{" "}
      </p>

      <p>
        <strong>Fertility Impact: </strong>This defect is non-compensable as it
        affects chromatin integrity and may impact embryo viability​.
      </p>

      <div className={styles.section}>
        <h2>Knobbed Acrosomes</h2>

        <Link href="/Morphology/Knobbed-Acrosomes">
          <div className={styles.abButton}>
            <p> Thickened or misshapen acrosomes, potentially genetic.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Knobbed Acrosomes</h3>

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
