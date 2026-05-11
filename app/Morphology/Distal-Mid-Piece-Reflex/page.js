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
    src: "/img/morphology/DistalMidPieceReflex/DMR1.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR2.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR3.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR4.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR5.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR6.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR7.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR8.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
];

export default async function DistalMidpeiceReflex() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("distal-midpiece-reflex");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Distal Midpiece Reflex
          <Image
            src="/img/morphology/DistalMidPieceReflex/Distal midpiece reflex.png"
            alt="Distal Midpiece Reflex Sperm Morphology inline image"
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
