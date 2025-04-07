import Link from "next/link";

export const Header = () => (
  <header className="flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Innovante</h1>
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <a href="/projects">Projects</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
);
