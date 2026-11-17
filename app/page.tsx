import Header from "@/components/ui/header/Header";
import AboutMe from "@/components/ui/sections/about/page";
import Experience from "@/components/ui/sections/experience/page";
import Hero from "@/components/ui/sections/hero/page";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
    </main>
  );
}
