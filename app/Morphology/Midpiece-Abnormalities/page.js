"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function MidpieceAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Midpiece Abnormalities</h1>

      <p>
        Abnormalities in the midpiece affect the sperm’s ability to generate
        energy, leading to poor motility and reduced fertilization capacity.
      </p>

      <div className={styles.section}>
        <h2>Dag Defect</h2>

        <Link href="/Morphology/Dag-Defect">
          <div className={styles.abButton}>
            <p>
              A coiling or curving of the tail near the junction with the
              midpiece, often of genetic origin, that disrupts motility. This
              defect can severely impair the sperm’s movement​​.
            </p>

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
      </div>

      <div className={styles.section}>
        <h2>Segmental Mitochondrial Defects</h2>

        <Link href="/Morphology/Segmental-Aplasia-of-the-Mitochondrial-Sheath">
          <div className={styles.abButton}>
            <h3>Small Defects (Normal)</h3>

            <p>
              Small, localized disruptions in the mitochondrial sheath that do
              not significantly affect motility​.
            </p>

            <h3>Large Defects (Abnormal)</h3>

            <p>
              Extensive disruptions in the mitochondrial sheath that reduce
              energy production and sperm motility​​.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Segmental Mitochondrial Aplasia</h3>

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
        <h2>Proximal Droplet</h2>

        <Link href="/Morphology/Proximal-Cytoplasmic-Droplets">
          <div className={styles.abButton}>
            <p>
              A cytoplasmic droplet near the sperm’s midpiece, which is common
              in immature sperm but considered abnormal in mature sperm as it
              can impede motility​​.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Proximal Droplets</h3>

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
        <h2>Distal Midpiece Reflex (DMR)</h2>

        <Link href="/Morphology/Distal-Mid-Piece-Reflex">
          <div className={styles.abButton}>
            <p>
              A sharp bend or reflex in the midpiece, often resulting from
              stress, that reduces the sperm’s ability to move efficiently​​.
            </p>

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
      </div>

      <div className={styles.section}>
        <h2>Bent Midpiece</h2>

        <p>
          A sharply bent midpiece, often caused by stress or illness, which
          affects the sperm’s ability to swim properly​.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Swollen Midpiece & Pseudodroplets</h2>

        <Link href="/Morphology/Pseudo-Droplet">
          <div className={styles.abButton}>
            <h3>Swollen Midpiece</h3>

            <p>
              A swelling of the midpiece, often due to oxidative stress,
              reducing motility and sperm energy​​.
            </p>

            <h3>Pseudodroplets</h3>

            <p>
              Swelling of the midpiece resembling a cytoplasmic droplet but
              located in an abnormal position, often linked to metabolic stress
              and negatively affecting motility​​.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Pseudodroplets</h3>

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
        <h2>Axial Distortion</h2>

        <p>
          A twisting or misalignment of the midpiece, which negatively impacts
          the sperm’s motility and ability to move forward​.
        </p>
      </div>
    </div>
  );
}
