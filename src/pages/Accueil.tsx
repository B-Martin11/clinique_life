import AccueilCartes from "../components/AccueilCartes";
import AccueilCartesMobile from "../components/AccueilCartesMobile";

const Accueil = () => {
  return (
    <div className="bg-[#D2DEEA] min-h-screen relative overflow-hidden">

      {/* DESKTOP */}
      <div className="hidden md:block">
        <AccueilCartes />
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <AccueilCartesMobile />
      </div>

    </div>
  );
};

export default Accueil;
