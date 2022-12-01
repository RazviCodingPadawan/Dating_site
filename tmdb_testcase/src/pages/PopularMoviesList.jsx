import React, {useEffect, useState} from 'react';
import tmdbAPI from '../api/tmdbAPI'
import Movie from '../components/Movie';
import { Link } from 'react-router-dom';


const PopularMoviesList = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    // Fetch Popular Movies with tmdbAPI componennt
    useEffect(()=> {
        
        const fetchMovies = async() => {
            const {data} = await tmdbAPI.get("movie/popular")
            setMovies(data.results)
        }
    
        fetchMovies()

    }, [])

return  <div className='flex flex-col flex-wrap w-full items-center lg:items-center justify-center mt-0 mb-32 lg:mb-36'>
                <h4 className='flex items-center w-full h-[30vh] md:h-[50vh] lg:h-[90vh] bg-hero bg-cover bg-no-repeat bg-center pl-12 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-20 2xl:pl-36 text-white text-4xl sm:text-5xl xl:text-6xl 2xl:text-8xl font-bold lg:font-extrabold lg:mt-0'>Populära Filmer</h4>
                <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-between md:w-[80%] lg:w-[100%] mt-12 lg:mt-12 md:mt-32 xl:mt-36 lg:px-10 xl:px-20 2xl:px-36'>
                    <div className='flex text-[#de3535] my-8 lg:mr-0 lg:mb-0 lg:mt-0 text-3xl md:text-3xl lg:text-4xl 2xl:text-6xl font-base'>Upptäck filmer</div>
                    <div className="flex flex-col lg:flex-row items-center justify-between h-[100px]">
                        <div className="flex w-full items-end justify-center md:mr-6 mt-4 md:mt-8 mb-2 md:mb-4 xl:mr-8">
                            <Link to={`/`} className='text-white sm:text-xl lg:text-base  active:text-[#de3535] focus:text-[#de3535] mr-4 lg:mr-8 lg:mx-3'>Popular</Link>
                            <Link to={`/toprated`} className='text-white sm:text-xl lg:text-base focus:text-[#de3535]'>TOP rated</Link>
                        </div>
                        <div className='flex flex-row w-[100%] items-center justify-center lg:pl-4'>
                            <div className='flex flex-row ml-4 sm:ml-0 mt-4'>
                                <input
                                    className='bg-[#f7f4ee] caret-[#de3535] text-black pl-6 2xl:pr-2 rounded-tl-md rounded-bl-md py-2 sm:py-4 sm:w-[470px] md:w-[580px] lg:w-[300px]' 
                                    placeholder='Sök' 
                                    type='search'
                                    onChange={(e)=> setSearch(e.target.value)}        
                                />
                            </div>
                            <button className='bg-[#de3535] text-[#f7f4ee] mt-4 text-semibold py-2 sm:py-4 px-4 rounded-tr-md rounded-br-md'>Sök</button>
                        </div>
                    </div>
                </div>
            <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:w-[100%] xl:justify-center w-[85%] lg:gap-6 xl:gap-x-8 xl:gap-y-20 mt-16 lg:mt-12 md:mt-32 xl:ml-0'>
                {movies.filter((value) => {
                    if(search === '') {
                        return value
                    } else if (value.title.toLowerCase().includes(search.toLowerCase())){
                        return value
                    }
                    }).map((movie, id)=>{
                    return <Movie key={id} {...movie} />
                })}
            </div>
        </div>
}

export default PopularMoviesList