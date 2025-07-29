// Components
import MorphNav from "../components/subNav/morphology/MorphNav";
import Sidekick from "../components/hero/sidekick/Sidekick";
import Switch from "../components/Switch";
export default function MorphologyLayout({ children }) {
  return (
    <div className="container">
      <div className="pb-8">
        <div className="pb-8">
          <Sidekick pageTitle="Sperm Morphology" subTitle="Abnormalities" />
        </div>

        <div className="p-8 bg-white shadow-xl">
          <div className="md:flex">
            <div className="subNav">
              <MorphNav />
            </div>

            <div className="ab-content">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
