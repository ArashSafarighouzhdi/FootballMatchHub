import styles from "./leagues.module.css";
import { MatchHubIcon } from "../../utils/MatchHubIcons";
import LeaguesCard from "../LeaguesCard";

const Leagues = ({ leagues }) => {
  return (
    <div className={styles.leaguesContainer}>
      <div className={styles.title}>
        <MatchHubIcon />
        <span>Top Leagues</span>
      </div>

      <div className={styles.list}>
        {leagues?.map((league) => (
          <LeaguesCard key={league.id} league={league} />
        ))}
      </div>
    </div>
  );
};

export default Leagues;
