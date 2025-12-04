// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR1.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR2.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR3.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR4.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR5.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR6.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR7.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
  {
    src: "/img/morphology/DistalMidPieceReflex/DMR8.jpg",
    alt: "Distal Midpiece Reflex Sperm Morphology Example",
    caption: "Distal Midpiece Reflex",
  },
];

export default function DistalMidpeiceReflex() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl">Distal Midpiece Reflex</h3>
        <Image
          src="/img/morphology/DistalMidPieceReflex/Distal midpiece reflex.png"
          alt="Distal midpiece reflex example"
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
            Distal mid-piece reflex (DMR) is characterized by a sharp hairpin
            bend in the distal mid-piece of the sperm. This defect is often
            accompanied by a cytoplasmic droplet at the bend.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            Distal mid-piece reflex is considered a compensable defect as the
            affected sperm display reverse motility and are unable to penetrate
            the zona pellucida. Up to 30% of this defect in an ejaculate is
            tolerated with no significant impact on fertility if the remaining
            sperm are normal. However, high levels of this defect (greater than
            30%) can significantly reduce fertility​​​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            Distal mid-piece reflex can appear 4-11 days after a stress event
            such as dexamethasone treatment or within 16 days after an acidotic
            event​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>
          <ul>
            <li>
              <strong>Environmental Stress:</strong> Heat stress, cold shock, or
              other stress events
            </li>
            <li>
              <strong>Hypotonic Solutions:</strong> Prolonged contact with
              hypotonic solutions such as Nigrosin-Eosin stain
            </li>
            <li>
              <strong>Genetic Predisposition:</strong> Some bulls have a
              hereditary predisposition to this defect
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            Distal mid-piece reflex is often transient and may fluctuate in
            prevalence between ejaculates. It is the most common tail defect
            seen in bull ejaculates and is usually of epididymal origin​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold ">
            Case Study: Impact of Distal Mid-Piece Reflex on Fertility
          </h5>

          <p>
            A study involving bulls with high levels of distal mid-piece reflex
            (greater than 30%) demonstrated reduced fertility. However, in bulls
            with up to 25% of this defect, fertility was not significantly
            impacted, emphasizing the compensable nature of this abnormality.
          </p>
        </section>
      </article>
    </div>
  );
}
