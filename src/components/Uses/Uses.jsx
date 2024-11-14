import React from "react";
import Img1 from "../../assets/uses/1.jpg";
import Img2 from "../../assets/uses/v.jpg";
import Img3 from "../../assets/uses/m.jpg";
import Img4 from "../../assets/uses/21.jpg";
import Img5 from "../../assets/uses/n.png"

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container my-14">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="order-last md:order-first
           flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              Meet the Team
            </h1>
            <p className=" text-gray-400 mt-4">
              These are the brilliant minds working on Velora making sure that citizen have a best friend and a comapnion in times of worry and dispair
            </p>
            <p className="text-sm text-gray-400 mt-4">
              The best way to predict the future is to start creating it now{" "}
              <a href="#" className="text-primary">
                 'Abraham Lincolin'
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              TRY VELORA
            </button>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img1} alt="" className="w-full rounded-3xl " />
            <p className="text-black-400 mt-4">Donnell Naidoo</p>
            Full Stack Developer
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img2} alt="" className="w-full rounded-3xl" />
            <p className="text-black-400 mt-4">Esethu Vlakazi</p>
            Front-End Developer
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            
            <img src={Img4} alt="" className="w-full rounded-3xl " />
            <p className="text-black-400 mt-4">Tankiso Siyabonga</p>
            Business Analyst
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            
            <img src={Img5} alt="" className="w-full rounded-3xl" />
            <p className="text-black-400 mt-4">Nombali Mafa</p>
            Full-Stack Developer
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img3} alt="" className="w-full rounded-3xl" />
            <p className="text-black-400 mt-4">Mbongeni Qwabe </p>
            Front-End Developer
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
