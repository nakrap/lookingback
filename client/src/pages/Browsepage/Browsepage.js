import React, { Component } from "react";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Browse from "../../components/Browse";

class Browsepage extends Component {
    render() {
        return (
            <div>
                <Nav/> 
                <div className="search-div">
                <Search/>
                </div>
                <h1>Reconnect with loved ones</h1>
                <Browse/>
            </div>

        )
    }
}

export default Browsepage;