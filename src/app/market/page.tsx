import React from "react";
import { Header } from "../components/Header";
import { Market } from "../components/Market";
import Footer from "../components/Footer";

export default function MarketPage() {
  return (
    <main className="homepage flex flex-col justify-between items-center ">
      <Header />
      <Market />
      <Footer />
    </main>
  );
}
