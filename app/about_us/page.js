"use client";

import Crew from "./Crew";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.about}>About us</h1>
      <Crew />
    </div>
  );
};

export default About;
