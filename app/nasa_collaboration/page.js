"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "@/components/nasa_collaboration/RoverPhoto";

const API_KEY = "mjlavkdRN6FbTQfQZUaalr8furUxDd8K0pLllwnd";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  }, []);

  useEffect(() => {
    const fetchDailyImage = async () => {
      try {
        const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
        const dailyImageResponse = await response.json();
        setDailyImg(dailyImageResponse);
      } catch (error) {
        console.error("Failed to fetch NASA daily image:", error);
      }
    };
    fetchDailyImages();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.dailyImgContainer}>
            <img
              className={styles.nasaPicOfTheDayImg}
              src={dailyImg.url}
              alt={dailyImg.title}
            />
            <p className={styles.dailyImgExplanation}>{dailyImg.explanation}</p>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverPhotosContainer}>
              <div className={styles.roverPhotosGrid}>
                {roverPhoto.photos.map((photo) => (
                  <RoverPhoto
                    key={photo.id}
                    src={photo.img_src}
                    date={photo.earth_date}
                    roverName={photo.rover.name}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
