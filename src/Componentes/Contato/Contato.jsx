import React from "react";
import styles from "./Contato.module.css";
import Email from "../../assets/icons_gradient/email.svg";
import Telefone from "../../assets/icons_gradient/telefone.svg";
import Github from "../../assets/icons_gradient/github.svg";
import Linkedin from "../../assets/icons_gradient/linkedin.svg";

const Contato = () => {
  return (
    <section className="container" id="contato">
      <h1 className={`${styles.titulo} font-1-xl color-p6`}>Contato</h1>
      <div className={`${styles.contatoContainer}`}>
        <div className={`${styles.contatoItem}`}>
          <a href="https://api.whatsapp.com/send?phone=5598984348397">
            <img src={Telefone} />
          </a>
          <span className="color-p5 font-1-xs">+55 98 984348397</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <a href="https://github.com/paulomonteiro3">
            <img src={Github} />
          </a>
          <span className="color-p5 font-1-xs">@paulomonteiro3</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <a href="https://www.linkedin.com/in/paulomonteiro3/">
            <img src={Linkedin} />
          </a>
          <span className="color-p5 font-1-xs">@paulomonteiro3</span>
        </div>
        <div className={`${styles.contatoItem}`}>
          <a href="mailto:paulomonteirop22@gmail.com">
            <img src={Email} />
          </a>
          <span class={`btn color-p5 font-1-xs`}>
            paulomonteirop22@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
