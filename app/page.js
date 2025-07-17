import PageWrapper from "./components/PageWrapper";

import Link from "next/link";

import { Package, Microscope, BookOpen, Rss } from "lucide-react";

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
          <h1 className="text-shadow-lg/20 text-white text-9xl md:text-7xl">
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
                <h3 className="text-xl md:text-4xl">
                  <span className="font-bold text-blue-700">Our goal</span> is
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
              <h3 className="text-xl text-center md:text-4xl">
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
                    <h4 className="text-xl text-center">Sample Analysis</h4>
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
                    <h4 className="text-center text-xl">
                      Sperm In-Cyte Technology
                    </h4>
                    <div className="pt-2">
                      <p className="text-m text-center">
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
                    <h4 className="text-center text-xl">
                      Sperm Morphology
                    </h4>
                    <div className="pt-2">
                      <p className="text-m text-center">
                        Learn about bull sperm morphology and the different effects sperm morphology can have on fertility.
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
                    <h4 className="text-center text-xl">
                      Blog
                    </h4>
                    <div className="pt-2">
                      <p className="text-m text-center">
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
    </PageWrapper>
  );
}
