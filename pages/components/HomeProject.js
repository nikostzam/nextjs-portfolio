import React, { useState, useEffect } from "react";
import Link from "next/link";
//Framer Motion
import { motion, useAnimation } from "framer-motion";
// Styled Components
import styled, { css } from "styled-components";
// Scroll Animations
import { useInView } from "react-intersection-observer";

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
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`;
export const Content = styled(motion.h2)`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
`;

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 115px;
        path {
          fill: #519e67;
        }
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  background-color: black;
`;

export const FeaturedProjects = styled(motion.div)`
  margin-top: 200px;
  button {
    background: #519e67;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    transition: 0.3s;
    transform-origin: center;
    &:hover {
      background: #4a7957;
      cursor: pointer;
    }

    span {
      margin-right: 108px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`;

const HomeFeatured = ({ toggleMenu, setToggleMenu }) => {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Link href="/">
          <a style={{ textDecoration: "none", color: "#191919" }}>
            <FeaturedContent
              onHoverStart={() => setHovered(!hovered)}
              onHoverEnd={() => setHovered(!hovered)}
            >
              <Flex spaceBetween>
                <h3>Featured Project</h3>
                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="meta"
                >
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </motion.div>
              </Flex>
              <h2 className="featured-title">
                NOT <br /> HUMBLE
                <span className="arrow">
                  <motion.svg
                    animate={{ x: hovered ? 48 : 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#FFF"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </span>
              </h2>
            </FeaturedContent>
            <FeaturedVideo>
              {/*  <video
              loop
              autoPlay
              src={require("../../assets/video/featured-video.mp4")}
            ></video> */}
            </FeaturedVideo>
          </a>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <Link href="/projects">
              <button>
                <span>All Projects</span>
              </button>
            </Link>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  );
};

export default HomeFeatured;
