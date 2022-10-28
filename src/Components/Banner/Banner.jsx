import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import requests from '../../requests';

const Banner = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
      return request;
    }
    fetchData();
  }, [])
  console.log(movies)

  function truncate(string,n){
    return string?.length > n ? string.substr(0,n-1) + '...' : string ;
  }

  return (
    <>
    <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center center"}}>
        <div className="banner-content">
            <h1 className="banner-title">
              {movies?.name || movies?.title || movies?.original_name}
            </h1>
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My list</button>
            </div>
            <h1 className="banner-discription">
                {truncate(movies?.overview,170)}
            </h1>
        </div>
        <div className="banner-fadebottom"></div>
    </header>
    </>
  )
}

export default Banner