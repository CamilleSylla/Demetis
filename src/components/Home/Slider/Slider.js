import React, { useEffect, useState } from "react";
import Agreas from "../../../assets/Partners/agreas.svg";
import Bnp from "../../../assets/Partners/bnp.svg";
import Aviva from "../../../assets/Partners/aviva.svg";
import Generali from "../../../assets/Partners/genrali.svg";
import Mma from "../../../assets/Partners/mma.svg";
import "../../style/Slider.scss";

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
  ];
  function SliderLogo() {
    return Content.map((details, i) => {
      while (i >= slide.min && i <= slide.max) {
        return (
          <div id="slider_element">
            <img src={details.img} alt={details.alt} />
          </div>
        );
      }
    });
  }
  function AutoPlay () {
      const Break = Content.length 
      console.log(Break, Break + 1);
      if (slide.max < Content.length + 1) {
        setSlide({
            ...slide,
            max: slide.max + 3,
            min: slide.min + 3,
          })
          console.log(slide)
      } else {
        setSlide({
            ...slide,
            max: 2,
            min: 0,
          })
          console.log(slide)
      }
      
  
  }
//   setTimeout(
//     AutoPlay,
//       3500
//     );

  return <div id="slider">{SliderLogo()}</div>;
}
