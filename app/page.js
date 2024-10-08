import About from "@/app/Components/About/Main";
import Contact from "@/app/Components/Contact/Main";
import Footer from "@/app/Components/Footer/Main";
import Main from "@/app/Components/Hero/Main";
import Works from "@/app/Components/Works/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
