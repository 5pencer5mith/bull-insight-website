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
  Send,
  Building2,
  Heart,
  Mail,
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
          is to provide effective resources and information, and to promote best
          practices that ensure the well-being and health of cattle herds
          worldwide.
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
                <Package className="w-36 h-36 text-brand-primary-tint" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl text-center font-bold font-display">
                  Sample Analysis
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    Order a sample analysis kit, collect a semen sample from
                    your bull, and send it back to us for a complete and
                    accurate analysis.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="Sperm-In-Cyte">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <Microscope className="w-36 h-36 text-brand-primary-tint" />
              </div>

              <div className="relative z-10">
                <h3 className="text-center text-xl font-bold font-display">
                  Sperm In-Cyte Technology
                </h3>
                <div className="pt-2">
                  <p className="text-lg text-center font-body leading-snug">
                    Learn about an advanced bull semen analysis tool powered by
                    artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/Morphology">
            <div className="relative insights-block">
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <BookOpen className="w-36 h-36 text-brand-primary-tint" />
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
                <Rss className="w-36 h-36 text-brand-primary-tint" />
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
                Bull
                <span className="font-bold font-display text-2xl text-brand-primary">
                  Insight
                </span>{" "}
                is transforming cattle breeding through advanced technology,
                education, and research. We aim to enhance herd fertility by
                providing accurate reproductive insights, practical knowledge,
                and cutting-edge tools powered by artificial intelligence. This
                project—and the products it inspires—are developed with
                expertise and driven by the lifelong passion of Dr. Glen Jensen,
                whose commitment to reproductive science and cattle health
                guides everything we do.
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

      <section className="mb-12 flex min-h-[50svh] w-full flex-col justify-center bg-white py-10 border-t-2 border-b-2 border-border-primary md:mb-16 md:py-14 lg:mb-20 lg:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-stretch justify-center gap-16 px-4 md:flex-row md:gap-12 lg:gap-16">
          <div id="contact" className="w-full min-w-0 md:flex-1">
            <div className="w-full">
              <div className="relative flex flex-col gap-8 p-8">
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                  <Mail
                    size={256}
                    className="shrink-0 text-brand-primary-tint"
                    aria-hidden
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3 text-center md:gap-4">
                  <h2 className="m-0 font-display text-4xl md:text-6xl">
                    Contact{" "}
                    <span className="font-bold text-brand-primary">Us</span>
                  </h2>
                  <p className="m-0 text-lg md:text-2xl">
                    We would love to hear from you!
                  </p>
                </div>

                <div className="relative z-20 flex flex-wrap items-center justify-center gap-2 px-2">
                  <Send
                    className="shrink-0 text-brand-primary"
                    aria-hidden
                    size={22}
                  />
                  <a
                    href="mailto:glen@emeryanimalhealth.com"
                    className="relative inline max-w-full break-words pb-0.5 text-center text-lg font-body leading-snug text-text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-700 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                  >
                    glen@emeryanimalhealth.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="donate" className="w-full min-w-0 md:flex-1">
            <div className="w-full">
              <div className="relative flex flex-col gap-8 p-8">
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                  <Heart
                    size={256}
                    className="shrink-0 text-brand-primary-tint"
                    aria-hidden
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3 text-center md:gap-4">
                  <h2 className="m-0 font-display text-4xl md:text-6xl">
                    Support{" "}
                    <span className="font-bold text-brand-primary">Us</span>
                  </h2>
                  <p className="m-0 text-lg md:text-2xl">
                    Let&apos;s keep our herds healthy!
                  </p>
                </div>

                <Link
                  href="/"
                  className="relative z-20 mx-auto block w-full max-w-xs md:w-1/4"
                >
                  <div className="rounded-lg bg-brand-primary p-2 text-center text-white md:hover:scale-105">
                    Donate Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
