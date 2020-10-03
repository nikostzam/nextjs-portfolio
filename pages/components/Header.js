import React, { useState } from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import { AnimatePresence, transform } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../../store/actions/globalActions";
import {
  HeaderContainer,
  NavWrapper,
  MenuWrapper,
} from "../../styles/headerStyles";
import Navigation from "../components/Navigation";

const Header = () => {
  const toggleMenu = useSelector((state) => state.global.toggleMenu);
  const dispatch = useDispatch();

  const setMenu = (toggleMenu) => {
    if (toggleMenu) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  return (
    <>
      <HeaderContainer>
        <NavWrapper>
          <Link href='/'>
            <h2 onClick={() => dispatch(closeMenu())}>
              Nikos<span>Tzamalis.</span>
            </h2>
          </Link>
          <MenuWrapper onClick={() => setMenu(toggleMenu)}>
            <span
              style={{
                transform: toggleMenu ? "rotate(-45deg)" : "none",
                top: toggleMenu ? "12px" : "0",
                backgroundColor: toggleMenu ? "#f6f6f6" : "",
              }}
            ></span>
            <span
              style={{
                transform: toggleMenu ? "rotate(45deg)" : "none",
                backgroundColor: toggleMenu ? "#f6f6f6" : "",
              }}
            ></span>
          </MenuWrapper>
        </NavWrapper>
      </HeaderContainer>
      <AnimatePresence exitBeforeEnter>
        {toggleMenu && <Navigation />}
      </AnimatePresence>
    </>
  );
};

export default Header;
