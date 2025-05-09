import About from "@/components/helper/About";
import Contact from "@/components/helper/Contact";
import Features from "@/components/helper/Features";
import HeroSection from "@/components/helper/Hero";
import TestimonialSection from "@/components/helper/Testimonials";
import Title from "@/components/helper/Title";

export default function Home() {
  return (
    <>
      <section className="px-2 sm:px-8 md:px-14 lg:px-22 py-8 bg-pink-700">
        <HeroSection />
      </section>
      <section className="px-2 sm:px-8 md:px-14 lg:px-22 py-8">
        <Title title="About us" />
        <About />
        <Title title="Features Section" />
        <Features />
        <Title title="What people says" />
        <TestimonialSection />
        <Contact />
      </section>
    </>
  );
}
