import styles from "./livematchcard.module.css";
import { GetTime } from "../../utils/GetTime";

const LiveMatchCard = ({ match }) => {
  const homeLogo = match.homeTeam?.crest || null;
  const awayLogo = match.awayTeam?.crest || null;

  const matchStatus = match.status || "SCHEDULED";
  const isUpcoming = matchStatus === "TIMED" || matchStatus === "SCHEDULED";

  const homeScore = match.score?.fullTime?.home ?? "-";
  const awayScore = match.score?.fullTime?.away ?? "-";

  const timeUntilKickoff = GetTime(match.utcDate);

  const matchTime =
    matchStatus === "IN_PLAY"
      ? "Live Now"
      : matchStatus === "PAUSED"
        ? "Half Time"
        : matchStatus === "FINISHED"
          ? "Finished"
          : "";

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={`${styles.team} ${styles.homeTeam}`}>
          {homeLogo && (
            <img
              src={homeLogo}
              alt={match.homeTeam.name}
              className={styles.logo}
            />
          )}
          <span>{match.homeTeam.name}</span>
        </div>

        <span className={isUpcoming ? styles.timed : styles.score}>
          {isUpcoming ? timeUntilKickoff : `${homeScore} : ${awayScore}`}
        </span>

        <div className={`${styles.team} ${styles.awayTeam}`}>
          {awayLogo && (
            <img
              src={awayLogo}
              alt={match.awayTeam.name}
              className={styles.logo}
            />
          )}
          <span>{match.awayTeam.name}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.leagueInfo}>
          {match.area?.flag && (
            <img
              src={match.area.flag}
              alt={match.competition.name}
              className={styles.flag}
            />
          )}

          <div className={styles.leagueText}>
            <span className={styles.league}>{match.competition?.name}</span>
          </div>
        </div>

        <span className={styles.status}>
          {isUpcoming ? "Upcoming" : matchTime}
        </span>
      </div>
    </div>
  );
};

export default LiveMatchCard;
