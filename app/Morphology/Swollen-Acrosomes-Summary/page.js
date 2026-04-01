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

export default function SwollenAcrosomesSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Swollen Acrosomes</h1>

      <p className={morphologyP}>Aged sperm such as “rusty loads”.</p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>Generally considered compensable.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Swollen Acrosomes</h2>

        <Link href="/Morphology/Swollen-Acrosomes">
          <div>
            <p className={morphologyAbCardP}>
              Enlarged or deformed acrosome membranes, affecting enzyme release.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Swollen Acrosomes
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Ruffled/Incomplete Acrosomes</h2>

        <p className={morphologyP}>
          Irregular or incomplete acrosome formation that may impair
          fertilization capability.
        </p>
      </div>
    </div>
  );
}
