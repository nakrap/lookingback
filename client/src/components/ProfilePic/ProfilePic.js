import React from "react";
import "./ProfilePic.css"
// import { PromiseProvider } from "mongoose";
import ModalBox from "../../components/ModalBox";
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class ProfilePic extends React.Component {
render(){
    return(
    <div>
        <div className="container-fluid topWrapper">
            <div className="container">
                <div className=" picture">
                <img className="ui medium rounded image pic" src={this.props.image}/>
                </div>
                <div className="bio">
                    <h1 className='name'>{this.props.name}</h1>
                    <p className='birthday'>{this.props.birthday}</p>
                    <p className='description'>{this.props.description}</p>
                </div>
            </div>
        </div>
        

        </div>
    )
}

}

export default ProfilePic;
