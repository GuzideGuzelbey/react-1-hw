import aboutData from "../../data/about_data.json";
import styles from "./about.module.css";

export default function OurMission() {
  return (
    <section className={styles.mission}>
      <div className={styles.missionContainer}>
        <h2>{aboutData.mission.title}</h2>
        <p className={styles.missionDescription}>
          {aboutData.mission.description}
        </p>
      </div>
    </section>
  );
}
