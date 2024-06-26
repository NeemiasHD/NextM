import { UseMovieContext } from "@/app/Context/MovieContext";
import Link from "next/link";
import React from "react";

interface ItemProps {
  item: {
    id: number;
    title: string;
    poster_path: string;
  };
}

function Item({ item }: ItemProps) {
  const { setFilmeSelecionado, FilmeSelecionado } = UseMovieContext();
  return (
    <Link
      onClick={() => {
        setFilmeSelecionado(item);
      }}
      href={`/Information/${item.id}`}
      className="CatalogoItem2"
      key={item.id}
    >
      <img
        className="ImgCatalogo2"
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt={item.title}
      />

      <h1 className="TituloCatalogo2">{item.title.substring(0, 24)}</h1>
    </Link>
  );
}

export default Item;
