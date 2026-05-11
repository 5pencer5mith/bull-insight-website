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
    src: "/img/morphology/proximalCytoDroplets/PCD1.png",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD2.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD3.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD4.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD5.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD6.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD7.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
  {
    src: "/img/morphology/proximalCytoDroplets/PCD8.jpg",
    alt: "Proximal Cytoplasmic Droplets Sperm Morphology Example",
    caption: "Proximal Cytoplasmic Droplets",
  },
];

export default async function ProximalCytoplasmicDroplets() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("proximal-cytoplasmic-droplets");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Proximal Cytoplasmic Droplets
          <Image
            src="/img/morphology/ProximalCytoDroplets/Cytoplasmic Droplet.png"
            alt=""
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
