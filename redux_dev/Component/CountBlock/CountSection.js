"use client"
import { useSelector } from "react-redux";
import styles from "./CountSection.module.scss"; // Import the SCSS module

const CountBlock = () => {
  const countValue = useSelector(state=>state?.Data?.data);
  return (
    <div className={styles.container}>
      <div className={styles.bottomLock}>
        <h2>{countValue.length}</h2>
      </div>
    </div>
  );
};

export default CountBlock;
