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

// Images for slider
const images = [
  {
    src: "/img/morphology/proximalCytoDroplets/PCD1.png",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD2.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD3.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD4.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD5.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD6.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD7.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD8.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
];

export default function ProximalCytoplasmicDroplets() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Proximal Cytoplasmic Droplets
          <Image
            src="/img/morphology/ProximalCytoDroplets/Cytoplasmic Droplet.png"
            alt=""
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
            Proximal cytoplasmic droplets are small, round inclusions found near
            the head of the sperm. They indicate a failure in the final
            maturation stages during spermiogenesis.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            The presence of proximal cytoplasmic droplets can significantly
            affect fertility. Counts greater than 10-15% are associated with
            decreased fertility, and levels above 20% indicate a high risk of
            poor pregnancy rates. Bulls with more than 30% proximal droplets
            show immature and reduced fertilization capability of the
            spermatozoa.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Proximal cytoplasmic droplets typically appear 7-10 days following a
            temperature or stress event and 15 days following ruminal acidosis.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Testicular immaturity:</strong> Common in pubertal bulls
            </li>
            <li className={morphologyLi}>
              <strong>Stress:</strong> Such as heat stress or physical exertion
            </li>
            <li className={morphologyLi}>
              <strong>Nutritional deficiencies:</strong> Inadequate diet
              affecting spermatogenesis
            </li>
            <li className={morphologyLi}>
              <strong>Infections and illnesses:</strong> Conditions affecting
              testicular or epididymal function
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Proximal cytoplasmic droplets are considered an uncompensable
            defect, meaning they cannot be compensated for by increasing sperm
            count, as affected sperm fail to bind to the ova.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>
            Case Study: Impact of High Proximal Droplet Levels on Herd Fertility
          </h3>

          <p className={morphologyP}>
            A study involving a Red Angus bull with 63-71% proximal droplets
            showed a significant reduction in pregnancy rates compared to
            control bulls. This indicates a strong association between high
            levels of proximal droplets and infertility.
          </p>
        </section>
      </article>
    </div>
  );
}
