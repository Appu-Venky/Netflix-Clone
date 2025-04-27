import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Titlecard.css';

const Titlecard = ({ title, category }) => {

  const [movieData, setmovieDate] = useState([]);
  const CardsRef = useRef();

  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk1NmU5ZDQ5YjhmOWY3ZDhmZjExNTBjYmVlNmZhYSIsIm5iZiI6MTc0NTcwMTIyOS45MTM5OTk4LCJzdWIiOiI2ODBkNDk2ZDViMmViZDViOTUzN2JjMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qh3svEwZQqgnavnSxnnnhliME0mEW8XeS7NHUBVCJVg'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    CardsRef.current.scrollLeft += event.deltay;

  }
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        console.log('hhhhhhhhhhhhhhh',res)
        setmovieDate(res.results)
      }
      )
      .catch(err => console.error(err));
    CardsRef.current.addEventListener('wheel', handleWheel);

  }, [])



  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={CardsRef}>
        {movieData.map((card, index) => {
          return <Link to={`/player/${card.id}`} key={index} className="card">
            <img src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}

      </div>

    </div>
  )
}

export default Titlecard
