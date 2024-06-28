import Link from "next/link";
import React from "react";
import { InputSearch } from "./InputSearch";

export const Navbar = () => {
  return (
    <header className="bg-orange-500">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-white">
          ZANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};
