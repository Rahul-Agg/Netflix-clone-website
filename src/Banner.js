import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const sec1 = await axios.get(requests.fetchRomanceMovies);
      const sec2 = await axios.get(requests.fetchNetflixOriginals);

      const request = [...sec1.data.results, ...sec2.data.results];

      setMovie(request[Math.floor(Math.random() * request.length - 1)]);
    }
    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"..." : str;
  }
  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
autoplay:1,
    },
  }
  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL (url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error)=>console.log(error));
    }
};
  return (
    /* background image */
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div> 2 buttons */}
        <div className="banner_buttons">
          <button onClick={()=>handleClick(movie)} className="banner_button">Play</button>
          <button className="banner_button">Add List</button>
        </div>

        {/* description */}
        <h1 className="banner_description"> {truncate(movie?.overview,150)}</h1>
      </div>
      <div className="banner_fadebottom"/>
      {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
    </header>
  );
}

export default Banner;
