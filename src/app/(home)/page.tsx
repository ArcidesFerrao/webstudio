import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
// import {Footer} from '../components/Footer';

export default function HomePage() {
  return (
    <main className="homepage flex flex-col justify-between items-center ">
      <Hero />
      <Services />
      <About />
      {/* <Footer /> */}
    </main>
  );
}
