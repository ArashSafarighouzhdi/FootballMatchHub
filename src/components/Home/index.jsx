import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import BallAnimation from "../BallAnimation";
import CupAnimation from "../CupAnimation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Container}>
      <div>
        <h1 className={styles.title}>Stay on Top of Football</h1>
        <p className={styles.subtitle}>
          Live scores, leagues, and National Teams
          <p>
            <strong>All in one place</strong>
          </p>
        </p>

        <div className={styles.cardContainer}>
          <div className={styles.Card} onClick={() => navigate("/matches")}>
            <BallAnimation />
            <div className={styles.textContainer}>
              <h3>View Live Scores & Stats</h3>
              <p>Get real-time scores & standing.</p>
            </div>
          </div>

          <div className={styles.Card} onClick={() => navigate("/leagues")}>
            <CupAnimation />
            <div className={styles.textContainer}>
              <h3>Explore Leagues</h3>
              <p>Track your favorite teams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
