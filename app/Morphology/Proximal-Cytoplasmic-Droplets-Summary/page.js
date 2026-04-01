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

export default function ProximalCytoDropletsSummary() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Proximal Cytoplasmic Droplets (PC)</h1>

      <p className={morphologyP}>
        These droplets are indicative of epididymal immaturity or spermiogenesis
        issues, particularly in mature bulls, and have been shown to affect
        sperm’s binding ability with oocytes.{" "}
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>These droplets are non-compensable if
        they exceed 20%, often associated with poor fertility outcomes​​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Proximal Cytoplasmic Droplets</h2>

        <Link href="/Morphology/Proximal-Cytoplasmic-Droplets">
          <div>
            <p className={morphologyAbCardP}>
              Common in pubertal bulls, but significant in mature bulls,
              indicating potential for impaired fertility.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Proximal Cytoplasmic Droplets
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
