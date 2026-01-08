import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import RemonterEnHaut from "./components/RemonterEnHaut"; // ✅ AJOUT

import Contact from "./pages/contact";
import Service from "./pages/service";
import Apropos from "./pages/a_propos";
import Blog from "./pages/Blog";
import LireArticle from "./pages/LireArticle";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ✅ GESTION DU SCROLL */}
      <RemonterEnHaut />

      {/* CONTENU DES PAGES */}
      <div className="pt-[100px]">
        <Routes>
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/lire" element={<LireArticle />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
