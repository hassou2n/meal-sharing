import React from "react";
import { Link } from "react-router-dom";
import mealsContext from "./MealsContext";
import { useMeals } from "./UseMeals";
import "./Style.css";
import { FaCoins, FaMapPin } from "react-icons/fa";

export default function MealsList() {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? "No meals"
    : meals.map((aMeal) => {
        return (
          <div className="recipeMealsContainer" key={aMeal.idMeals}>
          <Link to={`/meal/${aMeal.idMeals}`}>{aMeal.title}</Link>
          <span>{aMeal.description}</span>
          <span><FaMapPin /> {aMeal.location}</span>
          <span> <FaCoins /> {aMeal.price} DKK </span>
        </div>
        );
      });

  return (
    <div className="containerMeals">
      <ul className="recipeMealsList">{mealsToRender}</ul>
    </div>
  );
}
