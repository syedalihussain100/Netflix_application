import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("")
  const base_Url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovie(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleClick = (movie) =>{
  if(trailerUrl){
    setTrailerUrl('');
  }else{
    movieTrailer(movie.name || "")
    .then(url => {
    const urlParams = new URLSearchParams(new URL(url).search);
    setTrailerUrl(urlParams.get('v'))
    }).catch(error => console.log(error))
  }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      { trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
