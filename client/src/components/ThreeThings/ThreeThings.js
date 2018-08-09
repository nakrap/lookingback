import React from "react";
import "./ThreeThings.css";

const ThreeThings = props => (
    
    <div class="ui grid container">
  <div class="ui relaxed divided items">
    <div class="item">
      <div class="middle aligned content">
        <h1 class="ui header">
          First featurette heading. <span class="disabled">It'll blow your mind.</span>
        </h1>
        <div class="description">
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
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
          Oh yeah, <span class="disabled">it's that good.</span>
        </h1>
        <div class="description">
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="middle aligned content">
        <h1 class="ui header">
          And lastly, <span class="disabled">this one.</span>
        </h1>
        <div class="description">
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
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