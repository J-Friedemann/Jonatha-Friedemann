import React from "react";

const Titulo = ({ children }) => {
  return (
    <div className="flex items-center gap-5 px-4">
      <span className="text-3xl text-enfase1/20">&lt;</span>
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-playfair bg-gradient-to-t from-enfase1 to-enfase2 text-transparent bg-clip-text font-bold tracking-wide">
        {children}
      </h1>
      <span className="w-full h-[1px] bg-enfase1/20"></span>
    </div>
  );
};

export default Titulo;
