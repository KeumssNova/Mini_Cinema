import { FavoritesProvider } from '../Components/FavoritesContext'; // Import Provider

const BookmarkView = () => {
  return (
    <FavoritesProvider>  {/* Wrap Movie component with Provider */}
      <div className="favContainer">
        <Movie />  {/* Remove favorites prop */}
      </div>
    </FavoritesProvider>
  );
};

export default BookmarkView