"use client";
import { useEffect, useState } from "react";
import "./Catalogo2.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import Item2 from "./Item2";
import Catalogo2Loader from "./Catalogo2Loader";

const Catalogo2 = () => {
  const { Filmes, SetFilmes, PaginaAtual } = UseMovieContext();
  const divsArray = new Array(20).fill(null);
  useEffect(() => {
    const fetchData = async () => {
      SetFilmes([]);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&page=${PaginaAtual}`
        );
        const data = await response.json();

        SetFilmes(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [PaginaAtual]);

  return (
    <div className="Catalogo2Main">
      {Filmes.length ? (
        <div className="Catalogo2Container">
          {Filmes.map((item: any) => (
            <Item2 item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="Catalogo2Container">
          {divsArray.map((item: any) => (
            <Catalogo2Loader key={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogo2;
