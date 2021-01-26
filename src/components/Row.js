import React from 'react';
import {useState, useEffect} from 'react';
import '../Row.css';
import axios from '../axios';
import Youtub from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = `https://www.themoviedb.org/t/p/original`;

const Row = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // if [] run one
    async function featchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    featchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVers: {
      autoply: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
      console.log('heare 1');
    } else {
      console.log('heare2');
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };
  console.log(trailerUrl);

  // function handleClick(e) {
  //   console.log(e);
  // }

  return (
    <div className="row">
      {/* title */}
      <h2> {title}</h2>

      {/* contener-> poster */}

      <div className="row__poster">
        {/* several roe poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtub videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
