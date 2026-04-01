import {
  morphologyH1,
  morphologyH2,
  morphologyP as pClass,
} from "./morphologyTailwind";

export default function Morphology() {
  return (
    <div>
      <h1 className={morphologyH1}>
        Welcome to the Sperm <span className="text-blue-700 font-bold">Morphology</span> Hub
      </h1>

      <div className="max-[768px]:hidden">
        <p className={pClass}>
          Using the menu on the left, select from two categorical views: Bull
          Sperm Morphology Anatomical Categorization using Society for
          Theriogenology Standards or the Australian BULLCHECK System (learn
          more below). You may also choose to
          select a specific sperm abnormality to learn about by selecting from
          the Abnormalities menu also found on the left.
        </p>
      </div>

      <div className="hidden max-[768px]:block">
        <p className={pClass}>
          Using the menu above, select from two categorical views: Bull Sperm
          Morphology Anatomical Categorization using Society for Theriogenology
          Standards or the Australian BULLCHECK System (learn more below).
          Select a category from the menu on the left to learn more about
          specific morphology within that category.
        </p>
      </div>

      <h2 className={morphologyH2}>Society for Theriogenology Standard</h2>

      <p className={pClass}>
        The Society for Theriogenology system uses a very simplistic dichotomous
        system. Where 70% normal sperm morphology is needed for a satisfactory
        classification. A more differentiated approach to spermiogram analysis
        moves beyond anatomical categories to provide a deeper understanding of
        how specific sperm abnormalities can influence a bull's fertility,
        including insights into causes, prognosis, and heritability and genetic
        factors that contribute to particular abnormalities in an ejaculate.
        While anatomical categorization serves as a useful tool for organizing
        and simplifying sperm evaluation, focusing on individual abnormalities
        offers a comprehensive perspective on how specific defects, such as
        proximal droplets or nuclear vacuoles, directly affect fertility
        outcomes. This refined approach supports seedstock producers by
        providing targeted insights that can guide selection processes to
        enhance bull fertility and improve herd genetics through informed
        selection pressures.
      </p>

      <h2 className={morphologyH2}>Australian BULLCHECK System</h2>

      <p className={pClass}>
        This structured system allows for consistent interpretation across labs
        and enables practitioners to focus on the specific implications of
        abnormalities on fertility. It also facilitates more targeted management
        by distinguishing compensable from non-compensable defects, offering a
        predictive framework for fertility based on morphology rather than
        solely relying on the 70% normal threshold.
      </p>
    </div>
  );
}
