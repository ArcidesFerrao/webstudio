import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Header } from "../components/Header";
import ContactForm from "../forms/ContactForm";
import { Projects } from "../components/Projects";

export default function HomePage() {
  return (
    <main className="homepage flex flex-col justify-between items-center ">
      <Header />

      <Hero />
      <Services />
      <Projects />
      <About />
      <ContactForm />
    </main>
  );
}
