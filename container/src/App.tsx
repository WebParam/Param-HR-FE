import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";
import Sidebar from "./components/sidebar";
import './App.css';
import '../src/styles/index.scss';
import Dashboard from "./pages/dashboard";
import Personnel from "./pages/personnel";
import PersonnelDetail from "./pages/personnel-detail";
import Login from "./pages/login";
import Email from './pages/ForgotPassword/Email';
import VerificationCode from './pages/ForgotPassword/SendOtp';
import Cookies from 'universal-cookie';
import { FaBell, FaMailBulk } from "react-icons/fa";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import Project from "./pages/Project";
import ProjectDetail from "./pages/Project-details";

const cookies = new Cookies();
const isLoggedIn = cookies.get('param-hr-user') ;
console.log("in", isLoggedIn);

const App = () => (
  
  <>
  <div className="App">
    <div>
      {/* <!-- #Left Sidebar ========================= --> */}
     {isLoggedIn && <Sidebar/>}

      {/* <!-- #Main ============================ --> */}
      <div className={isLoggedIn ? 'page-container' :''}>
        {/* <!-- ### $Topbar ### --> */}
        {isLoggedIn &&     <div className="header navbar">
          <div className="header-container">
            <ul className="nav-left">
              <li>
                <a id='sidebar-toggle' className="sidebar-toggle" href="javascript:void(0);">
                  <i className="ti-menu"></i>
                </a>
              </li>
              <li className="search-box">
                <a className="search-toggle no-pdd-right" href="javascript:void(0);">
                  <i className="search-icon ti-search pdd-right-10"></i>
                  <i className="search-icon-close ti-close pdd-right-10"></i>
                </a>
              </li>
              <li className="search-input">
                <input className="form-control" type="text" placeholder="Search..."/>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="notifications dropdown">
                <span className="counter bgc-red">3</span>
                <a href="" style={{ paddingTop: "20px"}} className="dropdown-toggle no-after" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className=""><FaBell/></i>
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"> 
                  <li className="pX-20 pY-15 bdB">
                    <i className="ti-bell pR-10"></i>
                    <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                  </li>
                  <li>
                    <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">John Doe</span>
                              <span className="c-grey-600">liked your <span className="text-dark">post</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">5 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">Moo Doe</span>
                              <span className="c-grey-600">liked your <span className="text-dark">cover image</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">7 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">Lee Doe</span>
                              <span className="c-grey-600">commented on your <span className="text-dark">video</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">10 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pX-20 pY-15 ta-c bdT">
                    <span>
                      <a href="" className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i className="ti-angle-right fsz-xs mL-10"></i></a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="notifications dropdown">
                <span className="counter bgc-blue">3</span>
                <a href="" style={{ paddingTop: "20px"}} className="dropdown-toggle no-after" data-bs-toggle="dropdown">
                  <i className=""><FaMailBulk/></i>
                </a>

                <ul className="dropdown-menu">
                  <li className="pX-20 pY-15 bdB">
                    <i className="ti-email pR-10"></i>
                    <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                  </li>
                  <li>
                    <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <div>
                              <div className="peers jc-sb fxw-nw mB-5">
                                <div className="peer">
                                  <p className="fw-500 mB-0">John Doe</p>
                                </div>
                                <div className="peer">
                                  <small className="fsz-xs">5 mins ago</small>
                                </div>
                              </div>
                              <span className="c-grey-600 fsz-sm">
                                Want to create your own customized data generator for your app...
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <div>
                              <div className="peers jc-sb fxw-nw mB-5">
                                <div className="peer">
                                  <p className="fw-500 mB-0">Moo Doe</p>
                                </div>
                                <div className="peer">
                                  <small className="fsz-xs">15 mins ago</small>
                                </div>
                              </div>
                              <span className="c-grey-600 fsz-sm">
                                Want to create your own customized data generator for your app...
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <div>
                              <div className="peers jc-sb fxw-nw mB-5">
                                <div className="peer">
                                  <p className="fw-500 mB-0">Lee Doe</p>
                                </div>
                                <div className="peer">
                                  <small className="fsz-xs">25 mins ago</small>
                                </div>
                              </div>
                              <span className="c-grey-600 fsz-sm">
                                Want to create your own customized data generator for your app...
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pX-20 pY-15 ta-c bdT">
                    <span>
                      <a href="email.html" className="c-grey-600 cH-blue fsz-sm td-n">View All Email <i className="fs-xs ti-angle-right mL-10"></i></a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-bs-toggle="dropdown">
                  <div className="peer mR-10">
                    <img className="w-2r bdrs-50p" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                  </div>
                  <div className="peer">
                    <span className="fsz-sm c-grey-900">{isLoggedIn.name}</span>
                  </div>
                </a>
                <ul className="dropdown-menu fsz-sm">
                  <li>
                    <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i className="ti-settings mR-10"></i>
                      <span>Setting</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i className="ti-user mR-10"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="email.html" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i className="ti-email mR-10"></i>
                      <span>Messages</span>
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i className="ti-power-off mR-10"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        }

        {/* <!-- ### $App Screen Content ### --> */}
      <main  className={isLoggedIn ? "main-content bgc-grey-100":""}>
    <Routes>
      <Route
        path="/"
        element={
          <Login
          />
        }
      />
          <Route
        path="personnel"
        element={
          <Personnel
          />
        }
      />
          <Route
        path="personnel-detail"
        element={
          <PersonnelDetail
          />
        }
      />
          <Route
        path="dashboard"
        element={
          <Dashboard
          />
        }
      />

      <Route
        path="forgotPasswordEMail"
        element={
          <Email
          />
        }
      />
      
      <Route
        path="SendOtp"
        element={
          <VerificationCode
          />
        }
      />
          <Route
        path="projects"
        element={
          <Project
          />
        }
      />
           <Route
        path="newpassword"
        element={
          <NewPassword
          />
        }
      />

<Route
        path="projectdetails"
        element={
          <ProjectDetail
          />
        }
      />
      
    </Routes>
    </main>

        {/* <!-- ### $App Screen Footer ### --> */}
        {isLoggedIn &&  <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
          <span>Copyright © 2023 ParamSolutions. All rights reserved.</span>
        </footer>
        }
      </div>
    </div>
  </div>
  </>
);

export default App;
