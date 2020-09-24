import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const Menu = ({ toggleMenu, setToggleMenu }) => {
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
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/">
                      <motion.a whileHover={{ skewX: -4 }}>Home</motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/about">
                      <motion.a whileHover={{ skewX: -4 }}>About</motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/contact">
                      <motion.a whileHover={{ skewX: -4 }}>Projects</motion.a>
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
                  Our Promise
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </motion.p>
              </motion.div>
              <div className="locations">
                Social :<span>Facebook</span>
                <span>LinkedIn</span>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    /*  <>
             <motion.div
                 initial={{ height: 0 }}
                 animate={{ height: '100vh' }}
                 exit={{ height: 0 }}
                 transition={{ duration: 0.7 }}
                 className='navigation-layout'>
 
             </motion.div>
             <motion.div
                 initial={{ height: 0 }}
                 animate={{ height: '100vh' }}
                 exit={{ height: 0 }}
                 transition={{ duration: .9 }}
                 className="navigation">
 
             </motion.div>
         </> */
  );
};

export default Menu;
