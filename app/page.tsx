import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import Services from "./components/services";
import SkillsCard from "./components/skillcards";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:items-center  ">
      <Navbar />
      <Intro />
      <About />
      <SkillsCard />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
