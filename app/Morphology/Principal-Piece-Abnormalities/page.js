"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Link from "next/link";

import {
  morphologyAbCardP,
  morphologyH1,
  morphologyH2,
  morphologyP,
  morphologySectionBlock,
  iconLearnMore,
  learnMoreRow,
  learnMoreTitle,
} from "../morphologyTailwind";

export default function PrincipalAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Principal Piece (Tail) Abnormalities</h1>

      <p className={morphologyP}>
        The principal piece is the tail section of the sperm, and abnormalities
        here can severely restrict the sperm's motility, making it difficult to
        reach the egg.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Coiled Tail</h2>

        <Link href="/Morphology/Coiled-Tail">
          <div>
            <p className={morphologyAbCardP}>
              A tightly coiled tail, which prevents normal forward movement and
              significantly reduces the sperm’s motility​​.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>Learn More About Coiled Tail</h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Double Tail</h2>

        <p className={morphologyP}>
          Sperm with two tails two heads or accessory tail, often resulting in
          inefficient motility. This defect is rare but can severely affect
          sperm function​​.
        </p>

        <h2 className={morphologyH2}>Folded Tail</h2>

        <p className={morphologyP}>
          The tail is folded or bent, which limits the sperm’s ability to swim
          properly and reduces the chance of fertilization​.
        </p>

        <h2 className={morphologyH2}>Short Tail</h2>

        <p className={morphologyP}>
          Short Tail: An abnormally short tail that reduces motility and the
          ability of the sperm to reach the egg​​.
        </p>

        <h2 className={morphologyH2}>Distal Reflex</h2>

        <p className={morphologyP}>
          A sharp bend at the distal end of the tail, often linked to handling
          or environmental stress, which can impede sperm motility​.
        </p>
      </div>
    </div>
  );
}
