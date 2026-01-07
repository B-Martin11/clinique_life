import {
  Phone,
  Calendar,
  Send,
  MessageCircle,
} from "lucide-react";

import FacebookIcon from "../assets/Facebook.png";

export default function Partie2() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= FORMULAIRE ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Envoyez-nous un message
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>

          <form className="mt-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="jean@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="+225 07 00 00 00 00"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Demande d'information"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Décrivez votre demande..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 font-medium shadow-md hover:opacity-90 transition"
            >
              <Send size={18} />
              Envoyer le message
            </button>

            <p className="text-xs text-gray-400 text-center">
              En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
            </p>
          </form>
        </div>

        {/* ================= COLONNE DROITE ================= */}
        <div className="space-y-6">

          {/* URGENCE */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 p-6 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Calendar size={20} />
              </div>
              <h3 className="font-semibold">
                Besoin d’un rendez-vous urgent ?
              </h3>
            </div>

            <p className="text-sm mt-2 opacity-90">
              Appelez-nous directement pour une prise en charge rapide.
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-white text-blue-600 rounded-lg flex items-center justify-center gap-2 py-2 font-medium">
                <Phone size={16} />
                +225 07 77 34 48 59
              </div>

              <div className="bg-white text-blue-600 rounded-lg flex items-center justify-center gap-2 py-2 font-medium">
                <Phone size={16} />
                +225 27 22 26 94 03
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Questions fréquentes
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-800">
                  Quels sont vos horaires ?
                </p>
                <p>Ouvert 24h/24 et 7j/7.</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Prenez-vous les urgences ?
                </p>
                <p>Oui, un service d’urgence est disponible.</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Où nous trouver ?
                </p>
                <p>
                  Angré GESTOCI, 300 m après Pharmacie Alliance.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACTS */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Contactez-nous
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2250777344859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl py-4
                           bg-green-50 text-green-600
                           hover:bg-green-500 hover:text-white hover:shadow-md
                           transition-all duration-200 cursor-pointer"
              >
                <MessageCircle size={24} />
                <span className="text-sm mt-1">WhatsApp</span>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/clinique.life"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl py-4
                           bg-blue-50 text-blue-600
                           hover:bg-blue-600 hover:text-white hover:shadow-md
                           transition-all duration-200 cursor-pointer"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[26px] h-[26px] object-contain"
                  draggable={false}
                />
                <span className="text-sm mt-1">Facebook</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
