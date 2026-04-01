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

export default function NormalMorphology() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Normal Sperm Morphology</h1>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Abaxial Midpiece</h2>

        <p className={morphologyP}>
          An off-center attachment of the midpiece to the head, which is
          considered normal unless motility issues are present​.
        </p>

        <Link href="/Morphology/Distal-Cytoplasmic-Droplets">
          <div>
            <h2 className={morphologyH2}>Distal Droplets</h2>

            <p className={morphologyAbCardP}>
              Cytoplasmic droplets located distally on the sperm's often at the
              midpiece and tail juncture.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Distal Droplets
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
