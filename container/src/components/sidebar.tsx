import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-inner">
      {/* <!-- ### $Sidebar Header ### --> */}
      <div className="sidebar-logo">
        <div className="peers ai-c fxw-nw">
          <div className="peer peer-greed">
            <a className="sidebar-link td-n" href="super-admin.html">
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
            </a>
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
          <a className="sidebar-link" href="super-admin.html">
            <span className="icon-holder">
              <i className="c-blue-500 ti-home"></i>
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="personnel">
           {/* <a className="dropdown-toggle" href="javascript:void(0);"> */}
            <span className="icon-holder">
              <i className="c-orange-500 ti-user"></i>
            </span>
            <span className="title">Personnel</span>
            <span className="arrow">
              <i className="ti-angle-right"></i>
            </span>
          {/* </a> */}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <a className='sidebar-link' href="personnel.html">Search</a>
            </li>
            <li>
              <a className='sidebar-link' href="manage-personnel.html">Manage</a>
            </li>
          </ul>
        </li>
        <li>     
        <Link className="dropdown-toggle" to="personnel-detail">
           {/* <a className="dropdown-toggle" href="javascript:void(0);"> */}
            <span className="icon-holder">
              <i className="c-orange-500 ti-user"></i>
            </span>
            <span className="title">Personnel Detail</span>
            <span className="arrow">
              <i className="ti-angle-right"></i>
            </span>
          {/* </a> */}
          </Link></li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
              <i className="c-orange-500 ti-book"></i>
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
              <i className="c-orange-500 ti-calendar"></i>
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
              <i className="c-deep-purple-500 ti-comment-alt"></i>
            </span>
            <span className="title">Channels</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
              <i className="c-orange-500 ti-bar-chart"></i>
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
              <i className="c-light-blue-500 ti-pencil"></i>
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="sidebar-link" href="ui.html">
            <span className="icon-holder">
                <i className="c-pink-500 ti-settings"></i>
              </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="sidebar-link" href="#">
            <span className="icon-holder">
                <i className="c-pink-500 ti-power-off"></i>
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
