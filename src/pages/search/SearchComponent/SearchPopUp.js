import React from "react";

import styles from "./SearchPopUp.module.css";

import Button from "../../home/Home Component/UI/Button";

const SearchPopUp = (props) => {
  return (
    <div className={styles.popupContainer}>
      <h3>Search</h3>
      <form>
        <div className={styles.mainForm}>
          <label htmlFor="destination">Destination</label>
          <br></br>
          <input type="text" id="destination"></input>
          <br></br>
          <label htmlFor="date"> Check-in Date</label>
          <br></br>
          <input type="date" id="date"></input>
        </div>
        <p>Options</p>
        <div className={styles.quantityForm}>
          <div className={styles.flexForm}>
            <label htmlFor="min"> Min price per night</label>
            <input type="number" id="min"></input>
          </div>
          <div className={styles.flexForm}>
            <label htmlFor="max"> Max price per night</label>
            <input type="number" id="max"></input>
          </div>
          <div className={styles.flexForm}>
            <label htmlFor="aldult"> Aldult</label>
            <input type="number" id="aldult"></input>
          </div>
          <div className={styles.flexForm}>
            <label htmlFor="children"> children</label>
            <input type="number" id="children"></input>
          </div>
          <div className={styles.flexForm}>
            <label htmlFor="room"> Room</label>
            <input type="number" id="room"></input>
          </div>
        </div>
        <div className={styles.btn}>
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchPopUp;
