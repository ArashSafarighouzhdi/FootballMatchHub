import styles from "./recentmatches.module.css";
import { MatchHubIcon } from "../../utils/MatchHubIcons";
import RecentMatchCard from "../RecentMatchCard";

const RecentMatches = ({ matches }) => {
  return (
    <div className={styles.recentContainer}>
      <div className={styles.title}>
        <MatchHubIcon />
        <span>Recent Matches</span>
      </div>
      <div className={styles.list}>
        {matches.map((match) => (
          <RecentMatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
export default RecentMatches;
