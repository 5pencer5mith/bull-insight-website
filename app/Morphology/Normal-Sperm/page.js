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

export default function NormalSperm() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Normal Sperm</h1>

      <p className={morphologyP}>
        This category includes sperm forms considered normal or minimally
        impactful on fertility, even though they may display minor deviations.
        These are generally excluded from fertility concerns at low numbers but
        can be noted if present in higher frequencies.
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>These abnormalities are generally not
        detrimental to fertility at low frequencies​​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Distal Cytoplasmic Droplets</h2>

        <Link href="/Morphology/Distal-Cytoplasmic-Droplets">
          <div>
            <p className={morphologyAbCardP}>
              Considered a normal post-ejaculation maturation trait.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Distal Cytoplasmic Droplets
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Abaxial Tails</h2>

        <p className={morphologyP}>
          Slightly off-center tail attachments, typical of variation.
        </p>

        <h2 className={morphologyH2}>Slightly Bent Midpiece</h2>

        <p className={morphologyP}>
          Small midpiece bends that do not affect motility.
        </p>

        <h2 className={morphologyH2}>Segmental Aplasia</h2>

        <Link href="/Morphology/Segmental-Aplasia-of-the-Mitochondrial-Sheath">
          <div>
            <p className={morphologyAbCardP}>
              Minor midpiece mitocondrial defects.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Segmental Aplasia
              </h3>
              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Slightly Pyriform Heads</h2>

        <p className={morphologyP}>
          Mild head shape deviations, within normal variation.
        </p>

        <h2 className={morphologyH2}>Narrow Heads</h2>

        <p className={morphologyP}>Slightly Thinner head structures.</p>
      </div>
    </div>
  );
}
