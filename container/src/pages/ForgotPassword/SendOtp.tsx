import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BasicOTPComponent } from '../components/basic-otp';

function SendOtp() {
  const [otp, setOTP] = useState("");

  const ChangePassword = () => {
    window.location.href = '#/newpassword';  
    window.location.reload();
  }
  

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
        <h4 style={{fontSize:"25pt"}} className="fw-300 c-grey-900 ">Enter OTP</h4>
        {/* <form> */}


        <div className="flex justify-center" style={{marginTop:"12%"}}>
            <BasicOTPComponent
                onChange={(value: any) => {
                  console.log(value);
                  setOTP(value);
                }}
                />
               
                  <a><button onClick = {ChangePassword}  className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
                      border: "none",
                      borderRadius:" 0px",
                      marginRight:"7%",
                      float:"right",
                      marginTop: "5%",
                      width: "160px"}}>Send</button>
                    </a>

              
         
          </div>
       
         
        
    
      </div>
    </div>
    


      </div>
    </>
  );
}

    export default SendOtp;
