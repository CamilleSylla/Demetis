import React, { useContext, useEffect } from "react";
import "../style/Contact.scss";
import Content from "./Content";
import { motion } from "framer-motion";
import Form from "./Form";
import { ServicesContext } from "../Context/ServicesContext";
export default function Contact() {

  const [show, setShow] = useContext(ServicesContext);

  const pageVariant = {
    ini: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
    in: {
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setShow({...show, component: 0})
  })
  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div id="contact">
        <div id="contact_views">
          <Content />
          <Form />
        </div>
      </div>
    </motion.div>
  );
}
