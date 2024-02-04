import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header className="h-16 fixed w-full bg-white z-[999]"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.8, duration: 1}}
    >
      <nav className="w-full h-full max-w-[1230px] mx-auto px-5 flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
