"use client";

import aboutData from "../../data/about_data.json";
import Image from "next/image";
import styles from "./about.module.css";

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section className={styles.ourCrew}>
      <div className={styles.ourCrewContainer}>
        <h2>Our Crew</h2>
        <p className={styles.crewDescription}>{aboutData.crewDescription}</p>
        <div className={styles.teamGrid}>
          {aboutData.crew.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={300}
                className={styles.crewImage}
                priority
              />
              <h3>{member.name}</h3>
              <p className={styles.teamMemberRole}>
                <strong>{member.role}</strong>
              </p>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCrew;
