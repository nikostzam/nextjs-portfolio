import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  margin-top: 128px;
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

//DESCRIPTION
export const DecsriptionContainer = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  margin-top: 200px;
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

export const InnerWrapper = styled.div`
  width: 60%;
  padding: 32px 0;
  height: 100%;
`;
export const ProjectInfo = styled.div`
  p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
`;
export const ProjectDetails = styled.div`
  margin: 46px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const FlexDetails = styled.div`
  &:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    svg {
      margin-left: 10px;
    }
  }
  &:nth-child(6) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    svg {
      margin-left: 30px;
    }
  }
  p {
    padding: 5px 0;
    margin-bottom: 16px;
    font-size: 14px;
  }
`;

//Footer
export const FooterWrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 250px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1565px) {
    flex-direction: column;
    width: 100%;
    padding: 32px 0;
  }
  .left-container {
    min-width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1565px) {
      margin-bottom: 150px;
    }
    &:hover {
      .image {
        opacity: 1;
      }
    }
    a {
      text-decoration: none;
      z-index: 1;
      color: #191919;
    }
    .project-title {
      h2 {
        font-size: 60px;
        font-weight: 900;
        min-width: 400px;
      }
      svg {
        transform: rotate(180deg);
        width: 150px;
        @media (max-width: 992px) {
          width: 90px;
        }

        path {
          fill: #191919;
        }
      }
    }
    .image {
      width: 400px;
      height: 250px;
      position: absolute;
      bottom: -40px;
      left: 450px;
      background-color: #191919;
      opacity: 0;
      transition: 0.4s ease-in-out;
      cursor: pointer;

      @media (max-width: 1565px) {
        width: 350px;
        height: 230px;
        position: absolute;
        right: 70px;
        top: 0;
      }
      img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
      }
    }
  }
  .right-container {
    min-width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:hover {
      .image {
        opacity: 1;
      }
    }
    a {
      text-decoration: none;
      z-index: 1;
      color: #191919;
    }
    .project-title {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 60px;
        font-weight: 900;
        min-width: 400px;
        text-align: right;
      }
      .icon-container {
        display: flex;
        justify-content: flex-end;
        svg {
          width: 150px;
          @media (max-width: 992px) {
            width: 90px;
          }

          path {
            fill: #191919;
          }
        }
      }
    }
    .image {
      width: 400px;
      height: 250px;
      position: absolute;
      bottom: -40px;
      right: 450px;
      background-color: #191919;
      opacity: 0;
      transition: 0.4s ease-in-out;
      cursor: pointer;
      @media (max-width: 1565px) {
        width: 350px;
        height: 230px;
        position: absolute;
        left: 400px;
        bottom: 0;
      }

      img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
      }
    }
  }
`;
