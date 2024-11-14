import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container py-5 flex items-center justify-between">
        
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        
        <ul className="hidden md:flex items-center gap-10 md:text-base text-sm">
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Safety</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            {" "}
            Get Velora
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
