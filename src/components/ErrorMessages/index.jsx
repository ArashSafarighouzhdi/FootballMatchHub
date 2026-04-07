import { useEffect, useState } from "react";
import styles from "./errormessages.module.css";

export const MatchesErrorMessage = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isDisabled = timeLeft > 0;

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <p className={styles.errorText}>
          Match data is temporarily unavailable due to API limits.
        </p>

        <button
          className={`${styles.retryBtn} ${
            isDisabled ? styles.retryBtnDisabled : ""
          }`}
          disabled={isDisabled}
          onClick={() => window.location.reload()}
        >
          {isDisabled ? `Try Again after ${timeLeft}s` : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export const ErrorMessage = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isDisabled = timeLeft > 0;

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <p className={styles.errorText}>
          Data is temporarily unavailable due to API limits.
        </p>

        <button
          className={`${styles.retryBtn} ${
            isDisabled ? styles.retryBtnDisabled : ""
          }`}
          disabled={isDisabled}
          onClick={() => window.location.reload()}
        >
          {isDisabled ? `Try Again after ${timeLeft}s` : "Try Again"}
        </button>
      </div>
    </div>
  );
};
