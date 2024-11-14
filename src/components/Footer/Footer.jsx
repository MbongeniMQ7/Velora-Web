import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        
        <div className="space-y-4">
          <img src={Logo} alt="" className="w-40" />
          <p className="text-gray-400 xl:max-w-[400px]">
            Safety is the most important thing one could ever want
          </p>
        </div>
       
        <div className="flex space-x-6 text-3xl">
          <FaFacebook className="hover:text-primary duration-200" />
          <FaInstagram className="hover:text-primary duration-200" />
          <FaLinkedin className="hover:text-primary duration-200" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
