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

export default async function TeratoidSperm() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("teratoid-sperm");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
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
