import React from "react";
import { useState, useEffect } from "react";
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
    "https://www.movienewz.com/img/films/poster-holder.jpg";

const Movie = () => {
    const [state, setState] = useState([]); //initializing the state variable as an empty array
    const fetchTrending = async () => {
        const data = await fetch(`
        https://api.themoviedb.org/3/trending/all/day?api_key=d008de29e3ad50061804b7bf62ef97d1`);
        const dataJ = await data.json(); // fetching data from API in JSON Format
        setState(dataJ.results); //storing that data in the state
    };

    useEffect(() => {
        fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
    }, []);

    return (
        <div>
            {state.length > 0 ? (
                state.map((Val) => {
                    const { name, title, poster_path, id } = Val;
                    <div
                        key={id}
                        className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
                        id="card"
                    >
                        <div className="card bg-dark" key={id}>
                            <img
                                src={
                                    poster_path
                                        ? `${img_300}/${poster_path}`
                                        : unavailable
                                }
                                className="card-img-top pt-3 pb-0 px-3"
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center fs-5">
                                    {title || name}
                                </h5>
                            </div>
                        </div>
                    </div>;
                })
            ) : (
                <p>Loading movies...</p>
            )}
        </div>
    );
};

export default Movie;
