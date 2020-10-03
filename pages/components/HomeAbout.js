import React, { useState, useEffect } from "react";

// Styled Components
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
  Container,
  Flex,
} from "../../styles/homeStyles";

// Scroll Animations
import { useInView } from "react-intersection-observer";

//Framer Motion
import { motion, useAnimation } from "framer-motion";
//Home Component

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Front End Skills",
    results: [
      "ReactJS",
      "NextJS",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS / Sass ",
      "Wordpress",
    ],
  },
  {
    id: 1,
    title: "Design Skills",
    results: ["Adobe XD", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 2,
    title: "Having fun working with",
    results: [
      "Firebase",
      "Strapi",
      "MongoDB",
      "Styled Components",
      "Framer Motion",
      "React Thee Fiber / ThreeJS",
    ],
  },
  {
    id: 3,
    title: "Personal assets",
    results: ["Engaged", "Willing to learn", "Team player", "Friendly"],
  },
];

const HomeAbout = ({ onCursor }) => {
  //Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const [expanded, setExpanded] = useState(0);

  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeAboutSection>
      <Container>
        <Flex
          alignTop
          ref={aboutRef}
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
          <About>
            <h2>
              My Name is <span>Nikos Tzamalis</span>
              <br />
              and I am a <span>Front End Web Developer</span> &
              <span>UI/UX Designer </span>
              from Athens, Greece.
            </h2>
            <p>
              My goal is to bring you <span>well designed, animated, fast</span>{" "}
              and <span>SEO friendly</span> websites. Whether it’s working
              directly with you, an agency partner, or putting the finishing
              touches on something special. <br />
              Nice to have you on board !
            </p>
          </About>
          <Services>
            <h3>My Skillset</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};

export default HomeAbout;
