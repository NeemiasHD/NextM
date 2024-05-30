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
  const [PrimeiraRodada, setPrimeiraRodada] = useState(0); //garante que o catalogo1 só vai ser renderizado 1 vez
  const [isOnSearchMode, setisOnSearchMode] = useState(false); //verifica se estar no modo pesquisa para tirar a paginação
  const [SearchContent, setSearchContent] = useState(""); //conteudo do search
  const [SearchFilter, setSearchFilter] = useState(0); //filtro da pesquisa

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
        PrimeiraRodada,
        setPrimeiraRodada,
        isOnSearchMode,
        setisOnSearchMode,
        SearchContent,
        setSearchContent,
        SearchFilter,
        setSearchFilter,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function UseMovieContext() {
  return useContext(MovieContext);
}
