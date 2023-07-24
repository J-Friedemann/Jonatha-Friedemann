import React from "react";

export const SobreProjeto = ({ children }) => {
  return (
    <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4 pt-4 text-center md:border-r-2 md:border-enfase1/20 md:px-2">
      {children}
    </div>
  );
};
