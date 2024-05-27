import React from "react";
import "./Navegation.css";
import { Search } from "@mui/icons-material";

function Navegation() {
  return (
    <div className="MainNavegation">
      <div className="MainNavegationContainer">
        <div className="PopularesMoviesNavegation">
          <p>Todos</p>
        </div>
        <div className="MovieType">
          <p>Ação</p>
          <p>Terror</p>
          <p>Suspense</p>
          <p>Romance</p>
          <p>Comedia</p>
          <p>Ficção Cientifica</p>
          <p>Animação</p>
          <p>Fantasia</p>
        </div>
        <div className="Search Bar">
          <input
            type="text"
            className="inputPesquisa"
            placeholder={"PESQUISA"}
          />
          <div className="IconSearch">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navegation;
