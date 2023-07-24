import Image from "next/image";
import React from "react";

const TecnologiaCard = ({ tecnologia, svg }) => {
  return (
    <div className="relative group">
      <div className="absolute w-48 lg:w-[7.5rem] lg:h-40 mx-auto inset-0 group-hover:blur-lg transition duration-200 bg-enfase1 rounded-lg blur"></div>
      <div className="relative flex lg:flex-col gap-6 bg-gray-950 max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto items-center w-48 lg:w-[7.5rem] lg:h-40 py-3 justify-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <Image
          className="w-14 h-14 lg:w-20 lg:h-20 "
          src={svg}
          width={80}
          height={80}
          alt=""
        />
        <p className="text-textLight">{tecnologia}</p>
      </div>
    </div>
  );
};

export default TecnologiaCard;
