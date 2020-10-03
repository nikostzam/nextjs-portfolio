import React, { useState } from "react";
import styled, { css } from "styled-components";

import Link from "next/link";
//Styled Components
/* import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavVideos,
  CloseNav,
} from "../styles/navigationStyles" */
/* import { FooterContent, FooterSocial } from "../styles/footerStyles" */
//Icons
import { Instagram, Facebook, LinkedIn } from "../../assets/social-icons";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const navRoutes = [
  {
    id: 0,
    title: "project 1",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "project 2",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "project 3",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "project 4",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "pipis",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
];

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  h2 {
    color: #f6f6f6;
  }
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #191919;
  color: #000;
  z-index: 100;
  overflow: hidden;
`;

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.background};
  }
`;
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${(props) => props.theme.background};
      margin: 8px;
    }
  }
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;

      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: #f6f6f6;
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: #f6f6f6;
        }
      }
    }
  }
`;
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: #f6f6f6;
  }
  svg path {
    fill: #f6f6f6;
  }
`;

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`;

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
`;

export const FooterContent = styled.div`
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}
`;

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 44px;
    height: 44px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Navigation = () => {
  const toggleMenu = useSelector((state) => state.global.toggleMenu);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to='/'>Projects</h2>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)}>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li key={route.id}>
                      <Link href='/'>
                        <motion.div
                          initial={{ x: -108 }}
                          className='link'
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className='arrow'>
                            <motion.svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 101 57'
                            >
                              <path
                                d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                                fill='#000'
                                fillRule='evenodd'
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>902.315.1279</p>
                  </FooterContent>
                  <FooterSocial>
                    <a href='/' target='_blank'>
                      <Instagram />
                    </a>
                    <a href='/' target='_blank'>
                      <Facebook />
                    </a>
                    <a href='/' target='_blank'>
                      <LinkedIn />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
