import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <div>
      <header className="forHeader">
        <Link>
          {" "}
          <div className="forImg">
            <img src={Logo} /> Cooking Pot
          </div>
        </Link>
      </header>
      <nav className="forNav">
        <div>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/meals"}>
              <li>Meals</li>
            </Link>
            <Link to={"/addMeal"}>
              <li>Add Meal</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
