import styles from "./footer.module.css";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h3>
            Football <span>MatchHub</span>
          </h3>
          <p>Stay updated with live scores and football insights.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/matches">Matches</a>
            </li>
            <li>
              <a href="/leagues">Leagues</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>

        <div className={styles.rightside}>
          <h4>
            Developed by <span>Arash</span>
          </h4>
          <div className={styles.socials}>
            <a href="https://safariarash.dev" target="_blank" rel="noreferrer">
              <FaGlobe /> Portfolio
            </a>
            <a
              href="https://github.com/ArashSafarighouzhdi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/safariarash"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy;Arash2026 - Football MatchHub. </p>
      </div>
    </footer>
  );
};

export default Footer;
