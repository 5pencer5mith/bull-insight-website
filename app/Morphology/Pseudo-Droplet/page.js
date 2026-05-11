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
    src: "/img/morphology/PseudoDroplets/PD1.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD2.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD3.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD4.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD5.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD6.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD7.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD8.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
];

export default async function PseudoDroplets() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("pseudo-droplet");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Pseudo Droplets
          <Image
            src="/img/morphology/PseudoDroplets/Pseudo Droplet.png"
            alt="Pseudo Droplet Sperm Morphology inline image"
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
