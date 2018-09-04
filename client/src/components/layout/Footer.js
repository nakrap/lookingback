import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer>
       <div className="container-fluid footer-wrapper">
        <div className="container">
          <div className="row footer-row">
            <div className="col left-column">
                  <h5>lookingBack</h5>
                  <p  id='lb-text'>A way to memorialize your loved ones</p>
                  <p  id='lb-text'>Created with the sole purpose of preserving forever lasting memories</p>
              </div>

              <div className="col mid-column">
                <h5>Contributors</h5>
                {/* <p id="contributor-text" > */}
                <div className="row">
                <div className="col"></div>
                  <a target="_blank" rel='noreferrer noopener' id="cool-link" className='col footer-link' href="https://github.com/scottgall">Scott Gall</a>
                  <br></br>
                  <div className="col"></div>
                  </div>
                  <div className="row">
                <div className="col"></div>
                  <a target="_blank" rel='noreferrer noopener'id="cool-link" className='col footer-link' href="https://github.com/nakrap">Nick Akrap</a>
                  <br></br>
                  <div className="col"></div>
                  </div>
                  <div className="row">
                <div className="col"></div>
                  <a target="_blank" rel='noreferrer noopener'  id="cool-link"className='col-5 footer-link' href="https://github.com/JeffVongkoth">Jeff Vongkoth</a>
                  <br></br>
                  <div className="col"></div>
                  </div>
                  <div className="row">
                <div className="col"></div>
                  <a target="_blank" rel='noreferrer noopener' id="cool-link"className='col-4 footer-link' href="https://github.com/zankokou">Ken Huynh</a>
                  {/* </p> */}
                  <div className="col"></div>
                  </div>
              </div>

              <div className="col right-column">
                <h5>Check Out the Code</h5>
                <div className="row">
                <div className="col"></div>
                  <p id="code-text" className="col">
                    <a target="_blank" rel='noreferrer noopener' className='footer-link'id="cool-link" href="https://github.com/nakrap/lookingback">GitHub</a>
                   
                   {/* <br></br> 
                   <br></br>
                   <br></br> */}

                  </p>
                  <div className="col"></div>
                  </div>
                  <div className="row copyright">
                  <div className="col">
                   Copyright &copy; {new Date().getFullYear()} lookingBack
                   </div>
</div>
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
