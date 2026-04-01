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

export default function KnobbedAcrosomesSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Knobbed Acrosomes (KA)</h1>

      <p className={morphologyP}>
        Knobbed acrosomes may have a genetic origin and present as bulbous
        structures on the sperm head, which can impede the acrosomal reaction
        needed for fertilization.{" "}
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>This defect is non-compensable as it
        affects chromatin integrity and may impact embryo viability​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Knobbed Acrosomes</h2>

        <Link href="/Morphology/Knobbed-Acrosomes">
          <div>
            <p className={morphologyAbCardP}>
              Thickened or misshapen acrosomes, potentially genetic.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Knobbed Acrosomes
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
