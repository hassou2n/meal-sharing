import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"
import Logo from "../assets/images/logo.svg"

export function Header(){
    return(
        <header>
            <Link> <div><img src={Logo}/> Cooking Pot</div></Link>

    <nav>
        <ul className="headerUl">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/meals"}><li>Meals</li></Link>
            <Link to={"/addMeal"}><li>Add Meal</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
        </ul>
    </nav>
    </header>)
   
}