import LottiePackage from "lottie-react";
import animationData from "../../assets/animations/loader.json";
import styles from "./loader.module.css";

const Lottie = LottiePackage.default;

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <p className={styles.text}>Loading MatchHub...</p>
      <div className={styles.animation}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default Loader;
