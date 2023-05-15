import React, { useState } from 'react';
import { Api } from '../lib/restapi/endpoints';
import Cookies from 'universal-cookie';
import { IUserLoginModel, IUserRegisterModel } from 'src/interfaces/user';
import { useNavigate } from "react-router-dom";

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



// console.log("cooloes", cookies.get('param-hr-user').data.data)

async function LoginUser (){
 
  var request ={
    email:email,
    password:password
  } as IUserLoginModel

  
  const user = await Api.POST_Login(request);
  if(user.error){
    alert(user.error);
    return;
  }else{

    cookies.set('param-hr-user', user?.data as any, { path: '/' });
    // refresh
  
    navigate("/dashboard");
  }
 

}

async function RegisterUser (){

  var request ={
    email:r_email,
    password:r_password,
    name:r_name,
    surname:r_surname,
    contacts : r_contacts


  } as IUserRegisterModel

  
  const user = await Api.POST_Register(request);
  console.log("new",user);
  if(user.status!=200){
    alert(user.data);
    return;
  }
  else{
    // cookies.set('param-hr-user', user.data, { path: '/' });
setToggleRegister(false);  
}
 
}

  return (
   <>
      <div id='mainContent'>
      { !toggleRegister &&<>
      <div className="peers ai-s fxw-nw h-100vh">
      <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: "url('assets/static/images/bg.jpg')"}}>
        <div className="pos-a centerXY">
          <div className="bgc-white bdrs-50p pos-r" style={{width: "120px",height: "120px"}}>
            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: "320px", textAlign:"left"}}>
        <h4 className="fw-300 c-grey-900 mB-40">Login</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="text-normal text-dark form-label">Username</label>
            <input type="email"  onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder=""/>
          </div>
          <div className="mb-3">
            <label className="text-normal text-dark form-label">Password</label>
            <input type="password"  onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="*******"/>
          </div>
          <div className="">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer">
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                  <label className=" peers peer-greed js-sb ai-c form-label">
                    <span className="peer peer-greed">Remember Me</span>
                  </label>
                </div>
              </div>
              <div className="peer">
                <a><button onClick={()=>LoginUser()} className="btn btn-primary btn-color">Login</button></a>
              </div>
              <div className="peer">
                <a onClick={()=>setToggleRegister(true)} className="btn btn-primary btn-color">Register</a>
              </div>
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
    </>}

{ toggleRegister &&<>
    <div className="peers ai-s fxw-nw h-100vh">
      <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: "url('assets/static/images/bg.jpg')"}}>
        <div className="pos-a centerXY">
          <div className="bgc-white bdrs-50p pos-r" style={{width: "120px", height: "120px"}}>
            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: "320px", textAlign:"left"}}>
        <h4 className="fw-300 c-grey-900 mB-40">Register</h4>
        {/* <form> */}
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Name</label>
            <input type="text" className="form-control" onChange={(e) => setRName(e.target.value)} defaultValue={r_name}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Surname</label>
            <input type="text" className="form-control" onChange={(e) => setRSurname(e.target.value)} defaultValue={r_surname}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Email Address</label>
            <input type="email" className="form-control" onChange={(e) => setREmail(e.target.value)} defaultValue={r_email}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Password</label>
            <input type="password" className="form-control" onChange={(e) => setRPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-normal text-dark">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="mb-3">
            <button onClick={()=>RegisterUser()} className="btn btn-primary btn-color">Register</button>
          </div>
          <div className="peer">
                <a onClick={()=>setToggleRegister(false)} className="btn btn-primary btn-color">Login</a>
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
