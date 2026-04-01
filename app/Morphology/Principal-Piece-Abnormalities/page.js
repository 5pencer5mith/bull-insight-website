"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./page.module.css";

export default function PrincipalAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={styles.contentWrapper}>
      <h1>Principal Piece (Tail) Abnormalities</h1>

      <p>
        The principal piece is the tail section of the sperm, and abnormalities
        here can severely restrict the sperm's motility, making it difficult to
        reach the egg.
      </p>

      <div className={styles.section}>
        <h2>Coiled Tail</h2>

        <Link href="/Morphology/Coiled-Tail">
          <div className={styles.abButton}>
            <p>
              A tightly coiled tail, which prevents normal forward movement and
              significantly reduces the sperm’s motility​​.
            </p>

            <div className={styles.learnMore}>
              <h3>Learn More About Coiled Tail</h3>

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

        <h2>Double Tail</h2>

        <p>
          Sperm with two tails two heads or accessory tail, often resulting in
          inefficient motility. This defect is rare but can severely affect
          sperm function​​.
        </p>

        <h2>Folded Tail</h2>

        <p>
          The tail is folded or bent, which limits the sperm’s ability to swim
          properly and reduces the chance of fertilization​.
        </p>

        <h2>Short Tail</h2>

        <p>
          Short Tail: An abnormally short tail that reduces motility and the
          ability of the sperm to reach the egg​​.
        </p>

        <h2>Distal Reflex</h2>

        <p>
          {" "}
          A sharp bend at the distal end of the tail, often linked to handling
          or environmental stress, which can impede sperm motility​.
        </p>
      </div>
    </div>
  );
}
