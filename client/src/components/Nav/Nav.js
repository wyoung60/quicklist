import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "../../components/GoogleAuth/Login";
import Logout from "../../components/GoogleAuth/Logout";
import "../../styles/Nav.css";
import LoginContext from "../../utils/LoginContext";

function NavTabs({ login, logout }) {
  const { id } = useContext(LoginContext);
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (

    <div className="navBar container py-5 max-w-full border-b-2 border-green-500 border-opacity-50 rounded-xl">
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-3 px-3 py-2 animate-pulse">

        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-3 px-3 py-2 navLinks animate-pulse">
        <Link
          to="/NewRecipe"
          className={
            location.pathname === "/NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          New Recipe
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-3 px-3 py-2 navLinks animate-pulse">
        <Link
          to="/SavedRecipe"
          className={
            location.pathname === "/SavedRecipe"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My Recipes
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl  mx-3 px-3 py-2 navLinks animate-pulse">
        <Link
          to="/GroceryList"
          className={
            location.pathname === "/GroceryList"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Grocery List
        </Link>
      </span>
      <h1 className="title text-green-500 md:text-6xl font-bold">QuickList</h1>
      <div className="flex justify-end -my-14 mx-5">
        {id ? (
          <span className="LogInOUT">
            <Logout className="" logout={logout}></Logout>
          </span>
        ) : (
          <span className="LogInOUT">
            <Login className="" login={login}></Login>
          </span>
        )}
      </div>
    </div>
  );
}

export default NavTabs;
