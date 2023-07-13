import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerificationCode() {



  return (
   <>
      <ToastContainer />
      <div id='mainContente'>

      <div className="peers ai-s fxw-nw h-100vh">
      <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: "url('https://paramsolutions.dev/images/param-banner.svg')",
    backgroundColor:"#263F22", backgroundSize:"80%"}}>
        <div className="pos-a centerXY">
          <div className="bdrs-50p pos-r" style={{width: "120px",height: "120px"}}>
            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: "320px", textAlign:"left"}}>
        <h4 style={{fontSize:"25pt"}} className="fw-300 c-grey-900 mB-40">Forgot Password</h4>
        {/* <form> */}
        <div className="flex justify-center">
  <div className="border border-blue-500 m-2">
    <input type="text" className="bg-gray-100 p-2 rounded-full" />
  </div>
  <div className="border border-blue-500 m-2">
    <input type="text" className="bg-gray-100 p-2 rounded-full" />
  </div>
  <div className="border border-blue-500 m-2">
    <input type="text" className="bg-gray-100 p-2 rounded-full" />
  </div>
  <div className="border border-blue-500 m-2">
    <input type="text" className="bg-gray-100 p-2 rounded-full" />
  </div>
</div>


        
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer" style={{paddingTop: "5%"}}>
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                 
               
                  <a><button  className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
                      border: "none",
                      borderRadius:" 0px",
                      marginLeft:"35%",
                      paddingLeft: "35%",
                      paddingRight: "35%",
                      width: "160px"}}>Send</button>
                    </a>

                </div>
              </div>
             
            </div>
          </div>

       
         
        
    
      </div>
    </div>
    


      </div>
    </>
  );
}

    export default VerificationCode;
