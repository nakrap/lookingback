import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer>
       <div className="container-fluid footer-wrapper">
        <div className="container">
          <div className="row footer-row">
            <div className="col left-column">
                  <h4>lookingBack</h4>
                  <p  id='lb-text'>A way to memorialize your loved ones</p>
                  <p  id='lb-text'>Created with the sole purpose of preserving forever lasting memories</p>
              </div>

              <div className="col mid-column" >
                <h4>Contributors</h4>
                <p id="contributor-text">
                  <a target="_blank" rel='noreferrer noopener' className='footer-link' href="https://github.com/scottgall">Scott Gall</a>
                  <br></br>
                  <a target="_blank" rel='noreferrer noopener' className='footer-link' href="https://github.com/nakrap">Nick Akrup</a>
                  <br></br>
                  <a target="_blank" rel='noreferrer noopener' className='footer-link' href="https://github.com/JeffVongkoth">Jeff Vongkoth</a>
                  <br></br>
                  <a target="_blank" rel='noreferrer noopener' className='footer-link' href="https://github.com/zankokou">Ken Huynh</a>
                  </p>
              </div>

              <div className="col right-column">
                <h4>Check Out the Code</h4>
                  <p id="code-text">
                    <a target="_blank" rel='noreferrer noopener' className='footer-link' href="https://github.com/nakrap/lookingback">GitHub</a>
                   
                   <br></br> 
                   <br></br>
                   <br></br>
                   Copyright &copy; {new Date().getFullYear()} lookingBack

                  </p>
              
              </div>
            </div>
          </div>
       </div>

        {/* <div className=" footer-lower">
          <h5 className="white-footer text">All Rights Reserved</h5>
    
        </div> */}

    </footer>
  );
};
