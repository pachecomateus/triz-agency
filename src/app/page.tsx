import CookieBanner from "@/components/CookieBanner";
import About from "@/components/About";
import People from "@/components/People";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-beige">
      <CookieBanner />
      <Header />
      {/* <Video /> */}
      <Banner />
      {/* <About /> */}
      {/* <People /> */}
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
