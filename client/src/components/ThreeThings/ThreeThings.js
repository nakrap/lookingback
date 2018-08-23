import React from "react";
import "./ThreeThings.css";

const ThreeThings = props => (
    
    <div class="ui grid container">
  <div class="ui relaxed divided items">
    <div class="item">
      <div class="middle aligned content">
        <h1 class="ui header">
        Always Remember 
        {/* <span class="disabled">It'll blow your mind.</span> */}
        </h1>
        <div class="description">
          <p>
            A revolutionary way to remember loved ones and friends
          </p>
        </div>
      </div>
      <div class="ui right floated large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </div>
    <div class="item">
      <div class="ui large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div class="middle aligned content">
        <h1 class="ui header">
        Keep memories alive forever 
         {/* <span class="disabled">it's that good.</span> */}
        </h1>
        <div class="description">
          <p>
          Share precious moments with friends and loved ones
	Through an easy to use interface

          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="middle aligned content">
        <h1 class="ui header">
        Build a connection web 
          {/* <span class="disabled">this one.</span> */}
        </h1>
        <div class="description">
          <p>
          Through the process of connecting with loved ones and friends you build connections which can expand your circle of memories
          </p>
        </div>
      </div>
      <div class="ui right floated large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </div>
  </div>
</div>

);

export default ThreeThings;