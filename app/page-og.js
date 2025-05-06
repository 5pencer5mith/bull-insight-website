"use client";

// Hooks and Utility
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Components
import Hero from "./components/hero/Hero";
import { IonIcon } from "@ionic/react";
import {
  warningOutline,
  bulbOutline,
  heartOutline,
  callOutline,
  mailOpenOutline,
  locationOutline,
  hardwareChipOutline,
} from "ionicons/icons";
import Button from "./components/buttons/Button";
import ButtonGroup from "./components/buttons/ButtonGroup";
import Image from "next/image";

// Styles
import styles from "./page.module.css";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
    const hash = window.location.hash;
    if (hash) {
      router.push(hash);
    }
  }, [router]);
  if (!isHydrated) return null;

  return (
    <div className={styles.page}>
      <Hero />
      <div className="content">
        <div className={styles.contentWrapper}>
          <div className={styles.intro}>
            <div className={styles.introTitle}>
              <h1>Herd Health Comes First</h1>
            </div>

            <div className={styles.colorBox}>
              <h3>
                <span>Our goal</span> is to provide effective resources and
                information, and to promote best practices that ensure the
                well-being and health of cattle herds worldwide.
              </h3>
            </div>

            <div className={styles.introCols}>
              <div className={styles.introCol1}>
                <Image
                  src="/img/index/cow-lick.jpg"
                  alt="Cow licking its nose"
                  className={styles.img}
                  width={700}
                  height={400}
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className={styles.introCol2}>
                <div className={styles.introCol2Title}>
                  <h1>Fertility Health</h1>
                  <IonIcon
                    className={styles.icons}
                    icon={heartOutline}
                    style={{ verticalAlign: "middle" }}
                  />
                </div>

                <div className={styles.introContent}>
                  <p>
                    Healthy Bull Fertility in cattle breeding impacts
                    agricultural efficiency, economic viability, and
                    environmental sustainability. This means an improved
                    livestock productivity and cost savings for cattle
                    producers, genetic improvements and increased and prolonged
                    health for cattle, and more. To help ensure healthy bull
                    fertility, licensed veterinarians will examine the semen of
                    the bull and look at things like sperm concentration,
                    motility, and morphology as part of what is called a B.B.S.E
                    or Bull Breeding Soundness Exam.
                  </p>

                  <ButtonGroup
                    button1Dest="/Resources"
                    button1Text="Learn More About B.B.S.E."
                    button2Dest="/Morphology"
                    button2Text="Learn More About Morphology"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.incyte}>
            <div className={styles.title}>
              <h1>
                Harness the Power of Artificial Intelligence <span>(AI)</span>{" "}
                with Sperm In-Cyte
              </h1>
              <IonIcon
                className={styles.icons}
                icon={hardwareChipOutline}
                style={{ verticalAlign: "middle" }}
              />
            </div>

            <div className={styles.colorBox}>
              <div className={styles.incyteCols}>
                <div>
                  <div className={styles.incyteExplain}>
                    <h2>What Is Sperm In-Cyte?</h2>
                    <p>
                      Using advanced computer vision and machine learning
                      algorithms, Sperm In-Cyte provides a precise and efficient
                      semen analysis to aid veterinarians and cattle producers
                      in determining bull fertility health.
                    </p>
                  </div>

                  <div>
                    <h2>How Does It Work?</h2>
                    <p>
                      Using image data taken from a microscope, Sperm In-Cyte
                      analyzes a bull semen sample and detects and identifies
                      any sperm morphology in the given sample.
                    </p>
                  </div>
                </div>

                <div className={styles.incyteImg}>
                  <Image
                    src="/img/index/cow-lick.jpg"
                    alt="Cow licking its nose"
                    className={styles.img}
                    width={700}
                    height={400}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            <Button
              buttonDest="/Sperm-In-Cyte"
              buttonText="Learn More About Sperm In-Cyte"
            />
          </div>

          <div className={styles.aboutUs} id="about">
            <h1>About Us</h1>

            <div className={styles.colorBox}>
              <div className={styles.cols}>
                <div className={styles.col1}>
                  <h2>We Are Bull Insight</h2>
                  <p>
                    Bull Insight is transforming cattle breeding through
                    advanced technology, education, and research.{" "}
                    <strong>Our mission</strong> is to enhance herd fertility by
                    providing accurate reproductive insights, practical
                    knowledge, and advanced tools that harness the power of
                    artificial intelligence.
                  </p>
                  <p>
                    Developed by Dr. Glen Jensen, Sperm In-Cyte uses
                    cutting-edge computer vision to deliver precise semen
                    evaluations, surpassing manual methods. Beyond technology,
                    we provide essential expertise on bull breeding soundness
                    evaluations (BBSE), sperm morphology, and reproductive
                    health.
                  </p>
                  <p>
                    By bridging science and industry, Bull Insight empowers
                    cattle producers with the tools to make informed breeding
                    decisions and drive long-term success.
                  </p>
                  {/* <p>
                    Founded by Dr. Glen Jensen, Sperm In-Cyte is an innovative
                    veterinary technology designed for enhancing cattle herd
                    reproductive efficiency through advanced semen analysis.
                    Below you'll find a more in-depth explianation of the
                    importance of bull fertility, the issues our current
                    agriculture systems are facing, and more about the techology
                    that can help solve those issues. It is{" "}
                    <strong>Our Mission</strong> to revolutionize the cattle
                    breeding industry by providing accurate, dependable, and
                    high-quality semen evaluations that surpass the limitations
                    of manual evaluation by leveraging advanced computer vision
                    algorithms to guarantee precise and consistent results,
                    empowering cattle producers to make informed breeding
                    decisions.
                  </p> */}
                </div>

                <div className={styles.col2}>
                  <Image
                    src="/img/index/mother-and-calf.jpg"
                    alt="Mother cow nursing her calf."
                    className={styles.img}
                    width={700}
                    height={400}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/* <div className={styles.summ}>
              <div>
                <div className={styles.title}>
                  <IonIcon
                    className={styles.icons}
                    icon={heartOutline}
                    style={{ verticalAlign: "middle" }}
                  />
                  <h1>Healthy Bull Fertility Is Everything</h1>
                </div>

                <p>
                  Healthy Bull Fertility in cattle breeding impacts agricultural
                  efficiency, economic viability, and environmental
                  sustainability. This means an improved livestock productivity
                  and cost savings for cattle producers, genetic improvements
                  and increased and prolonged health for cattle, and more. To
                  help ensure healthy bull fertility, licensed veterinarians
                  will examine the semen of the bull and look at things like
                  sperm concentration, motility, and morphology as part of what
                  is called a B.B.S.E or Bull Breeding Soundness Exam.
                </p>

                <ButtonGroup
                  button1Dest="/Resources"
                  button1Text="Learn More About B.B.S.E."
                  button2Dest="/Morphology"
                  button2Text="Learn More About Morphology"
                />
              </div>

              <div className={styles.problem}>
                <div className={styles.title}>
                  <IonIcon
                    className={styles.icons}
                    icon={warningOutline}
                    style={{ verticalAlign: "middle" }}
                  />
                  <h1>The Problem</h1>
                </div>

                <p>
                  Infertility and subfertility in bulls are significant issues
                  in the cattle industry, leading to economic losses and
                  inefficiencies. It is estimated that sub-fertility can cost
                  producers thousands of dollars each year. Traditional bull
                  breeding soundness exams (B.B.S.E.) are often imprecise,
                  time-consuming, and costly. These manual evaluations can miss
                  sub-fertile bulls due to their cursory nature, leading to
                  drawn-out calving seasons, lighter weaning weights, and
                  overall herd reproductive inefficiencies. The lack of
                  standardized, high-quality semen evaluations creates a gap
                  where seedstock producers often opt for cheaper, less thorough
                  exams, which benefits their sales but leaves buyers with
                  unreliable results.
                </p>
              </div>

              <div className={styles.solution}>
                <div className={styles.title}>
                  <IonIcon
                    className={styles.icons}
                    icon={bulbOutline}
                    style={{ verticalAlign: "middle" }}
                  />
                  <h1>Our Solution</h1>
                </div>

                <p>
                  Sperm In-Cyte automates the semen analysis process. Our system
                  captures microscopic images of sperm samples and uses advanced
                  computer vision to identify and classify sperm abnormalities
                  with high precision. This technology streamlines the
                  evaluation process, making it faster and more cost-effective.
                </p>

                <Button
                  buttonDest="/Sperm-In-Cyte"
                  buttonText="Learn More About Sperm In-Cyte"
                />
              </div>
            </div> */}
          </div>

          <div className={styles.donate}>
            <div className={styles.colorBox}>
              <h1>
                Support the Cause<span> - Keep Our Herds Healthy</span>
              </h1>
              <p>
                Bull Insight is dedicated to advancing cattle breeding through
                technology, research, and education. Your support helps us
                continue providing valuable insights and resources to producers
                everywhere.
              </p>
              <h2>
                Join us in promoting healthier, more productive herds. Every
                contribution keeps this initiative going.
              </h2>

              <Button
                buttonDest="/"
                buttonText="Donate Now"
              />
            </div>
          </div>

          <div className={styles.contactUs} id="contact">
            <h1>Contact Us</h1>

            <div className={styles.info}>
              <h2>Let's Talk, We're Here To Help!</h2>

              <p>
                <IonIcon
                  className={styles.icons}
                  icon={callOutline}
                  style={{
                    color: "#005999",
                    fontSize: "50px",
                    verticalAlign: "middle",
                  }}
                />
                <a href="tel:4353812539">(435) 381-2539</a>
              </p>

              <p>
                <IonIcon
                  className={styles.icons}
                  icon={mailOpenOutline}
                  style={{
                    color: "#005999",
                    fontSize: "50px",
                    verticalAlign: "middle",
                  }}
                />
                <a href="mailto:glen@emeryanimalhealth.com">
                  glen@emeryanimalhealth.com
                </a>
              </p>

              <p>
                <IonIcon
                  className={styles.icons}
                  icon={locationOutline}
                  style={{
                    color: "#005999",
                    fontSize: "50px",
                    verticalAlign: "middle",
                  }}
                />
                Address Goes Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
