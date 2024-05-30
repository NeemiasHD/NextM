import React from "react";
import "./Footer.css";
import { Instagram, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

function footer() {
  return (
    <>
      <div className="footerMain">
        <div className="TitleContainerFooter">
          <h1>NEXTM</h1>
        </div>
        <div className="Footer NavegacaoContainer">
          <h1>Navegation</h1>
          <div className="NavegacaoItensF">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Movies</Link>
          </div>
        </div>
        <div className="Footer ContatoContainer">
          <h1>Contact</h1>
          <div className="ContatoItensF">
            <a
              href="https://github.com/NeemiasHD?tab=repositories"
              target="blank"
            >
              Portfolio
            </a>
            <a
              href="https://neemiashd.github.io/Meu_Portifolio/"
              target="blank"
            >
              Repository
            </a>
            <a
              href="mailto:neemiasclaudio5@gmail.com?subject=Trabalho"
              target="blank"
            >
              contact
            </a>
            <a>neemiasclaudio5@gmail.com</a>
          </div>
        </div>
        <div className="Footer SocialMediaContainer">
          <h1>Social Media</h1>
          <div className="iconsSocial">
            <a href="https://www.instagram.com/neemias_claudio/" target="blank">
              <Instagram className="icon instagram" />
            </a>
            <a href="https://x.com/neemiasclaudio5" target="blank">
              <Twitter className="icon twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/neemias-claudio-957267302/"
              target="blank"
            >
              <LinkedIn className="icon telegram" />
            </a>
            <a href="https://github.com/NeemiasHD" target="blank">
              <GitHub className="icon github" />
            </a>
          </div>
        </div>
      </div>
      <div className="FooterCopyright">
        <p>&copy; 2024 NEXTM. All rights reserved.</p>
      </div>
    </>
  );
}

export default footer;
