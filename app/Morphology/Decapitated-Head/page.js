// Components
import Image from "next/image";
// import Slider from '@/app/components/slider/Slider'
// TODO: add images for the slider

// Styles
import styles from "../page.module.css";

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function DecapitatedHead() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl">Decapitated Head</h3>
        <Image
          src="/img/morphology/DecapitatedHead/Decapitated.png"
          alt="Decapitated Head morphology example"
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
            Decapitated head defect is characterized by the separation of the
            sperm head from the tail, with the tail often displaying vigorous
            motility. This defect can be distinguished from loose or detached
            heads by the presence of the proximal droplet still attached to the
            tail.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            Decapitated heads are considered an uncompensable defect and
            significantly reduce fertility. This condition often affects 80-100%
            of sperm in the ejaculate, leading to sterility. The defect prevents
            the affected sperm from reaching and fertilizing the ova​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            Decapitated heads can appear shortly after stress events or due to
            genetic factors. They are typically observed in ejaculates following
            severe testicular degeneration or other significant disruptions in
            spermatogenesis​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>
          <ul>
            <li>
              <strong>Genetic Factors:</strong> Inherited conditions,
              particularly noted in Guernsey and Hereford bulls
            </li>
            <li>
              <strong>Severe Environmental Stress:</strong> Heat stress or other
              significant stressors
            </li>
            <li>
              <strong>Testicular Degeneration:</strong> Severe disruptions in
              spermatogenesis leading to structural weaknesses
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            Decapitated heads are often seen in conjunction with other severe
            sperm defects. The vigorous motility of the separated tails can help
            differentiate this defect from other types of detached heads. Bulls
            exhibiting this defect typically require immediate evaluation and
            management to prevent significant impacts on fertility​​​​.
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold ">
            Case Study: Impact of Decapitated Heads on Fertility
          </h5>

          <p>
            A case study involving a Guernsey bull with 90% decapitated heads in
            its ejaculate showed severe infertility. This emphasizes the
            critical impact of this defect on overall fertility​​.
          </p>
        </section>
      </article>
    </div>
  );
}
