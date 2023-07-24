import React from "react";
import Titulo from "./Layout/Titulo";
import PageAnimation from "./Assets/PageAnimation";

const Sobre = () => {
  return (
    <PageAnimation>
      <section
        id="sobre"
        className="container lg:max-w-4xl xl:max-w-6xl mx-auto mt-32 sm:mt-0"
      >
        <Titulo>Sobre</Titulo>
        <p className="max-w-[16rem] xs:max-w-xs sm:max-w-md ml-6 sm:ml-16 font-sans text-textLight text-sm leading-7 xs:text-base sm:text-lg md:text-xl lg:text-2xl text-center xs:text-left mt-14">
          Fascinado com a transformação do mundo para o ambiente digital e o que
          essas mudanças impactam no mundo. Utilizo tecnologias com
          <span className="font-bold"> NextJS </span> e
          <span className="font-bold"> Tailwind </span> para criar interfaces
          que facilitam a vida das pessoas.
        </p>
      </section>
    </PageAnimation>
  );
};

export default Sobre;
