import React from "react";
//  import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import CardItem from "../CardItem";
import "./HomePage.css";
const HomePage = ({ cardsGroup }) => {
  return (
    <div className="all-info">
      {cardsGroup.map((el) => {
        return <CardItem card={el} />;
      })}
    </div>
  );
};

export default HomePage;
