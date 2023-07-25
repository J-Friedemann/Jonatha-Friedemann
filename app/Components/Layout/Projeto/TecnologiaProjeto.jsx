import React from "react";

export const TecnologiaProjeto = ({ children }) => {
  return (
    <>
      <h3 className="text-textLight text-xl col-span-2 font-semibold">
        Tecnologias usadas:
      </h3>
      <div div className="col-span-2 flex place-content-center gap-5">
        {children}
      </div>
    </>
  );
};
