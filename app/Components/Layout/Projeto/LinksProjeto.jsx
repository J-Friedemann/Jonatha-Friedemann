import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LinksProjeto = ({ github, live }) => {
  return (
    <>
      <Link className="justify-self-end " href={github} target="_blank">
        <Image
          className="text-textLight w-10 h-10 transition ease-in-out hover:-translate-y-1 hover:scale-110"
          src="/projetos/logo-github2.svg"
          width={56}
          height={56}
          alt=""
        />
      </Link>
      <Link href={live} target="_blank">
        <Image
          className="text-textLight col-start-2 w-10 h-10 transition ease-in-out hover:-translate-y-1 hover:scale-110"
          src="/projetos/site.svg"
          width={56}
          height={56}
          alt=""
        />
      </Link>
    </>
  );
};
