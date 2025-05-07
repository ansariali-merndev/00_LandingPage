import MobNav from "./MobNav";
import Nav from "./Navbar";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-[8vh] sm:h-[10vh] bg-red-600 px-2 sm:px-4 md:px-12 lg:px-18 text-white">
      <div className="font-bold uppercase text-[14px] sm:text-xl ">
        Landing Page
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <span>
          <IoCartOutline />
          <button>Buy Now</button>
        </span>
      </div>
    </header>
  );
}
