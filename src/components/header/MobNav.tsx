"use client";
import { AiOutlineClose } from "react-icons/ai";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobNav({ isOpen, onClose }: props) {
  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 transform transition-all duration-300 z-[102] bg-black ${
          isOpen ? "opacity-50" : "opacity-0"
        }  w-full h-screen`}
      ></div>
      <div
        className={`text-white fixed inset-0 flex flex-col justify-center h-full bg-indigo-600 w-[80%] sm:w-[60%] z-[1010] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span
          className="absolute top-4 right-4 z-[1200] cursor-pointer"
          onClick={onClose}
        >
          <AiOutlineClose className="text-white h-8 w-8" />
        </span>
        <p className="border-b cursor-pointer py-4 w-1/2 ml-16">Home</p>
        <p className="border-b cursor-pointer py-4 w-1/2 ml-16">About</p>
        <p className="border-b cursor-pointer py-4 w-1/2 ml-16">Features</p>
        <p className="border-b cursor-pointer py-4 w-1/2 ml-16">Testimonials</p>
        <p className="border-b cursor-pointer py-4 w-1/2 ml-16">Contact</p>
      </div>
    </div>
  );
}
