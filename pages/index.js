import React from "react";
import ParticleContainer from "./components/ParticleContainer";
import HomeAbout from "./components/HomeAbout";
import HomeBanner from "./components/HomeBanner";
import Panels from "./components/Panels";
import { motion } from "framer-motion";
import HomeProject from "./components/HomeProject";

const Home = () => {
  return (
    <motion.div exit="exit">
      <Panels />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="particles"
      >
        <ParticleContainer />
      </motion.div>
      <HomeBanner />
      <HomeAbout />
      <HomeProject />
    </motion.div>
  );
};

export default Home;
