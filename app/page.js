import PageWrapper from "./components/PageWrapper";
import Hero from "./components/hero/Hero";
import ScrollFadeIn from "./components/ScrollFadeIn";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/buttons/Button";

import {
  Package,
  Microscope,
  BookOpen,
  Rss,
  Phone,
  Building2,
  Handshake,
} from "lucide-react";

export default function home() {
  return (
    <PageWrapper>
      <Hero />

      <ScrollFadeIn className="flex min-h-[100vh] flex-col items-center justify-center gap-8 px-4">
        <h2 className="max-w-4xl text-center font-display text-2xl md:text-4xl">
          Our{" "}
          <span className="font-bold text-brand-primary text-4xl md:text-6xl">
            goal
          </span>{" "}
          is to support cattle reproductive medicine: morphology education,
          vet-centered diagnostics, and tools that fit real chute-side practice—so
          breeding soundness translates into clearer decisions and stronger calf
          crops.
        </h2>

        <div className="flex items-center justify-center">
          <img src="/img/index/cow.svg" alt="silhouette of bull" />
        </div>
      </ScrollFadeIn>

      <div className="mx-auto flex min-h-[100vh] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-16 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="flex w-full shrink-0 flex-row flex-wrap items-baseline justify-center gap-x-2 md:max-w-xs md:flex-col md:items-start md:justify-center md:gap-1 md:text-left lg:max-w-sm">
          <h2 className="m-0 font-display text-2xl md:text-6xl">Tools</h2>
          <h2 className="m-0 font-display text-2xl md:text-4xl md:px-2">and</h2>
          <h2 className="m-0 font-display text-4xl text-brand-primary md:text-8xl">
            Insights
          </h2>
        </div>

        <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:max-w-none md:flex-1">
          <Link href="/Sample-Analysis">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <Package className="w-36 h-36 text-tan-light" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl text-center font-bold font-display">
                  Sample Analysis
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    A complete morphology analysis of your bull&apos;s semen
                    sample, ordered through your veterinarian. We work with
                    veterinary clinics to provide AI-assisted Complete
                    Differential Spermiograms - the deeper picture beyond
                    pass/fail.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/Sperm-In-Cyte">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <Microscope className="w-36 h-36 text-tan-light" />
              </div>

              <div className="relative z-10">
                <h3 className="text-center text-xl font-bold font-display">
                  Sperm InCyte Technology
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    Semen analysis with AI-assisted computer vision—built for
                    repeatable reads alongside your breeding soundness workflow.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/Morphology">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <BookOpen className="w-36 h-36 text-tan-light" />
              </div>

              <div className="relative z-10">
                <h3 className="text-center text-xl font-bold font-display">
                  Sperm Morphology
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    Learn about bull sperm morphology and the different effects
                    sperm morphology can have on fertility.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/Blog">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <Rss className="w-36 h-36 text-tan-light" />
              </div>

              <div className="relative z-10">
                <h3 className="text-center text-xl font-bold font-display">
                  Blog
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    Keep up with the latest insights! Check out our blog.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-auto flex min-h-[100vh] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-16 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="flex-6">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="m-0 font-display text-4xl md:text-6xl">
                About <span className="font-bold text-brand-primary">Us</span>
              </h2>
              <p className="m-0 text-lg font-body leading-snug md:text-xl">
                Bull{" "}
                <span className="font-bold font-display text-2xl text-brand-primary">
                  InSight
                </span>{" "}
                is reproductive medicine for cattle, built by a working
                veterinarian. We help veterinarians and producers see what a
                standard breeding soundness exam can&apos;t - using AI-assisted
                morphology analysis, the Complete Differential Spermiogram, and
                chute-side tools designed for the way veterinary practice
                actually runs. The goal isn&apos;t just better data. It&apos;s
                better calf crops.
              </p>
              <p className="m-0 text-base font-body leading-snug text-text-muted md:text-lg">
                Built and led by Dr. Glen Jensen, DVM - Emery Animal Health,
                Castle Dale and Price, Utah.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:flex-4">
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

      <section
        id="pilot"
        className="mb-12 flex min-h-[50svh] w-full flex-col items-center justify-center bg-background-card py-8 border-t-2 border-b-2 border-border-primary md:mb-16 md:py-10 lg:mb-20 lg:py-12"
      >
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-y-4 px-4 text-center">
          <div className="relative isolate flex flex-col items-center justify-center px-4 py-2">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <Handshake
                size={200}
                strokeWidth={1}
                className="shrink-0 text-tan-light"
                aria-hidden
              />
            </div>
            <h2 className="relative z-10 m-0 text-center font-display text-4xl md:text-6xl">
              Pilot{" "}
              <span className="font-bold text-brand-primary">With Us</span>
            </h2>
          </div>

          <p className="relative z-10 m-0 max-w-prose text-balance text-base leading-snug md:text-xl">
            We&apos;re partnering with veterinary clinics to bring AI-assisted
            reproductive medicine into everyday practice. If your clinic runs
            BSEs and you&apos;d like early access to Bull InSight and Sperm
            InCyte, we&apos;d like to talk.
          </p>

          <div className="relative z-10 flex justify-center px-2 pt-1">
            <a
              href="mailto:glen@emeryanimalhealth.com?subject=Pilot%20Inquiry"
              className="block w-full max-w-xs md:w-auto md:min-w-[12rem]"
            >
              <div className="rounded-lg bg-brand-primary p-2 text-center text-white md:hover:scale-105">
                Pilot With Us →
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
