import React from "react";
import Logo from "../assets/logo.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={`${styles.nav}`} data-menu="suave">
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
      <Logo className={`${styles.logo}`} />
      <nav className={`${styles.nav} ${styles.navIcons}`}>
        <a href="#contato">
          <img src={Email} />
        </a>
        <Link to={`https://github.com/paulomonteiro3`}>
        <img src={Github} />
        </Link>
        <Link to={`https://www.linkedin.com/in/paulomonteiro3/`}>
        <img src={Linkedin} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
