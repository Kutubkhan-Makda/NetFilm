import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
const baseURL= "https://image.tmdb.org/t/p/original/";
const YouTubeAPI_KEY= "AIzaSyCy69Nd4UzvRDhXdY39d-NTwTOhc8n731U";
const Trailer = {YouTubeURL: (query)=>`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${YouTubeAPI_KEY}`}

const Row = ({title , fetchUrl ,isLargeRow}) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  function MovieTrailer(movie){
    if(!(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")){
      return;
    }
    else{
      fetch(Trailer.YouTubeURL(movie?.name || movie?.title || movie?.original_name || movie?.original_title || ""))
      .then(res => res.json())
      .then(res => {
        const bestResult = res.items[0];
        const YouTubeTrailerURL = `https://www.youtube.com/watch?v=${bestResult.id.videoId}`
        window.open(YouTubeTrailerURL);
      })
    }
  }

  return (
    <>
    <div className="row">
      <span className="title">
        {title}
      </span>

      <div className="row__posters">
        {movies.map((movie) => 
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <>
              <div class="square">
                <img onClick={()=>MovieTrailer(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie?.name || movie?.title || movie?.original_name || movie?.original_title || ""}/>
                <span class="text">
                  {movie?.name || movie?.title || movie?.original_name || movie?.original_title || ""}
                </span>
              </div>
            </>
          ))}
      </div>
      
    </div>
    </>
  )
}

export default Row









