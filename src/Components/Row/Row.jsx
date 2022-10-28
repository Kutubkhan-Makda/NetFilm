import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
const baseURL= "https://image.tmdb.org/t/p/original/";

const Row = ({title , fetchUrl ,isLargeRow}) => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])
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
            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.orignal_name}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Row









