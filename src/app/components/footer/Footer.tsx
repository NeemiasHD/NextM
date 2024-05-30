import React from "react";
import "./Footer.css";
import { Instagram, Twitter, Telegram, GitHub } from "@mui/icons-material";

function footer() {
  return (
    <>
      <div className="footerMain">
        <div className="TitleContainerFooter">
          <h1>NEXTM</h1>
        </div>
        <div className="Footer NavegacaoContainer">
          <h1>Navegação</h1>
          <div className="NavegacaoItensF">
            <p>Home</p>
            <p>Filmes</p>
          </div>
        </div>
        <div className="Footer ContatoContainer">
          <h1>Contato</h1>
          <div className="ContatoItensF">
            <p>Portifólio</p>
            <p>Repositório</p>
            <p>Contato</p>
            <p>neemiasclaudio5@gmail.com</p>
          </div>
        </div>
        <div className="Footer SocialMediaContainer">
          <h1>Redes Sociais</h1>
          <div className="iconsSocial">
            <Instagram className="icon instagram" />
            <Twitter className="icon twitter" />
            <Telegram className="icon telegram" />
            <GitHub className="icon github" />
          </div>
        </div>
      </div>
      <div className="FooterCopyright">
        <p>&copy; 2024 NEXTM. Todos os direitos reservados.</p>
      </div>
    </>
  );
}

export default footer;
