import Contact from "@/components/global/Contact";
import Experience from "@/components/global/Experience";
import Header from "@/components/global/Header";
import Me from "@/components/global/Me";
import Project from "@/components/global/Project";
import Skills from "@/components/global/Skills";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Me />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
