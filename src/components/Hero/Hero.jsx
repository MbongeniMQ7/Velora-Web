import React from "react";
import HeroImage from "../../assets/uses/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-5xl font-bold text-darkBlue"
            >
              Velora <br /> Stay Safe, Stay Empowered
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="text-lg text-gray-400 mt-4"
            >
              Velora enhances the safety and empowerment of women and children by offering real-time location tracking, instant safety alerts, and personalized emergency contacts. Take control of your safety and well-being with our easy-to-use, comprehensive tools designed to prevent gender-based violence.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              whileInView={"animate"}
              initial="initial"
              className="bg-purple-500 text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200"
            >
              <button>Key Features</button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center"
        >
          <img src={HeroImage} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
