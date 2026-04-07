import { useNavigate } from "react-router-dom";
import styles from "./leaguescard.module.css";

const LeagueCard = ({ league }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/leagues/${league.code}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div>
        <div className={styles.top}>
          <div className={styles.name}>{league.name}</div>
          <div className={styles.emblem}>
            <img
              src={league.emblem}
              alt={league.name}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.countrycontainer}>
          <img
            src={league.countryFlag}
            alt={league.countryName}
            className={styles.countryflag}
          />
          <div className={styles.countryname}>{league.countryName}</div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
