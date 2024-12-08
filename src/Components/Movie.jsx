import '../assets/js/script.js'
import '../../src/index.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
    "https://www.movienewz.com/img/films/poster-holder.jpg";

const Movie = () => {
    const [state, setState] = useState([]); 
    const [favorites, setFavorites] = useState([]);
    const fetchTrending = async () => {
        const data = await fetch(`
        https://api.themoviedb.org/3/trending/all/day?api_key=d008de29e3ad50061804b7bf62ef97d1`);
        const dataJ = await data.json(); 
        setState(dataJ.results); 
    };

    useEffect(() => {
        fetchTrending(); 
    }, []);

    const handleFavoriteClick = (id) => {
        const isFavorite = favorites.includes(id);
      
        if (isFavorite) {
          setFavorites(favorites.filter((favId) => favId !== id));
          localStorage.setItem("favorites", JSON.stringify(favorites.filter((favId) => favId !== id))); // Update local storage (remove)
        } else {
          setFavorites([...favorites, id]);
          localStorage.setItem("favorites", JSON.stringify([...favorites, id])); // Update local storage (add)
        }
        console.log(favorites);
    };

    

    return (
        <div className='Movies-container gap-4 p-5'>
            {    
                state.map((Val) => {
                    const { backdrop_path, id ,name, title } = Val;
                    const isFavorite = favorites.includes(id);
                    return (
                            <div
                                key={id}
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
                                        className="card-img p-2 rounded"
                                    />
                                    <div className="card-body d-flex justify-content-evenly align-items-center">
                                        <Link to={`/About/${id}`} id='link' key={id}>
                                            <h5 className="card-title text-center fs-5">
                                                {title || name}
                                            </h5>
                                        </Link>
                                        <form className='d-flex align-items-center gap-2'>
                                            <input id='heart' className="heart" type="checkbox" checked={isFavorite} onChange={() => handleFavoriteClick(id)}></input>
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
