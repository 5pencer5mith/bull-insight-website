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
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Abnormal DNA Condensation
          <Image
            src="/img/morphology/AbnormalCondensation/DNA chromitin condensation.png"
            alt="Microscopic image of abnormal DNA condensation sperm morphology"
            width={150}
            height={150}
          />
        </h1>
      </div>

      <div className={styles.sliderContainer}>
        <Slider imageData={images} />
      </div>

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Abnormal DNA condensation is characterized by incomplete chromatin
            packaging, where histones are not fully replaced by protamines
            during spermiogenesis. This leads to less stable DNA and increased
            susceptibility to denaturation.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Abnormal DNA condensation is a significant factor in reduced
            fertility. Sperm with this defect show increased levels of DNA
            fragmentation and poor chromatin integrity, leading to decreased
            fertilization rates and embryo development. Bulls with more than 20%
            of sperm showing abnormal DNA condensation are generally considered
            subfertile or infertile​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            This defect can be identified approximately 20-30 days following a
            stress event or other insult that affects spermatogenesis​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Genetic Factors:</strong> Some bulls may have a hereditary
              predisposition to this defect
            </li>
            <li>
              <strong>Environmental Stress:</strong> Heat stress, nutritional
              deficiencies, and illness
            </li>
            <li>
              <strong>Hormonal Imbalance:</strong> Disruptions in hormonal
              regulation of the testes can lead to abnormal DNA condensation
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Abnormal DNA condensation cannot be detected by light microscopy
            with routine staining techniques. It can be identified using
            specialized methods such as the sperm chromatin structure assay
            (SCSA) and Feulgen staining. The Feulgen method correlates well with
            SCSA and allows for detailed examination of chromatin integrity
            under high magnification​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Abnormal DNA Condensation on Fertility</h3>

          <p>
            A study involving bulls with varying levels of abnormal DNA
            condensation (2-75%) demonstrated a clear correlation between
            increased levels of this defect and reduced fertility. In one case,
            a bull with 100% abnormal chromatin condensation showed complete
            infertility, highlighting the severe impact of this defect on
            reproductive success​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}
