import React, { useState } from "react";
import Agreas from "../../../assets/Partners/agreas.svg";
import Bnp from "../../../assets/Partners/bnp.svg";
import Aviva from "../../../assets/Partners/aviva.svg";
import Generali from "../../../assets/Partners/genrali.svg";
import Mma from "../../../assets/Partners/mma.svg";
import April from "../../../assets/Partners/April.png";
import "../../style/Slider.scss";
import { motion } from "framer-motion";

export default function Slider() {
  const [slide, setSlide] = useState({
    min: 0,
    max: 2,
  });
  const Content = [
    {
      img: Agreas,
      alt: "Ageas",
      link: "https://www.ageas.fr/",
    },
    {
      img: Bnp,
      alt: "Group BNP Paribas",
      link: "https://group.bnpparibas/",
    },
    {
      img: Aviva,
      alt: "Aviva",
      link: "https://www.aviva.fr/",
    },
    {
      img: Generali,
      alt: "Generali",
      link: "https://www.generali.fr/",
    },
    {
      img: Mma,
      alt: "Mma",
      link: "https://www.mma.fr/",
    },
    {
      img: April,
      alt: "April",
      link: "https://www.april.fr/",
    },
  ];
  const pageVariant = {
    ini: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: "-50vh",
      opacity: 0,
    },
    in: {
      x: "50vh",
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 1,
  };
  function SliderLogo() {
    return Content.map((details, i) => {
      while (i >= slide.min && i <= slide.max) {
        return (
          <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            className="slider_width"
            key={i}
          >
            {" "}
            <div id="slider_element">
              <img src={details.img} alt={details.alt} />
            </div>
          </motion.div>
        );
      }
    });
  }
  function AutoPlay() {
    if (slide.max < Content.length - 1) {
      setSlide({
        ...slide,
        max: slide.max + 3,
        min: slide.min + 3,
      });
    } else {
      setSlide({
        ...slide,
        max: 2,
        min: 0,
      });
    }
  }
  setTimeout(AutoPlay, 6000);

  return <div id="slider">{SliderLogo()}</div>;
}
