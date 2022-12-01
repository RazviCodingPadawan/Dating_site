import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Trailer from './Trailer';

function MovieDetails() {

    const [movie, setMovie] = useState({});
    const params = useParams();

    const getPosterPath = (posterpath)=> {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }

    useEffect(()=> {
        const getMovie = async ()=> {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ba3188370c2e146b3b534ab2a38339e9&language=en-US`);
            const data = await result.json();
        
            setMovie(data);
        };

        getMovie();
    }, [])



  return (
    <div className='flex flex-col h-auto w-full items-start lg:items-center justify-end text-white mt-12 sm:mt-16 2xl:mt-20'>
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center mt-12 lg:ml-12 xl:ml-24">
          <img className="rounded-xl object-cover w-[80%] lg:ml-20 lg:h-[720px] 2xl:h-[860px] lg:w-[500px]" src={getPosterPath(movie.poster_path)} alt=""/>
          <div className="flex flex-col items-start justify-center xl:ml-12 2xl:ml-32">
            <h4 className="flex mx-12 sm:mx-16 md:mx-20 lg:mx-6 mt-8 md:mt-16 text-4xl md:text-5xl font-semibold">{movie.original_title}</h4>
            <p className="flex mx-12 sm:mx-16 md:mx-20 lg:mx-6 font-thin text-base mt-2 md:mt-3">Date: {movie.release_date}</p>
            <p className='flex md:text-lg text-justify mx-12 sm:mx-16 md:mx-20 lg:mx-8 xl:w-[50%] my-10'>{movie.overview}</p>
            <p className="flex mx-12 sm:mx-16 md:mx-20 lg:mx-6 mt-2">Vote: {movie.vote_average}</p>
            <p className="flex md:text-lg mx-12 sm:mx-16 md:mx-20 lg:mx-6 mt-4 mb-8">Popularity: {movie.popularity}</p>
            <div className="flex mx-12 sm:mx-16 md:mx-20 lg:mx-6 mt-8 lg:mt-2 md:mt-16">
              <Trailer />
            </div>            
          </div>
        </div>
            <Link to={`/`} className='flex md:text-xl ml-12 sm:ml-16 lg:ml-24 xl:ml-32 2xl:ml-36 mt-8 sm:mt-12  2xl:mt-12 md:mx-20 pb-36 lg:pb-32 text-lg underline hover:text-semibold text-[#de3535]'>Back</Link>
    </div>
  )
}

export default MovieDetails