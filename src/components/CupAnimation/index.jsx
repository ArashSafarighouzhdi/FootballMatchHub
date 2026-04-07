import LottiePackage from "lottie-react";
import animationData from "../../assets/animations/cup.json";
import styles from "./cupanimation.module.css";

const Lottie = LottiePackage.default;

const CupAnimation = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.animation}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default CupAnimation;
