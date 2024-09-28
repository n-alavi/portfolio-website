import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import SkillsCard from "./components/skillcards";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Intro />
      <About />
      <SkillsCard />
    </div>
  );
}
