import React from 'react'

const MovieCard = ({movie:
  {title, vote_average, poster_path, release_date, original_language}
}) => {
  const imageUrl = poster_path 
    ? `https://image.tmdb.org/t/p/w500${poster_path}` 
    : '/no-movie.png';

  return (
    <div className="movie-card">
      <img
        src={imageUrl}
        alt={title || 'Movie poster'}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = '/no-movie.png';
        }}
      />
      <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
          <div className='rating'>
             <img src="/rating.svg" alt="Star-icon" />
             <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
          </div>
          <span>•</span>
          <p className='lang'>{original_language}</p>
          <span>•</span>
          <p className='year'>{release_date?release_date.split('-')[0]:'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard