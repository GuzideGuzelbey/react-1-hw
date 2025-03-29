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

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} planets in your wishlist.</p>
          )}
          <b>List coming soon after lesson 3!</b>
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

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
