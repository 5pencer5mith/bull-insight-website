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
    src: "/img/morphology/MitochondrialSheath/SAMS1.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS2.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS3.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS5.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS6.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS7.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
  {
    src: "/img/morphology/MitochondrialSheath/SAMS8.jpg",
    alt: "Segmental Aplasia of the Mitocondrial Sheath Sperm Morphology example",
    caption: "Segmental Aplasia of The Mitochondrial Sheath",
  },
];

export default async function SegmentalAplasia() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("segmental-mitochondrial-aplasia");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Segmental Aplasia of the Mitochondrial Sheath
          <Image
            src="/img/morphology/MitochondrialSheath/Sheath Defects.png"
            alt="Mitochondrial Sheath Sperm Morphology inline image"
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
