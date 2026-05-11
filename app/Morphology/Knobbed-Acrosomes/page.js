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

// Images for slider
const images = [
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA1.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA2.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA3.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA4.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA5.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA6.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA7.png",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA8.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
];

export default async function KnobbedAcrosomes() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("knobbed-acrosomes");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Knobbed Acrosomes
          <Image
            src="/img/morphology/KnobbedAcrosome/Ruffled.png"
            alt="Knobbed Acrosomes Sperm Morphology inline image"
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
