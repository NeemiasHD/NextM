"use client";
import { useEffect, useState } from "react";
import "./Catalogo2.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import Item2 from "./Item2";
import Catalogo2Loader from "./Catalogo2Loader";
import Paginacao from "../pagination/Paginacao";
import Link from "next/link";

const Catalogo2 = () => {
  const {
    Filmes,
    SetFilmes,
    PaginaAtual,
    setPaginaAtual,
    isOnSearchMode,
    setisOnSearchMode,
    SearchFilter,
  } = UseMovieContext();
  const divsArray = new Array(20).fill(null);
  useEffect(() => {
    const fetchData = async () => {
      SetFilmes([]);
      try {
        const response = await fetch(
          SearchFilter === 0
            ? `https://api.themoviedb.org/3/discover/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&page=${PaginaAtual}`
            : `https://api.themoviedb.org/3/discover/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&with_genres=${SearchFilter}&page=${PaginaAtual}`
        );
        const data = await response.json();

        SetFilmes(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (isOnSearchMode == true) {
    } else {
      fetchData();
    }
  }, [PaginaAtual, isOnSearchMode, SearchFilter]);

  return (
    <>
      <div className="Catalogo2Main">
        {Filmes.length ? (
          <div className="Catalogo2Container">
            {Filmes.map((item: any) => (
              <Item2 item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="Catalogo2Container">
            {divsArray.map((_, index) => (
              <Catalogo2Loader key={index} />
            ))}
          </div>
        )}
      </div>
      {isOnSearchMode ? (
        <div className="MainVoltarPesquisa">
          <a
            className="voltarPesquisa"
            onClick={() => {
              setisOnSearchMode(false);
              window.scrollTo({
                top: 600,
              });
              setPaginaAtual(1);
            }}
          >
            Return
          </a>
        </div>
      ) : (
        <Paginacao numeroDePaginas={9} maxPage={500} />
      )}
    </>
  );
};

export default Catalogo2;
