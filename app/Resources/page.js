import PageWrapper from "../components/PageWrapper";
import { BookOpen } from "lucide-react";

export default function Resources() {
  return (
    <PageWrapper>
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-12 pt-10 md:space-y-20 md:pb-16 md:pt-12">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <BookOpen className="h-30 w-30 text-brand-primary-tint md:h-40 md:w-40" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">
              We&apos;re fine-tuning the details—check back for fresh{" "}
              <span className="font-bold text-brand-primary">insights</span>
            </h2>
            <p className="m-0 text-lg font-body leading-snug text-text-muted">
              Articles, guides, and reference material for cattle producers and
              veterinarians will appear here as we publish them.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
