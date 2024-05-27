import React from "react";

function Item({ item }) {
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
