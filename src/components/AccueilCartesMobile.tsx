import Globe from "../assets/Globe.png";
import Sante from "../assets/Sante.png";
import Facebook from "../assets/Facebook.png";
import Calendrier from "../assets/Calendrier.png";
import Cli from "../assets/cli.png";

const AccueilCartesMobile = () => {
  return (
    <div className="relative w-full min-h-[900px] bg-[#E8F0F7] overflow-hidden">

      <h1 className="absolute top-32 left-1 text-white font-corpline leading-none">
  <span className="block text-[2.5rem] tracking-widest opacity-80">
    CLINIQUE
  </span>
   <span className="relative block text-[5.8rem] ">
    LIFE

    {/* reflet */}
    <span className="
      pointer-events-none
      absolute left-0 bottom-0 w-full
      h-[3.4rem]
      bg-gradient-to-b
      from-[rgba(210,222,234,0)]
      via-[rgba(210,222,234,0.75)]
      to-[rgba(210,222,234,1)]
      blur-[10px]
     
    "/>
  </span>
</h1>

      {/* DOCTEUR */}
      <img
        src={Cli}
        className="absolute right-[-30px] top-24 w-[260px]"
      />

      {/* GLOBE */}
      <img
        src={Globe}
        className="absolute left-0 top-[240px] w-36 z-40"
      />

      {/* PRIORITÉ — VAGUE MÉDICALE */}
<div className="absolute top-[310px] left-0 w-full z-30">

  {/* VAGUE */}
  <svg
    viewBox="0 0 1440 140"
    preserveAspectRatio="none"
    className="w-full h-[80px]"
  >
    <path
      d="
        M0,50
        C0,10 400,0 590,40
        C700,70 880,140 1400,40
        C1580,20 1520,30 1440,50

         L1440,140
        L0,140
        Z"
      fill="#F1F6FB"
    />
  </svg>

  {/* CONTENU */}
<div className="bg-[#F1F6FB] text-center py-6 -mt-6">
  <p className="text-lg font-bold text-[#264873]">
    Votre santé, <span className="text-black ">notre priorité</span>
  </p>

  <p className="text-[#264873] font-bold">
    7jours/7
  </p>
</div>

</div>

      {/* INFO */}
      <div className="absolute top-[610px] left-4 right-4 bg-white rounded-3xl p-6 shadow">
        <p>
          <b className="text-blue-600">La Clinique Life</b> incarne une
          <b> fiabilité médicale mondiale</b>.
        </p>
      </div>

      {/* SATISFACTION */}
      <div className="absolute top-[750px] left-4 right-4 bg-white rounded-3xl p-5 shadow flex items-center gap-4">
        <img src={Sante} className="w-16" />
        <div>
          <p className="font-bold text-emerald-500">SATISFACTION</p>
          <p className="text-yellow-400">★★★★★</p>
        </div>
      </div>

      {/* SUIVEZ-NOUS */}
      <div className="absolute bottom-28 left-4 right-4 bg-white rounded-3xl p-4 flex items-center justify-center gap-3 shadow">
        <img src={Facebook} className="w-6" />
        <span className="font-semibold">Suivez-nous</span>
      </div>

      {/* BOUTON */}
      <button className="absolute bottom-8 left-4 right-4 bg-emerald-500 text-white rounded-full py-4 font-bold shadow-lg flex items-center justify-center gap-3">
        <img src={Calendrier} className="w-6" />
        Prendre Rendez-vous
      </button>

    </div>
  );
};

export default AccueilCartesMobile;
