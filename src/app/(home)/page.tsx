import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
// import {Footer} from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* <Footer /> */}
    </main>
  );
}
