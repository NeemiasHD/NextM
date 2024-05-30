"use client";
import { useEffect, useState } from "react";
import "./Catalogo1.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import Item from "./Item1";

interface PaginacaoProps {
  Name: string;
}
const Catalogo1: React.FC<PaginacaoProps> = ({ Name }) => {
  const {
    FilmesBannerInicial,
    setFilmesBannerInicial,
    PrimeiraRodada,
    setPrimeiraRodada,
  } = UseMovieContext();
  const rando = Math.floor(Math.random() * 20);
  useEffect(() => {
    const fetchData = async () => {
      if (PrimeiraRodada == 0) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&page=${rando}`
          );
          const data = await response.json();

          setFilmesBannerInicial(data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setPrimeiraRodada(1);
      }
    };

    fetchData();
  }, [PrimeiraRodada]);

  return (
    <>
      <div className="Catalogo1Main">
        <div className="PopularesMovies">
          <p>{Name}</p>
        </div>
        {FilmesBannerInicial && FilmesBannerInicial.length >= 0 ? (
          <>
            <div className="Catalogo1Container">
              {FilmesBannerInicial.slice(0, 4).map((item: any) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="Catalogo1Container"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Catalogo1;
