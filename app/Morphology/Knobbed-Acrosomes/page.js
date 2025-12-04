// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for slider
const images = [
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA1.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA2.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA3.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA4.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA5.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA6.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA7.png",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
  {
    src: "/img/morphology/KnobbedAcrosome/knobbedA8.jpg",
    alt: "Knobbed Acrosome sperm abnormality example",
    caption: "Knobbed Acrosomes",
  },
];

export default function KnobbedAcrosomes() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl">Knobbed Acrosomes</h3>
        <Image
          src="/img/morphology/KnobbedAcrosome/Ruffled.png"
          alt="Knobbed acrosomes sperm morphology example"
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
            Knobbed acrosomes are characterized by abnormal flattening, beading,
            or indentation at the apex of the acrosome. This defect can be
            heritable or arise following environmental stress events.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            Knobbed acrosomes can significantly impact fertility. The beaded
            form, inherited by an autosomal recessive gene, is often associated
            with sterility and usually occurs as a high percentage of the
            ejaculate. The indented or flattened form can vary in its effect on
            fertility:
          </p>

          <ul>
            <li>
              <strong>Beaded Form:</strong> Frequently leads to sterility when
              present in high percentages
            </li>
            <li>
              <strong>Indented or Flattened Form:</strong>Can achieve
              near-normal fertility in non-competitive matings if the percentage
              of affected sperm is below 25%. However, in competitive mating
              situations or when greater than 80% of sperm are affected, this
              defect may not be compensable as these sperm cannot penetrate the
              zona pellucida
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            Knobbed acrosomes can appear approximately 30 days following a
            stress event such as a single acidotic event​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>
          <ul>
            <li>
              <strong>Genetic Factors:</strong> Hereditary via an autosomal
              recessive gene, especially for the beaded form
            </li>
            <li>
              <strong>Environmental Stress:</strong> Heat stress, scrotal
              insulation, or other disturbances in testicular function
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            Knobbed acrosomes are considered an uncompensable defect in most
            cases as the affected sperm fail to penetrate the zona pellucida and
            thus cannot fertilize the ova. However, in certain situations, the
            presence of sufficient numbers of normal sperm can compensate for
            this defect​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold ">
            Case Study: Impact of Knobbed Acrosomes on Fertility
          </h5>

          <p>
            {" "}
            A study involving bulls with high percentages of knobbed acrosomes
            (65-85%) in single sire natural mating showed pregnancy rates
            ranging from 61-85%. Another study using frozen semen from these
            bulls in artificial insemination achieved pregnancy rates of
            48.5-50%. This suggests that while the defect significantly impacts
            fertility, some level of compensation occurs in certain mating
            contexts​​.
          </p>
        </section>
      </article>
    </div>
  );
}
