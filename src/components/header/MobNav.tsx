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
          <li className="cursor-pointer border-b py-4 w-1/2">Home</li>
          <li className="cursor-pointer border-b py-4 w-1/2">About</li>
          <li className="cursor-pointer border-b py-4 w-1/2">Feature</li>
          <li className="cursor-pointer border-b py-4 w-1/2">Testimonials</li>
          <li className="cursor-pointer border-b py-4 w-1/2">Contact</li>
        </ul>
      </div>
    </div>
  );
}
