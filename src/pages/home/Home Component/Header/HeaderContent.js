import React from "react";
import Button from "../UI/Button";
import "./HeaderContent.css";
import SearchForm from "./SearchForm";

const HeaderContent = (props) => {
  return (
    <div className="header-content">
      <h1>A lifetime of discount? It's Genious.</h1>
      <span>
        Get rewarded for your travels- unlock instant savings of 10% or more
        with a free acount
      </span>
      <br></br>
      <br></br>

      <Button>Sign in / Register</Button>
    </div>
  );
};

export default HeaderContent;
