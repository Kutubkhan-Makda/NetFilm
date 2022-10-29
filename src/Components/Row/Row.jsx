import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseURL= "https://image.tmdb.org/t/p/original/";

const Row = ({title , fetchUrl ,isLargeRow}) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay:1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie?.name || movies?.title || movies?.original_name || "").then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(error => console.log(error))
    }
  }

  console.log(movies)

  return (
    <>
    <div className="row">
      <span className="title">
        {title}
      </span>

      <div className="row__posters">
        {movies.map((movie) => 
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.orignal_name}/>
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
    </>
  )
}

export default Row









