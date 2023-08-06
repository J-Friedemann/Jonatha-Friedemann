import Educacao from "./Components/Educacao";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import Tecnologias from "./Components/Tecnologias";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-950 to-slate-950 via-slate-800">
      <Header />
      <Hero />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Educacao />
    </main>
  );
}
