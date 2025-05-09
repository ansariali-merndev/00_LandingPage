import Animate from "./animate";

export default function HeroSection() {
  return (
    <main className="grid sm:grid-cols-2 items-center text-white">
      <Animate />
      <div className="my-12" data-aos="fade-up">
        <h2 className="text-2xl sm:text-6xl">
          Next-level audio, unmatched clarity
        </h2>
        <p className="text-[18px] my-6">
          Experience immersive sound with cutting-edge technology and
          exceptional comfort, crafted for true audiophiles.
        </p>
        <div>
          <div>
            <button className="relative inline-flex items-center justify-center my-4 cursor-pointer p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Explore More</span>
            </button>
          </div>
        </div>
      </div>
      <img
        data-aos="zoom-in"
        className="w-[60%] mx-auto"
        src="hero.webp"
        alt="hero"
      />
    </main>
  );
}
