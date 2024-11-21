import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import Email from "../assets/email.svg?react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";


const Header = () => {
  return (
    <header>
      <nav>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </nav>
      <Logo />
      <nav>
        <Link><Email /></Link>
        <Link><Github /></Link>
        <Link><Linkedin /></Link>
      </nav>
    </header>
  );
};

export default Header;
