import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/actions/globalActions";

//Icons
import {
  Instagram,
  Facebook,
  LinkedIn,
  Github,
} from "../../assets/social-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delay: 0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ height: 0, skewY: 3 }}
      animate={{ height: "100vh", skewY: 0 }}
      exit={{ height: 0 }}
      transition={{ duration: 1.1 }}
      className="hamburger-menu"
    >
      <motion.div
        initial={{ height: 0, skewY: 3 }}
        animate={{ height: "100vh", skewY: 1 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.8 }}
        className="menu-secondary-background-color"
      ></motion.div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="menu-container">
          <div className="menu-wrapper">
            <div className="menu-links">
              <nav>
                <motion.ul variants={container} initial="hidden" animate="show">
                  <motion.li
                    variants={item}
                    onClick={() => dispatch(closeMenu())}
                  >
                    <Link href="/projectOne">
                      <motion.a>Project 1</motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                    onClick={() => dispatch(closeMenu())}
                  >
                    <Link href="projects/project-2">
                      <motion.a>Project 2</motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                    onClick={() => dispatch(closeMenu())}
                  >
                    <Link href="projects/project-3">
                      <motion.a>Project 3</motion.a>
                    </Link>
                  </motion.li>
                </motion.ul>
              </nav>
              <motion.div className="info">
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  Contact
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <p>Email: tzamalisn@gmx.de</p>
                  <p>Mobile: 6973067764</p>
                </motion.p>
              </motion.div>
              <div className="locations">
                Social :
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                >
                  <Link href="https://github.com/nikostzam">
                    <a target="_blank">
                      <Github />
                    </a>
                  </Link>
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                >
                  <Link href="https://facebook.com/nikos.czt">
                    <a target="_blank">
                      <Facebook />
                    </a>
                  </Link>
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                >
                  <Link href="https://www.linkedin.com/in/nikolaostzamalis/">
                    <a target="_blank">
                      <LinkedIn />
                    </a>
                  </Link>
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
