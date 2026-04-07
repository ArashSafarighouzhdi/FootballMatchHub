import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
