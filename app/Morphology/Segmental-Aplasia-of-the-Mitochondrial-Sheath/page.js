// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

import {
  morphologyP,
  morphologyH1WithMedia,
  morphologyH2,
  morphologyH3,
  morphologyArticle,
  morphologySection,
  morphologyUl,
  morphologyLi,
  titleContainer,
  sliderContainer,
} from "../morphologyTailwind";

// Images for the slider
const images = [
  {
    src: "/img/morphology/MitochondrialSheath/SAMS1.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS2.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS3.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS5.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS6.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS7.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS8.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
];

export default function SegmentalAplasia() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Segmental Aplasia of the Mitochondrial Sheath
          <Image
            src="/img/morphology/MitochondrialSheath/Sheath Defects.png"
            alt="Mitochondrial Sheath Sperm Morphology inline image"
            width={150}
            height={150}
          />
        </h1>
      </div>

      <div className={sliderContainer}>
        <Slider imageData={images} />
      </div>

      <article className={morphologyArticle}>
        <section className={morphologySection}>
          <h2 className={morphologyH2}>Description</h2>

          <p className={morphologyP}>
            Segmental aplasia of the mitochondrial sheath is characterized by
            gaps or missing segments in the mitochondrial sheath of the sperm’s
            midpiece. This can lead to a fractured appearance of the mid-piece
            and may be associated with a condition known as the pseudo-droplet.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            While segmental aplasia of the mitochondrial sheath can appear
            severe, it often has little to no effect on fertility. Bulls with up
            to 90% of sperm affected by this defect have been reported to
            maintain normal fertility over multiple breeding seasons. However,
            when gaps in the mid-piece are larger than 3 microns, it may result
            in fractures, and such severe segmental aplasia is considered under
            mid-piece abnormalities​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            This defect can be transient or permanent. If the defect is observed
            in two tests conducted ten weeks apart, it suggests a permanent
            condition​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop this defect
            </li>
            <li className={morphologyLi}>
              <strong>Nutritional Factors:</strong> High levels of gossypol in
              the diet or dietary imbalances
            </li>
            <li className={morphologyLi}>
              <strong>Viral Infections:</strong> Conditions such as Bovine
              Ephemeral Fever have been linked to this defect
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            This defect is similar to the pseudo-droplet, where thickening of
            the mid-piece is observed. Under light microscopy, the defect may be
            confused with a broken neck appearance. It is essential to
            differentiate between slight gaps (1-1.5 microns), which are
            considered normal, and larger gaps (greather than 3 microns) which
            indicate a more severe abnormality​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Segmental Aplasia on Fertility</h3>

          <p className={morphologyP}>
            A case study involving a bull with 90% of sperm showing segmental
            aplasia of the mitochondrial sheath maintained normal fertility over
            three breeding seasons, highlighting the minimal impact of this
            defect on fertility​​.
          </p>
        </section>
      </article>
    </div>
  );
}
