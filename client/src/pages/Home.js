import React from "react";

import "../styles/Home.css";
import { Link, Route } from "react-router-dom";

function Home(props) {
  {
    console.log("props:", props);
  }
  return (
    <div className="article  ">
      <br className=""></br>
      <h1 className="py-8 px-8 m-40 bg-green-300 font-bold text-center rounded-xl">
        <h2 className="aside sectionTop">Groceries for the changing world! </h2>

        <p>
          Quick-list wants to make your life super easy and as stress free as
          possible during these times of COVID! This application will help you
          to sync up your favorite meals, the ingredients you need make them, to
          create a grocery list that allows you to get in and out of the grocery
          store quickly. Find that grocery item, delete it as you cruise the
          store aisles. Store that new favorite recipe for use in the future.
          This application is your friend in so many ways!
        </p>
      </h1>
      <h3>.</h3>
    </div>
  );
}

export default Home;
