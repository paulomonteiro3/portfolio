import React from "react";
import Logo from "../assets/logo.svg?react";
import Email from "../assets/email.svg?react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={`${styles.nav}`}>
        <a>Projetos</a>
        <a>Habilidades</a>
        <a>Contato</a>
      </nav>
      <Logo className={`${styles.logo}`} />
      <nav className={`${styles.nav}`}>
        <a>
          <Email />
        </a>
        <a>
          <Github />
        </a>
        <a>
          <Linkedin />
        </a>
      </nav>
    </header>
  );
};

export default Header;
