import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavContext } from "../Context/NavContext";
import Header from "./header/Header"
import "./investissement.scss"
import Presentation from "./presentation/Presentation";
import Slider from "./slider/Slider"


export default function Investissement () {

    const [ logoSelect, setLogoSelect ] = useContext(NavContext);


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
        setLogoSelect(0);
      });
    return (
        <motion.div
        exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
        >
            <Helmet>
        <title>Demetis - Investissement</title>
        <meta name="description" content="Demetis conseil Vous propose de suivre les investissement effectué avec ses clients" />
    </Helmet>
            <Header/>
            <Slider/>
            <Presentation/>
        </motion.div>
    )
}