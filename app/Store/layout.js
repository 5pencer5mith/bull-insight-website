// Components
import Sidekick from "../components/hero/sidekick/Sidekick";

export default function StoreLayout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="sidekick">
        <Sidekick
          pageTitle="Store"
          subTitle=""
        />
      </div>

      <div className="backgroundWrap">
        <div className="constructionWrapper">
          <div className="store-content">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};
