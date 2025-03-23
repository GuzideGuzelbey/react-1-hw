import aboutData from "../../data/about_data.json";
import styles from "./about.module.css";

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section className={styles.values}>
      <div className={styles.valuesContainer}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          {aboutData.values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <span className={styles.valueNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
