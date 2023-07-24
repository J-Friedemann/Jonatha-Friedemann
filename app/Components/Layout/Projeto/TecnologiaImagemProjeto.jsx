import Image from "next/image";
import React from "react";

export const TecnologiaImagemProjeto = ({ tecnologia }) => {
  return (
    <>
      <Image className="" src={tecnologia} width={32} height={32} alt="" />
    </>
  );
};
