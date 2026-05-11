// Components
import Image from "next/image";
import { getPageBySlug } from "../../../lib/wordpress";
// import Slider from '@/app/components/slider/Slider'
// TODO: add images for the slider

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

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

export default async function DecapitatedHead() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("decapitated-head");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }
  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Decapitated Head
          <Image
            src="/img/morphology/DecapitatedHead/Decapitated.png"
            alt="Decapitated Head Sperm Morphology inline image"
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
