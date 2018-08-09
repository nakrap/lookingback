import React from "react";
import "./Welcome.css"

class Welcome extends React.Component {
  state = {
    display: true
  }

  closeMessage = (e) =>{
    this.setState({
      display: false
    })
    console.log(this.state.display);
    }
  
  render() {
    const display = this.state.display;

    if (display === true){
      return(
        <div className="welcomeMessage">
          <div className="ui yellow message ">
            <i className="close icon" onClick={this.closeMessage}></i>
            <div className="header ">
            Welcome back {this.props.name}!!!
            </div>
            <p>What are you up?</p>
          </div>
        </div>
      )
    } else{
      return(
        <div>

        </div>
      )
    }
    
  }
}


export default Welcome;
