import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo2.svg" alt="Logo" width={40} height={40} />
          <span className="text-lg font-semibold">Circulaire</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
