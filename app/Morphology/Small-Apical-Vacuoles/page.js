// Components
// import Image from 'next/image';
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
    src: "/img/morphology/SmallApicalVacuoles/SAV1.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV2.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV3.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV4.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV5.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV6.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV7.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
  {
    src: "/img/morphology/SmallApicalVacuoles/SAV8.jpg",
    alt: "Small Apical Vacuoles Sperm Morphology example",
    caption: "Small Apical Vacuoles",
  },
];

export default function SmallApicalVacuoles() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Small Apical Vacuoles
          {/* <Image
                        src='/morphology/'
                        alt=''
                        width={150}
                        height={150}
                    /> */}
        </h1>
      </div>

      <div className={sliderContainer}>
        <Slider imageData={images} />
      </div>

      <article className={morphologyArticle}>
        <section className={morphologySection}>
          <h2 className={morphologyH2}>Description</h2>

          <p className={morphologyP}>
            Small apical vacuoles appear as small, clear inclusions located at
            the apical region of the sperm head. These vacuoles are often
            associated with other defects, such as the diadem defect, or may
            appear scattered throughout the nucleus.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            Small apical vacuoles can negatively impact fertility. Ejaculates
            with high numbers of apical vacuoles (greater than 20%) have reduced
            conception rates. In an IVF study, no sperm with these vacuoles were
            observed inside the zona pellucida, indicating a significant impact
            on fertilization ability​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Small apical vacuoles can appear shortly after stress events, such
            as heat stress or nutritional deficiencies. They are often transient
            and may vary between ejaculates​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop vacuoles
            </li>
            <li className={morphologyLi}>
              <strong>Nutritional Factors:</strong> High concentrate rations and
              other dietary imbalances
            </li>
            <li className={morphologyLi}>
              <strong>Environmental Stress:</strong> Extreme temperatures or
              stress events
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Small apical vacuoles are more commonly observed in some breeds and
            may fluctuate in prevalence between ejaculates. These vacuoles can
            be challenging to see on standard eosin-nigrosin smears and are more
            easily identified using phase contrast or Feulgen staining​​​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Small Apical Vacuoles on Fertility</h3>

          <p className={morphologyP}>
            A study involving a bull with a high number of small apical vacuoles
            showed reduced fertility rates. This emphasizes the importance of
            detecting and managing this defect to maintain optimal
            fertility​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
