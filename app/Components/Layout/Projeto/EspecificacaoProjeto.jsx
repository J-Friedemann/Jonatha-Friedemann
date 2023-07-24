import React from "react";

export const EspecificacaoProjeto = ({ children }) => {
  return (
    <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4 pt-4 text-center">
      {children}
    </div>
  );
};
