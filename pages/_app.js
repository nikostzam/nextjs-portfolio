import "../styles/main.scss";
import Header from "../pages/components/Header";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps, router }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
