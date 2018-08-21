import React from "react";
import "./PictureBanner.css"
// import banner from "./balcony.jpg"
// import { PromiseProvider } from "mongoose";

const PictureBanner = (props) => (
<div>
    <img className="banner" src={props.banner} alt='banner'/>
  
</div>
);

export default PictureBanner;
