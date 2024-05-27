// MovieContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MovieProviderProps {
  children: ReactNode;
}

const MovieContext = createContext<any>(undefined);

export function MovieProvider({ children }: MovieProviderProps) {
  const [Filmes, SetFilmes] = useState([]);
  const [FilmesBannerInicial, setFilmesBannerInicial] = useState([]); // filmes do banner e do catalogo1, ficam fixo em todo a rodada
  const [FilmeSelecionado, setFilmeSelecionado] = useState([]); // serve pra renderizar o filme selecionado na página
  const [PaginaAtual, setPaginaAtual] = useState(1);

  return (
    <MovieContext.Provider
      value={{
        Filmes,
        SetFilmes,
        FilmeSelecionado,
        setFilmeSelecionado,
        PaginaAtual,
        setPaginaAtual,
        setFilmesBannerInicial,
        FilmesBannerInicial,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function UseMovieContext() {
  return useContext(MovieContext);
}
