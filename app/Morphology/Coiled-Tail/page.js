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

// Images used for the slider
const images = [
  {
    src: "/img/morphology/CoiledTail/coiledtail1.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail2.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail3.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail4.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail5.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail6.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail7.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail8.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
];

export default async function CoiledTail() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("coiled-tail");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Coiled Tail
          <Image
            src="/img/morphology/CoiledTail/Coiled.png"
            alt="Coiled Tail Sperm Morphology inline image"
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
