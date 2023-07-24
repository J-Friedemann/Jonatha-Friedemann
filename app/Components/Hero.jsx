import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageAnimation from "./Assets/PageAnimation";

const Hero = () => {
  return (
    <PageAnimation>
      <section className="container mx-auto mt-32 sm:mt-0 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl flex flex-col place-items-center space-y-3 md:space-y-4 text-center sm:h-screen sm:place-content-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-playfair bg-gradient-to-t from-enfase1 to-enfase2 text-transparent bg-clip-text font-bold tracking-wide">
          &lt;JONATHA FRIEDEMANN/&gt;
        </h1>
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-textLight font-playfair lg:text-4xl">
          Front-End Developer
        </h2>
        <div className="flex gap-2 md:gap-4 lg:mt-40 ">
          <Link
            href="https://www.linkedin.com/in/jonatha-friedemann-339282283/ "
            target="_blank"
          >
            <Image
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/hero/logo-linkedin.svg"
              height={80}
              width={80}
              alt="Link perfil LinkedIn"
            />
          </Link>
          <Link href="https://github.com/J-Friedemann" target="_blank">
            <Image
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/hero/logo-github.svg"
              height={80}
              width={80}
              alt="Link perfil Github"
            />
          </Link>
        </div>
      </section>
    </PageAnimation>
  );
};

export default Hero;
