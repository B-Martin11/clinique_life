import Partie1 from "../components/Partie1";
import Partie2 from "../components/Partie2";
import Partie3 from "../components/Partie3";

export default function Contact() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-0
        -mt-[80px] md:-mt-[80px]
        overflow-x-hidden
      "
    >
      <Partie1 />
      <Partie2 />
      <Partie3 />
    </main>
  );
}
