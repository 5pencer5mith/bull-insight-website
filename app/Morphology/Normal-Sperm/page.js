"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function NormalSperm() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Normal Sperm</h1>

      <p>
        This category includes sperm forms considered normal or minimally
        impactful on fertility, even though they may display minor deviations.
        These are generally excluded from fertility concerns at low numbers but
        can be noted if present in higher frequencies.
      </p>

      <p>
        <strong>Fertility Impact: </strong>These abnormalities are generally not
        detrimental to fertility at low frequencies​​.
      </p>

      <div className={styles.section}>
        <h2>Distal Cytoplasmic Droplets</h2>

        <Link href="/Morphology/Distal-Cytoplasmic-Droplets">
          <div className={styles.abButton}>
            <p>Considered a normal post-ejaculation maturation trait.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Distal Cytoplasmic Droplets</h3>

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

        <h2>Abaxial Tails</h2>

        <p>Slightly off-center tail attachments, typical of variation.</p>

        <h2>Slightly Bent Midpiece</h2>

        <p>Small midpiece bends that do not affect motility.</p>

        <h2>Segmental Aplasia</h2>

        <Link href="/Morphology/Segmental-Aplasia-of-the-Mitochondrial-Sheath">
          <div className={styles.abButton}>
            <p>Minor midpiece mitocondrial defects.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Segmental Aplasia</h3>
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

        <h2>Slightly Pyriform Heads</h2>
        <p> Mild head shape deviations, within normal variation.</p>

        <h2>Narrow Heads</h2>
        <p>Slightly Thinner head structures.</p>
      </div>
    </div>
  );
}
