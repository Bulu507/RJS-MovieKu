import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const Detail = () => {
    const [movie, setMovie] = useState([]);
    const params = useParams();

    const detailPath = "https://api.themoviedb.org/3/movie/";
    const apiKey = "?api_key=3a5f9096f90b10cf6a5223dd20e06429&language=en-US"
    const detaillUrl = `${detailPath}${params.id}${apiKey}`;

    const getMovieRequest = (url) => {
        fetch(url).then(res => res.json()).then(data => {
            console.log('detail :', data);
            setMovie(data);
        });
    }

    useEffect(() => {
        getMovieRequest(detaillUrl);
    }, [detaillUrl]);

    // console.log(movie);

    return (
        <div>
            <h1>Hello Details</h1>
            <h2>{movie.original_title}</h2>
        </div>
    );
}

export default Detail;