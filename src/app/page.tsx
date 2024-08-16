import styles from "./page.module.css";
import Welcome from "../components/page/Welcome";
import Events from "../components/page/Events";
import Music from "../components/page/Music";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Events />
      <Music />
    </main>
  );
}
