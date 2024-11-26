import React from "react";
import styles from "./Introducao.module.css";
import ProjetoPrincipal from "../../assets/foto-projeto1.png";

const Introducao = () => {
  return (
    <section className={`${styles.apresentacao} container`}>
      <div className="color-p6">
        <div className={`${styles.entry}`}>
          <h1 className="font-1-xl">
            Olá! me chamo
            <br />
            <span>Paulo Monteiro</span>.
          </h1>
        </div>
        <p className="font-1-m color-p4">Desenvolvedor Front End.</p>
        <div className={`${styles.BtnsContainer}`}>
          <button className={`${styles.btnCV} font-1-s`}>Download CV</button>
          <button className={`${styles.btnContato} font-1-s`}>
            Entrar em contato
          </button>
        </div>
        <div className={`${styles.sobre}`}>
        <h1 className="font-1-xl color-p4">Sobre mim</h1>
        <p className="color-p5">
          Desenvolvedor Front End com experiência em
          <span className={`${styles.js}`}> JavaScript</span>,{" "}
          <span className={`${styles.react}`}>React</span>,{" "}
          <span className={`${styles.ui}`}>UI Design</span>,{" "}
          <span className={`${styles.html}`}>HTML</span>,{" "}
          <span className={`${styles.css}`}>CSS</span>. Sou um desenvolvedor
          front-end apaixonado por criar experiências digitais agradáveis e
          intuitivas. Sempre em busca de desafios, minha missão é desenvolver
          interfaces que não só atendem, mas encantam os usuários.
        </p>
      </div>
      </div>

      <div className={`${styles.sobre2}`}>
        <h1 className="font-1-xl color-p4">Sobre mim</h1>
        <p className="color-p5">
          Desenvolvedor Front End com experiência em
          <span className={`${styles.js}`}> JavaScript</span>,{" "}
          <span className={`${styles.react}`}>React</span>,{" "}
          <span className={`${styles.ui}`}>UI Design</span>,{" "}
          <span className={`${styles.html}`}>HTML</span>,{" "}
          <span className={`${styles.css}`}>CSS</span>. Sou um desenvolvedor
          front-end apaixonado por criar experiências digitais agradáveis e
          intuitivas. Sempre em busca de desafios, minha missão é desenvolver
          interfaces que não só atendem, mas encantam os usuários.
        </p>
      </div>

      <div className={`${styles.projetoPrincipal}`}>
        <a href="https://dogsreact.vercel.app">
          <img
            src={ProjetoPrincipal}
            alt="Projeto Principal"
            width={"700px"}
            height={"500px"}
          />
        </a>
      </div>
    </section>
  );
};

export default Introducao;
