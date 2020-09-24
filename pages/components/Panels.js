import React from "react";
import { motion } from "framer-motion";

const Panels = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: [0, 1000, 0], y: [0, 0, 1000] }}
      transition={{ times: [0, 0.5, 1], duration: 2.2 }}
      className="panels"
    >
      <motion.panel></motion.panel>
      <motion.panel></motion.panel>
    </motion.div>
  );
};

export default Panels;
