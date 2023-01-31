import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//import {logo} from "../assets/logo.png";

const Header = () => {
  return (
    <nav>
      
      <h1>wonder books </h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/searchBook"}> Seachs </Link>
      </main>
    </nav>
  );
};

export default Header;
