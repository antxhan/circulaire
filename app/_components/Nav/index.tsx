"use client";

import { useRef, useState } from "react";
import Links from "./Links";
import HamburgerIcon from "@/app/_icons/HamburgerIcon";
import WordMarkLogo from "@/app/_icons/WordMarkLogo";
import Link from "next/link";
import { links } from "@/app/_constants/links";
import XIcon from "@/app/_icons/XIcon";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    ref.current?.showModal();
    setIsOpen(true);
  };

  const closeNav = () => {
    ref.current?.close();
    setIsOpen(false);
  };

  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Links className="hidden md:flex" ariaLabel={"Main navigation"} />
      <button className="ml-auto md:hidden" onClick={openNav}>
        <HamburgerIcon />
      </button>
      <dialog
        aria-hidden={!isOpen}
        ref={ref}
        className="hidden min-w-full min-h-full px-4 max-md:open:flex flex-col pb-4 bg-neutral-100/80 backdrop-blur-md"
      >
        <div className="flex items-center justify-between py-9">
          <Link href={links.home} className="hover:!text-neutral-900">
            <WordMarkLogo />
          </Link>
          <button onClick={closeNav}>
            <XIcon />
          </button>
        </div>
        <Links onLinkClick={closeNav} ariaLabel="Mobile navigation" />
      </dialog>
    </>
  );
}
