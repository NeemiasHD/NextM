import Link from "next/link";
import React from "react";
interface ItemProps {
  item: {
    id: number;
    title: string;
    backdrop_path: string;
    // Adicione outros campos conforme necessário
  };
}
function Item({ item }: ItemProps) {
  return (
    <Link href={`/Information/${item.id}`}>
      <div className="CatalogoItem" key={item.id}>
        <img
          className="ImgCatalogo1"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.title}
        />
        <h1 className="TituloCatalogo1">{item.title}</h1>
      </div>
    </Link>
  );
}

export default Item;
