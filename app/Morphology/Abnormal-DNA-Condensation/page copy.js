// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

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

export default function AbnormalCondensation() {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-4xl"></h3>
        <Image
          src=""
          alt=""
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
         
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Potential Effects on Fertility
          </h4>

          <p>
            
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">
            Days from Insult to Identificaiton
          </h4>

          <p>
            
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Causes</h4>

          <p>Possible causes include:</p>

      
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl ">
            Other Important Data
          </h4>

          <p>
            
          </p>
        </section>

        <section className="pt-4">
          <h4 className="font-bold text-xl md:text-2xl">Case Studies</h4>

          <h5 className="font-bold "></h5>

          <p>
            
          </p>
        </section>
      </article>
    </div>
  );
}
