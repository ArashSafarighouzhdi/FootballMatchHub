import styles from "./recentmatchcard.module.css";

const RecentMatchCard = ({ match }) => {
  const homeScore = match.score?.fullTime?.home ?? "-";
  const awayScore = match.score?.fullTime?.away ?? "-";

  const date = new Date(match.utcDate).toLocaleDateString();

  const homeLogo = match.homeTeam?.crest || null;
  const awayLogo = match.awayTeam?.crest || null;

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

        <span className={styles.score}>
          {homeScore} : {awayScore}
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
            <span className={styles.league}>{match.competition.name}</span>
          </div>
        </div>

        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default RecentMatchCard;
