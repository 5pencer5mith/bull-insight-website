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
    src: "/img/morphology/DoubleForm/DF1.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF2.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF3.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF4.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF5.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF6.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF7.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
];

export default function DoubleForms() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Double Forms
          <Image
            src="/img/morphology/DoubleForm/Double Form.png"
            alt="Double Forms Sperm Morphology inline image"
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
            Double forms are characterized by sperm with two heads, two tails,
            or both. These forms can include multinuclear sperm or
            multiflagellar sperm, resulting in a multilamellar appearance.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            Double forms are a serious defect and significantly impair
            fertility. They are considered an uncompensable defect because the
            affected sperm are usually non-functional. High levels of double
            forms (greater than 10%) can indicate a severe disruption in
            spermatogenesis and should be addressed promptly​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Double forms can appear approximately 20-30 days following a severe
            stress event or genetic disturbance affecting spermatogenesis​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Genetic Factors:</strong> Some bulls may have a hereditary
              predisposition to develop this defect
            </li>
            <li className={morphologyLi}>
              <strong>Severe Environmental Stress:</strong> Heat stress, cold
              shock, or other significant stressors
            </li>
            <li className={morphologyLi}>
              <strong>Disturbances in Spermatogenesis:</strong> Severe
              disruptions during sperm development and maturation
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Double forms are indicative of a severe disturbance in
            spermatogenesis and are often seen in conjunction with other serious
            sperm defects. These sperm are generally non-functional and unable
            to fertilize ova​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Double Forms on Fertility</h3>

          <p className={morphologyP}>
            A case study involving a bull with high percentages of double forms
            (greater than 10%) showed severe infertility. The presence of these
            defects highlighted the critical impact on overall fertility and the
            need for thorough management and intervention​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
