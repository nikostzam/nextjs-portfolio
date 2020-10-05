import React from "react";
import HomeAbout from "./components/HomeAbout";
import HomeBanner from "./components/HomeBanner";
import Panels from "./components/Panels";
import { motion } from "framer-motion";
import HomeProject from "./components/HomeProject";

const Home = () => {
  return (
    <>
      <motion.div>
        <Panels />
      </motion.div>
      <HomeBanner />
      <HomeAbout />
      <HomeProject />
    </>
  );
};

export default Home;
