import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Challenges />
      <Contact />
      <Footer />
    </main>
  );
}