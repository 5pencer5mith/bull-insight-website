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
    src: "/img/morphology/SmallNuclearVacuoles/SNV1.png",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
  {
    src: "/img/morphology/SmallNuclearVacuoles/SNV2.jpg",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
  {
    src: "/img/morphology/SmallNuclearVacuoles/SNV3.jpg",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
];

export default async function SmallNuclearVacuoles() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("small-nuclear-vacuoles");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Small Nuclear Vacuoles
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
