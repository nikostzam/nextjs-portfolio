import React from "react";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <div className="banner">
      <motion.div className="wrapper">
        <motion.div initial="hidden" animate="show" className="banner-name">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            NIKOS TZAMALIS
          </motion.h1>
        </motion.div>
        <motion.div
          className="banner-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <h5>
            Front End Developer <span>&</span> UI/UX Designer
          </h5>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
