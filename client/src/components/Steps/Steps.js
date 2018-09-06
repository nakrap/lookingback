import React from "react";
import "./Steps.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faIdCard, faUsers } from '@fortawesome/free-solid-svg-icons'



const Steps = props => (
  <div  id="steps-column" class="row">
  <div class="col-lg-4">
    <FontAwesomeIcon icon={faUsers} size="8x"/>

    {/* <img class="ui centered small circular image" src="http://www.txstate.edu/cachee573b69ce9465908a27e25de0df62a92/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:bb4d517e-7d5c-41fb-866b-b547ba49dfbc/Step%2B1.png?mode=fit&amp;width=234" /> */}
    <h1 class="ui header">
      Create an Acount
    </h1>
    <p>
      Signing up is simple and easy. <br></br>Click on the Sign Up link and you'll be on your way!
    </p>

  </div>
  <div class="col-lg-4">
  <FontAwesomeIcon icon={faIdCard} size="8x"/>
    {/* <img class="ui centered small circular image" src="http://www.txstate.edu/cachee573b69ce9465908a27e25de0df62a92/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:b633724f-ac00-443f-aa4c-6248cd890cb7/Step%2B2.png?mode=fit&amp;width=234" /> */}
    <h1 class="ui header">
      Design a Tribute
    </h1>
    <p>
      Make a page for your loved ones. 
      <br></br>
      Upload a picture, tell us about them, <br></br>share with friends and family.
      <br></br>
     
    </p>

  </div>
  <div class="col-lg-4">
  <FontAwesomeIcon icon={faBookOpen} size="8x"/>
      {/* <img class="ui centered small circular image" src="http://www.txstate.edu/cachefcf9bbef0bef7cdca4662ec7ae8cb39c/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:4f124a77-07a3-4ebc-8b8e-89bc8a7a76c3/Step%2B3.png?mode=fit&amp;width=234" /> */}
    <h1 class="ui header">
      Memorialize Forever
    </h1>
    <p>
      Your loved ones will never be forgotten.
      <br></br>
      Tributes last forever, come back       
      <br></br>
      anytime to add or update!
    </p>

  </div>
</div>
);

export default Steps;
