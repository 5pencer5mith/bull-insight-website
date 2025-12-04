// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

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

export default function LooseAndDetachedHeads() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl">Loose and Detached Heads</h3>
        <Image
          src="/img/morphology/DetachedHeads/Detached.png"
          alt="Loose and Detached Heads Sperm Morphology example"
          width={75}
          height={75}
        />
      </div>

      <hr className="text-blue-700 border-t-2" />

      <div>{/* Slider */}</div>

      <article className="pt-4">
        <section>
          <h4 className="font-bold text-xl md:text-2xl">Description</h4>

          <p>
            Loose or detached heads are characterized by the separation of the
            sperm head from the tail. This defect can arise due to various
            factors including testicular degeneration, inflammation, heat
            stress, or as a result of sperm aging (rusty load).
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            Loose or detached heads are generally considered a compensable
            defect, meaning that their presence can be mitigated by increasing
            the sperm count in the ejaculate. Bulls with 30-40% of sperm
            exhibiting this defect can still be considered fertile. However, if
            the ejaculate contains 70% or more of this abnormality, the bull
            would likely have severely decreased fertility due to the inability
            of these sperm to swim up the female tract and participate in
            fertilization​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            Detached heads can appear shortly after stress events or as a result
            of sperm accumulation. They are often observed in ejaculates where
            sperm have been stored for extended periods​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>
          <ul>
            <li>
              <strong>Testicular Degeneration or Hypoplasia:</strong> Leading to
              structural weakness
            </li>
            <li>
              <strong>Inflammation:</strong> Of the ampullae or epididymis
            </li>
            <li>
              <strong>Heat Stress:</strong> Elevated temperatures can cause this
              defect
            </li>
            <li>
              <strong>Rusty Load:</strong> Accumulation of sperm in storage can
              result in this abnormality
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            This defect is compensable, meaning that increasing the total sperm
            count can offset its negative effects on fertility. Sperm with
            detached heads cannot swim and thus cannot reach or fertilize the
            ova​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold ">
            Case Study: Impact of Detached Heads on Fertility
          </h5>

          <p>
            A study involving a bull with a high percentage of detached heads
            (up to 70%) demonstrated severely decreased fertility. This
            emphasizes the need to monitor and manage this defect to maintain
            optimal fertility​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
