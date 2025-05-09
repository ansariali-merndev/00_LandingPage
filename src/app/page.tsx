import About from "@/components/helper/About";
import HeroSection from "@/components/helper/Hero";

export default function Home() {
  return (
    <>
      <section className="px-2 sm:px-8 md:px-14 lg:px-22 py-8 bg-pink-700">
        <HeroSection />
      </section>
      <section className="px-2 sm:px-8 md:px-14 lg:px-22 py-8">
        <h2 className="text-center my-8 text-4xl uppercase font-bold text-gray-600 border-b pb-2">
          About us
        </h2>
        <About />
      </section>
    </>
  );
}
