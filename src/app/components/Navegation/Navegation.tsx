"use client";
import React, { useState } from "react";
import "./Navegation.css";
import { Close, Search } from "@mui/icons-material";
import { UseMovieContext } from "@/app/Context/MovieContext";
import FiltroBTN from "./FiltroBTN";
function Navegation() {
  const {
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
        <div className="ContentFilters">
          <div className="MovieType">
            <FiltroBTN name={"Action"} filter={28} />
            <FiltroBTN name={"Horror"} filter={27} />
            <FiltroBTN name={"Mystery"} filter={9648} />
            <FiltroBTN name={"Romance"} filter={10749} />
            <FiltroBTN name={"Comedy"} filter={35} />
            <FiltroBTN name={"Science Fiction"} filter={878} />
            <FiltroBTN name={"Animation"} filter={16} />
            <FiltroBTN name={"Fantasy"} filter={14} />
            <FiltroBTN name={"Documentary"} filter={99} />
          </div>
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
