import { Clock } from "lucide-react";

export const metadata = {
  title: "Temporarily unavailable",
  description: "Not available at the moment. Please check back later.",
};

export default function UnavailablePage() {
  return (
    <div className="flex w-full min-h-0 flex-1 flex-col justify-center px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Clock
              className="h-30 w-30 text-brand-primary-tint md:h-40 md:w-40"
              strokeWidth={1.25}
              aria-hidden
            />
          </div>

          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h1 className="m-0 font-display text-2xl leading-snug md:text-3xl">
              Sorry! We're still working out the
              <span className="font-bold text-brand-primary"> details...</span>
            </h1>
            <p className="m-0 text-lg font-body leading-snug text-text-muted">
              Please try again soon. You can use the navigation menu to explore the rest
              of the site in the meantime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
