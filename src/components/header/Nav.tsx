import { IoCartOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

type props = {
  onMenuClick: () => void;
};

export default function Nav({ onMenuClick }: props) {
  return (
    <header className="bg-red-700 text-white flex justify-between items-center px-4 sm:px-12 md:px-18 lg:px-24 h-[10vh] z-[100]">
      <h2>Landing Page</h2>
      <nav className="hidden lg:flex gap-12">
        <span className="hover:text-green-300 cursor-pointer">Home</span>
        <span className="hover:text-green-300 cursor-pointer">About</span>
        <span className="hover:text-green-300 cursor-pointer">Features</span>
        <span className="hover:text-green-300 cursor-pointer">
          Testimonials
        </span>
        <span className="hover:text-green-300 cursor-pointer">Contact</span>
      </nav>
      <div className="flex gap-3 items-center">
        <span className="flex items-center gap-2 bg-green-600 px-4 py-2 border cursor-pointer rounded-xl">
          <IoCartOutline />
          <button className="cursor-pointer">Buy Now</button>
        </span>
        <button className="block lg:hidden" onClick={onMenuClick}>
          <BiMenuAltRight className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
