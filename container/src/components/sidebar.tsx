import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleUp, FaBriefcase, FaCalendar, FaCog, FaCubes, FaHome, FaPowerOff, FaUser, FaUserAlt } from "react-icons/fa";
import Cookies from 'universal-cookie';

function logout(){
  const cookies = new Cookies();
   cookies.remove('param-hr-user');
  
  window.location.href = '/';
}
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-inner" style={{textAlign:"left"}}>
      {/* <!-- ### $Sidebar Header ### --> */}
      <div className="sidebar-logo">
        <div className="peers ai-c fxw-nw">
          <div className="peer peer-greed">
            {/* <a className="sidebar-link td-n" href="super-admin.html"> */}
            <Link className="sidebar-link td-n" to="dashboard">
              <div className="peers ai-c fxw-nw">
                <div className="peer">
                  <div className="logo">
                    <img src="assets/static/images/logo.jfif" alt=""/>
                  </div>
                </div>
                <div className="peer peer-greed">
                  <h5 className="lh-1 mB-0 logo-text">Myca HR </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="peer">
            <div className="mobile-toggle sidebar-toggle">
              <a href="" className="td-n">
                <i className="ti-arrow-circle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ### $Sidebar Menu ### --> */}
      <ul className="sidebar-menu scrollable pos-r">
        <li className="nav-item mT-30 actived">
          {/* <a className="sidebar-link" href="super-admin.html"> */}
          <Link className="sidebar-link" to="dashboard">
            <span className="icon-holder">
              <i className="c-blue-500"><FaHome/></i>
              {/* <FaHome/> */}
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="personnel">
           {/* <a className="dropdown-toggle" href="javascript:void(0);"> */}
            <span className="icon-holder">
              <i className="c-orange-500"><FaUser/></i>
            </span>
            <span className="title">Personnel</span>
            {/* <span className="arrow">
              <i className="ti-angle-right"></i>
            </span> */}
          {/* </a> */}
          </Link>
          {/* <ul className="dropdown-menu">
            <li>
              <a className='sidebar-link' href="personnel.html">Search</a>
            </li>
            <li>
              <a className='sidebar-link' href="manage-personnel.html">Manage</a>
            </li>
          </ul> */}
        </li>
       
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
              <i className="c-orange-500"><FaBriefcase/></i>
            </span>
            <span className="title">Partners</span>
            <span className="arrow">
              <i className="ti-angle-right"></i>
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className='sidebar-link' href="partners.html">Search</a>
            </li>
            <li>
              <a className='sidebar-link' href="manage-partners.html">Manage</a>
            </li>
            <li>
              <a className='sidebar-link' href="add-partner.html">Add</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
              <i className="c-orange-500"> <FaCalendar/></i>
            </span>
            <span className="title">Projects</span>
            <span className="arrow">
              <i className="ti-angle-right"></i>
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className='sidebar-link' href="projects.html">Search</a>
            </li>
            <li>
              <a className='sidebar-link' href="add-project.html">Add</a>
            </li>
            <li>
              <a className='sidebar-link' href="project-timelines.html">Timeline view</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className='sidebar-link' href="chat.html">
            <span className="icon-holder">
              <i className="c-deep-purple-500"><FaArrowCircleUp/></i>
            </span>
            <span className="title">Channels</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
              <i className="c-orange-500 "><FaCubes/></i>
            </span>
            <span className="title">Reports</span>
            <span className="arrow">
              <i className="ti-angle-right"></i>
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className='sidebar-link' href="basic-table.html">Sales</a>
            </li>
            <li>
              <a className='sidebar-link' href="datatable.html">Expense</a>
            </li>
            <li>
              <a className='sidebar-link' href="datatable.html">Scheduled</a>
            </li>
            
          </ul>
        </li>
        <br/>
        <br/>
        <li className="nav-item">
          <a className='sidebar-link' href="forms.html">
            <span className="icon-holder">
              <i className="c-light-blue-500"> <FaUserAlt/> </i>
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="sidebar-link" href="ui.html">
            <span className="icon-holder">
                <i className="c-pink-500"><FaCog/> </i>
              </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="sidebar-link"  onClick={()=>{logout();}}>
            <span className="icon-holder">
                <i className="c-pink-500 "><FaPowerOff/></i>
              </span>
            <span className="title">Logout</span>
          </a>
        </li>

      
      </ul>
        </div>
  </div>
  );
}

export default Sidebar;
