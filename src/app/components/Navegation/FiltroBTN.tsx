import { UseMovieContext } from "@/app/Context/MovieContext";
import React from "react";
interface PaginacaoProps {
  name: string;
  filter: number;
}
const FiltroBTN: React.FC<PaginacaoProps> = ({ name, filter }) => {
  const {
    setisOnSearchMode,

    setSearchFilter,
    SearchFilter,
  } = UseMovieContext();
  return (
    <p
      className={SearchFilter === filter ? "filtroAtualBusca" : "FiltroBusca"}
      onClick={() => {
        setSearchFilter(filter);
        setisOnSearchMode(false);
      }}
    >
      {name}
    </p>
  );
};

export default FiltroBTN;
