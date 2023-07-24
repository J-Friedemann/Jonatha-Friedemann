import React from "react";
import Titulo from "./Layout/Titulo";
import Image from "next/image";
import { Projeto } from "./Layout/Projeto/Projeto";
import PageAnimation from "./Assets/PageAnimation";

const Projetos = () => {
  return (
    <PageAnimation>
      <section
        id="projetos"
        className="container lg:max-w-4xl xl:max-w-6xl mx-auto mt-32 sm:mt-72 lg:mt-96"
      >
        <Titulo>Projetos</Titulo>
        <Projeto.Container>
          <Projeto.Imagem imagem="/projetos/move-home.png" />
          <Projeto.Sobre>
            <Projeto.Titulo>Move</Projeto.Titulo>
            <Projeto.Descricao>
              Site institucional da empresa, apresentando seus mais diversos
              produtos e serviços.
            </Projeto.Descricao>
            <Projeto.Links github="/" live="/" />
          </Projeto.Sobre>
          <Projeto.Especificacao>
            <Projeto.Tecnologia>
              <Projeto.TecnologiaImagem tecnologia="/tecnologias/next.svg" />
              <Projeto.TecnologiaImagem tecnologia="/tecnologias/tailwindcss.svg" />
            </Projeto.Tecnologia>
            <Projeto.Objetivo>
              Desenvolver os conhecimentos nos frameworks Next e Tailwind.
            </Projeto.Objetivo>
          </Projeto.Especificacao>
        </Projeto.Container>
      </section>
    </PageAnimation>
  );
};

export default Projetos;
