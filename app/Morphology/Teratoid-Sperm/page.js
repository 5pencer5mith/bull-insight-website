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
    src: "/img/morphology/TeratoidSperm/TS1.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS2.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS3.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS4.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS5.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS6.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS7.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
  {
    src: "/img/morphology/TeratoidSperm/TS8.jpg",
    alt: "Teratoid Sperm Sperm Morphology Example",
    caption: "Teratoid Sperm",
  },
];

export default function TeratoidSperm() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Teratoid Sperm
          <Image
            src="/img/morphology/TeratoidSperm/Teratoid.png"
            alt="Teraoid Sperm Morphology inline image"
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
            Teratoid sperm are grossly abnormal in structure, often barely
            recognizable as sperm cells. The sperm nucleus can vary from normal
            to grossly misshapen and may be vacuolated. The tail is often coiled
            up completely and lies superimposed on the head.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            Teratoid sperm are indicative of severe disturbances in
            spermatogenesis and spermiogenesis. They often occur at very low
            levels in the spermiogram (1%). However, when present at higher
            levels (greater than 15%), they significantly reduce fertility and
            are considered an uncompensable defect. Ejaculates should have at
            least 70% normal sperm to ensure fertility​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Teratoid sperm can appear shortly after severe stress or genetic
            disturbances affecting spermatogenesis. They are often observed in
            the spermiogram 20-30 days after the initial insult​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Genetic Factors:</strong> Some bulls may have a genetic
              predisposition to this abnormality.
            </li>
            <li className={morphologyLi}>
              <strong>Severe Environmental Stress:</strong> Such as heat stress
              or nutritional deficiencies.
            </li>
            <li className={morphologyLi}>
              <strong>Disturbances in Spermatogenesis: </strong> Severe
              disruption in the process of sperm cell development
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Teratoid sperm are rarely seen in high numbers, but their presence
            indicates a poor prognosis for fertility. They are considered an
            uncompensable defect as they are unable to fertilize ova due to
            their severe structural abnormalities​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Teratoid Sperm on Fertility</h3>

          <p className={morphologyP}>
            A case study involving a bull with a high percentage of teratoid
            sperm demonstrated severe infertility. The study highlighted the
            significant impact of teratoid sperm on overall fertility,
            particularly when present at levels exceeding the acceptable
            threshold​​.
          </p>
        </section>
      </article>
    </div>
  );
}
