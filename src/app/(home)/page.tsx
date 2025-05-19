import { Hero } from "../components/Hero";
import { About } from "../components/About";
// import { Services } from "../components/Services";
import { Header } from "../components/Header";
import { ServicesPage } from "../components/ServicesComponent";
// import {Footer} from '../components/Footer';

export default function HomePage() {
  return (
    <main className="homepage flex flex-col justify-between items-center ">
      <Header />

      <Hero />
      <ServicesPage />
      {/* <Services /> */}
      <About />
      {/* <Footer /> */}
    </main>
  );
}
