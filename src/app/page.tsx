import About from "@/components/About";
import People from "@/components/People";
import Video from "@/components/Video";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main>
      <Video />
      <About />
      <People />
      <Services />
    </main>
  );
}
