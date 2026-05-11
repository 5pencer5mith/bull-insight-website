// Components
import Image from "next/image";
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
    src: "/img/morphology/LargeVacuoles/LV1.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV2.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV3.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV4.png",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV5.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV6.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV7.png",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV8.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
];

export default async function LargeVacuoles() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("large-vacuoles");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Large Vacuoles
          <Image
            src="/img/morphology/LargeVacuoles/Vacuoles.png"
            alt="Large Vacuoles Sperm Morphology inline image"
            width={150}
            height={150}
          />
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
