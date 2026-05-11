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
    src: "/img/morphology/PyriformHeads/Py1.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py2.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py3.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py4.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py5.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py6.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py7.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
  {
    src: "/img/morphology/PyriformHeads/Py8.jpg",
    alt: "Pyriform Heads Sperm Morphology Example",
    caption: "Pyriform Heads",
  },
];

export default async function PyriformHeads() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("pyriform-heads");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Pyriform Heads
          <Image
            src="/img/morphology/PyriformHeads/Pyriform.png"
            alt="Pyriform Heads Sperm Morphology inline image"
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
