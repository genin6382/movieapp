import { useState,useEffect } from "react";
import MovieCard from "./moviecard";
import "./movieapp.css";
export default function MovieApp() {
    const[search,setSearch]=useState('');
    const[movies,setMovies]=useState([]);
    const baseurl="https://www.omdbapi.com/?i=tt3896198&apikey=47d07c37"
    useEffect(()=>{
        apifetching('Spiderman');
    },[])
    async function apifetching(title){
       const data=await fetch(`${baseurl}&s=${title}`);
       const jsondata=await data.json();
       setMovies(jsondata.Search);
    }
    const searchmovie=(e)=>{
        setSearch(e.target.value);
    };
    
    return(
        <>
            <div className="app">
                <h1>CineHub</h1>
                <div className="search">
                    <input type="search" value={search} placeholder="Search movie name" onChange={searchmovie}/>
                    <button onClick={()=>apifetching(search)}>Search</button>
                </div>
                {movies.length > 0 ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )}               
            </div>
        </>
    )   
}