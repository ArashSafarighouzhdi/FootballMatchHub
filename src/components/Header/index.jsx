import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Football Match Hub" className={styles.logo} />
        <Navigation />
      </div>
    </div>
  );
};
export default Header;
