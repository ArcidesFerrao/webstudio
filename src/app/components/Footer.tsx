"use client";

import Image from "next/image";
import Link from "next/link";

// export const Footer = () => (
//   <section className="w-full">
//     <footer className="w-full flex items-center gap-10 justify-center py-8 my-10">
//       <div className="m-0">
//         <Image
//           src="/assets/logo-ws.png"
//           width={200}
//           height={100}
//           alt="web studio logo"
//         />
//       </div>
//       <div className="footer-links flex flex-col-reverse h-full gap-2">
//         <div className="flex gap-1 items-center">
//           {/* <p>Email:</p> */}
//           <span className="mage--email"></span>
//           <Link href="mailto:cidesferrao@gmail.com">cidesferrao@gmail.com</Link>
//         </div>
//         <div className="flex gap-1 items-center">
//           {/* <p>Whatsapp:</p> */}
//           {/* <span className="uim--whatsapp"></span> */}
//           <span className="mage--whatsapp"></span>
//           <Link href="https://wa.me/258852740554" target="_blank">
//             +258 85 27 40 554
//           </Link>
//         </div>
//       </div>
//     </footer>
//     <div className="text-center">
//       <p>© {new Date().getFullYear()} Web Studio. All rights reserved.</p>
//     </div>
//   </section>
// );

import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <footer className="w-full flex items-center gap-5 justify-center py-8 my-10">
        <div className="m-0">
          <Image
            src="/assets/evolure-box-w.png"
            width={80}
            height={80}
            alt="web studio logo"
          />
        </div>
        <div className="footer-links flex flex-col-reverse h-full gap-2">
          <div className="flex gap-1 items-center">
            {/* <p>Email:</p> */}
            <span className="mage--email"></span>
            <Link href="mailto:cidesferrao@gmail.com">
              cidesferrao@gmail.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            {/* <p>Whatsapp:</p> */}
            {/* <span className="uim--whatsapp"></span> */}
            <span className="mage--whatsapp"></span>
            <Link href="https://wa.me/258852740554" target="_blank">
              +258 85 27 40 554
            </Link>
          </div>
        </div>
      </footer>
      <div className="text-center">
        <p>{t("footer")}</p>
      </div>
    </section>
  );
}
