import About from "@/components/About";
import People from "@/components/People";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="bg-gray">
      <Header />
      <Video />
      <About />
      <People />
      <Services />
      <Portfolio />
    </main>
  );
}
