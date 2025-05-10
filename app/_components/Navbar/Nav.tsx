import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "API", href: "https://app.gocirculaire.com/login" },
];

export default function Nav() {
  return (
    // Apply text-sm, font-bold, and text-white to the parent element
    <nav className="flex items-center justify-between py-4 px-6 w-full text-sm font-bold text-white">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            // Removed text-sm and font-medium from children
            // Removed text-white since it's already defined in the parent
            className="hover:text-blue-500 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          // Removed text-sm from child
          // Removed text-white since it's already defined in the parent
          className="hover:text-blue-500"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          // Removed text-sm and font-medium from child
          // Removed text-white since it's already defined in the parent
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}
