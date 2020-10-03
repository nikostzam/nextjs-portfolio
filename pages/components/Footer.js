import React, { useEffect, useRef } from "react";
import Link from "next/link";

// Scroll Animations
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

//Styled Components
import {
  Container,
  Flex,
  FooterContent,
  FooterNav,
  FooterSocial,
} from "../../styles/footerStyles";

//Icons
import { Github, Facebook, LinkedIn } from "../../assets/social-icons";

//Custom Hooks
/* import useElementPosition from "../hooks/useElementPosition"; */

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
            <p>
              <span>Mobile:</span> 697 30 67 764
            </p>
            <p>
              <span>Email:</span> tzamalisn@gmx.de
            </p>
          </FooterContent>

          <FooterSocial>
            <p>Social: </p>
            <Link href="https://github.com/nikostzam">
              <a target="_blank">
                <Github />
              </a>
            </Link>
            <Link href="https://facebook.com/nikos.czt">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/nikolaostzamalis/">
              <a target="_blank">
                <LinkedIn />
              </a>
            </Link>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
