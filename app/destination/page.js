"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import planetData from "../../data/planet_data.json";
import PlanetCard from "../../components/destination/PlanetCard";
import PlanetWishlistItem from "../../components/destination/PlanetWishlistItem";

export const Destinations = () => {
  const [planets, setPlanets] = useState(planetData);
  const selectedPlanets = planets.filter((planet) => planet.isSelected);
  const numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
    setPlanets((prevPlanets) =>
      prevPlanets.map((planet) =>
        planet.name === name
          ? { ...planet, isSelected: !planet.isSelected }
          : planet
      )
    );
    console.log(`You seleceted the following planet: ${name}`);
  };

  const removeFromWishlist = (name) => {
    onAddOrRemovePlanet(name);
  };

  const handleAddWishListItem = (newPlanet) => {
    const planetToAdd = {
      name: newPlanet.name,
      thumbnail: newPlanet.thumbnail,
      description: newPlanet.description,
      isSelected: true,
    };

    setPlanets((prevPlanets) => [...prevPlanets, planetToAdd]);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <div>
              <p>You have {numberOfPlanets} planets in your wishlist.</p>
              <h3>Your current wishlist</h3>
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => removeFromWishlist(planet.name)}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={planet.isSelected}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
            />
          ))}
          <AddWishlistItem
            onAddWishlistItem={handleAddWishListItem}
            planets={planets}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
