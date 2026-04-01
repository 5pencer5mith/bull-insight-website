"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function VacuolesAndTeratoid() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Vacuoles/Teratoids (VT)</h1>

      <p>
        Vacuoles within the sperm head, often caused by chromatin defects,
        reduce fertilization potential and are closely linked to early embryonic
        failure.
      </p>

      <p>
        <strong>Fertility Impact: </strong>These defects are typically
        non-compensable as they often lead to chromatin instability and early
        embryo loss​.
      </p>

      <div className={styles.section}>
        <h2>Small Apical Vacuoles</h2>

        <Link href="/Morphology/Small-Apical-Vacuoles">
          <div className={styles.abButton}>
            <p>Small vacuoles located near the tip of the sperm head.</p>

            <div className={styles.learnMore}>
              <h3>Learn More About Small Apical Vacuoles</h3>

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

        <h2>Large Confluent Vacuoles</h2>

        <Link href="/Morphology/Large-Vacuoles">
          <div className={styles.abButton}>
            <p>
              Large or connected vacuoles indicating significant chromatin
              damage.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Large Vacuoles</h3>

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

        <h2>Diadem Defects</h2>

        <Link href="/Morphology/Diadem-Defect">
          <div className={styles.abButton}>
            <p>
              Characteristic vacuoles forming a pattern around the acrosome,
              often due to oxidative stress.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Diadem Defects</h3>

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

        <h2>Rolled Heads</h2>

        <p>Heads that are structurally rolled, compromising function.</p>

        <h2>Teratoid Heads</h2>

        <Link href="/Morphology/Teratoid-Sperm">
          <div className={styles.abButton}>
            <p>
              Severe malformations across the head structure, usually indicative
              of major spermatogenic issues.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Teratoid Heads</h3>

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
