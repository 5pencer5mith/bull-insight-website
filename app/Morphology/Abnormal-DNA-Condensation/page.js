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
    src: "/img/morphology/AbnormalCondensation/abnormalDNA1.jpg",
    alt: "Abnormal Condensation Img 1",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA2.jpg",
    alt: "Abnormal Condensation Img 2",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA3.jpg",
    alt: "Abnormal Condensation Img 3",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA4.png",
    alt: "Abnormal Condensation Img 4",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA5.jpg",
    alt: "Abnormal Condensation Img 5",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA6.jpg",
    alt: "Abnormal Condensation Img 6",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA7.jpg",
    alt: "Abnormal Condensation Img 7",
    caption: "Abnormal DNA Condensation",
  },
  {
    src: "/img/morphology/AbnormalCondensation/abnormalDNA8.jpg",
    alt: "Abnormal Condensation Img 8",
    caption: "Abnormal DNA Condensation",
  },
];

export default async function AbnormalCondensation() {
  let wpPage = null;
  try {
    wpPage = await getPageBySlug("abnormal-dna-condensation");
  } catch (error) {
    console.error("WP page failed:", error)
    wpPage = null;
  }

  return (
    <div>
      <div className={titleContainer}>
        <h1 className={morphologyH1WithMedia}>
          Abnormal DNA Condensation
          <Image
            src="/img/morphology/AbnormalCondensation/DNA chromitin condensation.png"
            alt="Microscopic image of abnormal DNA condensation sperm morphology"
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
