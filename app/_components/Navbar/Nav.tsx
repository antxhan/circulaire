import Link from "next/link";
import BookDemoButton from "../BookDemoButton";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "API", href: "https://app.gocirculaire.com/login" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full text-sm font-bold text-white">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-blue-500 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="hover:text-blue-500">
          Sign in
        </Link>
        <BookDemoButton />
      </div>
    </nav>
  );
}
