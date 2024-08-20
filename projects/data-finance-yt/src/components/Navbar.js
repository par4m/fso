import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#babbf1]">
      <h1 className="w-full text-3xl font-bold text-[#f1b6e4]">
        {" "}
        Info Transcendence{" "}
      </h1>
      <ul class="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <button onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      <div
        className={
          !nav
            ? "bg-[#2e3243] fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#C8C093] m-4">REACT.</h1> */}

        <h1 className="w-full text-3xl font-bold text-[#f1b6e4] mx-auto px-4 py-8">
          {" "}
          REACT.{" "}
        </h1>
        <ul className=" uppercase mt-5 pt-10 ">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4 border-b border-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
