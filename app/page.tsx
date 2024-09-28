import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}
