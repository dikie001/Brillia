import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

const greetings: string[] = [
  "Hello",
  "Hi",
  "Howdy",
  "Greetings",
  "Salutations",
  "Ahoy",
  "Hola",
  "What’s up",
  "Good day",
  "Bonjour",
];
interface User {
  name: string;
  hobby: string;
  subject: string;
}

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [user, setUser] = useState<User>({
    name: "",
    hobby: "",
    subject: "",
  });

  // Randomise greetings
  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    userDetails && setUser(JSON.parse(userDetails));
  }, []);

  const Randomize = () => {
    setRandomIndex(Math.floor(Math.random() * greetings.length) + 1);
  };
  useEffect(() => {
    if (seconds === 0) {
      Randomize();
      setSeconds(60);
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <nav className="w-full backdrop-blur-xl text-white flex justify-between items-center px-4 py-3 shadow-md fixed top-0 left-0 z-50">
      {/* {openMenu && <MobileNav/>} */}
      <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />
      {/* Logo */}
      <h1 className="text-3xl  lg:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight ">
        {`${greetings[randomIndex] || 'Wassup'} ${user.name.split(" ")[0]} `}
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
