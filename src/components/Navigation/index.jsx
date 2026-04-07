import styles from "./navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <NavLink className={styles.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navItem} to="/matches">
          Matches
        </NavLink>

        <NavLink className={styles.navItem} to="/leagues">
          Leagues
        </NavLink>
        <NavLink className={styles.navItem} to="/national-teams">
          National Teams
        </NavLink>
        <NavLink className={styles.navItem} to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
