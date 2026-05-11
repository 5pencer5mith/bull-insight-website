// Sidekick component: A thin banner used on most pages

export default function Sidekick({ pageTitle, subTitle }) {
  const words = pageTitle.trim().split(/\s+/).filter(Boolean);
  const firstWord = words[0] ?? "";
  const secondWord = words[1];
  const isSingleWord = words.length === 1;
  const hasSubTitle = Boolean(subTitle && String(subTitle).trim());

  return (
    <div className="w-full border-b-2 border-border-primary bg-background-card">
      <div className="flex min-h-28 w-full flex-col items-center justify-center px-6 py-6 text-2xl md:min-h-32 md:py-7 md:text-4xl">
        <h1 className="m-0 font-display leading-tight md:leading-tight">
          {isSingleWord ? (
            <span className="font-bold text-brand-primary">{firstWord}</span>
          ) : (
            <>
              {firstWord}{" "}
              <span className="font-bold text-brand-primary">{secondWord}</span>
            </>
          )}
        </h1>
        <div className="flex min-h-6 w-full items-center justify-center md:min-h-7">
          {hasSubTitle ? (
            <h3 className="m-0 text-lg font-medium text-brand-primary-dark md:text-xl">
              {subTitle}
            </h3>
          ) : null}
        </div>
      </div>
    </div>
  );
}
