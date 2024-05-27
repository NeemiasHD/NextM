"use client";
import React, { useEffect, useState } from "react";
import "./Paginacao.css";
import { UseMovieContext } from "@/app/Context/MovieContext";

interface PaginacaoProps {
  numeroDePaginas: number;
  maxPage: number;
}

const Paginacao: React.FC<PaginacaoProps> = ({ numeroDePaginas, maxPage }) => {
  const { setPaginaAtual, PaginaAtual } = UseMovieContext();
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    const updateVisiblePages = () => {
      let start = Math.max(PaginaAtual - Math.floor(numeroDePaginas / 2), 1);
      let end = Math.min(start + numeroDePaginas - 1, maxPage);

      if (end - start + 1 < numeroDePaginas) {
        start = Math.max(end - numeroDePaginas + 1, 1);
      }

      const newVisiblePages: any = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      );
      setVisiblePages(newVisiblePages);
    };

    updateVisiblePages();
  }, [PaginaAtual, numeroDePaginas, maxPage]);

  return (
    <div className="PaginationMain">
      {visiblePages[0] > 1 && (
        <>
          <a
            className="ButtonPagination"
            style={
              PaginaAtual === 1
                ? {
                    backgroundColor: "var(--CorAzulPrincipal)",
                    color: "var(--CorCinzaPrincipal)",
                  }
                : {}
            }
            onClick={() => {
              setPaginaAtual(1);
              window.scrollTo({
                top: 600,
              });
            }}
          >
            1
          </a>
          <p className="Pontos3">...</p>
        </>
      )}
      {visiblePages.map((pagina) =>
        pagina === visiblePages[visiblePages.length - 1] && pagina < maxPage ? (
          <React.Fragment key={pagina}>
            <a
            
              className="ButtonPagination"
              style={
                PaginaAtual === pagina
                  ? {
                      backgroundColor: "var(--CorAzulPrincipal)",
                      color: "var(--CorCinzaPrincipal)",
                    }
                  : {}
              }
              onClick={() => {
                setPaginaAtual(pagina);
                window.scrollTo({
                  top: 600,
                });
              }}
            >
              {pagina}
            </a>
            <p className="Pontos3">...</p>
            <a
              className="ButtonPagination"
              style={
                PaginaAtual === maxPage
                  ? {
                      backgroundColor: "var(--CorAzulPrincipal)",
                      color: "var(--CorCinzaPrincipal)",
                    }
                  : {}
              }
              onClick={() => {
                setPaginaAtual(maxPage);
                window.scrollTo({
                  top: 600,
                });
              }}
            >
              {maxPage}
            </a>
          </React.Fragment>
        ) : (
          <a
            key={pagina}
            className="ButtonPagination"
            style={
              PaginaAtual === pagina
                ? {
                    backgroundColor: "var(--CorAzulPrincipal)",
                    color: "var(--CorCinzaPrincipal)",
                  }
                : {}
            }
            onClick={() => {
              setPaginaAtual(pagina);
              window.scrollTo({
                top: 600,
              });
            }}
          >
            {pagina}
          </a>
        )
      )}
    </div>
  );
};

export default Paginacao;
