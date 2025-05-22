import Link from "next/link";

export const Footer = () => (
  <>
    <footer className="w-full flex space-x-6 justify-center py-8 my-10">
      <div className="flex gap-2">
        <p>Email:</p>
        <Link href="">cidesferrao@gmail.com</Link>
      </div>
      <div className="flex gap-2">
        <p>Whatsapp:</p>
        <Link href="">+258 85 27 40 554</Link>
      </div>
    </footer>
  </>
);
