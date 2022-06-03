import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"

export function Header(){
    return(<div>
        <header>
        <h1 class="text1"> Cooking Pot</h1>
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