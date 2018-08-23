import React, { Component } from "react";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Browse from "../../components/Browse";

class Browsepage extends Component {
    
    render() {
        return (
            
            <div style={{background:"url(https://image.ibb.co/h1S0OK/pablo_7.png)", 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
                <div className="nav-browse" style= {{background:"black"}}>
                {/* <Nav />  */}
                </div>
                <div className="search-div"  style={{padding:"400px 0px 0px 0px", marginBottom:"0px"}}>
                <Search/>
                </div>
                <h1 style={{color:"white",  textAlign:"center"}}>Reconnect with loved ones</h1>
                
                <Browse/>
            </div>

        )
    }
}

export default Browsepage;