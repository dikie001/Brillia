import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full backdrop-blur-xl text-white flex justify-between items-center px-4 py-3 shadow-md fixed top-0 left-0 z-50">
      {/* {openMenu && <MobileNav/>} */}
      <MobileNav open={openMenu} onClose={()=>setOpenMenu(false)} />
      {/* Logo */}
      <h1 className="text-3xl  lg:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight ">
        Brillia
      </h1>
      {/* Menu Button */}
      <button className="p-2 rounded-md hover:bg-black/10">
        <Menu
          onClick={() => setOpenMenu(!openMenu)}
          className="h-6 w-6 text-indigo-600"
        />
      </button>
    </nav>
  );
};

export default Navbar;
