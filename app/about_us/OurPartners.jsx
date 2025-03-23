import styles from "./about.module.css";
import aboutData from "../../data/about_data.json";
import Image from "next/image";

const OurPartners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.partnersContainer}>
        <h2>Our Partners</h2>
        <p className={styles.partnerIntro}>{aboutData.partnerIntro}</p>
        <div className={styles.partnersGrid}>
          {aboutData.partners.map((partner) => (
            <div key={partner.name} className={styles.partnerLogo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
