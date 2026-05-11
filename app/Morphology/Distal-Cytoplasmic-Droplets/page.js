// Components
import Image from "next/image";
// import Slider from '@/app/components/slider/Slider'
// Add images to slider

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

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

export default async function DistalCytoplasmicDroplet() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("distal-cytoplasmic-droplets");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Distal Cytoplasmic Droplets
          <Image
            src="/img/morphology/DistalCytoplasmicDroplet/Cytoplasmic Droplet.png"
            alt="Distal Cytoplasmic Droplets Sperm Morphology inline image"
            width={150}
            height={150}
          />
        </h1>
      </div>

      <div className={sliderContainer}>
        {/* <Slider imageData={images} /> */}
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
