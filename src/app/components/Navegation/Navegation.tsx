"use client";
import React, { useState } from "react";
import "./Navegation.css";
import { Close, Search } from "@mui/icons-material";
import { UseMovieContext } from "@/app/Context/MovieContext";
function Navegation() {
  const {
    Filmes,
    SetFilmes,
    setisOnSearchMode,
    setSearchContent,
    SearchContent,
    setSearchFilter,
    SearchFilter,
  } = UseMovieContext();
  const [Input, setInput] = useState("");
  const handleChange = (e: any) => {
    setInput(e.target.value.replace(/ /g, "+"));
    setSearchContent(Input);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (Input != "") {
      setSearchFilter(0);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&query=${Input}`
      );
      const data = await response.json();
      SetFilmes(data.results);
      setisOnSearchMode(true);
    }
    setSearchContent(Input);
  };
  return (
    <div className="MainNavegation">
      <div className="MainNavegationContainer">
        <div className="PopularesMoviesNavegation">
          <p>All</p>
        </div>
        <div className="MovieType">
          <p
            className={SearchFilter === 28 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(28);
            }}
          >
            Action
          </p>
          <p
            className={SearchFilter === 27 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(27);
            }}
          >
            Horror
          </p>
          <p
            className={
              SearchFilter === 9648 ? "filtroAtualBusca" : "FiltroBusca"
            }
            onClick={() => {
              setSearchFilter(9648);
            }}
          >
            Mystery
          </p>
          <p
            className={
              SearchFilter === 10749 ? "filtroAtualBusca" : "FiltroBusca"
            }
            onClick={() => {
              setSearchFilter(10749);
            }}
          >
            Romance
          </p>
          <p
            className={SearchFilter === 35 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(35);
            }}
          >
            Comedy
          </p>
          <p
            className={
              SearchFilter === 878 ? "filtroAtualBusca" : "FiltroBusca"
            }
            onClick={() => {
              setSearchFilter(878);
            }}
          >
           Science Fiction
          </p>
          <p
            className={SearchFilter === 16 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(16);
            }}
          >
            Animation
          </p>
          <p
            className={SearchFilter === 14 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(14);
            }}
          >
            Fantasy
          </p>
          <p
            className={SearchFilter === 99 ? "filtroAtualBusca" : "FiltroBusca"}
            onClick={() => {
              setSearchFilter(99);
            }}
          >
            Documentary
          </p>
        </div>
        <div className="Search Bar">
          <input
            type="text"
            defaultValue={SearchContent.replace(/\+/g, " ")}
            className="inputPesquisa"
            placeholder={"SEARCH"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <div className="IconSearch" onClick={handleSearch}>
            <Search />
          </div>
          <div
            className="IconSearch close"
            onClick={() => {
              setSearchFilter(0);
              const inputElement =
                document.querySelector<HTMLInputElement>(".inputPesquisa");
              if (inputElement) {
                inputElement.value = "";
              }
            }}
          >
            <Close />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navegation;
