import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//HOME BANNER SECTION
export const Banner = styled(motion.div)`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Wrapper = styled(motion.div)`
  position: relative;
  right: 200px;
  top: 150px;
  position: relative;
  @media (max-width: 1260px) {
    right: 140px;
  }
`;

export const BannerName = styled(motion.div)`
  font-family: "Archivo Black", sans-serif;
  letter-spacing: -5px;
  font-size: 70px;
  font-weight: 900;
  color: white;
  background-color: #191919;
  width: 100%;
  position: absolute;
  bottom: 40px;
  @media (max-width: 1260px) {
    font-size: 60px;
  }
`;

export const BannerTitle = styled(motion.div)`
  font-size: 35px;
  letter-spacing: 3px;
  color: #191919;
  font-weight: 400;
  margin-top: 10px;
  @media (max-width: 1260px) {
    font-size: 32px;
    letter-spacing: 2px;
  }
`;

//HOME ABOUT SECTION
export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;
  background-color: #191919;
  height: 90vh;
  @media (max-width: 1260px) {
    height: 100vh;
  }
`;

export const About = styled.div`
  width: 100%;
  margin: 120px 0;
  cursor: context-menu;

  h2 {
    width: 70%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: white;
    margin-bottom: 20px;

    span {
      position: relative;
      font-weight: bold;
    }
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: white;
    position: relative;

    span {
      font-weight: bold;
    }
  }
`;
export const Services = styled.div`
  color: #f6f6f6;
  margin: 120px 0;
`;

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #519e67;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  cursor: pointer;
  @media (max-width: 1260px) {
    font-size: 1rem;
  }
  &:hover {
    color: #f6f6f6;
  }
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #519e67;
    transition: all 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: white;
    display: block;
    font-weight: 300;
  }
`;
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

export const Flex = styled(motion.div)`
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

//HOME PROJECT SECTION
export const ProjectContainer = styled(motion.div)`
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

export const ProjectFlex = styled.div`
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
      width: 135px;
      height: 100px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 135px;
        path {
          fill: #191919;
        }
      }
    }
  }
`;

export const FeaturedVideo = styled(motion.div)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  background-color: black;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export const FeaturedProjects = styled(motion.div)`
  margin-top: 200px;
  button {
    background: #191919;
    color: #f6f6f6;
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
