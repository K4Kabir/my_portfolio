import Header from "@/components/global/Header";
import Me from "@/components/global/Me";
import Skills from "@/components/global/Skills";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Me />
      <Skills />
    </div>
  );
}
