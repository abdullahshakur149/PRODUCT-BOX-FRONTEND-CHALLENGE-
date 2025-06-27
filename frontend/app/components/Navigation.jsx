import Link from "next/link";

const navLinks = [
  { href: "/items", label: "Browse Items", className: "bg-blue-600 hover:bg-blue-700" },
  { href: "/add-items", label: "Add Item", className: "bg-green-600 hover:bg-green-700" },
  { href: "/checkout", label: "Checkout", className: "bg-yellow-500 hover:bg-yellow-600" },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
      {navLinks.map(({ href, label, className }) => (
        <Link
          key={href}
          href={href}
          className={`px-6 py-2 rounded text-white transition text-lg font-semibold w-full sm:w-auto text-center ${className}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
} 