import React from "react";
import styles from "./Contato.module.css";
import Email from "../../assets/icons_gradient/email.svg"
import Telefone from "../../assets/icons_gradient/telefone.svg"
import Github from "../../assets/icons_gradient/github.svg"
import Linkedin from "../../assets/icons_gradient/linkedin.svg"

const Contato = () => {
  return (
    <section className="container">
      <h1 className={`${styles.titulo} font-1-xl color-p6`}>Contato</h1>
      <div className={`${styles.contatoContainer}`}>

        <div className={`${styles.contatoItem}`}>
          <img src={Telefone} />
          <span className="color-p5 font-1-xs">+55 98 984348397</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <img src={Github} />
          <span className="color-p5 font-1-xs">@paulomonteiro3</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <img src={Linkedin} />
          <span className="color-p5 font-1-xs">@paulomonteiro3</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <img src={Email}/>
          <span className="color-p5 font-1-xs">paulomonteirop22@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
