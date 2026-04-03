// Components
import MorphNav from "../components/subNav/morphology/MorphNav";
import Sidekick from "../components/hero/sidekick/Sidekick";

export default function MorphologyLayout({ children }) {
  return (
    <>
      <Sidekick pageTitle="Sperm Morphology" subTitle="Abnormalities" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white border-2 border-border-primary rounded-lg p-6">
            <MorphNav />
          </div>
          <div className="flex-4 bg-white border-2 border-border-primary rounded-lg p-6 py-10">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
