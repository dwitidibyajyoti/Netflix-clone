import {useState} from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requiests';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      {/* nav  */}
      <Nav />

      {/* banner  */}
      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.featchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.featchTreading} />
      <Row title="Top Rated" fetchUrl={requests.featchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.featchTreading} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
