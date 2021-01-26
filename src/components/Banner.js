import React, {useState, useEffect} from 'react';

import axios from '../axios';
import requests from '../requiests';

import '../Banner.css';
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function featchData() {
      const request = await axios.get(requests.featchNetflixOriginals);

      const random = () => {
        const rando = Math.floor(
          Math.random() * request.data.results.length - 1
        );
        if (rando < 0) {
          return 0;
        } else {
          return rando;
        }
      };
      //   const random = Math.floor(
      //     Math.random() * request.data.results.length - 1
      //   );

      //console.log(request.data.results[random()]);

      setMovie([request.data.results[random()]]);

      return request;
    }
    featchData();
  }, []);
  console.log(movie[0]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie[0]?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        {/* title */}

        <h1 className="banner_tittle">
          {movie[0]?.title || movie[0]?.name || movie[0]?.original_name}
        </h1>
        {/* div>button */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* discrison */}
        <h1 className="banner__description">
          {' '}
          {truncate(movie[0]?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
