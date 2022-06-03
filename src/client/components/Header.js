import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"
import Logo from "../assets/images/logo.svg"

export function Header(){
    return(<div>
        <header>
            <div><img src={Logo}/> Cooking Pot</div>
    </header>

    <nav>
        <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/"}><li>About</li></Link>
            <Link><li>Contact</li></Link>
        </ul>
    </nav>
    </div>)
   
}