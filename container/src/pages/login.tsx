import React, { useEffect, useState } from 'react';
import { Api } from '../lib/restapi/endpoints';
import Cookies from 'universal-cookie';
import { IUserLoginModel, IUserRegisterModel } from 'src/interfaces/user';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import img from "../static/images/logo.png"

function Login() {
  
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

const [r_email, setREmail] = useState<string>("");
const [r_password, setRPassword] = useState<string>("");
const [r_name, setRName] = useState<string>("");
const [r_surname, setRSurname] = useState<string>("");
const [r_contacts, setRContacts] = useState<string>("");

const cookies = new Cookies();
const isLoggedIn = cookies.get('param-hr-user') ;
const [toggleRegister, setToggleRegister]  = useState<boolean>(false); 
const navigate = useNavigate();

const [logged, setLogged] = useState<boolean>(true);


const delay = (ms:any) => new Promise(res => setTimeout(res, ms));

async function LoginUser (){
 
  if(logged){
    setLogged(false);
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
  
  
    var request ={
      email:email,
      password:password
    } as IUserLoginModel
  
    
    const user = await Api.POST_Login(request);
    console.log("USER",user);
    if(user.error!=false){
      toast.update(_id, { render: "Cannot log user in with supplied credentials", type: "error", isLoading: false });
      // alert("Error logging in");
      return;
    }else{
      cookies.set('param-hr-user', user?.data as any, { path: '/' });
      toast.update(_id, { render: "Logged in successfully", type: "success", isLoading: false });
      // toast(`Succesfully logged in as: ${user?.data?.name}`);
  
      window.location.href = '#/personnel';  
      window.location.reload();
    }
  }
 
}

async function Redirect(){
  toast(`Succesfully logged in as: ${isLoggedIn.name}, redirecting...`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  await delay(2000);

  window.location.href = '#/personnel';  
  window.location.reload();
}

if(isLoggedIn){ 
 Redirect();

}

async function RegisterUser() {
  const _id = toast.loading("Registering user..", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(r_email)) {
    toast.update(_id, {
      render: "Invalid email address",
      type: "error",
      isLoading: false,
    });
    return;
  }

  // Password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(r_password)) {
    toast.update(_id, {
      render:
        "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
      type: "error",
      isLoading: false,
    });
    return;
  }

  var request = {
    email: r_email,
    password: r_password,
    name: r_name,
    surname: r_surname,
    contacts: r_contacts,
  } as IUserRegisterModel;

  const user = await Api.POST_Register(request);
  console.log("new", user);
  if (user.error != false) {
    toast.update(_id, {
      render: "Cannot register user with the supplied information",
      type: "error",
      isLoading: false,
    });
    return;
  } else {
    toast.update(_id, {
      render: "Successfully registered new user. Please login.",
      type: "success",
      isLoading: false,
    });
    // cookies.set('param-hr-user', user.data, { path: '/' });
    setToggleRegister(false);
  }
}

const ForgotPassword = () => {
  window.location.href = '#/forgotPasswordEMail';  
  window.location.reload();
}

  return (
   <>
      <ToastContainer />
      <div id='mainContente'>
      { !toggleRegister &&<>
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
        <h4 style={{fontSize:"25pt"}} className="fw-300 c-grey-900 mB-40">Login</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="text-normal text-dark form-label">Username</label>
            <input type="email" style={{width:"80%"}} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder=""/>
          </div>
          <div className="mb-3">
            <label className="text-normal text-dark form-label">Password</label>
            <input type="password" style={{width:"80%"}} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="*******"/>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer" style={{paddingTop: "5%"}}>
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                  <label className=" peers peer-greed js-sb ai-c form-label">
                    <span className="peer peer-greed">Remember Me</span>
                  </label>
               
                  <a><button onClick={()=>LoginUser()} className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
                      border: "none",
                      borderRadius:" 0px",
                      marginLeft:"50%",
                      paddingLeft: "35%",
                      paddingRight: "35%",
                      width: "160px"}}>Login</button>
                    </a>

                </div>
              </div>
             
            </div>
          </div>

          <div style = {{marginLeft : "5%"}}>
          <label  className=" peers peer-greed js-sb ai-c form-label">
                    <p onClick = {ForgotPassword}  className="peer peer-greed" >Forgot Password?</p>
                  </label>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
             
              <div className="peer" style={{paddingTop: "5%", paddingLeft:"5%"}}>
   
                
              </div>
              <br/>
              {/* <div className="peer"> */}
                {/* <a onClick={()=>setToggleRegister(true)} className="">Register</a> */}
              {/* </div> */}
            </div>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw" style={{paddingTop: "15%", paddingLeft:"5%"}}>
             
              {/* <div className="peer"> */}
                <a onClick={()=>setToggleRegister(true)} className="">Dont have an account? Register here</a>
              {/* </div> */}
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
    </>}

{ toggleRegister &&<>
    <div className="peers ai-s fxw-nw h-100vh">
      <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: "url('https://paramsolutions.dev/images/param-banner.svg')",
    backgroundColor:"#263F22",backgroundSize:"80%"}}>
        <div className="pos-a centerXY">
          <div className=" bdrs-50p pos-r" style={{width: "120px", height: "120px"}}>
            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: "320px", textAlign:"left"}}>
        <h4 className="fw-300 c-grey-900 mB-40">Register</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Name</label>
            <input  style={{width:"80%"}} type="text" className="form-control" onChange={(e) => setRName(e.target.value)} defaultValue={r_name}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Surname</label>
            <input  style={{width:"80%"}} type="text" className="form-control" onChange={(e) => setRSurname(e.target.value)} defaultValue={r_surname}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Email Address</label>
            <input  style={{width:"80%"}} type="email" className="form-control" onChange={(e) => setREmail(e.target.value)} defaultValue={r_email}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Password</label>
            <input  style={{width:"80%"}} type="password" className="form-control" onChange={(e) => setRPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Confirm Password</label>
            <input  style={{width:"80%"}} type="password" className="form-control" placeholder=""/>
          </div>
          <div className="mb-3" style={{marginTop:"5%"}}>
            <button onClick={()=>RegisterUser()} className="btn btn-primary btn-color" style={{backgroundColor: "rgb(38, 63, 34)",
            border: "none",
            borderRadius:" 0px",
            marginLeft:"50%",

            textAlign: "center",
            width: "160px"}}>Register</button>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw" style={{paddingTop: "15%", paddingLeft:"5%"}}>
             
                <a  onClick={()=>setToggleRegister(false)} className="">Already have an account? Login here</a>
              </div>
          </div>
        {/* </form> */}
      </div>
    </div>
    </>}
      </div>
    </>
  );
}

export default Login;
