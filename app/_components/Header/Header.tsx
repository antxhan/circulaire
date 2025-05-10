import Link from "next/link";
import Nav from "../Navbar/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            style={{ filter: "invert(1)" }}
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
