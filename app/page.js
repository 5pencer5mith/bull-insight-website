import PageWrapper from "./components/PageWrapper";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/buttons/Button";

import {
  Package,
  Microscope,
  BookOpen,
  Rss,
  Phone,
  Send,
  Building2,
  Heart,
} from "lucide-react";

export default function home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <div className="w-full h-screen text-center relative">
        <div className="absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white/30 backdrop-blur-sm">
          <h1 className="hidden md:inline md:text-4xl md:text-white md:text-shadow-lg/20">
            Welcome to Bull-
            <span className="font-bold text-blue-700">Insight</span>.com
          </h1>
          <h1 className="text-shadow-lg/20 text-white text-3xl md:text-7xl">
            Your Home for a{" "}
            <span className="text-white font-bold md:text-blue-700">
              Healthy
            </span>{" "}
            Herd
          </h1>
        </div>
        <img
          className="object-cover object-[100%_75%] w-full h-full"
          src="/img/hero/cattle-grazing-mountainside.jpg"
          alt="cattle grazing in a field"
        />
      </div>

      {/* main content */}
      <div className="pt-8 pb-8">
        <div className="w-full bg-white shadow-xl">
          <div className="p-8">
            <div className="inline text-center w-full p-4 md:text-center">
              <div className="md:p-4">
                <h3 className="text-2xl md:text-4xl">
                  Our <span className="font-bold text-blue-700">goal</span> is
                  to provide effective resources and information, and to promote
                  best practices that ensure the well-being and health of cattle
                  herds worldwide.
                </h3>
              </div>

              <div className="flex justify-center items-center">
                <img src="/img/index/cow.svg" alt="silhouette of bull" />
              </div>
            </div>

            <div className="md:pb-4">
              <h3 className="text-2xl text-center md:text-4xl">
                Tools and{" "}
                <span className="font-bold text-blue-700">Insights</span>
              </h3>
            </div>

            <div className="pt-4 grid grid-cols-1 gap-8 md:grid-cols-3 md:pt-2 lg:grid-cols-4">
              <Link href="/Sample-Analysis">
                <div className="relative insights-block">
                  <div className="absolute inset-0 flex justify-center items-center z-0">
                    <Package className="w-48 h-48 text-blue-200" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl text-center font-bold">Sample Analysis</h4>
                    <div className="pt-2">
                      <p className="text-md text-center">
                        Order a sample analysis kit, collect a semen sample from
                        your bull, and send it back to us for a complete and
                        accurate analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/">
                <div className="relative insights-block">
                  <div className="absolute inset-0 flex justify-center items-center z-0">
                    <Microscope className="w-48 h-48 text-blue-200" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-center text-xl font-bold">
                      Sperm In-Cyte Technology
                    </h4>
                    <div className="pt-2">
                      <p className="text-md text-center">
                        Learn about an advanced bull semen analysis tool powered
                        by artificial intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/">
                <div className="relative insights-block">
                  <div className="absolute inset-0 flex justify-center items-center z-0">
                    <BookOpen className="w-48 h-48 text-blue-200" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-center text-xl font-bold ">Sperm Morphology</h4>
                    <div className="pt-2">
                      <p className="text-md text-center">
                        Learn about bull sperm morphology and the different
                        effects sperm morphology can have on fertility.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>


              <Link href="/">
                <div className="relative insights-block">
                  <div className="absolute inset-0 flex justify-center items-center z-0">
                    <Rss className="w-48 h-48 text-blue-200" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-center text-xl font-bold">Blog</h4>
                    <div className="pt-2">
                      <p className="text-md text-center">
                        Keep up with the latest insights! Check out our blog.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <div className="w-full bg-white shadow-xl">
          <div className="p-8">
            <div className="md:p-4" id="about">
              <h3 className="text-center text-2xl md:text-4xl md:text-left">
              About <span className="font-bold text-blue-700">Us</span>
              </h3>

              <div className="md:flex">
                <div className="md:flex-3 md:p-8">
                  <p className="text-lg md:text-2xl">
                    Bull-
                    <span className="font-bold text-blue-700">Insight</span>
                    .com is transforming cattle breeding through advanced
                    technology, education, and research. We aim to enhance herd
                    fertility by providing accurate reproductive insights,
                    practical knowledge, and cutting-edge tools powered by
                    artificial intelligence. This project—and the products it
                    inspires—are developed with expertise and driven by the
                    lifelong passion of Dr. Glen Jensen, whose commitment to
                    reproductive science and cattle health guides everything we
                    do.
                  </p>
                </div>

                <div className="pt-4 md:flex-2">
                  <Image
                    src="/img/index/cow-lick.jpg"
                    alt="Cow licking it's own nose."
                    width={700}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="pt-12" id="contact">
              <h3 className="text-center text-2xl md:text-4xl md:pb-4">
                Contact <span className="font-bold text-blue-700">Us</span>
              </h3>
              <h4 className="text-lg text-center md:text-2xl">
                We would love to hear from{" "}
                <span className="font-bold text-blue-700">you</span>!
              </h4>
              <div className="md:flex md:justify-center">
                <div className="md:p-8">
                  <div className="flex justify-left gap-2 pt-2 pb-2 ">
                    <Phone className="text-blue-700" />
                    <a href="tel:4353812539">(435) 381-2539</a>
                  </div>

                  <div className="flex justify-left gap-2 pt-2 pb-2">
                    <Send className="text-blue-700" />
                    <a href="mailto:glen@emeryanimalhealth.com">
                      glen@emeryanimalhealth.com
                    </a>
                  </div>

                  <div className="flex justify-left gap-2 pt-2 pb-2">
                    <Building2 className="text-blue-700" />
                    Address Goes Here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8" id="donate">
        <div className="w-full bg-white shadow-xl p-4 md:p-12">
          <div className="relative p-8">
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <Heart className="w-48 h-48 text-blue-100" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl text-center md:text-4xl">
                Support the Cause to Keep Our Herds{" "}
                <span className="font-bold text-blue-700">Healthy</span>!
              </h3>
            </div>

            <div className="relative z-10 text-center p-2">
              <Button buttonDest={"/"} buttonText={"Donate Now"} buttonStyles={"bg-blue-700 text-white rounded-lg p-2 text-center md:hover:scale-105 md:w-1/4 md:mx-auto"} />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
