import React from "react";
import Globe from "../assets/Globe.png";
import Sante from "../assets/Sante.png";
import Facebook from "../assets/Facebook.png";
import Calendrier from "../assets/Calendrier.png";
import Wave from "../assets/Wave.png";
import Cli from "../assets/cli.png";
import Deco from "../assets/deco.png";

const AccueilCartes: React.FC = () => {
  return (
    <>

      {/* TITRE */}
{/* TITRE HERO — BORD GAUCHE CONTRÔLÉ */}
<div className="absolute  top-[clamp(3rem,9vw,9.5rem)] left-0 right-0 z-10   pointer-events-none ">
  <h1
    className="
     font-corpline
      pl-[clamp(2rem,6vw,10rem)]
      text-[clamp(3.6rem,9.6vw,10.6rem)]
      text-white
      tracking-[0.16em]
      select-none
      leading-none
      whitespace-nowrap
      max-w-[100vw]
      overflow-hidden
      
    "
   
  >
    CLINIQUE&nbsp;LIFE
  </h1>

  {/* reflet */}
  <div
      className="
        absolute left-0 bottom-5 w-full
        h-[clamp(2rem,4vw,3rem)]
        bg-gradient-to-b
  from-[rgba(210,222,234,0)]
 via-[rgba(210,222,234,0.85)]
 to-[rgba(210,222,234,1)]

 blur-[10px]
 
       
        pointer-events-none
      "
  />
</div>


{/* DÉCO HORIZONTALE */}
<img
  src={Deco}
  className="
    absolute left-1/2 -translate-x-1/2
    z-30 pointer-events-none
    w-[clamp(1513px,95vw,2600px)]
    h-auto
    object-cover
    scale-[1.2]
    "
  style={{
    top: "clamp(10rem,26vw,26rem)"
  }}
/>



      {/* IMAGE CENTRALE */}
      <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]
        w-[clamp(220px,45vw,457px)] h-[clamp(300px,60vw,620px)] pointer-events-none">
        <img src={Cli} className="w-full h-full object-contain" />
        <div className="absolute bottom-0 left-0 w-full h-[clamp(120px,30vw,270px)] backdrop-blur-xl mask-gradient" />
      </div>

      {/* CARTE INFO */}
      <div className="absolute bottom-[clamp(5rem,10vw,10rem)] max-md:bottom-[22rem]
        left-[clamp(0.8rem,2vw,2rem)] max-md:left-1/2 max-md:-translate-x-1/2
        w-[clamp(180px,14vw,260px)] max-md:w-[85%]
        h-[clamp(220px,16vw,296px)]
        bg-[#F5FAFD] rounded-tr-[clamp(90px,10vw,140px)]
        p-[clamp(1rem,1.6vw,2rem)] shadow-md z-30 flex flex-col justify-end">
        <img src={Globe} className="w-40 h-40 mb-2" />
        <p className="text-[clamp(0.9rem,1.1vw,1.25rem)] leading-relaxed">
          <span className="text-blue-600 font-semibold">La Clinique Life</span> incarne une <b>fiabilité</b> médicale d’envergure <b>mondiale</b>.
        </p>
      </div>

      {/* CARTE SATISFACTION */}
      <div className="absolute right-0 bottom-[clamp(192px,34vw,312px)] max-md:bottom-[16rem]
        max-md:left-1/2 max-md:-translate-x-1/2
        w-[clamp(260px,20vw,382px)] max-md:w-[90%]
        h-[clamp(120px,9vw,180px)]
        bg-white rounded-l-[clamp(120px,12vw,180px)]
        p-[clamp(1.2rem,1.8vw,2.5rem)] shadow-md z-30 flex items-center">
        <img src={Sante} className="w-[clamp(70px,6vw,133px)] h-[clamp(70px,6vw,133px)] mr-[clamp(0.8rem,1.2vw,1.5rem)]" />
        <div className="flex flex-col items-end">
          <h2 className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-emerald-500 mb-1">SATISFACTION</h2>
          <div className="flex gap-2">
            {"★★★★★".split("").map((_, i) => (
              <span key={i} className="text-yellow-400 text-[clamp(1rem,1.6vw,1.5rem)]">★</span>
            ))}
          </div>
        </div>
      </div>

 
      {/* SUIVEZ-NOUS */}
      <div className="absolute bottom-0 left-0 max-md:bottom-[7rem] max-md:left-1/2 max-md:-translate-x-1/2
        w-[clamp(220px,28vw,480px)] max-md:w-[90%]
        h-[clamp(40px,5vw,60px)] pr-[clamp(3rem,10vw,9rem)] max-md:pr-0
        bg-white shadow-md z-30 flex items-center justify-center gap-[clamp(0.8rem,2vw,1.5rem)]"
        style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0% 100%)" }}>
        <img src={Facebook} className="w-[clamp(28px,3vw,40px)] h-[clamp(28px,3vw,40px)]" />
        <span className="text-[clamp(0.8rem,1.2vw,1.125rem)] font-semibold tracking-widest">Suivez-nous</span>
      </div>

      {/* BOUTON */}
      <button className="absolute bottom-[clamp(1.2rem,2vw,2rem)] max-md:bottom-[3.5rem]
        left-1/2 -translate-x-1/2 w-[clamp(200px,22vw,300px)] max-md:w-[85%]
        h-[clamp(42px,5vw,50px)] bg-white rounded-full shadow-lg z-40
        flex items-center justify-center gap-4 hover:scale-105 transition">
        <img src={Calendrier} className="w-[clamp(20px,3vw,28px)] h-[clamp(20px,3vw,28px)]" />
        <span className="text-[clamp(0.7rem,1vw,0.95rem)] font-bold tracking-widest">Prendre Rendez-vous</span>
      </button>

      {/* PRIORITÉ */}
      <div className="absolute bottom-0 right-0 max-md:bottom-[0.5rem] max-md:left-1/2 max-md:-translate-x-1/2
        w-[clamp(220px,28vw,480px)] max-md:w-[90%]
        h-[clamp(40px,5vw,60px)] pl-[clamp(3rem,10vw,9rem)] max-md:pl-0
        bg-white shadow-md z-30 flex items-center justify-center text-center"
        style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}>
        <div className="leading-tight">
          <p className="text-[clamp(0.8rem,1.1vw,1.25rem)]">
            <span className="text-[#2B4E7E] font-bold">Votre santé</span>, notre priorité
          </p>
          <p className="text-[#2B4E7E] font-bold text-[clamp(0.8rem,1.1vw,1.25rem)]">7jours/7</p>
        </div>
      </div>

    </>
  );
};

export default AccueilCartes;
