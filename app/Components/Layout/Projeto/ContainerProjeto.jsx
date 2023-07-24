import React from "react";

export const ContainerProjeto = ({ children }) => {
  return (
    <div className="mt-24 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto  relative group">
      <div className="absolute inset-0 group-hover:blur-lg transition duration-200 bg-enfase1 rounded-lg blur"></div>
      <div className="bg-slate-950 p-4 relative rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 divide-y-2 md:divide-y-0  divide-enfase1/20">
        {children}
      </div>
    </div>
  );
};
