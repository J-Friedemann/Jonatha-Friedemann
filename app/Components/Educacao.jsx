import React from "react";
import Titulo from "./Layout/Titulo";
import Image from "next/image";
import PageAnimation from "./Assets/PageAnimation";

const Educacao = () => {
  return (
    <PageAnimation>
      <section
        id="educacao"
        className="container lg:max-w-4xl xl:max-w-6xl mx-auto mt-32 sm:mt-72 lg:mt-96 pb-36"
      >
        <Titulo>Educação</Titulo>
        <div className="max-w-[16rem] xs:max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl grid grid-flow-row sm:grid-cols-6 pl-16 md:pl-0 gap-4 mt-16 sm:mt-28 sm:content-center">
          <Image
            className="md:justify-self-end"
            src="/educacao/school.svg"
            width={44}
            height={36}
            alt=""
          />
          <h2 className="text-textLight text-lg sm:text-xl md:text-2xl lg:text-3xl sm:col-span-5 font-semibold ">
            Bacharel em Sistemas de Informação
          </h2>
          <div className="text-textLight flex divide-x-2 divide-enfase1/20 text-sm sm:text-base md:text-lg lg:text-xl sm:col-start-2 sm:col-span-6 sm:justify-start">
            <p className="pr-4">Anhembi Morumbi</p>
            <p className="pl-4">2024/2</p>
          </div>
        </div>
        <div className="max-w-[16rem] xs:max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl grid grid-flow-row sm:grid-cols-6 pl-16 md:pl-0 gap-4 mt-16 sm:mt-28 sm:content-center">
          <Image
            className="md:justify-self-end"
            src="/educacao/idioma.svg"
            width={36}
            height={36}
            alt=""
          />
          <h2 className="text-textLight text-lg sm:text-xl md:text-2xl lg:text-3xl sm:col-span-5 font-semibold">
            Inglês
          </h2>
          <div className="text-textLight flex divide-x-2 divide-enfase1/20 text-sm sm:text-base md:text-lg lg:text-xl sm:col-start-2 sm:col-span-6 sm:justify-start">
            <p className="pr-4">A3</p>
            <p className="pl-4">Básico</p>
          </div>
        </div>
      </section>
    </PageAnimation>
  );
};

export default Educacao;
