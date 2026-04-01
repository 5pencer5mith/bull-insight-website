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

export default function OtherAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Other Abnormalities</h1>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Teratoid Sperm</h2>

        <Link href="/Morphology/Teratoid-Sperm">
          <div>
            <p className={morphologyAbCardP}>
              Grossly malformed, sometimes indicative of severe spermatogenic
              disturbance.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Teratoid Sperm
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Round Cells</h2>

        <p className={morphologyP}>
          Typically, immature sperm precursors. If there is a presence of white
          blood cells (WBCs) it suggests possible infection or inflammation.{" "}
        </p>

        <h2 className={morphologyH2}>Epithelial Cells</h2>

        <p className={morphologyP}>
          Sloughed cells from the reproductive tract.
        </p>

        <h2 className={morphologyH2}>Medusa Cells:</h2>

        <p className={morphologyP}>
          Ciliated epithelial cells often observed but typically non-significant
          unless in large numbers.
        </p>
      </div>
    </div>
  );
}
