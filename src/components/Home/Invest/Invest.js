import "../../style/Investment.scss";
import maison from "../../../assets/Img/reduce.webp";
import bourse from "../../../assets/Img/bourse.webp";
import smile from "../../../assets/Img/smile.webp";
import { Link } from "react-router-dom";
import { NavContext } from "../../Context/NavContext";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Invest() {
  const [logoSelect, setLogoSelect] = useContext(NavContext);
    const start = useRef()


  const Images = () => {
    return (
      <div ref={start} id="images_wrapper">
        <img id="image_top" src={bourse} />
        <img id="image_middle" src={maison} />
        <img id="image_bottom" src={smile} />
      </div>
    );
  };

  const Content = () => {
    return (
      <article id="content">
        <div>
          <h1 className="page_title">Investissement locatif clé en main</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            auctor posuere augue vel vehicula. Nam non rutrum sem. Sed et tempor
            nibh. Aenean aliquam purus vitae lorem tincidunt, et varius lorem
            scelerisque.
          </p>
          <Link
            className="button_gold"
            to="/services"
            onClick={() => setLogoSelect(0)}
          >
            Les investissements
          </Link>
        </div>
      </article>
    );
  };

  useEffect(() => {
      console.log(start.current.children)
      gsap.registerPlugin(ScrollTrigger)

    gsap.from( start.current.children , {
        x: "-20%",
        opacity: 0,
        duration: 1,
        stagger: .25,
        scrollTrigger : {  
        trigger: start.current,
          start: "top+=25% bottom",
          end: "top+=90% bottom",
          toggleActions: "play play reverse reverse",
          markers: true
            },
        });

  }, [])

  return (
    <section  id="invest_wrapper">
      <Images />
      <Content />
    </section>
  );
}
