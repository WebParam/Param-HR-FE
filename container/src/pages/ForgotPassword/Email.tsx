import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import img from "../static/images/logo.png"

function Email() {
  const [r_email, setREmail] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);

  const submitHandler = () => {
    const _id = toast.loading("Logging in..", {//loader
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(r_email)) {
      toast.update(_id, {
        render: "Invalid email address",
        type: "error",
        isLoading: false,
      });
      setInterval(() => {
        window.location.reload();
      },1000)
    }else{
      window.location.href = '#/SendOtp';  
      window.location.reload();
    }
  }

  const emailHandler = (e:any) => {

    if(r_email.length <= 0){
      setDisable(true)
      setREmail(e.target.value);
    }else{
      setDisable(false)
     
    setREmail(e.target.value);
    }
  
}
   


   

      const SignIn = () => {
        window.location.href = '#/';  
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
        <h4 style={{fontSize:"25pt"}} className="fw-300 c-grey-900 mB-40">Forgot Password</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="text-center text-dark form-label">Enter email address</label>
            <input type="email"  onChange = {emailHandler} style={{width:"80%"}} className="form-control" placeholder=""/>
          </div>
        
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer" style={{paddingTop: "5%"}}>
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
             
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                 
               
                  <a><button onClick = {submitHandler} disabled = {disable}  className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
                      border: "none",
                      borderRadius:" 0px",
                      marginLeft:"50%",
                      paddingLeft: "35%",
                      paddingRight: "35%",
                      width: "160px"}}>Send</button>
                    </a>

                </div>
              </div>
             
            </div>
          </div>

       
         
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw" style={{paddingTop: "15%", paddingLeft:"5%"}}>
             
              {/* <div className="peer"> */}
                <a onClick={SignIn} className="">Already have an account? Login here</a>
              {/* </div> */}
            </div>
          </div>
    
      </div>
    </div>
    


      </div>
    </>
  );
}

export default Email;
