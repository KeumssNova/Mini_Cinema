import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookmarkView = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    //locale storage data
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  //bouton remove
  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((favId) => favId !== id));
    localStorage.setItem("favorites", JSON.stringify(favorites.filter((favId) => favId !== id))); // Update local storage
  };

  //fetch donnée fqvorite
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await Promise.all(
        favorites.map(async (id) => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d008de29e3ad50061804b7bf62ef97d1`);
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error fetching movie details:", error);

            return null;
          }
        })
      );
      setFavoriteMovies(movieDetails);
    };

    fetchMovieDetails();
  }, [favorites]);

  return (
    <div className="favContainer d-flex justify-content-center">
        <div>
            <div className="text-center"><h1>Favorites</h1></div>
            <div className="favCard-container gap-3">            
                {favoriteMovies.map((movie) => {
                    return (
                        <div key={movie.id} id="favCard" className="card d-flex flex-column justify-content-between">
                            <img className="card-image rounded " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <div className="card-body">
                                <Link to={`/About/${movie.id}`}>
                                <h2>{movie.title}</h2>
                                </Link>
                                <p>{movie.overview}</p>
                            </div>
                            <button className="btn bg-light" onClick={() => handleRemoveFavorite(movie.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>

        </div>




    </div>
  );
};

export default BookmarkView;