import React from 'react'
import requests from '../../requests'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Row from '../Row/Row'

const Homescreen = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Row title="Tranding Now" fetchUrl={requests.fetchTrending} isLargeRow/>
    <Row title="Netflix Orignal" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horrer Movies" fetchUrl={requests.fetchHorrerMovies}/>
    <Row title="Romence Movies" fetchUrl={requests.fetchRomenceMovies} isLargeRow/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </>
  )
}

export default Homescreen