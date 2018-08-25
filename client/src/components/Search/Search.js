import React from "react";
import "./Search.css";
import logo from "./lookBackLogoNEW.png";
import logo2 from "./lookBackLogo600x600.png";


const Search = () => (
    <div class="ui search">
        <img id='lbLogo' className="center"  src={logo2}/>  

        <div class="ui input search">
            <input id="search-area" type="text" placeholder="search"></input>
            <button id="search" class="ui button search-btn">Search</button>
            <div class="results"></div>
        </div>
    </div>
)

export default Search;