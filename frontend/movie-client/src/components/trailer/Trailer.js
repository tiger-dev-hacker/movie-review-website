import { useParams } from 'react-router-dom'; 
import ReactPlayer from 'react-player'; 
import './Trailer.css'; 
import api from '../../api/axiosConfig';
import React, { useEffect, useState } from 'react'
import { tabClasses } from '@mui/material';

const Trailer = () => {
  const params = useParams();
  console.log("Trailer component loaded with movieId. ")
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const fetchTrailer = async () => {
    try {
      const response = await api.get(`/api/v1/movies/trailer/${params.movieId}`);
      setTrailerUrl(response.data);
      console.log(trailerUrl);
    }
    catch (error) {
      console.error('Error fetching trailer link:', error);
    }
  }
  
  useEffect(() => {
    fetchTrailer();
  }, [params.movieId]);

  console.log(trailerUrl);
  return (
    <div className='react-player-container'>
      <h1>Trailer Component</h1>

      {!isPlaying && (
        <button onClick={() => setIsPlaying(true)}>
          ▶️ Play Trailer
        </button>
      )}
      {trailerUrl && (<ReactPlayer controls={true} playing={true} url='https://www.youtube.com/watch?v=tHb7WlgyaUc' width='100%' height='100%' />)}
    </div>
  );
};

export default Trailer; 

