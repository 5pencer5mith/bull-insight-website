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

export default function VacuolesAndTeratoid() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Vacuoles/Teratoids (VT)</h1>

      <p className={morphologyP}>
        Vacuoles within the sperm head, often caused by chromatin defects,
        reduce fertilization potential and are closely linked to early embryonic
        failure.
      </p>

      <p className={morphologyP}>
        <strong>Fertility Impact: </strong>These defects are typically
        non-compensable as they often lead to chromatin instability and early
        embryo loss​.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Small Apical Vacuoles</h2>

        <Link href="/Morphology/Small-Apical-Vacuoles">
          <div>
            <p className={morphologyAbCardP}>
              Small vacuoles located near the tip of the sperm head.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Small Apical Vacuoles
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Large Confluent Vacuoles</h2>

        <Link href="/Morphology/Large-Vacuoles">
          <div>
            <p className={morphologyAbCardP}>
              Large or connected vacuoles indicating significant chromatin
              damage.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Large Vacuoles
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Diadem Defects</h2>

        <Link href="/Morphology/Diadem-Defect">
          <div>
            <p className={morphologyAbCardP}>
              Characteristic vacuoles forming a pattern around the acrosome,
              often due to oxidative stress.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Diadem Defects
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h2 className={morphologyH2}>Rolled Heads</h2>

        <p className={morphologyP}>
          Heads that are structurally rolled, compromising function.
        </p>

        <h2 className={morphologyH2}>Teratoid Heads</h2>

        <Link href="/Morphology/Teratoid-Sperm">
          <div>
            <p className={morphologyAbCardP}>
              Severe malformations across the head structure, usually indicative
              of major spermatogenic issues.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Teratoid Heads
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
