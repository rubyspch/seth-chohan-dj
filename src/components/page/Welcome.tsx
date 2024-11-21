/* eslint-disable @next/next/no-img-element */
import Header from "../layout/Header";
import styles from "../styles/components.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <img src="/seth.jpg" alt="Photo of Seth DJing" className={styles.image} />
      <h1 className={styles.welcomeHeader}>Seth Chohan</h1>
      <Header />
    </div>
  );
};
export default Welcome;
