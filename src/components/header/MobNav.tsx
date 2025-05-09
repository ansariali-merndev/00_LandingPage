import { Link } from "react-scroll";

type props = {
  openNav: boolean;
  handleClose: () => void;
};

export default function MobNav({ openNav, handleClose }: props) {
  return (
    <div className="lg:hidden">
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          openNav ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`bg-red-600 z-[1000] fixed inset-0 h-screen w-[80%] sm:w-[60%] text-white flex items-center pl-8 transition-transform duration-600 delay-300 ease-in-out ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span
          onClick={handleClose}
          className="text-white text-4xl absolute top-4 right-4 cursor-pointer"
        >
          &times;
        </span>
        <ul className="w-full">
          <li className="cursor-pointer border-b py-4 w-1/2">
            <Link
              smooth={true}
              duration={300}
              offset={-200}
              to="hero"
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer border-b py-4 w-1/2">
            <Link
              smooth={true}
              duration={300}
              offset={-150}
              to="about"
              onClick={handleClose}
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer border-b py-4 w-1/2">
            <Link
              smooth={true}
              duration={300}
              offset={-135}
              to="features"
              onClick={handleClose}
            >
              Features
            </Link>
          </li>
          <li className="cursor-pointer border-b py-4 w-1/2">
            <Link
              smooth={true}
              duration={300}
              offset={-125}
              to="testimonials"
              onClick={handleClose}
            >
              Testimonials
            </Link>
          </li>
          <li className="cursor-pointer border-b py-4 w-1/2">
            <Link
              smooth={true}
              duration={300}
              offset={-155}
              to="contact"
              onClick={handleClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
