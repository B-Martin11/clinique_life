import Partie1Service from "../components/Partie1_service";
import Partie2_service from "../components/Partie2_service";
import Partie3_service from "../components/Partie3_service";
import Partie4_service from "../components/Partie4_service";
import Partie5_service from "../components/Partie5_service";
import Partie6_service from "../components/Partie6_service";

const Service = () => {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-[20px] md:pt-[20px]
        overflow-x-hidden
      "
    >
      {/* SECTION 1 */}
      <Partie1Service />

      {/* SECTION 2 – Notre Mission */}
      <Partie2_service />

      {/* SECTION 3 – Notre Histoire */}
      <Partie3_service />

      {/* SECTION 4 – Notre Équipe */}
      <Partie4_service />

      {/* SECTION 5 – Nos Réalisations */}
      <Partie5_service />

      {/* SECTION 6 – Rejoignez Notre Équipe */}
      <Partie6_service />
    </main>
  );
};

export default Service;
