import React from "react";
import "./Search.css";

const Search = () => (
    <div class="ui search">
        <div class="ui input search">
            <input id="search-area" type="text" placeholder="search"></input>
            <button id="search" class="ui button search-btn">Search</button>
            <div class="results"></div>
        </div>
    </div>
)

export default Search;