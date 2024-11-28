import React from "react";
import styles from "./ProjetosPrincipais.module.css";
import ProjetoLeft from "../../assets/foto-projeto2.png";
import ProjetoRight from "../../assets/foto-projeto3.png";

const ProjetosPrincipais = () => {
  return (
    <section className={`${styles.projetosContainer}`}>
      <h1 className="font-1-xl color-p4">Projetos Principais</h1>
      <div className={`${styles.projetoContainer}`}>
        <div className={`${styles.projetoBG}`}>
          <div className={`${styles.projetoLImg}`}>
            <img src={ProjetoLeft} />
          </div>
        </div>
        <div className={`${styles.projetoContent}`}>
          <h3 className="font-1-l color-p6">Animais Fantásticos</h3>
          <p className="font-1-m color-p5">
            Animais Fantásticos é um projeto na qual tem o propósito de mostrar
            alguns dos animais mais legais do mundo. O projeto conta com várias
            funcionabilidades, desde uma simples animação até um fetch e
            conversão de dinheiro no formato de bitcoin para doação.
          </p>
          <button className={`${styles.projetoBtn} font-1-s`}>
            Ver Projeto
          </button>
        </div>
      </div>

        <div className={`${styles.projetoContainer}`}>
          <div className={`${styles.projetoContent} ${styles.animais}`}>
            <h3 className="font-1-l color-p6">Bikcraft</h3>
            <p className="font-1-m color-p5">
              Bikcraft é um projeto onde o propósito é mostrar algumas
              bicicletas elétricas da empresa ficticia Bikcraft. Conta com
              varios formulários, animações, e muito mais. Com muita
              demonstração do que aprendi de UI Design.
            </p>
            <button className={`${styles.projetoBtn} font-1-s`}>
              Ver Projeto
            </button>
          </div>
      <div className={`${styles.projetoBG} ${styles.right}`}>
          <div className={`${styles.projetoImg}`}>
            <img src={ProjetoRight} />
          </div>
          </div>
        </div>
    </section>
  );
};

export default ProjetosPrincipais;
