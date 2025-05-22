import Link from "next/link";

export const Header = () => (
  <>
    {/* <h1 className="text-xl font-bold">Innovante</h1> */}
    <nav className="w-full flex space-x-6 justify-center py-4 ">
      <Link href="#hero">Home</Link>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </>
);
