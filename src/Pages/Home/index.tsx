import { useState, useEffect } from 'react';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

function Home(){
  const [ topMovies, setTopMovies] = useState([])

  const getTopRatedMovies =async (url:string) => {
    const res = await fetch(url)
    const data = await res.json();

    setTopMovies(data.result)
  };

  useEffect(() =>{
    const topRatedUrl= `${moviesUrl}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])
  return(
    <>
    <h1 className="flex justify-center items-center">Estou testando esse componente</h1>
    <div>{topMovies && topMovies.map((movie) => <p>{movie.original_title}</p>)}
    </div>
    </>
    
  )
}

export default Home;