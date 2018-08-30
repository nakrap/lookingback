import React from "react";
import "./Search.css";
import logo2 from "./lookBackLogo600x600.png";


const Search = () => (
    <div class="ui search">
        {/* <img id='lbLogo' className="center"  src={logo2}/>   */}

        {/* <div class="ui input search">
            <input id="search-area" type="text" placeholder="search"></input>
            <button id="search" class="ui button search-btn">Search</button>
            <div class="results"></div>
        </div> */}
        <div class="row">
        <div class="col-4"></div>
        <div class="input-group col-3 search-bar">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
</div>
</div>
    </div>
)

export default Search;