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
    src: "/img/morphology/PyriformHeads/Py1.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py2.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py3.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py4.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py5.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py6.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py7.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py8.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
];

export default function PyriformHeads() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Pyriform Heads
          <Image
            src="/img/morphology/PyriformHeads/Pyriform.png"
            alt="Pyriform Heads Sperm Morphology inline image"
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
            Pyriform heads are characterized by a deformity of the sperm head
            that can vary in shape. This deformity often presents as a
            pear-shaped or tapered head, which is narrow in the postacrosomal
            region. The variation in this abnormality includes slight to severe
            tapering and narrowing.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            The presence of pyriform heads can affect fertility. Moderate
            pyriformity, in the absence of other signs of disturbed
            spermatogenesis, may not be detrimental to fertility. However,
            extreme tapering in the postacrosomal region results in significant
            reductions in fertility. Pyriform heads are considered only
            partially compensable. Some pyriform sperm may be able to fertilize
            oocytes but with a reduced ability to cleave. The threshold of not
            more than 20% is therefore applied to this abnormality​​​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Pyriform heads can typically be observed 20 days following an insult
            such as dexamethasone treatment or scrotal insulation
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Incomplete maturation:</strong> Sperm retain droplets as a
              residual body during epididymal transit
            </li>
            <li className={morphologyLi}>
              <strong>Stress:</strong> Such as heat stress or physical exertion
            </li>
            <li className={morphologyLi}>
              <strong>Nutritional deficiencies:</strong> Suboptimal diet
              affecting spermatogenesis and epididymal function
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            The presence of distal cytoplasmic droplets may indicate that the
            sperm has not acquired essential binding proteins from the seminal
            vesicle fluid, which are necessary for binding to the zona
            pellucida​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <p className={morphologyP}>
            Case studies highlight that bulls with high numbers of distal
            droplets still achieve normal pregnancy rates, emphasizing that
            these droplets should not be considered a defect when present in
            isolation​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
