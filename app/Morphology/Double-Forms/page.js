// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/DoubleForm/DF1.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF2.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF3.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF4.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF5.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF6.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
  {
    src: "/img/morphology/DoubleForm/DF7.jpg",
    alt: "Double Form sperm morphology example",
    caption: "Double Form",
  },
];

export default function DoubleForms() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl">Double Forms</h3>
        <Image
          src="/img/morphology/DoubleForm/Double Form.png"
          alt="Double forms example"
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
            Double forms are characterized by sperm with two heads, two tails,
            or both. These forms can include multinuclear sperm or
            multiflagellar sperm, resulting in a multilamellar appearance.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            Double forms are a serious defect and significantly impair
            fertility. They are considered an uncompensable defect because the
            affected sperm are usually non-functional. High levels of double
            forms (greater than 10%) can indicate a severe disruption in
            spermatogenesis and should be addressed promptly​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            Double forms can appear approximately 20-30 days following a severe
            stress event or genetic disturbance affecting spermatogenesis​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>
          <ul>
            <li>
              <strong>Genetic Factors:</strong> Some bulls may have a hereditary
              predisposition to develop this defect
            </li>
            <li>
              <strong>Severe Environmental Stress:</strong> Heat stress, cold
              shock, or other significant stressors
            </li>
            <li>
              <strong>Disturbances in Spermatogenesis:</strong> Severe
              disruptions during sperm development and maturation
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            Double forms are indicative of a severe disturbance in
            spermatogenesis and are often seen in conjunction with other serious
            sperm defects. These sperm are generally non-functional and unable
            to fertilize ova​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold ">
            Case Study: Impact of Double Forms on Fertility
          </h5>

          <p>
            A case study involving a bull with high percentages of double forms
            (greater than 10%) showed severe infertility. The presence of these
            defects highlighted the critical impact on overall fertility and the
            need for thorough management and intervention​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
