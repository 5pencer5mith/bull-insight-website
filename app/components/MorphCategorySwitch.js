import Switch from "./Switch";

export default function MorphCategorySwitch({
  enabled,
  setEnabled,
  activeCategory,
  setActiveCategory,
}) {
  const handleTheriogenologyClick = () => {
    setEnabled(false);
    setActiveCategory(false);
  };

  const handleBullcheckClick = () => {
    setEnabled(true);
    setActiveCategory(true);
  };

  return (
    <div
      className="flex justify-center items-center p-2 gap-2 border-1 border-blue-700 bg-blue-50 rounded-lg"
    >
      <div onClick={handleTheriogenologyClick} className={`text-center text-xs hover:cursor-pointer ${!enabled ? "underline text-blue-700" : ""}`}>
        <p>Society for Theriogenology</p>
      </div>
      <div>
        <Switch
          enabled={enabled}
          setEnabled={setEnabled}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div onClick={handleBullcheckClick} className={`text-center text-xs hover:cursor-pointer ${enabled ? "underline text-blue-700" : ""}`}>
        <p>Austrailian BULLCHECK</p>
      </div>
    </div>
  );
}
