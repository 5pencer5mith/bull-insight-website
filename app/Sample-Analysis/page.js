import { Package, Stethoscope } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import Sidekick from "../components/hero/sidekick/Sidekick";

export const metadata = {
  title: "Sample Analysis",
  description: "Veterinarian-ordered semen morphology analysis coming soon.",
};

export default function SampleAnalysis() {
  return (
    <PageWrapper>
      <Sidekick pageTitle={"Sample Analysis"} subTitle={"Morphology Analysis"} />

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-12 pt-10 md:space-y-20 md:pb-16 md:pt-12">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Package className="h-40 w-40 text-tan-light md:h-52 md:w-52" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">
              A complete morphology analysis of your bull&apos;s semen sample,{" "}
              <span className="font-bold text-brand-primary">
                ordered through your veterinarian
              </span>
            </h2>
            <p className="text-lg font-body leading-snug">
              We work with veterinary clinics to provide AI-assisted Complete
              Differential Spermiograms — the deeper picture beyond pass/fail.
              Talk to your vet about submitting a sample, or{" "}
              <a
                href="mailto:glen@emeryanimalhealth.com"
                className="font-medium text-brand-primary underline"
              >
                contact us
              </a>{" "}
              if you&apos;re a veterinarian interested in our clinic services.
            </p>

            <hr className="border-border-primary" />

            <div className="flex flex-col items-center gap-3">
              <h3 className="font-display text-xl md:text-2xl">
                Sample Analysis is{" "}
                <span className="font-bold text-brand-primary">coming soon</span>
              </h3>
              <p className="m-0 text-base font-body text-text-primary">
                We&apos;ll let your veterinarian know when we&apos;re live.
              </p>
              <Stethoscope
                className="h-14 w-14 text-brand-primary md:h-16 md:w-16"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
