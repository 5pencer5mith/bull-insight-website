import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 w-full text-center">
      <div className="flex h-[100svh] shrink-0 items-center justify-center bg-background-primary px-4">
        <div className="max-w-4xl -translate-y-[min(7svh,4rem)] overflow-x-clip overflow-y-visible px-1 py-4 md:-translate-y-[min(5svh,3.5rem)] md:py-5">
          <h1 className="hero-welcome-whip flex flex-col items-center gap-2 pb-1 font-display text-4xl leading-[1.18] tracking-tight text-stone-900 md:text-5xl md:leading-[1.15] lg:text-6xl lg:leading-[1.12]">
            <span>Welcome to</span>
            <span className="whitespace-nowrap font-body leading-none">
              Bull{" "}
              <span className="font-display font-bold text-brand-primary text-6xl md:text-7xl lg:text-8xl leading-[1.08]">
                InSight
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="relative h-[100svh] min-h-[28rem] w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/img/hero/cattle-grazing-mountainside.jpg"
            alt="cattle grazing in a field"
            fill
            className="object-cover object-[100%_75%]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full bg-background-cream/50 px-4 py-6 text-center backdrop-blur-sm md:py-8">
            <h1 className="font-display text-3xl text-shadow-lg/20 text-white md:text-7xl">
              Breeding{" "}
              Forward
            </h1>
            <p className="mt-2 text-base font-body text-white md:text-xl">
              Reproductive medicine for modern cattle practice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
