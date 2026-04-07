import styles from "./nationalteams.module.css";
import { MatchHubIcon } from "../../utils/MatchHubIcons";
import NationalTeamsCard from "../NationalTeamsCard";

const NationalTeams = ({ nationalTeams }) => {
  return (
    <div className={styles.nationalTeamsContainer}>
      <div className={styles.title}>
        <MatchHubIcon />
        <span>National Teams</span>
      </div>

      <div className={styles.list}>
        {[...nationalTeams]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((team) => (
            <NationalTeamsCard key={team.id} team={team} />
          ))}
      </div>
    </div>
  );
};

export default NationalTeams;
