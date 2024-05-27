"use client";
import React from "react";
import { UseMovieContext } from "@/app/Context/MovieContext";

function InfoM() {
  const { FilmeSelecionado } = UseMovieContext();
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${FilmeSelecionado.poster_path}`}
      />
    </div>
  );
}

export default InfoM;
