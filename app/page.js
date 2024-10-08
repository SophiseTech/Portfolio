import About from "@/app/Components/About/Main";
import Main from "@/app/Components/Hero/Main";
import Works from "@/app/Components/Works/Main";
import TestimonialsArea from "@/app/Components/Testimonials/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Works />
      <TestimonialsArea/>
    </div>
  );
}
