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
    <div className="CatalogoItem" key={item.id}>
      <img
        className="ImgCatalogo1"
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={item.title}
      />
      <h1 className="TituloCatalogo1">{item.title}</h1>
    </div>
  );
}

export default Item;
