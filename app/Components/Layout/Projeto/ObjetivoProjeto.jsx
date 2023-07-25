import React from "react";

export const ObjetivoProjeto = ({ children }) => {
  return (
    <>
      <h3 className="text-textLight text-xl col-span-2 font-semibold">
        Objetivo:
      </h3>
      <p className="text-textLight col-span-2">{children}</p>
    </>
  );
};
