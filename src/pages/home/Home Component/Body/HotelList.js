import React from "react";

import styles from "./HotelList.module.css";

const HotelList = (props) => {
  const hotelListData = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  return (
    <div className={styles.list}>
      <h3>Hotel guest love</h3>
      <div className={styles.hotelList}>
        {hotelListData.map((e) => {
          return (
            <div>
              <img src={e.image_url}></img>
              <p>
                <a href="./detail">{e.name}</a>
              </p>
              <p>{e.city}</p>
              <p>Starting from {e.rate}$</p>
              <p>
                <span>{e.rate}</span>
                {e.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelList;
