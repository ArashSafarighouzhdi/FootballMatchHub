import { useNavigate } from "react-router-dom";
import styles from "./standingtable.module.css";

const StandingTable = ({ standings, season }) => {
  const navigate = useNavigate();
  const { startDate, endDate, currentMatchday } = season || {};

  const startYear = startDate?.slice(0, 4);
  const endYear = endDate?.slice(0, 4);
  const displayYear =
    startYear === endYear ? startYear : `${startYear}-${endYear}`;
  return (
    <>
      <div className={styles.top}>
        <button className={styles.backBtn} onClick={() => navigate("/leagues")}>
          <span>←</span> Back to Leagues
        </button>
        <div className={styles.seasonInfo}>
          {currentMatchday && (
            <span className={styles.matchday}>Matchday {currentMatchday}</span>
          )}
          <span className={styles.yearText}>Season: {displayYear}</span>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.posCol}>#</th>
              <th className={styles.teamCol}>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th className={styles.hideMobile}>GF</th>
              <th className={styles.hideMobile}>GA</th>
              <th>GD</th>
              <th className={styles.ptsCol}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr key={row.team.id} className={styles.row}>
                <td className={styles.position}>{row.position}</td>

                <td className={styles.teamCell}>
                  <div className={styles.teamInfo}>
                    <img
                      src={row.team.crest}
                      alt={row.team.name}
                      className={styles.crest}
                    />
                    <span className={styles.teamName}>
                      {row.team.shortName || row.team.name}
                    </span>
                  </div>
                </td>

                <td>{row.playedGames}</td>
                <td>{row.won}</td>
                <td>{row.draw}</td>
                <td>{row.lost}</td>
                <td className={styles.hideMobile}>{row.goalsFor}</td>
                <td className={styles.hideMobile}>{row.goalsAgainst}</td>
                <td className={styles.gd}>
                  {row.goalDifference > 0
                    ? `+${row.goalDifference}`
                    : row.goalDifference}
                </td>
                <td className={styles.points}>{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StandingTable;
