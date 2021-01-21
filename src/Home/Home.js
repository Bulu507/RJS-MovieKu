import React, {useState, useEffect} from 'react';
import MovieList from '../components/MovieList/MovieList';
import Header from '../components/Header/Header';
import './Home.css';

function Home(){
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=3a5f9096f90b10cf6a5223dd20e06429&language=en-US&page=1";
    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=3a5f9096f90b10cf6a5223dd20e06429&language=en-US&query=";

    const getMovieRequest = (url) => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            setMovies(data.results);
        });
    }

    useEffect(() => {
        getMovieRequest(popularUrl);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();        

        if(searchValue){
            getMovieRequest(searchUrl + searchValue);
            setSearchValue('');
        }

    }

    const handleOnChange =(e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="page">
            <Header 
                heading="MovieKu"
                onSubmit={handleOnSubmit} 
                value={searchValue} 
                onChange={handleOnChange}
            />
            <div className="movie-container">
                {
                movies.length > 0 &&
                movies.map((movie) => <MovieList key={movie.id} {...movie} />)
                }
            </div>
        </div>
    )
}

export default Home;