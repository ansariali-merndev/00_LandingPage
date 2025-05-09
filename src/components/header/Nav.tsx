import { BsCart2 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";

type props = {
  handleOpen: () => void;
};

export default function Nav({ handleOpen }: props) {
  return (
    <header className="bg-pink-700 text-white fixed w-full z-40 flex justify-between px-2 sm:px-8 md:px-14 lg:px-22 items-center h-[12vh]">
      <p className="text-2xl font-semibold">Landing Page</p>
      <nav className="hidden lg:flex gap-12">
        <span className="cursor-pointer hover:text-indigo-600">
          <Link smooth={true} duration={300} offset={-200} to="hero">
            Home
          </Link>
        </span>
        <span className="cursor-pointer hover:text-indigo-600">
          <Link smooth={true} duration={300} offset={-150} to="about">
            About
          </Link>
        </span>
        <span className="cursor-pointer hover:text-indigo-600">
          <Link smooth={true} duration={300} offset={-135} to="features">
            Features
          </Link>
        </span>
        <span className="cursor-pointer hover:text-indigo-600">
          <Link smooth={true} duration={300} offset={-125} to="testimonials">
            Testimonials
          </Link>
        </span>
        <span className="cursor-pointer hover:text-indigo-600">
          <Link smooth={true} duration={300} offset={-155} to="contact">
            Contact
          </Link>
        </span>
      </nav>
      <div className="flex gap-4">
        <span className="bg-green-600 flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-indigo-600">
          <BsCart2 />
          <button className="cursor-pointer">Buy Now</button>
        </span>
        <button className="inline-block lg:hidden">
          <BiMenuAltRight
            className="w-10 h-10 cursor-pointer"
            onClick={handleOpen}
          />
        </button>
      </div>
    </header>
  );
}
