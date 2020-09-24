import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Scroll Animations
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

//Styled Components

//Icons
import { Instagram, Facebook, Vimeo } from "../../assets/social-icons";

//Custom Hooks
/* import useElementPosition from "../hooks/useElementPosition"; */
const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  background-color: #191919;
  display: flex;
  justify-content: center;

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
      margin: 0 auto;
      background: #191919;
      max-width: 100% !important;
      color: white;
    `}
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
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

const FooterContent = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  flex: 1;
  align-self: center;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `};
`;
const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
`;

const FooterSocial = styled.div`
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
      path {
        fill: white;
      }
    }
  }
`;
const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const menuHover = (x) => {
    onCursor("locked");
    setHamburgerPosition({ x: x });
  };

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <Container fluid>
        <Flex>
          <FooterContent>
            <p>697 30 67 764</p>
            <p>tzamalisn@gmx.de</p>
          </FooterContent>

          <FooterSocial>
            <a
              /*   onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
         */
              href="/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              /*   onMouseEnter={() => menuHover(facebookPosition.x)}
              onMouseLeave={onCursor} */

              href="/"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              /*  onMouseLeave={onCursor}
              ref={vimeoRef} */
              href="/"
              target="_blank"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
