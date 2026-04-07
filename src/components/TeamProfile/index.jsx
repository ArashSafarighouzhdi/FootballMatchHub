import { useNavigate } from "react-router-dom";
import styles from "./teamprofile.module.css";

const TeamProfile = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.teamContainer}>
      <button
        className={styles.backBtn}
        onClick={() => navigate("/national-teams")}
      >
        <span className={styles.arrow}>←</span> Back to National Teams
      </button>
      <header className={styles.header}>
        <img src={info?.crest} alt={info?.name} className={styles.flag} />
        <div className={styles.headerText}>
          <h1>
            {info?.name}
            {info?.tla && <span className={styles.tla}>({info.tla})</span>}
          </h1>
          <p>
            <strong>Coach:</strong> {info?.coach?.name || "N/A"}
            <strong> Venue:</strong> {info?.venue || "N/A"}
            <strong> Founded:</strong> {info?.founded}
          </p>
        </div>
      </header>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          Squad ({info?.squad?.length} Players)
        </h3>
        {info?.squad && info.squad.length > 0 ? (
          <div className={styles.tableContainer}>
            <table className={styles.squadTable}>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Position</th>
                  <th>Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {info?.squad?.map((player) => (
                  <tr key={player.id}>
                    <td className={styles.playerName}>{player.name}</td>
                    <td className={styles.pos}>{player.position}</td>
                    <td className={styles.date}>{player.dateOfBirth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.apiWarning}>
            <p>
              Due to using the <strong>Free Tier API</strong>, detailed
              information for this team is currently unavailable
            </p>
            {info?.website && (
              <a href={info.website} target="_blank" rel="noreferrer">
                Official Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default TeamProfile;
