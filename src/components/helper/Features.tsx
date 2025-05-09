import { TiTick } from "react-icons/ti";
import Animate from "./animate";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <Animate />
      <div id="features" className="grid sm:grid-cols-2 items-center">
        <Image
          data-aos="fade-up"
          className="w-[50%] mx-auto"
          src="/hero.webp"
          alt="hero-img"
        />
        <div data-aos="fade-up" className="text-gray-600">
          <h2 className="text-4xl font-bold my-6">
            Pure sound, no added noise
          </h2>
          <p className="py-2 text-[18px] flex items-center gap-2">
            <span>
              <TiTick className="w-8 h-8" />
            </span>
            High-Resolution Audio compatible
          </p>
          <p className="py-2 text-[18px] flex items-center gap-2">
            <span>
              <TiTick className="w-8 h-8" />
            </span>
            High quality wireless audio with BLUETOOTH® and LDAC technology
          </p>
          <p className="py-2 text-[18px] flex items-center gap-2">
            <span>
              <TiTick className="w-8 h-8" />
            </span>
            Smart listening experience by Adaptive Sound Control
          </p>
          <p className="py-2 text-[18px] flex items-center gap-2">
            <span>
              <TiTick className="w-8 h-8" />
            </span>
            Ergonomic, enfolding design earpads
          </p>
        </div>
      </div>
    </>
  );
}
