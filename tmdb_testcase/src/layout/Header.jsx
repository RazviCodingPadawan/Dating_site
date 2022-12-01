import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className='static top-0 transition-all	flex flex-row items-center justify-center lg:justify-between bg-[#121212] h-[4vh] md:h-[7vh] w-full shadow-lg'>
        <Link to={`/`}><h1 className='text-xs sm:text-sm md:text-xl xl:text-2xl font-semibold lg:pl-24 xl:pl-16 2xl:pl-32 text-[#f7f4ee]'>TMDB movies</h1></Link>
    </div>
  )
}

export default Header