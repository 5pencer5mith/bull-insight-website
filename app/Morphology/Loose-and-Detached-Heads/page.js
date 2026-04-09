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
            className="max-w-none [&_a]:text-blue-700 [&_a]:underline [&_h2]:mt-4 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-blue-700 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-stone-900 [&_h3]:font-display [&_img]:my-6 [&_img]:max-h-[480px] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-2.5 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-stone-900 [&_li]:max-[768px]:text-sm [&_li_p]:m-0 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-12 [&_ol]:max-[768px]:pl-8 [&_p]:mt-0 [&_p]:mb-0 [&_p]:text-lg [&_p]:leading-snug [&_p]:text-stone-900 [&_p]:max-[768px]:text-sm [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-12 [&_ul]:max-[768px]:pl-8 [&_.wp-block-group]:pb-6"
            dangerouslySetInnerHTML={{ __html: wpPage.content }}
          />
        </article>
      ) : null}

      
    </div>
  );
}
