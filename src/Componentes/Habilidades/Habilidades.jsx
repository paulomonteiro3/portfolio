import React from "react";
import styles from "./Habilidades.module.css";
import Html from "../../assets/html5.svg";
import Css from "../../assets/css3.svg";
import JavaScript from "../../assets/javascript.svg"
import ReactSVG from "../../assets/react.js.svg"
import Figma from "../../assets/figma.svg"

const Habilidades = () => {
  return (
    <section className="container">
      <div className={`${styles.habDisplay}`}>
        <h1 className="color-p4">Habilidades</h1>
        <div className={`${styles.habContainer}`}>
          <div className={`${styles.habilidadesItem}`}>
            <img src={Html} width={`50px`} height={`50px`} />
            <p className="color-p5">HTML5</p>
          </div>
          <div className={`${styles.habilidadesItem}`}>
            <img src={Css} width={`50px`} height={`50px`} />
            <p className="color-p5">CSS3</p>
          </div>
          <div className={`${styles.habilidadesItem}`}>
            <img src={JavaScript} width={`50px`} height={`50px`} />
            <p className="color-p5">JavaScript</p>
          </div>
          <div className={`${styles.habilidadesItem}`}>
            <img src={ReactSVG} width={`50px`} height={`50px`} />
            <p className="color-p5">ReactJS</p>
          </div>
          <div className={`${styles.habilidadesItem}`}>
            <img src={Figma} width={`50px`} height={`50px`} />
            <p className="color-p5">Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
