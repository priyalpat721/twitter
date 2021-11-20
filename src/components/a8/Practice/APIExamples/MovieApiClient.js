import React, {useEffect, useState} from "react";
const MOVIE_API = 'https://web-dev-node-pripat.herokuapp.com/api/movies/';
// const MOVIE_API = 'http://localhost:4000/api/movies/';

const MovieApiClient = () => {
    const [movie, setMovie] = useState({title: '', rating: 2.5});
    const [movies, setMovies] = useState([]);

    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});

    const createMovieClickHandler = () => {
        // Create a new movie object specifically to be the payload to the server
        const newMovie = {
            ...movie,
            _id: (new Date()).getTime().toString()
        };

        fetch(MOVIE_API, {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(movies => {
                setMovies(movies);
            })
    }

    const deleteMovie = (movie) =>
        fetch(MOVIE_API+`${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    useEffect(() =>
            fetch(MOVIE_API)
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const saveMovie = () =>
        fetch(MOVIE_API+`${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    return (
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-end ms-2">
                        Create
                    </button>
                    <input className="form-control"
                           value={movie.title}
                           onChange={onMovieTitleChange}
                           style={{width: "70%"}}/>
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary float-end"
                        style={{marginTop: " -36px"}}>
                        Save
                    </button>

                </li>

                {
                    movies.map((movie, key) =>
                        <li className="list-group-item" key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>


                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;

