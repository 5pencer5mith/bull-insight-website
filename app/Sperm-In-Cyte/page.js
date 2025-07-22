"use client";

// Components
import PageWrapper from "../components/PageWrapper";
import ProductHero from "../components/hero/productHero/ProductHero";
import Sidekick from "../components/hero/sidekick/Sidekick";
import Button from "../components/buttons/Button";
import Link from "next/link";

import { Microscope, Plus, Cpu, Cog, FileHeart } from "lucide-react";

export default function SpermIncyte() {
  return (
    <PageWrapper>
      <Sidekick pageTitle={"Sperm In-Cyte"} />

      <div className="flex justify-center items-center pt-8">
        <div className="w-full bg-white shadow-xl p-4">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <Microscope className="w-48 h-48 text-blue-100" />
              <Plus className="w-48 h-48 text-blue-100" />
              <Cpu className="w-48 h-48 text-blue-100" />
            </div>

            <div className="relative md:p-8">
              <h3 className="text-2xl text-center">
                Harness the Power of Artificial Intelligence with{" "}
                <span className="p-1 rounded-lg shadow-xl text-white bg-[linear-gradient(115deg,_#1d4ed8_50%,_#ffffff_50%)]">
                  Sperm{" "}
                  <span className="font-bold text-blue-700">
                    &nbsp; &nbsp;In-Cyte
                  </span>
                </span>{" "}
              </h3>
              <p className="pt-2">
                Sperm In-Cyte revolutionizes bull fertility testing by
                automating semen analysis with advanced computer vision. It
                captures and analyzes microscopic sperm images with unmatched
                accuracy—delivering fast, reliable results to support better
                breeding decisions and long-term herd success.
              </p>

              <hr className="border-t border-stone-900 my-4" />

              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl">
                  Sperm <span className="font-bold text-blue-700">In-Cyte</span>{" "}
                  Is Still In Development: Check Back Here For Updates
                </h3>
                <Cog className="w-24 h-24 text-blue-700 animate-spin [animation-duration:6000ms]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="w-full bg-white shadow-xl">
          <div className="p-8 md:flex md:gap-2 justify-center items-center">
            <div className="md:flex-4">
              <h3 className="text-2xl text-center">
                Looking For a{" "}
                <span className="font-bold text-blue-700">High-Quality</span>{" "}
                Semen Evaluation?
              </h3>
              <p className="pt-2">
                Make informed breeding decisions with confidence and order a
                Semen Sample Evaluation Kit. Our Semen Sample Evaluation Kit
                provides a safe and reliable way to collect and ship semen
                samples for analysis. The kit includes everything you need to
                securely package and mail your sample to our lab.{" "}
              </p>
            </div>

            <div className="pt-2 md:flex-2">
              <div className="flex items-center justify-center">
                <FileHeart className="w-32 h-32 text-blue-700" />
              </div>

              <Button
                buttonDest={"/"}
                buttonText={"Order Now"}
                buttonStyles={
                  "bg-blue-700 text-white rounded-lg p-2 text-center md:hover:scale-105"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-8">
        <div className="w-full bg-white shadow-xl">
          <div className="p-8">
            <div className="text-center pb-4">
              <h1 className="text-3xl">
                The <span className="font-bold text-blue-700">Why</span> Behind
                Sperm In-Cyte
              </h1>
            </div>
            <hr className="border-t border-stone-900 my-4" />
            <div>
              <h3 className="text-2xl pt-4">
                Infertility and Subfertility in Bulls Pose{" "}
                <span className="font-bold text-blue-700">
                  Significant Challenges in the Cattle Industry...
                </span>
              </h3>
              <p className="pt-2">
                Infertility and subfertility lead to economic losses,
                ineffeciencies, and reduced productivity. Traditional bull
                breeding soundness exams (B.B.S.E.) are often manual, imprecise,
                and costly, making it difficult for cattle producers to
                accurately assess bull fertility. These outdated methods can
                miss subtle signs of infertility, resulting in longer calving
                seasons, lighter weaning weights, and inconsistent herd
                reproduction. The lack of standardized, high-quality semen
                evaluations creates a gap in the industry, leaving producers
                with unreliable results and poor decision-making tools.
              </p>

              <p className="pt-2">
                Sperm In-Cyte transforms the way bull fertility is assessed by
                automating the semen analysis process. Using cutting-edge
                computer vision technology, our system captures high-resolution
                microscopic images of sperm and analyzes them with unprecedented
                precision. By identifying and classifying sperm abnormalities,
                Sperm In-Cyte delivers fast, accurate, and consistent results
                that surpass the limitations of traditional manual evaluations.
                This innovation empowers cattle producers with dependable data,
                helping them make informed breeding decisions that enhance
                productivity, improve herd health, and drive long-term economic
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
