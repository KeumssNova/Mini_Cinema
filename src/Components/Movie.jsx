import '../assets/js/script.js'
import '../../src/index.css'
import { useState, useEffect } from "react";
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
    "https://www.movienewz.com/img/films/poster-holder.jpg";

const Movie = () => {
    const [state, setState] = useState([]); //initializing the state variable as an empty array
    const fetchTrending = async () => {
        const data = await fetch(`
        https://api.themoviedb.org/3/trending/all/day?api_key=d008de29e3ad50061804b7bf62ef97d1`);
        const dataJ = await data.json(); 
        setState(dataJ.results); 
    };

    useEffect(() => {
        fetchTrending(); 
    }, []);


    console.log(state)

    

    return (
        <div className='Movies-container'>
            {    
                state.map((Val) => {
                    const { backdrop_path, id ,name, title } = Val;
                    return (
                        
                        <div
                            key={id}
                            className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
                            id="card"
                        >
                            <div className="card bg-light" key={id}>
                                <img
                                    src={
                                        backdrop_path
                                            ? `${img_300}/${backdrop_path}`
                                            : unavailable
                                    }
                                    alt={title || name}
                                    className="card-img-top pt-3 pb-0 px-3"
                                />
                                <div className="card-body d-flex justify-content-evenly align-items-center">
                                    <h5 className="card-title text-center fs-5">
                                        {title || name}
                                    </h5>
                                    <form className='d-flex align-items-center gap-2'>
                                        <input id='heart' className="heart" type="checkbox"></input>
                                        <label> Favoris</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default Movie;
