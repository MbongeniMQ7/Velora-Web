import React from "react";
import Icon1 from "../../assets/uses/image.png";
import Icon2 from "../../assets/uses/copy.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-4xl font-bold text-darkBlue text-center"
        >
          Why you can trust this tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon1} alt="" className="mx-auto md:mx-0" />
            <p className=" text-3xl font-semibold">Why trust Velora’s message</p>
            <p className="">
             We prioritize your safety, accuracy, and privacy. Our alerts are backed by real-time location data, so your emergency contacts receive up-to-date and reliable information when you need it most. We’ve designed Velora with strong security measures to protect your data and keep it confidential, ensuring that your information is only shared with the contacts you choose in an emergency.
            </p>
            <p className="text-sm text-gray-400">
            Ensure your safety with the Velora app, equipped to enhance your initial response in any situation. <span className="text-primary"> </span>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon2} alt="" className="mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
            With advanced security, easy-to-use features, and constant innovation to improve user experience, we’re committed to providing unmatched support and peace of mind. Velora isn’t just an app—it’s your trusted companion in any situation.
            </p>
            <p className="text-sm text-gray-400">
            Ensure your safety with the Velora app, equipped to enhance your initial response in any situation. <span className="text-primary"> </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
