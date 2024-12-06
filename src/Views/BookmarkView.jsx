import Movie from "../Components/Movie";

const BookmarkView = () => {
  return (
    
      <div className="favContainer">
        <Movie />  {/* Remove favorites prop */}
      </div>

  );
};

export default BookmarkView