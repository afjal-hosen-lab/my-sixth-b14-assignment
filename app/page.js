import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>FitLog</h1>

        <p>Train with intent. Log every set.</p>
      </main>

      <Footer />
    </div>
  );
}