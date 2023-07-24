import React from "react";
import Titulo from "./Layout/Titulo";
import TecnologiaCard from "./Layout/TecnologiaCard";
import PageAnimation from "./Assets/PageAnimation";

const Tecnologias = () => {
  return (
    <PageAnimation>
      <section
        id="tecnologias"
        className="container lg:max-w-4xl xl:max-w-6xl mx-auto mt-32 sm:mt-72 lg:mt-96"
      >
        <Titulo>Tecnologias</Titulo>
        <div className="grid grid-flow-row gap-8 mt-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-y-10">
          <TecnologiaCard tecnologia="NextJS" svg="/tecnologias/next.svg" />
          <TecnologiaCard tecnologia="React" svg="/tecnologias/react.svg" />
          <TecnologiaCard
            tecnologia="Javascript"
            svg="/tecnologias/javascript.svg"
          />
          <TecnologiaCard
            tecnologia="Tailwind"
            svg="/tecnologias/tailwindcss.svg"
          />
          <TecnologiaCard tecnologia="HTML" svg="/tecnologias/html5.svg" />
          <TecnologiaCard tecnologia="CSS" svg="/tecnologias/css.svg" />
        </div>
      </section>
    </PageAnimation>
  );
};

export default Tecnologias;
