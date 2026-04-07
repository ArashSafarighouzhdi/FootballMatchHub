import { useState, useEffect } from "react";
import Favorite from "../../components/Favorites";
import Loader from "../../components/Loader";

const FavoritesPage = () => {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(saved);
    setIsLoading(false);
  }, []);
  if (isLoading) return <Loader />;
  return <Favorite teams={favorite} />;
};

export default FavoritesPage;
