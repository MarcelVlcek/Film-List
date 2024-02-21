import './Movie.css'
import data from '../data'
import MovieDeleteButton from './MovieDeleteButton'
import { useState } from 'react'
import AllDeleteButton from './AllDeleteButton'
import ReloadMoviesButton from './ReloadMoviesButton'

const Movie = () => {
  const [movieList,setMovieList] = useState(data) 

  const deleteOneMovie = (idecko) =>{
    const filteredMovies = movieList.filter( (oneMovie) => {
      return oneMovie.id !== idecko
    })
    setMovieList(filteredMovies)

  }

  const reloadMovie = () => {
    setMovieList(data)
  }

  const deleteAllMovies = () =>{
    setMovieList([])
  }

  return (<section>
      <div className='all-movies'>
        {
            movieList.map( (oneMovie) => {
                const {id, image, title, age, tags, description} = oneMovie
                return <div className='one-movie' key={id}>
                    <img src={image} alt='' />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p>{description}</p>
                    <MovieDeleteButton deleteMovie = {() => deleteOneMovie(id)}/>
                </div>
            })
        }
        
      </div>
      <div>
        <AllDeleteButton deleteAllMovies = {deleteAllMovies} />
        <ReloadMoviesButton reload = {reloadMovie} />
      </div>
  </section>  
  )
}

export default Movie