// app/_components/Navbar/Nav.tsx
"use client";
import Link from 'next/link';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'API', href: 'https://app.gocirculaire.com/login' },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-white hover:text-blue-500 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm text-white hover:text-blue-500">Sing in</Link>
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}
