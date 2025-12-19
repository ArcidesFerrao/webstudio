import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import LanguageProvider from "./components/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Studio",
  description: "Evolure Web Studio",
  icons: {
    icon: [{ url: "/favicon-w.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
