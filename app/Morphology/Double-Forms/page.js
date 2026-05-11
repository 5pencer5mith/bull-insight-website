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

export default async function DoubleForms() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("double-forms");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
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
