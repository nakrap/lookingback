import React from "react";
import "./ThreeThings.css";

const ThreeThings = () => (
    
//     <div className="ui grid container">
//   <div className="ui relaxed divided items">
//     <div className="item">
//       <div className="middle aligned content">
//         <h1 className="ui header">
//         Always Remember... 
//         {/* <span className="disabled">It'll blow your mind.</span> */}
//         </h1>
//         <div className="description">
//           <p className="info-text">
//             A revolutionary way to remember loved ones 
//           </p>
//         </div>
//       </div>
//       <div className="ui right floated large image">
//         <img src="http://placekitten.com/g/400/200" />
//       </div>
//     </div>
//     <div className="item">
//       <div className="ui large image">
//         <img src="http://placekitten.com/g/400/200" />
//       </div>
//       <div className="middle aligned content">
//         <h1 className="ui header">
//         Everlasting Memories...
//          {/* <span className="disabled">it's that good.</span> */}
//         </h1>
//         <div className="description">
//           <p className="info-text">
//           Share precious moments with friends and loved ones
// 	        through an easy to use interface

//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="media">
//       <div className="middle aligned content">
//         <h1 className="ui header">
//         Build Your Family Tree...
//           {/* <span className="disabled">this one.</span> */}
//         </h1>
//         <div className="description">
//           <p className="info-text">
//           Through the process of connecting with loved ones and friends you build connections which can expand your circle of memories
//           </p>
//         </div>
//       </div>
//       <div className="ui right floated large image">
//         <img src="http://placekitten.com/g/400/200" />
//       </div>
//     </div>
//   </div>
// </div>
<div className="container">
<div class="media">
    <div class="media-left">
      <img src="https://images.unsplash.com/photo-1525353297422-7504381dce2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4d40b2476649fc60da344da4171db19&auto=format&fit=crop&w=2549&q=80" style={{height: "250px", width:"396px"}} class="media-object-img"></img>
    </div>
    <div class="media-body">
      <h4 class="media-heading">Always Remember... </h4>
      <p>A revolutionary way to remember loved ones </p>
    </div>
  </div>
  <div class="media">
    <div class="media-body-middle">
      <h4 class="media-heading">Everlasting Memories...</h4>
      <p>Share precious moments with friends and loved ones through an easy to use interface</p>
    </div>
    <div class="media-right">
      <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02258f1572a46129ace07ee417d16eb1&auto=format&fit=crop&w=2550&q=80" style={{height: "250px", width:"396px"}} class="media-object-img"></img>
    </div>
  </div>
  <div class="media">
    <div class="media-left">
      <img src="https://images.unsplash.com/photo-1518791968894-98fbd7c1e1c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b31069721045a9b0763eb09049eab756&auto=format&fit=crop&w=1234&q=80" style={{height: "250px", width:"396px"}} class="media-object-img"></img>
    </div>
    <div class="media-body">
      <h4 class="media-heading">Build Your Family Tree...</h4>
      <p>Through the process of connecting with loved ones and friends you build connections which can expand your circle of memories.</p>
    </div>
  </div>
        </div>
);

export default ThreeThings;