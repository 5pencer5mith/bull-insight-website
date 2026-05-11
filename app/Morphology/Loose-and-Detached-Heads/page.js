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
    src: "/img/morphology/DetachedHeads/LDH1.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH2.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH3.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH4.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH5.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH6.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH7.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
  {
    src: "/img/morphology/DetachedHeads/LDH8.jpg",
    alt: "Loose and Detached Heads Sperm Morphology Example",
    caption: "Loose and Detached Heads",
  },
];

export default async function LooseAndDetachedHeads() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("loose-and-detached-heads");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Loose and Detached Heads
          <Image
            src="/img/morphology/DetachedHeads/Detached.png"
            alt="Loose and Detached Heads Sperm Morphology inline image"
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
