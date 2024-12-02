import React from "react";
import styles from "./ProjetosPrincipais.module.css";
import ProjetoLeft from "../../assets/foto-projeto2.png";
import ProjetoRight from "../../assets/foto-projeto3.png";

const ProjetosPrincipais = () => {
  const animaisFantasticos =
    "https://paulomonteiro3.github.io/animais-fantasticos/";
  const bikCraft = "https://paulomonteiro3.github.io/bikcraft/";
  return (
    <section className={`${styles.projetosContainer}`} id="projetos" data-anime="scroll">
      <h1 className="font-1-xl color-p4">Projetos Principais</h1>
      <div className={`${styles.projetoContainer} ${styles.projetoBG}`}>
        <div className={`${styles.projetoLImg}`}>
          <a href={animaisFantasticos}>
            <img src={ProjetoLeft} />
          </a>
        </div>
        <div className={`${styles.projetoContent}`}>
          <h3 className="font-1-l color-p6">Animais Fantásticos</h3>
          <p className="font-1-m color-p5">
            Animais Fantásticos é um projeto na qual tem o propósito de mostrar
            alguns dos animais mais legais do mundo. O projeto conta com várias
            funcionabilidades, desde uma simples animação até um fetch e
            conversão de dinheiro no formato de bitcoin para doação.
          </p>
          <a href={animaisFantasticos}>
            <button className={`${styles.projetoBtn} font-1-s`}>
              Ver Projeto
            </button>
          </a>
        </div>
      </div>

      <div
        className={`${styles.projetoContainer} ${styles.projetoBG} ${styles.right}`}
      >
        <div className={`${styles.projetoContent} ${styles.animais}`}>
          <h3 className="font-1-l color-p6">Bikcraft</h3>
          <p className="font-1-m color-p5">
            Bikcraft é um projeto onde o propósito é mostrar algumas bicicletas
            elétricas da empresa ficticia Bikcraft. Conta com varios
            formulários, animações, e muito mais. Com muita demonstração do que
            aprendi de UI Design.
          </p>
          <a href={bikCraft}>
            <button className={`${styles.projetoBtn} font-1-s`}>
              Ver Projeto
            </button>
          </a>
        </div>
        <div className={`${styles.projetoImg}`}>
          <a href={bikCraft}>
            <img src={ProjetoRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjetosPrincipais;
