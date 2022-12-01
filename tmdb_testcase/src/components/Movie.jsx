import React from 'react'
import {Link} from 'react-router-dom'

const Movie =(movie)=> {

  //Images api
  const getPosterPath = (posterpath)=> {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }


  //Movie props
  const {
    original_title: name,
    // overview: overview,
    id: id,
    vote_average: vote,
    release_date: date,
    backdrop_path: posterpath,
    key: key,
  } = movie;


  return <div className="flex flex-row flex-wrap xl:items-center xl:justify-center">
        <div className="hidden lg:flex items-start justify-between rounded-3xl shadow-xl bg-gradient-to-t from-[#de3535] to-[#1d1d1d] lg:w-[490px] xl:w-[560px] xl:h-[420px]">
          <a className='flex flex-col items-center justify-center' href="#!">
            <img className="rounded-bl-3xl rounded-tl-3xl	object-cover h-[420px] min-w-[290px]" src={getPosterPath(posterpath)} alt=""/>
          </a>
          <div className="flex flex-col items-start w-full h-full justify-between">
            <div className='flex flex-col w-full items-start justify-center min-h-[150px] bg-[#121212] rounded-tr-3xl'>
              <h5 className="text-[#f7f4ee] text-2xl font-semibold mb-4 px-6">{name}</h5>
            </div>
            {/* <p class="text-[#d0d0d0] text-sm mb-5">
              {overview}
            </p> */}
            <div className='flex flex-col ml-6 mt-16 items-start justify-start'>
              <p className='font-semibold pt-4 text-lg text-[#f7f4ee]'>Betyg: {vote}</p>
              <p className='font-normal text-sm pt-2 text-[#f7f4ee]'>Datum: {date}</p>
            </div>
            <Link to={`/movies/${id}`} type="button" className="inline-block px-6 py-2.5 mb-12 ml-6 mt-8 bg-[#f7f4ee] text-[#361d1d] font-medium text-xs leading-tight uppercase rounded shadow-md hover:font-bold hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Mer</Link>
          </div>
        </div>

        {/* Mobile version */}
        
        <div className="flex flex-col lg:hidden items-center justify-start rounded-xl shadow-2xl bg-gradient-to-r from-[#de3535] to-[#1d1d1d] w-[100%] md:mx-16 h-[auto] mb-8 mt-4">
          <a className='flex flex-col items-center justify-center mt-2 lg:mt-0' href="#!">
            <img className="rounded-xl object-cover my-4 sm:my-8 md:my-16 h-full sm:h-full w-[260px] sm:w-[480px] md:w-[580px]" src={getPosterPath(posterpath)} alt=""/>
          </a>
          <div className="flex flex-col items-start w-full h-full justify-between">
            <div className='flex flex-col w-full lg:items-start justify-center lg:min-h-[160px] bg-[#121212] rounded-tr-2xl'>
              <h5 className="text-[#f7f4ee] text-2xl sm:text-4xl font-semibold my-4 sm:my-8 px-6">{name}</h5>
            </div>
            {/* <p class="text-[#d0d0d0] text-sm mb-5">
              {overview}
            </p> */}
            <div className='flex flex-col ml-6 mt-6 lg:mt-12 items-start justify-start'>
              <p className='font-semibold text-lg sm:text-xl text-[#f7f4ee]'>Betyg: {vote}</p>
              <p className='font-normal text-sm sm:text-lg pt-2 text-[#f7f4ee]'>Datum: {date}</p>
            </div>
            <Link to={`/movies/${id}`} type="button" className="inline-block px-6 py-2.5 mb-8 mt-6 lg:mb-12 ml-6 bg-[#f7f4ee] text-[#361d1d] font-medium text-xs sm:text-base leading-tight uppercase rounded shadow-md hover:font-bold hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Mer</Link>
          </div>
        </div>

    </div>
}

export default Movie