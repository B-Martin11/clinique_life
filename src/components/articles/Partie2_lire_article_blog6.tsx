import React from "react";
import { Link } from "react-router-dom";

const Partie2_lire_article_blog6: React.FC = () => {
  return (
    <section className="w-full p-0 m-0">
      <div className="px-0 m-0">
        <div
          className="
            bg-gradient-to-r from-[#1e6cff] via-[#1b8fd9] to-[#00c2a8]
            py-14
            text-center
            text-white
            shadow-xl
          "
        >
          <div className="max-w-4xl mx-auto px-6">
            
            {/* TITRE */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Besoin de plus d&apos;informations ?
            </h2>

            {/* TEXTE */}
            <p className="text-sm md:text-base text-white/90 mb-8">
              Notre équipe médicale est à votre disposition pour répondre à toutes vos questions.
            </p>

            {/* BOUTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              
              {/* PRENDRE RDV */}
              <Link to="/rdv">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50 transition"
                >
                  Prendre rendez-vous
                </button>
              </Link>

              {/* CONTACT */}
              <Link to="/contact">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white/10 transition"
                >
                  Nous contacter
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partie2_lire_article_blog6;
