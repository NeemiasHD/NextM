import React from "react";
import "./InfoM.css";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import RatingDisplay from "../RatingDisplay";
import Catalogo1 from "@/app/components/Catalogo1/Catalogo1";

async function fetchMovieData(itemId: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${itemId}?api_key=506ef0ac17c7aaa97f0421390a8ff530`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movie data");
  }
  return res.json();
}
interface params {
  itemId: number;
}

const MoviePage = async ({ params }: { params: params }) => {
  const filme = await fetchMovieData(params.itemId);

  return (
    <>
      <div className="MainInfoMovie">
        <img
          className="BackgroundInfo"
          src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        />
        <div className="OutrasInfos">
          <div className="MovieInfo">
            {filme.poster_path && (
              <div className="ImagemERating">
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                  className="BannerInfoM"
                />
                <RatingDisplay rating={filme.vote_average} />
              </div>
            )}
            <div className="Titulo_Overview">
              <h1 className="titleInfoMovie">
                {filme.title} ({filme.release_date.substring(0, 4)})
              </h1>
              <div className="GenerosInfoM">
                {filme.genres.map((genero: any) => (
                  <p>{genero.name}</p>
                ))}
              </div>
              <p className="overviewInfoMovie">{filme.overview}</p>
              <a className="SaibaMaisBtn" href={filme.homepage} target="blank">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Catalogo1Infofilme">
        <Catalogo1 Name={"Veja Também"} />
      </div>
    </>
  );
};

export default MoviePage;
