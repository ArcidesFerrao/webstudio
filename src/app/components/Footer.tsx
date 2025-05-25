import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <>
    <footer className="w-full flex items-center space-x-8 justify-center py-8 my-10">
      <div>
        <Image
          src="/assets/logo-ws3.png"
          width={180}
          height={100}
          alt="web studio logo"
        />
      </div>
      <div className="flex flex-col justify-between h-full gap-1">
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
  </>
);
