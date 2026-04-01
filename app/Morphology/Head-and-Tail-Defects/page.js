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

export default function HeadAndTailDefects() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Head and Tail Defects (HT)</h1>

      <p className={morphologyP}>
        This category encompasses abnormalities that often impede the sperm's
        physical structure and motility, limiting the sperm's ability to reach
        the egg.
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>Typically, compensable since these
        defects prevent sperm from reaching the egg​​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Detached or Loose Heads</h2>

        <Link href="/Morphology/Loose-and-Detached-Heads">
          <div>
            <p className={morphologyAbCardP}>
              Heads detached from tails, often due to stress.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Detached or Loose Heads
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Decapitated Head</h2>

        <Link href="/Morphology/Decapitated-Head">
          <div>
            <p className={morphologyAbCardP}>
              Complete separation of the head and tail.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Decapitated Heads
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Reflex/Bent Prinicpal Pieces</h2>

        <p className={morphologyP}>
          Bending at the principal piece that impedes movement.
        </p>

        <h2 className={morphologyH2}>Coiled Tails</h2>

        <Link href="/Morphology/Coiled-Tail">
          <div>
            <p className={morphologyAbCardP}>
              Tails curled into coils, significantly reducing motility.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>Learn More About Coiled Tail</h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
