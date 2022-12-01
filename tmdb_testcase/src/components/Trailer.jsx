import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'


const opts = {
    width:"100%",
    height:"100%",
    playerVars: {
    autoplay: 1,
  },
};

function Trailer() {

    const [trailer, setTrailer] = useState({});
    const params = useParams();


    useEffect(()=> {
        const getMovie = async ()=> {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ba3188370c2e146b3b534ab2a38339e9&language=en-US`)
            const data = await response.json();
        
            setTrailer(data.results[0]);
        };

        getMovie();
    }, [])



  return (
    <div className='flex'>
        <YouTube videoId={`${trailer.key}`} opts={opts}/>;
    </div>
  )
}

export default Trailer