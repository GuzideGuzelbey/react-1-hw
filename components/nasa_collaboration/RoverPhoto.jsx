import styles from "../../app/nasa_collaboration/page.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhoto}>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img src={src} alt={`${roverName} - ${date}`} />
    </div>
  );
};

export default RoverPhoto;
