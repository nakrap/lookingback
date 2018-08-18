import React from "react";
import "./ProfilePic.css"
// import { PromiseProvider } from "mongoose";
import Modal from "../../components/Modal";


const ProfilePic = props => (
    <div>
        <div className="container-fluid topWrapper">
            <div className="container">
                <div className=" picture">
                    <img className="ui medium rounded image pic" src={props.image}/>
                </div>

                <div className="bio">
                    <h1 className='name'>{props.name}</h1>
                    <p className='birthday'>{props.birthday}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
        </div>
        <Modal/>
    </div>

)


export default ProfilePic;
