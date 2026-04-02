// Sidekick component: A thin banner used on most pages

export default function Sidekick({ pageTitle, subTitle }) {
  const words = pageTitle.trim().split(/\s+/).filter(Boolean);
  const firstWord = words[0] ?? "";
  const secondWord = words[1];
  const isSingleWord = words.length === 1;

  return (
    <div className="w-full bg-brand-primary-tint border-b border-brand-primary/20">
      
      <div className="py-10 px-6 text-2xl flex flex-col justify-center items-center md:text-4xl">
        <h1 className="font-display">
          {isSingleWord ? (
            <span className="font-bold text-brand-primary">{firstWord}</span>
          ) : (
            <>
              {firstWord}{" "}
              <span className="font-bold text-brand-primary">{secondWord}</span>
            </>
          )}
        </h1>
        <h3 className="text-lg">{subTitle}</h3>
      </div>
    </div>
  );
}
