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

export default function PyriformHeadsSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Pyriform Heads (PY)</h1>

      <p className={morphologyP}>
        Pyriform heads indicate oxidative damage during spermiogenesis and are
        associated with genetic and environmental factors affecting chromatin
        integrity.
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>This defect is non-compensable as it
        affects chromatin integrity and may impact embryo viability​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Pyriform Heads</h2>

        <Link href="/Morphology/Pyriform-Heads">
          <div>
            <p className={morphologyAbCardP}>
              Pear-shaped head defects, often linked to oxidative stress.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Pyriform Heads
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
