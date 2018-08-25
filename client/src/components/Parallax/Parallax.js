import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Search from "../Search/Search";
import ThreeThings from "../ThreeThings/ThreeThings";
import Steps from "../Steps/Steps";
import logo from "./lookBackLogoNEW.png";

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const img1 = "https://image.ibb.co/kGkDyK/pablo_1.png";
const img2 = "https://image.ibb.co/exp6JK/pablo_2.png";
const img3 = "https://image.ibb.co/gYmaCe/pablo_3.png";
const img4 = "https://image.ibb.co/hHSaNe/pablo_4.png";
const img5 = "https://image.ibb.co/b0CLoK/pablo_5.png";
const img6 = "https://image.ibb.co/gekJaz/pablo_6.png";
// https://image.ibb.co/hHSaNe/pablo_4.png
// https://image.ibb.co/b0CLoK/pablo_5.png
// https://image.ibb.co/gekJaz/pablo_6.png
const ParallaxComponent = () => (
<div>
 

    <Parallax bgImage={img4}
      strength={100}>
      <div className="search-div center"  style={{height: 500}}>
      <Search/>
      </div>
      <div className="steps-div" style={{padding:120}}>
          <Steps/>
          </div>
    </Parallax>
    <Parallax bgImage={img5} blur={{min: -1,max:3}}>
      <div id="hands" style={{height: 500}}>
        {/* <div style={insideStyles}>Dynamic Blur</div> */}
      </div>
    </Parallax>
    <div className="ThreeThings-div">
          <ThreeThings/>
          </div>
    <Parallax bgImage={img6} strength={100}>
      <div id="photobook"style={{height: 500}}>
        {/* <div style={insideStyles}>Reverse direction</div> */}
      </div>
    </Parallax>
  </div>
);
export default ParallaxComponent;
