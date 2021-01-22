import React from "react";
import './MovieList.css';
import { useHistory } from "react-router-dom";

const imageApi = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {
    const date = new Date(props.release_date);
    const year = date.getFullYear();

    const history = useHistory();

    const handleClick = () =>{
        history.push(`/detail/${props.id}`);
    }

    return (
        <div className="movie" onClick={handleClick}>
            <img src={imageApi + props.poster_path} alt='movie'></img>
            <div className="movie-info">
                <h3>{props.title}</h3>
                <h3>({year})</h3>
            </div>
        </div>
    )
}

export default MovieList;