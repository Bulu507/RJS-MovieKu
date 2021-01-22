import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './Detail.css';

const Detail = () => {
    const [movie, setMovie] = useState([]);
    const params = useParams();

    const detailPath = "https://api.themoviedb.org/3/movie/";
    const apiKey = "?api_key=3a5f9096f90b10cf6a5223dd20e06429&language=en-US";
    const detaillUrl = `${detailPath}${params.id}${apiKey}`;
    const imageApi = "https://image.tmdb.org/t/p/w500";

    const getMovieRequest = (url) => {
        fetch(url).then(res => res.json()).then(data => {
            console.log('detail :', data);
            setMovie(data);
        });
    }

    useEffect(() => {
        getMovieRequest(detaillUrl);
    }, [detaillUrl]);

    const date = new Date(movie.release_date);
    const year = date.getFullYear();

    return (
        <div className="container-detail">
            <img src={imageApi + movie.poster_path} alt='movie'></img>
            <div className="info-container">
                <h1>{movie.title} ({year})</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Ratings</th>
                            <th>{movie.vote_average}</th>
                        </tr>
                        <tr>
                            <th>Release</th>
                            <th>{movie.release_date}</th>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <th>{movie.original_language}</th>
                        </tr>
                    </thead>
                </table>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}

export default Detail;