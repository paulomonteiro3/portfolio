import React from "react";
import styles from "./Projetos.module.css";
import Projeto from "../../assets/foto-projeto2.png";

const Projetos = () => {
  return (
    <section>
      <h1 className={`${styles.titulo} font-1-xl color-p4`}>Outros Projetos</h1>
      <div className={`${styles.projetosContainer}`}>
        <div className={`${styles.projeto}`}>
          <h3 className="font-1-l color-p6">Nome do projeto</h3>
          <div className={`${styles.projetoImg}`}>
            <a href="">
              <img src={`${Projeto}`} alt="" />
            </a>
          </div>
        </div>
        <div className={`${styles.projeto}`}>
          <h3 className="font-1-l color-p6">Nome do projeto</h3>
          <div className={`${styles.projetoImg}`}>
            <a href="">
              <img src={`${Projeto}`} alt="" />
            </a>
          </div>
        </div>
        <div className={`${styles.projeto}`}>
          <h3 className="font-1-l color-p6">Nome do projeto</h3>
          <div className={`${styles.projetoImg}`}>
            <a href="">
              <img src={`${Projeto}`} alt="" />
            </a>
          </div>
        </div>
        <div className={`${styles.projeto}`}>
          <h3 className="font-1-l color-p6">Nome do projeto</h3>
          <div className={`${styles.projetoImg}`}>
            <a href="">
              <img src={`${Projeto}`} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
