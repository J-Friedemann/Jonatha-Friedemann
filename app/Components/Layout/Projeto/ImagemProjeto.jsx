import Image from "next/image";
import React from "react";

export const ImagemProjeto = ({ imagem }) => {
  return (
    <>
      <Image
        className="rounded-lg col-span-2 lg:col-span-1"
        src={imagem}
        width={1459}
        height={1078}
        alt=""
      />
    </>
  );
};
