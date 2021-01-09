import React from "react";
import "../style/Contact.scss";
import Content from "./Content";
import { motion } from "framer-motion";
import Form from "./Form";
export default function Contact() {
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
          <Form/>
        </div>
      </div>
    </motion.div>
  );
}
