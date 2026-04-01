// Components
import Sidekick from "../components/hero/sidekick/Sidekick";

export default function ResourcesLayout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="sidekick">
        <Sidekick
          pageTitle="Resources"
          subTitle="For Cattle Producers and Veterinarians"
        />
      </div>

      <main className="w-full">{children}</main>
    </div>
  );
}
