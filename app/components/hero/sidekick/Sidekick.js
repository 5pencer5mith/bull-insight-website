// Sidekick component: A thin banner used on most pages
// Components
import Image from "next/image";


export default function Sidekick({ pageTitle, subTitle }) {
  const words = pageTitle.trim().split(/\s+/).filter(Boolean);
  const firstWord = words[0] ?? "";
  const secondWord = words[1];
  const isSingleWord = words.length === 1;

  return (
    <div className="w-full bg-white shadow-xl">
      
      <div className="h-20 text-2xl flex flex-col justify-center items-center md:text-3xl">
        <h1 className="">
          {isSingleWord ? (
            <span className="font-bold text-blue-700">{firstWord}</span>
          ) : (
            <>
              {firstWord}{" "}
              <span className="font-bold text-blue-700">{secondWord}</span>
            </>
          )}
        </h1>
        <h3 className="text-lg">{subTitle}</h3>
      </div>
    </div>
  );
}
