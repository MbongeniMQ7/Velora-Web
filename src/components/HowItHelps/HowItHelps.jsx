import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const HowItHelps = () => {
  return (
    <section>
      <div className="container py-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon1}
                  heading="Real-time Location Tracking"
                  text="Continuously monitors and displays the user's live location, allowing family or emergency contacts to stay updated."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon2}
                  heading="Instant Safety Alerts"
                  text="Sends immediate alerts to emergency contacts if the user is in danger, providing location details and other critical information."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon3}
                  heading="Personalized Emergency Contacts"
                  text="Allows users to select and customize contacts who will receive notifications and updates during emergencies."
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col xl:justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
            Why Velora Stands Out
            </h1>
            <p className=" text-black-400 mt-4">
            Velora combines cutting-edge technology with a focus on safety, empowering communities and promoting transparency. Discover the standout features designed with your needs in mind.
            </p>
            <p className="text-sm text-blue-900 mt-4">
            Advanced Safety Alerts,
Real-Time Impact Tracking,
Community Engagement Tools{" "}
              <a href="#" className="text-primary">
                UKHUSELEKILE
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              ENSURE YOUR SAFETY
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
