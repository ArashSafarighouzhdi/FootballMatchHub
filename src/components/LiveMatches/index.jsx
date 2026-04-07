import styles from "./livematches.module.css";
import { MatchHubIcon } from "../../utils/MatchHubIcons";
import LiveMatchCard from "../../components/LiveMatchCard";

const LiveMatches = ({ matches }) => {
  const LiveMatchCount = matches.filter((c) => c.status !== "TIMED").length;

  return (
    <div className={styles.liveContainer}>
      <div className={styles.title}>
        <MatchHubIcon />
        <span>Live Matches</span>
        <button className={styles.tag}>
          {LiveMatchCount === 0 ? " No live matches at the moment" : "LIVE"}
        </button>
      </div>
      <div className={styles.list}>
        {matches.map((match) => (
          <LiveMatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
export default LiveMatches;
