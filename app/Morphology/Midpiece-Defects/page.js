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

export default function MidpieceDefects() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Midpiece Defects (MP)</h1>

      <p className={morphologyP}>
        Midpiece abnormalities generally affect sperm motility and energy
        production, reducing the sperm's capacity to reach the oocyte, although
        these defects are often compensable in higher sperm concentrations.
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>These are compensable defects as
        increased sperm numbers can overcome their motility impairments​​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Distal Midpiece Reflex (DMR)</h2>

        <Link href="/Morphology/Distal-Mid-Piece-Reflex">
          <div>
            <p className={morphologyAbCardP}>A bend in the distal midpiece.</p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Distal Midpiece Reflex
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Dag Defect</h2>

        <Link href="/Morphology/Dag-Defect">
          <div>
            <p className={morphologyAbCardP}>
              Characterized by a coiled midpiece, impacting motility.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>Learn More About Dag Defect</h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Stump Tails</h2>

        <p className={morphologyP}>Short or absent principal pieces.</p>

        <h2 className={morphologyH2}>Multiple (Accessory) Tails</h2>

        <p className={morphologyP}>Presence of extra tail structures.</p>
      </div>
    </div>
  );
}
