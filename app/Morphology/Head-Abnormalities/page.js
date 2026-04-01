"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function HeadAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Head Abnormalities</h1>

      <p>
        These abnormalities can reduce the sperm’s ability to fertilize due to
        issues in head shape, acrosome function, or DNA content.
      </p>

      <div className={styles.section}>
        <h2>Pyriform and Tapered Heads</h2>

        <Link href="/Morphology/Pyriform-Heads">
          <div className={styles.abButton}>
            <h3>Severe Pyriform Head</h3>

            <p>
              A distinct pear-shaped deformity that negatively affects the
              sperm’s ability to fertilize the egg.
            </p>

            <h3>Tapered Head (Severe)</h3>

            <p>
              A significantly narrow, elongated head that reduces the sperm's
              penetration capacity. This is often grouped with pyriform heads
              due to the similarity in the shape-related deformity​.
            </p>

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

      <div className={styles.section}>
        <h2>Nuclear Vacuoles</h2>

        <Link href="/Morphology/Small-Nuclear-Vacuoles">
          <div className={styles.abButton}>
            <h3>Small Vacuoles</h3>

            <p>
              Minor vacuoles within the nucleus, effect on fertility is not
              fully known.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Small Nuclear Vacuoles</h3>

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

        <Link href="/Morphology/Small-Apical-Vacuoles">
          <div className={styles.abButton}>
            <h3>Small Apical Vacuoles</h3>

            <p>
              Located near the tip (apex) of the sperm head, potentially
              affecting the sperm’s ability to penetrate the egg.
            </p>

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

        <Link href="/Morphology/Large-Vacuoles">
          <div className={styles.abButton}>
            <h3>Large Vacuoles</h3>

            <p>
              Pronounced vacuoles in the nucleus, associated with chromatin
              damage and reduced fertility​​.
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

        <Link href="/Morphology/Diadem-Defect">
          <div className={styles.abButton}>
            <h3>Diadem Defect</h3>

            <p>
              A subtype of nuclear vacuole defect characterized by multiple
              small vacuoles near the acrosome, often arranged in a crown-like
              pattern. These defects typically indicate serious chromatin
              issues​​.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Diadem Defect</h3>

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

      <div className={styles.section}>
        <h2>Acrosome Defects</h2>

        <h3>Ruffled Acrosome</h3>

        <p>
          A subtype of nuclear vacuole defect characterized by multiple small
          vacuoles near the acrosome, often arranged in a crown-like pattern.
          These defects typically indicate serious chromatin issues​​.
        </p>

        <Link href="/Morphology/Swollen-Acrosomes">
          <div className={styles.abButton}>
            <h3>Swollen Acrosome</h3>

            <p>
              A condition where the acrosome appears excessively swollen,
              reducing the efficiency of the sperm's enzymatic function and
              impairing fertilization​​.
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

        <Link href="/Morphology/Knobbed-Acrosomes">
          <div className={styles.abButton}>
            <h3>Knobbed Acrosome</h3>

            <p>
              A bulbous or swollen acrosome that can affect enzyme release,
              reducing the ability of sperm to penetrate the egg​.
            </p>

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

        <h3>Beaded Acrosome</h3>

        <p>
          A beaded appearance within the acrosome, which can disrupt the
          enzymatic function necessary for fertilization​.
        </p>

        <h3>Flat Acrosome</h3>

        <p>
          A flattened or underdeveloped acrosome that impairs the sperm’s
          fertilization capability​.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Loose and Detached Heads</h2>

        <Link href="/Morphology/Loose-and-Detached-Heads">
          <div className={styles.abButton}>
            <h3>Detached Heads</h3>

            <p>
              Sperm heads have become completely separated from the tail,
              rendering the sperm immobile. This defect is often caused by
              mechanical damage or extreme environmental stress​​.
            </p>

            <h3>Loose Heads</h3>

            <p>
              Loose heads have an obvious fracture of the midpiece at the base
              of the head.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Loose and Detached Heads</h3>

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

      <div className={styles.section}>
        <h2>Crested or Folded Heads</h2>

        <h3>Crested Head</h3>

        <p>
          A ridge or crest-like formation on the sperm head, often caused by
          abnormal chromatin packaging or developmental issues, which can affect
          fertilization​.
        </p>

        <h3>Folded Head</h3>

        <p>
          A folding of the sperm head, which usually indicates a severe
          structural deformity and can reduce the sperm’s ability to penetrate
          the egg.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Other Head Defects</h2>

        <h3>Microcephalic Sperm</h3>

        <p>Abnormally small-headed sperm with reduced chromatin content.</p>

        <h3>Macrocephalic Sperm</h3>

        <p>
          Abnormally large-headed sperm, often with excess or malformed
          chromatin​.
        </p>
      </div>
    </div>
  );
}
