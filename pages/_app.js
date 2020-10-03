import "../styles/main.scss";
import Header from "../pages/components/Header";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </Provider>
    </>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
