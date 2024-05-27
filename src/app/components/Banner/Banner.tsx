"use client";
import React from "react";
import "./Banner.css";
import { UseMovieContext } from "@/app/Context/MovieContext";
import { Rating } from "react-simple-star-rating";

function Banner() {
  const { FilmesBannerInicial } = UseMovieContext();

  return (
    <>
      {FilmesBannerInicial.length ? (
        <div className="MainBanner">
          <div className="InfoFilmeBanner">
            <h1 className="TituloFilmeBanner">
              {FilmesBannerInicial[4].title}
            </h1>
            <p className="Genero">
              <p>Ação</p>
              <p>Suspense</p>
              <p>Ficção</p>
            </p>
            <Rating
              readonly={true}
              initialValue={FilmesBannerInicial[4].vote_average / 2}
              allowFraction={true}
            />
            <p className="VerMaisFilmeBanner">Ver Mais</p>
          </div>
          <img
            className="ImageBanner"
            src={`https://image.tmdb.org/t/p/original${FilmesBannerInicial[4].backdrop_path}`}
          />
        </div>
      ) : (
        <div className="MainBannerLoader"></div>
      )}
    </>
  );
}

export default Banner;
