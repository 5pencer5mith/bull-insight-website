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
    src: "/img/morphology/DistalMidPieceReflex/DMR1.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR2.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR3.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR4.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR5.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR6.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR7.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR8.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
];

export default function DistalMidpeiceReflex() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Distal Midpiece Reflex
          <Image
            src="/img/morphology/DistalMidPieceReflex/Distal midpiece reflex.png"
            alt="Distal Midpiece Reflex Sperm Morphology inline image"
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
            Distal mid-piece reflex (DMR) is characterized by a sharp hairpin
            bend in the distal mid-piece of the sperm. This defect is often
            accompanied by a cytoplasmic droplet at the bend.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            Distal mid-piece reflex is considered a compensable defect as the
            affected sperm display reverse motility and are unable to penetrate
            the zona pellucida. Up to 30% of this defect in an ejaculate is
            tolerated with no significant impact on fertility if the remaining
            sperm are normal. However, high levels of this defect (greater than
            30%) can significantly reduce fertility​​​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Distal mid-piece reflex can appear 4-11 days after a stress event
            such as dexamethasone treatment or within 16 days after an acidotic
            event​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Environmental Stress:</strong> Heat stress, cold shock, or
              other stress events
            </li>
            <li className={morphologyLi}>
              <strong>Hypotonic Solutions:</strong> Prolonged contact with
              hypotonic solutions such as Nigrosin-Eosin stain
            </li>
            <li className={morphologyLi}>
              <strong>Genetic Predisposition:</strong> Some bulls have a
              hereditary predisposition to this defect
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Distal mid-piece reflex is often transient and may fluctuate in
            prevalence between ejaculates. It is the most common tail defect
            seen in bull ejaculates and is usually of epididymal origin​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Distal Mid-Piece Reflex on Fertility</h3>

          <p className={morphologyP}>
            A study involving bulls with high levels of distal mid-piece reflex
            (greater than 30%) demonstrated reduced fertility. However, in bulls
            with up to 25% of this defect, fertility was not significantly
            impacted, emphasizing the compensable nature of this abnormality
          </p>
        </section>
      </article>
    </div>
  );
}
