"use client";

import PageWrapper from "../components/PageWrapper";
import Sidekick from "../components/hero/sidekick/Sidekick";
import Link from "next/link";

import { Microscope, Cog, FileHeart } from "lucide-react";

export default function SpermIncyte() {
  return (
    <PageWrapper>
      <Sidekick pageTitle={"Sperm InCyte"} subTitle={"Automated Semen Analysis"} />

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-12 pt-10 md:space-y-20 md:pb-16 md:pt-12">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Microscope className="h-40 w-40 text-tan-light md:h-52 md:w-52" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">
              Computer vision for routine semen analysis—{" "}
              <span className="font-bold text-brand-primary">Sperm InCyte</span>
            </h2>
            <p className="text-lg font-body leading-snug">
              Sperm InCyte automates capture and classification of microscopic
              sperm images so clinics get consistent, documented morphology reads
              next to traditional manual evaluation—supporting breeding soundness
              decisions without promising more than the lab workflow can deliver.
            </p>

            <hr className="border-border-primary" />

            <div className="flex flex-col items-center gap-3">
              <h3 className="font-display text-xl md:text-2xl">
                Sperm <span className="font-bold text-brand-primary">InCyte</span>{" "}
                is still in development
              </h3>
              <p className="m-0 text-base font-body text-text-muted">
                Check back here for updates.
              </p>
              <Cog
                className="h-14 w-14 text-brand-primary animate-spin [animation-duration:6000ms] md:h-16 md:w-16"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-12 lg:gap-14">
          <div className="min-w-0 md:basis-0 md:flex-[2]">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="m-0 text-center font-display text-2xl md:text-left md:text-3xl">
                Looking for a{" "}
                <span className="font-bold text-brand-primary">high-quality</span>{" "}
                semen evaluation?
              </h2>
              <p className="m-0 text-center text-lg font-body leading-snug md:text-left">
                Make informed breeding decisions with confidence and order a semen
                sample evaluation kit. Our kit provides a safe and reliable way to
                collect and ship semen samples for analysis, including everything
                you need to securely package and mail your sample to our lab.
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 md:basis-0 md:flex-[1]">
            <div className="relative flex h-28 w-full max-w-sm items-center justify-center md:h-32 md:max-w-none">
              <FileHeart className="h-24 w-24 text-tan-light md:h-28 md:w-28" />
              <FileHeart
                className="absolute h-16 w-16 text-brand-primary md:h-20 md:w-20"
                aria-hidden
              />
            </div>
            <Link
              href="/Sample-Analysis"
              className="relative z-20 mx-auto block w-fit"
            >
              <div className="rounded-lg bg-brand-primary px-5 py-2 text-center font-body text-white md:hover:scale-105">
                Order Now
              </div>
            </Link>
          </div>
        </div>

        <section>
          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
            <h2 className="m-0 text-center font-display text-3xl md:text-4xl">
              The <span className="font-bold text-brand-primary">why</span> behind
              Sperm InCyte
            </h2>
            <hr className="my-6 border-border-primary" />
            <h3 className="m-0 font-display text-xl md:text-2xl">
              Infertility and subfertility in bulls pose{" "}
              <span className="font-bold text-brand-primary">
                significant challenges in the cattle industry
              </span>
            </h3>
            <p className="mt-3 text-lg font-body leading-snug">
              Infertility and subfertility show up as economic drag, longer
              calving intervals, and uneven calf crops. Breeding soundness exams
              (BSEs) are still largely manual and time-intensive, so morphology
              reads can vary between evaluators and shift with clinic volume.
              Without consistent imaging and structured documentation, subtle
              defects are easier to miss—and harder to tie back to breeding
              outcomes when decisions need to hold up months later.
            </p>
            <p className="mt-3 text-lg font-body leading-snug">
              Sperm InCyte standardizes parts of the semen analysis workflow: it
              uses computer vision on high-resolution microscope images to flag
              and classify sperm defects in a repeatable way. The aim is fewer
              subtle findings missed on a busy day, faster documentation for
              routine screening, and results framed in the same morphology language
              veterinarians already use—so breeding decisions rest on structured
              evidence alongside clinical judgment, not ad hoc methods alone.
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
