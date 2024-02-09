import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg"
import image5 from "./5.jpg"
import image6 from "./6.jpg"


export const Parallax3 = () => {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image4}` }} />
        <h1>Teste de criação</h1>
        <div className="botaoConfig">
        <a href="#"><button className="botao1">Teste</button></a>
        <a href="#"><button className="botao1">Teste</button></a>
        <a href="#"><button className="botao1">Teste</button></a>
        </div>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image5}` }} />
        <h2>Com Gsap</h2>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image6}` }} />
        <h2>É bem gostosinho de fazer</h2>
      </section>
    </>
  );
};
