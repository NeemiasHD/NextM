"use client";
import { useEffect, useState } from "react";
import "./Catalogo1.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import Item from "./Item1";

const Catalogo1 = () => {
  const { FilmesBannerInicial, setFilmesBannerInicial } = UseMovieContext();
  const rando = Math.floor(Math.random() * 20);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=506ef0ac17c7aaa97f0421390a8ff530&page=${rando}`
        );
        const data = await response.json();

        setFilmesBannerInicial(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="Catalogo1Main">
        <div className="PopularesMovies">
          <p>Populares</p>
        </div>
        {FilmesBannerInicial.length ? (
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
