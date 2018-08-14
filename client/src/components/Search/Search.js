import React from "react";
import "./Search.css";

const Search = () => (
    <div class="ui search">
        <div class="ui icon input">
            <input class="prompt" type="text" placeholder="search"></input>
            <i class="search icon"></i>
            <div class="results"></div>
        </div>
    </div>
)

export default Search;