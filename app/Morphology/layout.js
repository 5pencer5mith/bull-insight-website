// Components
import MorphNav from "../components/subNav/morphology/MorphNav";
import Sidekick from "../components/hero/sidekick/Sidekick";

export default function MorphologyLayout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="sidekick">
        <Sidekick pageTitle="Sperm Morphology" subTitle="Abnormalities" />
      </div>

      <div className="backgroundWrap">
        <div className="abContentWrapper">
          <div className="subNav">
            <MorphNav />
          </div>

          <div className="ab-content">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
