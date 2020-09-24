import React, { useState } from "react";
import Menu from "../components/Menu";
import { AnimatePresence } from "framer-motion";

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <div className="header-container">
        <div className="nav-wrapper">
          <h2>
            Nikos<span>Tzamalis.</span>
          </h2>
          <div className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {toggleMenu && (
          <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
