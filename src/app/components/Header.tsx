import Link from "next/link";

export const Header = () => (
  <>
    {/* <h1 className="text-xl font-bold">Innovante</h1> */}
    <nav className="w-full flex space-x-6 justify-center py-4 ">
      <Link href="/#hero">Home</Link>
      <Link href="/#services">Services</Link>
      <Link href="/#projects">Projects</Link>
      {/* <Link href="/market">Products</Link> */}
      <Link href="/#contact">Contact</Link>
    </nav>
  </>
);
