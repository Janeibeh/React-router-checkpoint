//MovieCard.js


import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
const { id, title, description, posterURL, rating } = movie;

return (
    <div className="movie-card">
        <Link to={`/description/${id}`}>
            <img src={posterURL} alt={title} />
        </Link>
        <h2>{title}</h2>
        <p className='desc'>{description}</p>
        <iframe
            title="Movie Trailer"
            width="200"
            height="100"
            src={movie.trailerLink}
            allowFullScreen
        ></iframe>
        <p className='rating'>Rating: {rating}</p>
    </div>
);
};

export default MovieCard;