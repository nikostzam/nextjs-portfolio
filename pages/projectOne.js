import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ProjectContainer,
  ProjectFlex,
  HomeContentSection,
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
  DecsriptionContainer,
  InnerWrapper,
  ProjectInfo,
  ProjectDetails,
  FlexDetails,
  FooterWrapper,
} from "../styles/projectStyles";
import Link from "next/link";
import { Github, VisitLink, Arrow } from "../assets/social-icons";
import Panels from "./components/Panels";

const ProjectOne = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <ProjectContainer
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <Link href="/projectOne">
          <a style={{ textDecoration: "none", color: "#191919" }}>
            <FeaturedContent
              onHoverStart={() => setHovered(!hovered)}
              onHoverEnd={() => setHovered(!hovered)}
            >
              <ProjectFlex spaceBetween whileHover={{ scale: 1.1 }}>
                <h3>Featured Project</h3>
                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="meta"
                >
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </motion.div>
              </ProjectFlex>
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
            <FeaturedVideo whileHover={{ scaleX: 1.1 }}>
              <motion.img
                src="/images/featured.jpg"
                alt="featured-project-image"
              />
            </FeaturedVideo>
          </a>
        </Link>
      </ProjectContainer>
      <DecsriptionContainer
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <InnerWrapper>
          <ProjectInfo>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </p>
          </ProjectInfo>
          <ProjectDetails>
            <FlexDetails>
              <h4>Using</h4>
              <p>ReactJS</p>
            </FlexDetails>
            <FlexDetails>
              <h4>Using</h4>
              <p>ReactJS</p>
            </FlexDetails>
            <FlexDetails>
              <h4>Visit website</h4>
              <VisitLink />
            </FlexDetails>
            <FlexDetails>
              <h4>Using</h4>
              <p>ReactJS</p>
            </FlexDetails>
            <FlexDetails>
              <h4>Using</h4>
              <p>ReactJS</p>
            </FlexDetails>
            <FlexDetails>
              <h4>View code</h4>
              <Github />
            </FlexDetails>
          </ProjectDetails>
        </InnerWrapper>
      </DecsriptionContainer>
      <ProjectContainer
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <FeaturedContent></FeaturedContent>
        <FeaturedVideo>
          <motion.img src="/images/featured.jpg" alt="featured-project-image" />
        </FeaturedVideo>
      </ProjectContainer>
      <ProjectContainer
        fluid
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <FooterWrapper>
          <div className="left-container">
            <Link href="/">
              <a>
                <div className="project-title">
                  <h2>PROJECT 2</h2>
                  <Arrow />
                </div>
              </a>
            </Link>

            <div className="image">
              <img src="/images/featured.jpg" />
            </div>
          </div>
          <div className="right-container">
            <div className="image">
              <img src="/images/featured.jpg" />
            </div>
            <Link href="/">
              <a>
                <div className="project-title">
                  <h2>PROJECT 3</h2>
                  <div className="icon-container">
                    <Arrow />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </FooterWrapper>
      </ProjectContainer>
      <Panels />
    </>
  );
};

export default ProjectOne;
