// Components
// import Image from 'next/image';
// import Slider from '@/app/components/slider/Slider'
// TODO: Add images to slider

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

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

export default function DiademDefect() {
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Diadem Defect
          {/* <Image
                        src='/morphology/'
                        alt=''
                        width={150}
                        height={150}
                    /> */}
        </h1>
      </div>

      <div className={sliderContainer}>
        {/* <Slider imageData={images} /> */}
      </div>

      <article className={morphologyArticle}>
        <section className={morphologySection}>
          <h2 className={morphologyH2}>Description</h2>

          <p className={morphologyP}>
            Diadem defects, also known as diadem vacuoles, are characterized by
            vacuoles located in the equatorial region of the sperm head. These
            vacuoles can appear as a single vacuole or multiple vacuoles often
            arranged in a line. The size of the vacuoles can vary, with very
            small ones being challenging to detect.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Potential Effects on Fertility</h2>

          <p className={morphologyP}>
            Diadem defects can significantly impact fertility. Bulls with more
            than 20% of sperm affected by diadem defects typically exhibit
            reduced pregnancy rates. This defect is considered uncompensable as
            affected sperm often fail to fertilize ova or produce non-viable
            embryos.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Days from Insult to Identificaiton</h2>

          <p className={morphologyP}>
            Diadem defects can appear approximately 20 days following a stress
            event such as heat stress or scrotal insulation​​.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Causes</h2>

          <p className={morphologyP}>Possible causes include:</p>

          <ul className={morphologyUl}>
            <li className={morphologyLi}>
              <strong>Environmental Stress:</strong> Extreme temperatures or
              stress events
            </li>
            <li className={morphologyLi}>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop vacuoles
            </li>
            <li className={morphologyLi}>
              <strong>Nutritional Factors:</strong> High concentrate rations and
              other dietary imbalances
            </li>
          </ul>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Other Important Data</h2>

          <p className={morphologyP}>
            Diadem defects are more commonly observed in some breeds and are
            associated with fluctuations in prevalence between ejaculates. These
            vacuoles can be challenging to see on standard eosin-nigrosin smears
            and are more easily identified using phase contrast or Feulgen
            staining.
          </p>
        </section>

        <section className={morphologySection}>
          <h2 className={morphologyH2}>Case Studies</h2>

          <h3 className={morphologyH3}>Case Study: Impact of Diadem Defects on Fertility</h3>

          <p className={morphologyP}>
            A case study involving a Simmental bull with high numbers of diadem
            defects demonstrated severe infertility. This bull produced high
            numbers of sperm with diadem defects, which were incompatible with
            embryonic development despite normal motility and morphology
            assessments​.
          </p>
        </section>
      </article>
    </div>
  );
}
