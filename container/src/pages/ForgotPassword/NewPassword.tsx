import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPassword() {

  const [password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true)

  const onChangePassword = (e:any) => {
    setPassword(e.target.value);
    if(password == ""){
      setDisable(true)
    }else{
      setDisable(false)
    }
  }
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const ChangePassword =()=>{
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
    if (password != ConfirmPassword) {
      toast.update(_id, {
        render: "Passwords do not match",
        type: "error",
        isLoading: false,
      });
      setInterval(() => {
        window.location.reload();
      },1000)
    }else if(!passwordRegex.test(password)){
      
        toast.update(_id, {
          render:
            "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
          type: "error",
          isLoading: false,
        });
        setInterval(() => {
          window.location.reload();
        },2000)
    }else{
      


      window.location.href = '#/';  
      window.location.reload();
    
    

    }
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
        <h4 style={{fontSize:"25pt"}} className="fw-300 c-grey-900 mB-40">New Password</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="text-center text-dark form-label">Enter New Password</label>
            <input type="password"  value = {password} onChange = {onChangePassword}  style={{width:"80%"}} className="form-control" placeholder=""/>
          </div>
          <div className="mb-3">
            <label className="text-center text-dark form-label">Confirm Password</label>
            <input type="password" value = {ConfirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} style={{width:"80%"}} className="form-control" placeholder=""/>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer" style={{paddingTop: "5%"}}>
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                 
               
                  <a><button disabled ={disable}  onClick ={ChangePassword}  className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
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

       
         
        
    
      </div>
    </div>
    


      </div>
    </>
  );
}

export default NewPassword;
