"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem, planets }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );
  const [planetName, setPlanetName] = useState("");

  const onAddItemPressed = () => {
    if (!planetName.trim()) {
      return;
    }

    onAddWishlistItem({ name: planetName, thumbnail });

    setPlanetName("");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        onChange={(e) => setPlanetName(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(e) => onThumbnailChange(e.target.value)}
      >
        {planets.map((planet) => (
          <option key={planet.name} value={planet.thumbnail}>
            {planet.name}
          </option>
        ))}
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
