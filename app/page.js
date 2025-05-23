import PageWrapper from "./components/PageWrapper";

import { HeartPlus } from "lucide-react";

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
            
            <div className="inline w-full text-center p-4">
              <div className="md:p-4">
                <h3 className="text-xl md:text-2xl">
                  <span className="font-bold text-blue-700">Our goal</span> is
                  to provide effective resources and information, and to promote
                  best practices that ensure the well-being and health of cattle
                  herds worldwide.
                </h3>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <img src="/img/index/cow.svg" alt="silhouette of bull" />
              </div>
            </div>

            <div className="w-full flex justify-center text-blue-700 pb-8 md:hidden">
              <HeartPlus size={200} />
            </div>

            <div className="md:p-8">
              <h3 className="text-xl text-center md:text-2xl">
                Tools and{" "}
                <span className="font-bold text-blue-700">Insights</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
