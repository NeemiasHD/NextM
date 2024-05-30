"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
function Banner() {
  const { FilmesBannerInicial } = UseMovieContext();

  interface BannerData {
    title: string;
    genres: { id: number; name: string }[];
    vote_average: number;
    id: number;
    backdrop_path: string;
  }

  const [Banner, setBanner] = useState<BannerData | null>(null);

  useEffect(() => {
    // buscando o filme para ser banner
    const fetchBanner = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${FilmesBannerInicial[4].id}?api_key=506ef0ac17c7aaa97f0421390a8ff530`
      );
      const data = await response.json();
      setBanner(data);
      console.log(data);
    };
    if (FilmesBannerInicial && FilmesBannerInicial.length > 0) {
      // tirando erro pois no começõ filmes banner n tem nada dentro.
      fetchBanner();
    }
  }, [FilmesBannerInicial]);

  return (
    <>
      {Banner && Banner.title ? (
        <div className="MainBanner">
          <div className="InfoFilmeBanner">
            <h1 className="TituloFilmeBanner">{Banner.title}</h1>
            <p className="Genero">
              {Banner.genres.map((generos: any) => (
                <p key={generos.id}>{generos.name}</p>
              ))}
            </p>

            <Rating
              readonly={true}
              initialValue={Banner.vote_average / 2}
              allowFraction={true}
              size={30}
            />
            <Link
              className="VerMaisFilmeBanner"
              href={`Information/${Banner.id}`}
            >
              Ver Mais
            </Link>
          </div>
          <img
            className="ImageBanner"
            src={`https://image.tmdb.org/t/p/original${Banner.backdrop_path}`}
          />
        </div>
      ) : (
        <div className="MainBannerLoader"></div>
      )}
    </>
  );
}

export default Banner;
