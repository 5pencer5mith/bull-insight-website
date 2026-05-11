// Components
// import Image from 'next/image';
import Slider from "../../components/slider/Slider";
import { getPageBySlug } from "../../../lib/wordpress";

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
  morphologyWpContent,
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

export default async function SmallApicalVacuoles() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("small-apical-vacuoles");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
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

      {wpPage?.content ? (
        <article className={morphologyArticle}>
          <div
            className={morphologyWpContent}
            dangerouslySetInnerHTML={{ __html: wpPage.content }}
          />
        </article>
      ) : null}

      
    </div>
  );
}
