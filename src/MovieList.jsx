import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const RowDiv = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: auto;
  margin-top: 40px;
`;

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ddc371ba5ee95e39eb2d22c3c20ff5fe"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <RowDiv>
      {movieList.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.original_title}
          image={movie.poster_path}
          date={movie.release_date}
          resume={movie.overview}
          nbLike={movie.vote_count}
        />
      ))}
    </RowDiv>
  );
};

export default MovieList;
