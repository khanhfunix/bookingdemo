import React from "react";
import { DateRange } from "react-date-range";
import "./SearchForm.css";
import Button from "../UI/Button";
const SearchForm = (props) => {
  const searchLocateHandler = (e) => {
    e.preventDefault();
    window.location.assign("/search");
  };
  return (
    <form className="form" onSubmit={searchLocateHandler}>
      <input
        type="text"
        id="place"
        placeholder="&#xf236; Where are you going?"
        className="fontAwesome"
      ></input>
      <label htmlFor="place"></label>
      <input
        type="date"
        id="time"
        className="fontAwesome"
        placeholder="23/5/2023 to 23/5/2023"
      ></input>
      <label htmlFor="time"></label>
      <input
        id="quantity"
        type="search"
        className="fontAwesome"
        placeholder="&#xf182; 1 aldult 0 children 1 room"
      ></input>
      <label htmlFor="quantity"></label>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
