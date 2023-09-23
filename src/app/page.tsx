import About from "@/components/About";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <main
      id="#top"
      className="relative flex min-h-screen flex-col items-center justify-center pb-14"
    >
      <Main />
      <div
        className="flex w-full flex-col items-center justify-center p-12"
        id="about"
      >
        <About />
        <Tech />
      </div>

      <div id="projects" className="flex w-full flex-col items-center justify-center p-12">
        <Projects />
      </div>
    </main>
  );
}
