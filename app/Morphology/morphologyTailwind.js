/** Shared Tailwind classes for Morphology pages (see app/Morphology/page.js). */
export const morphologyP =
  "mb-0 text-lg leading-snug text-stone-900 max-[768px]:text-sm";

export const morphologyH1 =
  "mb-4 text-center text-4xl text-stone-900 max-[768px]:text-[30px] font-display";

/** h1 with optional trailing Image (centered, wraps on small screens). */
export const morphologyH1WithMedia =
  "mb-4 flex flex-wrap items-center justify-center gap-3 text-center text-4xl text-stone-900 max-[768px]:text-[30px]";

export const morphologyH2 =
  "mt-4 mb-3 text-2xl font-bold text-brand-primary-dark font-display";

export const morphologyH3 = "text-lg font-semibold text-stone-900 font-display";

export const morphologyArticle = "pt-10";

/** Slightly more bottom padding to align with section blocks (mb-6) between article sections. */
export const morphologySection = "pb-6";

export const morphologyUl =
  "mt-3 list-disc pl-12 max-[768px]:pl-8";

export const morphologyLi =
  "mb-2.5 text-lg leading-relaxed text-stone-900 max-[768px]:text-sm";

/** Category hub subsection spacing (replaces .section). */
export const morphologySectionBlock = "mb-6";

export const learnMoreRow =
  "mt-3 flex flex-row items-center justify-end gap-2 pb-2.5";

export const learnMoreTitle = "m-0 text-base font-semibold text-brand-primary";

/** Paragraph inside linked abnormality cards (replaces .abButton p). */
export const morphologyAbCardP =
  "mb-2.5 text-lg leading-relaxed text-stone-900 max-[768px]:text-sm";

export const titleContainer = "flex justify-center";

/** Margin below slider (or empty placeholder) so gap before article is consistent across detail pages. */
export const sliderContainer = "mb-4 flex justify-center";

export const iconLearnMore = "text-3xl align-middle text-brand-primary";

/** WordPress HTML blob: links and h2 use brand rust; body copy stays stone. */
export const morphologyWpContent =
  "max-w-none [&_a]:text-brand-primary [&_a]:underline [&_h2]:mt-4 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-primary-dark [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-stone-900 [&_h3]:font-display [&_img]:my-6 [&_img]:max-h-[480px] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-2.5 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-stone-900 [&_li]:max-[768px]:text-sm [&_li_p]:m-0 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-12 [&_ol]:max-[768px]:pl-8 [&_p]:mt-0 [&_p]:mb-0 [&_p]:text-lg [&_p]:leading-snug [&_p]:text-stone-900 [&_p]:max-[768px]:text-sm [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-12 [&_ul]:max-[768px]:pl-8 [&_.wp-block-group]:pb-6";
