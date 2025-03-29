import styles from "./destination.module.css";

const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>
          {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet("Pluto", 0)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export default PlanetCard;
