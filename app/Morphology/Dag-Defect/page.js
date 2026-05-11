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
    src: "/img/morphology/DagDefect/dagd1.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd2.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd3.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd4.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd5.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd6.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd7.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd8.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
];

export default async function DagDefect() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("dag-defect");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Dag Defect
          <Image
            src="/img/morphology/DagDefect/Dag.png"
            alt="Dag Defect Sperm Morphology inline image"
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
