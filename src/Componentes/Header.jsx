import React from "react";
import Logo from "../assets/logo.svg?react";
import Email from "../assets/email.svg?react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={`${styles.nav}`}>
        <a>Projetos</a>
        <a>Habilidades</a>
        <a>Contato</a>
      </nav>
      <Logo className={`${styles.logo}`} />
      <nav className={`${styles.nav} ${styles.navIcons}`}>
        <a>
          <Email id="email-cp" alt="testessdwe" />
        </a>
        <Link to={`https://github.com/paulomonteiro3`}>
          <Github />
        </Link>
        <Link to={`https://www.linkedin.com/in/paulomonteiro3/`}>
          <Linkedin />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
