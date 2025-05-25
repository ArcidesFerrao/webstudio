import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <section className="w-full">
    <footer className="w-full flex items-center gap-5 justify-center py-8 my-10">
      <div className="m-0">
        <Image
          src="/assets/logo-ws3.png"
          width={180}
          height={100}
          alt="web studio logo"
        />
      </div>
      <div className="flex flex-col h-full gap-1">
        <div className="flex gap-2">
          <p>Email:</p>
          <Link href="">cidesferrao@gmail.com</Link>
        </div>
        <div className="flex gap-2">
          <p>Whatsapp:</p>
          <Link href="">+258 85 27 40 554</Link>
        </div>
      </div>
    </footer>
  </section>
);
