import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import SearchBarJumbo from "../SearchBarJumbo/SearchBarJumbo";
import ThreeThings from "../ThreeThings/ThreeThings";
import Steps from "../Steps/Steps";
import "./Parallax.css";
// import QuoteSnippet from "../QuoteSnippet/QuoteSnippet";
// import logo from "./lookBackLogoNEW.png";

// const insideStyles = {background: 'white', padding: 20, position: 'abolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const img1 = "https://image.ibb.co/kGkDyK/pablo_1.png";
const img2 = "https://image.ibb.co/exp6JK/pablo_2.png";
const img3 = "https://image.ibb.co/gYmaCe/pablo_3.png";
const img4 = "https://images.unsplash.com/photo-1504004581186-ec07a08d8256?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66057acef8c7285c548f952e755ade22&auto=format&fit=crop&w=2550&q=80";
const img5 = "https://image.ibb.co/b0CLoK/pablo_5.png";
const img6 = "https://images.unsplash.com/photo-1528569937393-ee892b976859?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b5b9ed51391d1b4098b461fb1e0043c&auto=format&fit=crop&w=2550&q=80";
const img7 = "https://image.ibb.co/gOmMDU/fullsizeoutput_5.jpg";
const img8 = "https://image.ibb.co/fTGeQK/lookingbackedited.jpg";
// https://image.ibb.co/hHSaNe/pablo_4.png
// https://image.ibb.co/b0CLoK/pablo_5.png
// https://image.ibb.co/gekJaz/pablo_6.png
const ParallaxComponent = () => (
<div>

    <Parallax bgImage={img7}
      strength={300}>
      <h1 id='app-title'>lookingBack</h1>
      <div style={{height: 215}}></div>

      <div className="steps-div" style={{padding:120}}>
          <Steps/>
          </div>
    </Parallax>
    <Parallax bgImage={img5}>
      <div id="hands" style={{height: 500}}>
        {/* <div style={insideStyles}>Dynamic Blur</div> */}
      </div>
      {/* <QuoteSnippet style={{color:"white"}}/> */}

    </Parallax>
    <div className="ThreeThings-div">
          <ThreeThings/>
          </div>
    <Parallax bgImage={img6} strength={-300}>
      <div id="photobook"style={{height: 600}}>
        {/* <div style={insideStyles}>Reverse direction</div> */}
      </div>
      {/* <QuoteSnippet style={{color:"white"}}/> */}

    </Parallax>
  </div>
);
export default ParallaxComponent;
