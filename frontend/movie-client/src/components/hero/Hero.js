import React from 'react';
import './Hero.css'; 
import Carousel from 'react-material-ui-carousel'; 
import { Paper } from '@mui/material'; 

const Hero = ({ movies }) => {

    if (!movies || movies.length === 0) {
        return <div className='movie-carousel-container'>Loading...</div>;
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => (
                        <Paper key={movie.id}>
                            <div className='movie-card-container'>
                                <div className='movie-card'>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt={movie.title || 'Movie Poster'} />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Hero;
