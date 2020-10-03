import React from "react";
import { motion } from "framer-motion";
import {
  Banner,
  Wrapper,
  BannerName,
  BannerTitle,
} from "../../styles/homeStyles";

import dynamic from "next/dynamic";

const HomeBanner = () => {
  const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
    ssr: false,
  });

  return (
    <Banner>
      <Wrapper>
        <BannerName
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "900px" }}
          transition={{ duration: 1.3, delay: 2 }}
        >
          <motion.h1>
            <ReactTypingEffect
              text={["design .", "code </>"]}
              staticText="I"
              speed={100}
              typingDelay={2500}
              eraseDelay={2000}
            />
          </motion.h1>
        </BannerName>
        <BannerTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
        >
          <h5>
            Front End Developer <span>&</span> UI/UX Designer
          </h5>
        </BannerTitle>
      </Wrapper>
    </Banner>
  );
};

export default HomeBanner;
