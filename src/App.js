import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchToprated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies}/>
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies}/>
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies}/>
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Scifi Movies" fetchUrl={requests.fetchScifiMovies}/>
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies}/>

    </div>
  );
}

export default App;
