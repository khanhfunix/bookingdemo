import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./DetailContent.module.css";
import Button from "../home/Home Component/UI/Button";

const DetailContent = (props) => {
  const detailData = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailInfo}>
        <div>
          <h2>{detailData.name}</h2>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{detailData.address}</span>
          <div>{detailData.distance}</div>
          <div>{detailData.price}</div>
        </div>
        <div>
          <Button>Reserve or book now</Button>
        </div>
      </div>
      <div className={styles.imgSection}>
        {detailData.photos.map((e) => {
          return <img src={e}></img>;
        })}
      </div>
      <div className={styles.detailText}>
        <div className={styles.text}>
          <h2>{detailData.title}</h2>
          <div>{detailData.description}</div>
        </div>
        <div className={styles.detailWrap}>
          <h3>Perfect for 9 night stay</h3>
          <div>
            Located in the real heart of Krakow, this property has an Excellent
            location score of 9.8!
          </div>
          <div className={styles.price}>
            ${detailData.nine_night_price}
            <span> (9 night) </span>
          </div>
          <Button>Reserve or Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
