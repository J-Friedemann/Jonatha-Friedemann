"use client";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    //
    <header className="container mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center h-16 px-4 pt-8 justify-between ">
      <Link
        className=" text-3xl sm:text-4xl font-playfair bg-gradient-to-t from-enfase1 to-enfase2 text-transparent bg-clip-text font-bold"
        href="/"
      >
        &lt;JF/&gt;
      </Link>

      <nav>
        <button
          className="w-8 h-8 text-3xl text-textLight sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <img
            width={30}
            height={30}
            src={`${
              open ? "/header/close-outline.svg" : "/header/menu-outline.svg"
            }`}
            alt=""
          />
        </button>
        <ul
          className={`text-textLight absolute gap-2 font-playfair ${
            open
              ? "block  w-full top-16 right-0 bg-inherit h-[calc(100%-4rem)] z-30 transition duration-500 overflow-y-hidden visible backdrop-blur-lg"
              : " invisible h-0 overflow-auto"
          } divide-y divide-slate-900 text-center sm:left-0 sm:content-center sm:flex sm:top-0 sm:items-center sm:w-auto sm:relative sm:h-auto sm:visible text-xl md:text-2xl lg:text-3xl sm:divide-y-0 sm::bg-inherit`}
        >
          <Link
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="sobre"
            className="py-4 mx-4 sm:py-0 sm:p-4 sm:m-1 hover:bg-slate-900 sm:hover:bg-inherit cursor-pointer  sm:border-b-2  sm:hover:border-enfase1  sm:border-transparent sm:box-border block"
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="tecnologias"
              className="py-4 mx-4 sm:py-0 sm:p-4 sm:m-1 hover:bg-slate-900 sm:hover:bg-inherit cursor-pointer  sm:border-b-2  sm:hover:border-enfase1  sm:border-transparent sm:box-border block"
              onClick={() => setOpen(false)}
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="projetos"
              className="py-4 mx-4 sm:py-0 sm:p-4 sm:m-1 hover:bg-slate-900 sm:hover:bg-inherit cursor-pointer  sm:border-b-2  sm:hover:border-enfase1  sm:border-transparent sm:box-border block"
              onClick={() => setOpen(false)}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="educacao"
              className="py-4 mx-4 sm:py-0 sm:p-4 sm:m-1 hover:bg-slate-900 sm:hover:bg-inherit cursor-pointer  sm:border-b-2  sm:hover:border-enfase1  sm:border-transparent sm:box-border block"
              onClick={() => setOpen(false)}
            >
              Educação
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
