import React from "react";
import Logo from "../assets/logo.svg?react";
import Email from "../assets/email.svg?react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ScrollSuave from "./scripts/ScrollSuave";

const Header = () => {
  const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
  scrollSuave.init()
  return (
    <header className={`${styles.header} container`}>
      <nav className={`${styles.nav}`} data-menu="suave">
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
      <Logo className={`${styles.logo}`} />
      <nav className={`${styles.nav} ${styles.navIcons}`}>
        <a>
          <Email />
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
