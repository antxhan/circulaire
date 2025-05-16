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

  const ref = useRef<HTMLDialogElement>(null);
  const dummyRef = useRef<HTMLDivElement>(null); // to remove mobile autofocus

  const openNav = () => {
    ref.current?.showModal();
    setIsOpen(true);
    setTimeout(() => dummyRef.current?.focus(), 0); // to remove mobile autofocus
  };

  const closeNav = () => {
    ref.current?.close();
    setIsOpen(false);
  };

  return (
    <>
      <Links className="hidden md:flex" ariaLabel={"Main navigation"} />
      <button className="ml-auto md:hidden" onClick={openNav}>
        <HamburgerIcon />
      </button>
      <dialog
        aria-hidden={!isOpen}
        ref={ref}
        className="
        hidden min-w-[100vw] min-h-[100vh] px-4 max-md:open:flex flex-col pb-4 !inset-0
        bg-neutral-100/80 dark:bg-black/80 backdrop-blur-md dark:text-white
        open:animate-fade-in animate-fade-out
        "
      >
        <div
          tabIndex={-1}
          ref={dummyRef}
          className="sr-only"
          aria-hidden="true"
        />
        <div className="flex items-center justify-between py-5">
          <Link
            href={links.home}
            className="hover:!text-neutral-900 dark:hover:!text-white"
            onClick={closeNav}
            aria-label="Home"
          >
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
