import NationalTeamsCard from "../NationalTeamsCard";
import { MatchHubIcon } from "../../utils/MatchHubIcons";
import styles from "./favorites.module.css";

const Favorites = ({ teams }) => {
  if (teams.length === 0) {
    return (
      <div className={styles.emptyFavorites}>
        <p className={styles.Text}>No favorites added yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.favoriteContainer}>
      <div className={styles.title}>
        <MatchHubIcon />
        <span>My Favorite Teams</span>
      </div>

      <div className={styles.list}>
        {teams.map((team) => (
          <NationalTeamsCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
