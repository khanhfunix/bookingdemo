import React from "react";

import styles from "./SearchList.module.css";
import Button from "../../home/Home Component/UI/Button";

const SearchList = (props) => {
  const searchListData = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];
  return (
    <div>
      {searchListData.map((e) => {
        return (
          <div className={styles.listContainer}>
            <img src={e.image_url}></img>
            <div className={styles.flexDescription}>
              <div className={styles.descriptionContainer}>
                <h2>{e.name}</h2>
                <div className={styles.distance}>{e.distance} from center</div>
                <div className={styles.tag}>{e.tag}</div>
                <div className={styles.description}>{e.description}</div>
                <div>{e.type}</div>
                <div className={styles.cancel}>
                  <div>{e.free_cancel ? "Free cancelation" : ""}</div>
                  <div>
                    {e.free_cancel
                      ? "You can cancel later, so lock in this great price today"
                      : ""}
                  </div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.rate}>
                  <div className={styles.rate_text}> {e.rate_text}</div>
                  <div>{e.rate}</div>
                </div>

                <div className={styles.price}>${e.price}</div>

                <div className={styles.priceDescription}>
                  includes taxe and fees
                </div>

                <Button>See Avaibility</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;
