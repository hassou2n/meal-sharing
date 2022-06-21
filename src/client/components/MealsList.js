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
          <div className="forList">
            <div className="row1">
              <div key={aMeal.idMeals}>
                <h4>
                  <Link to={`/meal/${aMeal.idMeals}`}>{aMeal.title}</Link>
                </h4>
                <p>{aMeal.description}</p>
                <p>
                  <FaMapPin /> {aMeal.location}
                </p>
                <p>
                  {" "}
                  <FaCoins /> {aMeal.price} DKK{" "}
                </p>
              </div>
            </div>
          </div>
        );
      });

  return (
    <div className=" container">
      <ul className="row">{mealsToRender}</ul>
    </div>
  );
}
