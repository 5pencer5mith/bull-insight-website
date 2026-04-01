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
  morphologyH3,
  morphologyP,
  morphologySectionBlock,
  iconLearnMore,
  learnMoreRow,
  learnMoreTitle,
} from "../morphologyTailwind";

export default function HeadAbnormalities() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div>
      <h1 className={morphologyH1}>Head Abnormalities</h1>

      <p className={morphologyP}>
        These abnormalities can reduce the sperm’s ability to fertilize due to
        issues in head shape, acrosome function, or DNA content.
      </p>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Pyriform and Tapered Heads</h2>

        <Link href="/Morphology/Pyriform-Heads">
          <div>
            <h3 className={morphologyH3}>Severe Pyriform Head</h3>

            <p className={morphologyAbCardP}>
              A distinct pear-shaped deformity that negatively affects the
              sperm’s ability to fertilize the egg.
            </p>

            <h3 className={morphologyH3}>Tapered Head (Severe)</h3>

            <p className={morphologyAbCardP}>
              A significantly narrow, elongated head that reduces the sperm's
              penetration capacity. This is often grouped with pyriform heads
              due to the similarity in the shape-related deformity​.
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

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Nuclear Vacuoles</h2>

        <Link href="/Morphology/Small-Nuclear-Vacuoles">
          <div>
            <h3 className={morphologyH3}>Small Vacuoles</h3>

            <p className={morphologyAbCardP}>
              Minor vacuoles within the nucleus, effect on fertility is not
              fully known.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Small Nuclear Vacuoles
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <Link href="/Morphology/Small-Apical-Vacuoles">
          <div>
            <h3 className={morphologyH3}>Small Apical Vacuoles</h3>

            <p className={morphologyAbCardP}>
              Located near the tip (apex) of the sperm head, potentially
              affecting the sperm’s ability to penetrate the egg.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Small Apical Vacuoles
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <Link href="/Morphology/Large-Vacuoles">
          <div>
            <h3 className={morphologyH3}>Large Vacuoles</h3>

            <p className={morphologyAbCardP}>
              Pronounced vacuoles in the nucleus, associated with chromatin
              damage and reduced fertility​​.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Large Vacuoles
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <Link href="/Morphology/Diadem-Defect">
          <div>
            <h3 className={morphologyH3}>Diadem Defect</h3>

            <p className={morphologyAbCardP}>
              A subtype of nuclear vacuole defect characterized by multiple
              small vacuoles near the acrosome, often arranged in a crown-like
              pattern. These defects typically indicate serious chromatin
              issues​​.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Diadem Defect
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Acrosome Defects</h2>

        <h3 className={morphologyH3}>Ruffled Acrosome</h3>

        <p className={morphologyP}>
          A subtype of nuclear vacuole defect characterized by multiple small
          vacuoles near the acrosome, often arranged in a crown-like pattern.
          These defects typically indicate serious chromatin issues​​.
        </p>

        <Link href="/Morphology/Swollen-Acrosomes">
          <div>
            <h3 className={morphologyH3}>Swollen Acrosome</h3>

            <p className={morphologyAbCardP}>
              A condition where the acrosome appears excessively swollen,
              reducing the efficiency of the sperm's enzymatic function and
              impairing fertilization​​.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Swollen Acrosomes
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <Link href="/Morphology/Knobbed-Acrosomes">
          <div>
            <h3 className={morphologyH3}>Knobbed Acrosome</h3>

            <p className={morphologyAbCardP}>
              A bulbous or swollen acrosome that can affect enzyme release,
              reducing the ability of sperm to penetrate the egg​.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Knobbed Acrosomes
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>

        <h3 className={morphologyH3}>Beaded Acrosome</h3>

        <p className={morphologyP}>
          A beaded appearance within the acrosome, which can disrupt the
          enzymatic function necessary for fertilization​.
        </p>

        <h3 className={morphologyH3}>Flat Acrosome</h3>

        <p className={morphologyP}>
          A flattened or underdeveloped acrosome that impairs the sperm’s
          fertilization capability​.
        </p>
      </div>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Loose and Detached Heads</h2>

        <Link href="/Morphology/Loose-and-Detached-Heads">
          <div>
            <h3 className={morphologyH3}>Detached Heads</h3>

            <p className={morphologyAbCardP}>
              Sperm heads have become completely separated from the tail,
              rendering the sperm immobile. This defect is often caused by
              mechanical damage or extreme environmental stress​​.
            </p>

            <h3 className={morphologyH3}>Loose Heads</h3>

            <p className={morphologyAbCardP}>
              Loose heads have an obvious fracture of the midpiece at the base
              of the head.
            </p>

            <div className={learnMoreRow}>
              <h3 className={learnMoreTitle}>
                Learn More About Loose and Detached Heads
              </h3>

              <IonIcon className={iconLearnMore} icon={arrowForwardOutline} />
            </div>
          </div>
        </Link>
      </div>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Crested or Folded Heads</h2>

        <h3 className={morphologyH3}>Crested Head</h3>

        <p className={morphologyP}>
          A ridge or crest-like formation on the sperm head, often caused by
          abnormal chromatin packaging or developmental issues, which can affect
          fertilization​.
        </p>

        <h3 className={morphologyH3}>Folded Head</h3>

        <p className={morphologyP}>
          A folding of the sperm head, which usually indicates a severe
          structural deformity and can reduce the sperm’s ability to penetrate
          the egg.
        </p>
      </div>

      <div className={morphologySectionBlock}>
        <h2 className={morphologyH2}>Other Head Defects</h2>

        <h3 className={morphologyH3}>Microcephalic Sperm</h3>

        <p className={morphologyP}>
          Abnormally small-headed sperm with reduced chromatin content.
        </p>

        <h3 className={morphologyH3}>Macrocephalic Sperm</h3>

        <p className={morphologyP}>
          Abnormally large-headed sperm, often with excess or malformed
          chromatin​.
        </p>
      </div>
    </div>
  );
}
