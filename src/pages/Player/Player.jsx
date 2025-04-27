import { CircleArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Player.css';
const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const [movieData, setmovieDate] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  }
  );

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk1NmU5ZDQ5YjhmOWY3ZDhmZjExNTBjYmVlNmZhYSIsIm5iZiI6MTc0NTcwMTIyOS45MTM5OTk4LCJzdWIiOiI2ODBkNDk2ZDViMmViZDViOTUzN2JjMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qh3svEwZQqgnavnSxnnnhliME0mEW8XeS7NHUBVCJVg'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        console.log('player',res)
        setmovieDate(res.results[0])
      })
      .catch(err => console.error(err));

  }, [])

  return (
    <div className="player">
      <CircleArrowLeft size={30} className="backicon" onClick={() => navigate('/')} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${movieData.key}`} title='trailer' frameBorder={0} allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{movieData.published_at.slice(0, 10)}</p>
        <p>{movieData.name} </p>
        <p>{movieData.type} </p>
      </div>

    </div>
  )
}

export default Player
