import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import es6 from "./es6.png";
import react from "./react.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./logo.svg";
import { useEffect, useRef } from "react";

export const Parallax2 = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav>''
        <a href="#"> Inicio </a>
        <a href="#"> Habilidades </a>
        <a href="#"> Contato </a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2>Essa é uma das minhas criações</h2>
        <a className="linkTitulo" href="https://github.com/ThatsTom"><h3>@Tomholanda Dev.Web</h3></a>
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <img src={html} />
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src={css} />
          <h2>CSS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="description panel blue">
          <img src={es6} />
          <h2>ES6</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src={react} />
          <h2>React JS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
      </div>
      <section className="footer">
        <h2>Contato</h2>
        <form>
        <h3>em desenvolvimento</h3>
        </form>
      </section>
    </>
  );
};
