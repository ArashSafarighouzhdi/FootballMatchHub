import LottiePackage from "lottie-react";
import animationData from "../../assets/animations/ball.json";
import styles from "./ballanimation.module.css";

const Lottie = LottiePackage.default;

const BallAnimation = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.animation}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default BallAnimation;
