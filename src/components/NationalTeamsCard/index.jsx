import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nationalteamscard.module.css";

const NationalTeamsCard = ({ team }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const found = favorites.some((fav) => fav.id === team.id);
    setIsFavorite(found);
  }, [team.id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFavorite) {
      favorites.push(team);
    } else {
      favorites = favorites.filter((fav) => fav.id !== team.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/national-teams/${team.id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <button
        className={`${styles.starButton} ${isFavorite ? styles.activeStar : ""}`}
        onClick={handleFavoriteClick}
      >
        ★
      </button>

      <div className={styles.flag}>
        <img src={team.crest} alt={team.name} className={styles.crest} />
        <div className={styles.flagOverlay}></div>
      </div>

      <div>
        <span className={styles.name}>{team.name}</span>
      </div>
    </div>
  );
};

export default NationalTeamsCard;
