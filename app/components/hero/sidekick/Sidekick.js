// Sidekick component: A thin banner used on most pages. Displays page title
// Components
import Image from "next/image";


export default function Sidekick({ pageTitle, subTitle }) {
  const firstWord = pageTitle.split(" ")[0];
  const secondWord = pageTitle.split(" ")[1];
  return (
    <div className="relative w-full shadow-xl">

      <div className="">
        <Image
        src="/img/hero/meadow.jpg"
        alt="Background"
        fill
        className="object-cover opacity-30"
        priority
      />
      </div>
      
      <div className="relative z-10 h-20 text-2xl flex flex-col justify-center items-center md:text-3xl">
        <h1 className="">
          {firstWord}{" "}
          <span className="font-bold text-blue-700">{secondWord}</span>
        </h1>
        <h3 className="text-lg">{subTitle}</h3>
      </div>
    </div>
  );
}
