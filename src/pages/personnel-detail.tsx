import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import '../app/styles/index.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Personnel() {
  return (
    <div className="App">
    <div>
    <div>
        {/* #Left Sidebar ==================== */}
        <div className="sidebar">
          <div className="sidebar-inner">
            {/* ### $Sidebar Header ### */}
            <div className="sidebar-logo">
              <div className="peers ai-c fxw-nw">
                <div className="peer peer-greed">
                  <a className="sidebar-link td-n" href="super-admin.html">
                    <div className="peers ai-c fxw-nw">
                      <div className="peer">
                        <div className="logo">
                          <img src="assets/static/images/logo.jfif" alt="" />
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
                    <a className="td-n">
                      <i className="ti-arrow-circle-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ### $Sidebar Menu ### */}
            <ul className="sidebar-menu scrollable pos-r">
              <li className="nav-item mT-30 actived">
                <a className="sidebar-link" href="super-admin.html">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-home" />
                  </span>
                  <span className="title">Home</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-user" />
                  </span>
                  <span className="title">Personnel</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="personnel.html">Search</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="manage-personnel.html">Manage</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-book" />
                  </span>
                  <span className="title">Partners</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="partners.html">Search</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="manage-partners.html">Manage</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="add-partner.html">Add</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-calendar" />
                  </span>
                  <span className="title">Projects</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="projects.html">Search</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="add-project.html">Add</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="project-timelines.html">Timeline view</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="chat.html">
                  <span className="icon-holder">
                    <i className="c-deep-purple-500 ti-comment-alt" />
                  </span>
                  <span className="title">Channels</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-bar-chart" />
                  </span>
                  <span className="title">Reports</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="basic-table.html">Sales</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="datatable.html">Expense</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="datatable.html">Scheduled</a>
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li className="nav-item">
                <a className="sidebar-link" href="forms.html">
                  <span className="icon-holder">
                    <i className="c-light-blue-500 ti-pencil" />
                  </span>
                  <span className="title">Profile</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="sidebar-link" href="ui.html">
                  <span className="icon-holder">
                    <i className="c-pink-500 ti-settings" />
                  </span>
                  <span className="title">Settings</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="sidebar-link" href="#">
                  <span className="icon-holder">
                    <i className="c-pink-500 ti-power-off" />
                  </span>
                  <span className="title">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* #Main ============================ */}
        <div className="page-container">
          {/* ### $Topbar ### */}
          <div className="header navbar">
            <div className="header-container">
              <ul className="nav-left">
                <li>
                  <a id="sidebar-toggle" className="sidebar-toggle" href="javascript:void(0);">
                    <i className="ti-menu" />
                  </a>
                </li>
                <li className="search-box">
                  <a className="search-toggle no-pdd-right" href="javascript:void(0);">
                    <i className="search-icon ti-search pdd-right-10" />
                    <i className="search-icon-close ti-close pdd-right-10" />
                  </a>
                </li>
                <li className="search-input">
                  <input className="form-control" type="text" placeholder="Search..." />
                </li>
              </ul>
              <ul className="nav-right">
                <li className="notifications dropdown">
                  <span className="counter bgc-red">3</span>
                  <a className="dropdown-toggle no-after" data-bs-toggle="dropdown">
                    <i className="ti-bell" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="pX-20 pY-15 bdB">
                      <i className="ti-bell pR-10" />
                      <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                    </li>
                    <li>
                      <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                        <li>
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
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
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
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
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
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
                        <a className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i className="ti-angle-right fsz-xs mL-10" /></a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="notifications dropdown">
                  <span className="counter bgc-blue">3</span>
                  <a className="dropdown-toggle no-after" data-bs-toggle="dropdown">
                    <i className="ti-email" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="pX-20 pY-15 bdB">
                      <i className="ti-email pR-10" />
                      <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                    </li>
                    <li>
                      <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                        <li>
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
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
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
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
                          <a className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                            <div className="peer mR-15">
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
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
                        <a href="email.html" className="c-grey-600 cH-blue fsz-sm td-n">View All Email <i className="fs-xs ti-angle-right mL-10" /></a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-bs-toggle="dropdown">
                    <div className="peer mR-10">
                      <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
                    </div>
                    <div className="peer">
                      <span className="fsz-sm c-grey-900">John Doe</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu fsz-sm">
                    <li>
                      <a className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                        <i className="ti-settings mR-10" />
                        <span>Setting</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                        <i className="ti-user mR-10" />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="email.html" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                        <i className="ti-email mR-10" />
                        <span>Messages</span>
                      </a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                        <i className="ti-power-off mR-10" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* ### $App Screen Content ### */}
          <main className="main-content bgc-grey-100">
            <div id="mainContent">
              <div className="container-fluid">
                <h4 className="c-grey-900 mT-10 mB-30">Personnel</h4>
                <div className="row bgc-white bd bdrs-3 p-20 mB-20">
                  {/* <div class="col-md-12"> */}
                  {/* <div class="bgc-white bd bdrs-3 p-20 mB-20"> */}
                  <h4 className="c-grey-900 mB-20">Angelica Kiongo</h4>
                  <div className="col-md-7">
                    <div className="bgc-white p-20 bd">
                      <div className="col-md-5">
                        <div className="peer mR-15">
                          <img className="w-6r bdrs-50p" src="https://randomuser.me/api/portraits/women/30.jpg" alt="" />
                          {/* <input type="file" class="form-control w-6r" id="exampleInputPassword1"> */}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="c-grey-900">Senior project manager</h6>
                      </div>
                      <div className="mT-30">
                        <form>
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="inputPassword4">Name</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Angelica" />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="inputPassword4">Surname</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Kiongo" />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="inputPassword4">Nickname</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Angie" />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="inputEmail4">Email</label>
                              <input type="email" defaultValue="a.kiongo@ttstechnologies.com" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="inputEmail4">Rate</label>
                              <input type="text" className="form-control" id="inputEmail4" placeholder="ZAR 740" />
                            </div>
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="inputZip">Skill level</label>
                              <select id="inputState" className="form-control">
                                <option selected>Senior</option>
                                <option>...</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="inputAddress">Work Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="inputAddress2">Home Address</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                          </div>
                          <div className="row">
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="inputCity">City</label>
                              <input type="text" defaultValue="Thika" className="form-control" id="inputCity" />
                            </div>
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="inputState">Province</label>
                              <select id="inputState" className="form-control">
                                <option selected>Nairobi</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="inputZip">Country</label>
                              <select id="inputState" className="form-control">
                                <option selected>Kenya</option>
                                <option>...</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label className="form-label fw-500">Birthdate</label>
                              <div className="timepicker-input input-icon mb-3">
                                <div className="input-group">
                                  <div className="input-group-text bgc-white bd bdwR-0">
                                    <i className="ti-calendar" />
                                  </div>
                                  <input type="text" className="form-control bdc-grey-200 start-date" placeholder="12-01-1982" data-provide="datepicker" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <button type="button" className="btn btn-primary btn-color">Save changes</button>
                          </div><br />
                          {/* <br/>
                            <button type="submit" class="btn btn-primary btn-color">Update</button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="bgc-white p-20 bd">
                      <h6 className="c-grey-900">Skills &amp; Qualifications</h6>
                      <div className="mT-30">
                        <form>
                          <div className="row">
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="inputZip">Skill level</label>
                              <select id="inputState" className="form-control">
                                <option selected>Senior</option>
                                <option>...</option>
                              </select>
                            </div> <br />
                            <div className="mb-3 col-md-9">
                              <label className="form-label" htmlFor="inputPassword4">Education</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Add education" />
                            </div>
                            <div className="mb-3">
                              <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                  <span className="peer peer-greed">Degree</span>
                                </label><br />
                                <select id="inputState" className="form-control">
                                  <option selected>University of Nairobi</option>
                                  <option>...</option>
                                </select><br />
                              </div>
                              <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left', marginLeft: '10px'}}>
                                <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                  <span className="peer peer-greed">Masters </span>
                                </label>
                                <select id="inputState" className="form-control">
                                  <option selected>University of New South Wales</option>
                                  <option>...</option>
                                </select><br />
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="mb-3 col-md-9">
                              <label className="form-label" htmlFor="inputPassword4">Languages</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Add language" />
                            </div>
                            <div className="mb-3">
                              <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                  <span className="peer peer-greed">English</span>
                                </label>
                              </div>
                              <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left', marginLeft: '10px'}}>
                                <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                  <span className="peer peer-greed">Swahili </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="mb-3 col-md-9">
                              <label className="form-label" htmlFor="inputPassword4">Skills</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Add skills" />
                            </div>
                            {/* <div class="mb-3"> */}
                            <span className="peer">
                              <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                              <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                              <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span>
                            </span>
                            {/* </div> */}
                          </div><br />
                          <div className="row">
                            <div className="col-md-9">
                              <h6 className="form-label" style={{float: 'left'}}>Documents</h6>
                            </div>
                            <div className="mb-3 ">
                              <button type="submit" style={{float: 'right', marginRight: '34%'}} className="btn btn-primary btn-color">Add document</button> 
                              <div style={{float: 'left', marginLeft: '10px'}}>
                                {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                <a>
                                  <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                    <i className="ti-files" /><span className="peer peer-greed" style={{marginLeft: '5px'}}>   CV</span>
                                  </label>
                                </a>
                              </div><br />
                              <div style={{float: 'left', marginLeft: '10px'}}>
                                {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                <a ><label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                    <i className="ti-files" /><span className="peer peer-greed" style={{marginLeft: '5px'}}>  Degree</span>
                                  </label></a>
                              </div><br />
                              <div style={{float: 'left', marginLeft: '10px'}}>
                                {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                <a ><label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                    <i className="ti-files" /><span className="peer peer-greed" style={{marginLeft: '5px'}}>   Masters</span>
                                  </label></a>
                              </div>
                            </div>
                          </div><br />
                          {/* <br/>
                            <button type="submit" class="btn btn-primary btn-color">Update</button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*                  
                  </div> */}
                  {/* </div> */}
                </div>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <div className="bgc-white p-20 bd">
                      <h6 className="c-grey-900">Project allocations</h6>
                      <div className="mT-30">
                        <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                          <thead>
                            <tr>
                              <th>Project</th>
                              <th>Position</th>
                              <th>Date started</th>
                              <th>Date completed</th>
                              <th>Total cost</th>
                              <th>Rating (5)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Vodacom SA - Billing portal</a></td>
                              <td>Project manager</td>
                              <td>12/02/2022</td>
                              <td>21/10/2022</td>
                              <td>ZAR 320K</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <td><a /><a>Vodacom SA - Enablement</a></td>
                              <td>Project manager</td>
                              <td>25/10/2022</td>
                              <td>Ongoing</td>
                              <td>ZAR 267K~</td>
                              <td>n/a</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bgc-white p-20 bd">
                      <h6 className="c-grey-900">Check availability</h6>
                      {/* <div class="mT-30"> */}
                      <div className="mb-3 col-md-4" style={{float: 'left'}}>
                        <label className="form-label fw-500">Start date</label>
                        <div className="timepicker-input input-icon mb-3">
                          <div className="input-group">
                            <div className="input-group-text bgc-white bd bdwR-0">
                              <i className="ti-calendar" />
                            </div>
                            <input type="text" className="form-control bdc-grey-200 start-date" placeholder="12-01-1982" data-provide="datepicker" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-md-4" style={{float: 'left', marginLeft: '5px'}}>
                        <label className="form-label fw-500">End date</label>
                        <div className="timepicker-input input-icon mb-3">
                          <div className="input-group">
                            <div className="input-group-text bgc-white bd bdwR-0">
                              <i className="ti-calendar" />
                            </div>
                            <input type="text" className="form-control bdc-grey-200 start-date" placeholder="12-01-1982" data-provide="datepicker" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-12">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                            <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Full time</span>
                            </label>
                          </div><br />
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer" />
                            <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Flexi time</span>
                            </label>
                          </div>
                          {/* <button type="submit" class="btn btn-primary btn-color">Check availability</button>  */}
                        </div><br />
                      </div>
                      <div className="mb-3 col-md-6">
                        <button type="submit" className="btn btn-primary btn-color">Check availability</button> 
                      </div>
                      <h6 className="c-grey-900">Schedule meeting</h6>
                      {/* <div class="mT-30"> */}
                      <div className="mb-3 col-md-4" style={{float: 'left'}}>
                        <label className="form-label fw-500">Meeting date</label>
                        <div className="timepicker-input input-icon mb-3">
                          <div className="input-group">
                            <div className="input-group-text bgc-white bd bdwR-0">
                              <i className="ti-calendar" />
                            </div>
                            <input type="text" className="form-control bdc-grey-200 start-date" placeholder="12-01-1982" data-provide="datepicker" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-md-4" style={{float: 'left', marginLeft: '5px'}}>
                        <label className="form-label fw-500">Meeting time</label>
                        <div className="timepicker-input input-icon mb-3">
                          <div className="input-group">
                            <div className="input-group-text bgc-white bd bdwR-0">
                              <i className="ti-alarm-clock" />
                            </div>
                            <input type="text" className="form-control bdc-grey-200 start-date" placeholder="06:00" data-provide="datepicker" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-12">
                          <div className="mb-3 col-md-8">
                            <label className="form-label" htmlFor="inputZip">Duration</label>
                            <select id="inputState" className="form-control">
                              <option selected>Select</option>
                              <option>15 mins</option>
                              <option>30 mins</option>
                              <option>45 mins</option>
                              <option>1 hour</option>
                            </select>
                          </div>
                          {/* <button type="submit" class="btn btn-primary btn-color">Check availability</button>  */}
                        </div><br />
                        <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                          <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                          <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                            <span className="peer peer-greed">Create Google meeting</span>
                          </label>
                        </div><br />
                      </div>
                      <div className="mb-3 col-md-6">
                        <button type="submit" className="btn btn-primary btn-color">Request meeting</button> 
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="bd bgc-white">
                      <div className="layers">
                        <div className="layer w-100 p-20">
                          <h6 className="lh-1">Chat</h6>
                        </div>
                        <div className="layer w-100">
                          {/* Chat Box */}
                          <div className="bgc-grey-200 p-20 gapY-15">
                            {/* Chat Conversation */}
                            <div className="peers fxw-nw">
                              <div className="peer mR-20">
                                <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                              </div>
                              <div className="peer peer-greed">
                                <div className="layers ai-fs gapY-5">
                                  <div className="layer">
                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                      <div className="peer mR-10">
                                        <small>10:00 AM</small>
                                      </div>
                                      <div className="peer-greed">
                                        <span>Lorem Ipsum is simply dummy text of</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="layer">
                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                      <div className="peer mR-10">
                                        <small>10:00 AM</small>
                                      </div>
                                      <div className="peer-greed">
                                        <span>the printing and typesetting industry.</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="layer">
                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                      <div className="peer mR-10">
                                        <small>10:00 AM</small>
                                      </div>
                                      <div className="peer-greed">
                                        <span>Lorem Ipsum has been the industry's</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Chat Conversation */}
                            <div className="peers fxw-nw ai-fe">
                              <div className="peer ord-1 mL-20">
                                <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
                              </div>
                              <div className="peer peer-greed ord-0">
                                <div className="layers ai-fe gapY-10">
                                  <div className="layer">
                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                      <div className="peer mL-10 ord-1">
                                        <small>10:00 AM</small>
                                      </div>
                                      <div className="peer-greed ord-0">
                                        <span>Heloo</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="layer">
                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                      <div className="peer mL-10 ord-1">
                                        <small>10:00 AM</small>
                                      </div>
                                      <div className="peer-greed ord-0">
                                        <span>??</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Chat Send */}
                          <div className="p-20 bdT bgc-white">
                            <div className="pos-r col-md-9 fl-l mr-1">
                              <input type="text" className="form-control bdrs-10em m-0" placeholder="Say something..." />
                              <button type="button" className="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1">
                                <i className="fa fa-paper-plane-o" />
                              </button>
                            </div>
                            <div className="pos-r col-md-2 fl-r mt-2 ml-2">
                              <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                <input defaultChecked type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                  <span className="peer peer-greed">Send email</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">PRM-61: Billing Portal - Vodacom</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="masonry-item col-md-12">
                            <h6 className="c-grey-900">   <span className="badge rounded-pill fl-r bgc-deep-purple-500 lh-0 p-10">Completed: 22/10/2022</span></h6><br />
                            <div className="mT-30">
                              {/* <form> */}
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <h4 className="c-grey-900 mB-20">Project team</h4>
                                    {/* <p>Using the most basic table markup, here’s how <code class="highlighter-rouge">.table</code>-based tables look in Bootstrap. <strong>All table styles are inherited in Bootstrap 5</strong>, meaning any nested tables will be styled in the same manner as the parent.</p> */}
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th scope="col">User Id</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">Position</th>
                                          <th scope="col">Company</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">887</th>                                          
                                          <td>Mark Otto</td>
                                          <td>Business Analyst</td>
                                          <td>Innovation Tech - Zambia</td>
                                          <td />
                                        </tr>
                                        <tr>
                                          <th scope="row">55</th>                                          
                                          <td>James Bugweri</td>
                                          <td>Software Engineer</td>
                                          <td>Innovation Tech - Zambia</td>
                                          <td />
                                        </tr>
                                        <tr>
                                          <th scope="row">663</th>                                          
                                          <td>Dennis Bwabhi</td>
                                          <td>Software Engineer</td>
                                          <td>Private - Kenya</td>
                                          <td />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="inputPassword4">Contact name</label>
                                  <input type="text" className="form-control" id="inputPassword4" placeholder="Mishra Sighn" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="inputPassword4">Position</label>
                                  <input type="text" className="form-control" id="inputPassword4" placeholder="HR Manager" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="inputEmail4">Email</label>
                                  <input type="email" defaultValue="mishra.s@vodacomcs.com" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="inputEmail4">Phone</label>
                                  <input type="text" defaultValue="011-447-8898" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <br />
                                <div className="mb-3 col-md-12">
                                  <div className="bgc-white p-20 bd">
                                    <h6 className="c-grey-900">Project breakdown</h6>
                                    <div className="mT-30">
                                      <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action">3 resources allocated</a>
                                        <a href="#" className="list-group-item list-group-item-action">243 days</a>
                                        <a href="#" className="list-group-item list-group-item-action">8425 hours</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <br/>
                                <button type="submit" class="btn btn-primary btn-color">Update</button> */}
                              {/* </form> */}
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <a href="manage-personnel"><button type="button" className="btn btn-primary">View project detail</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* ### $App Screen Footer ### */}
          <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
            <span>Copyright © 2021 Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a>. All rights reserved.</span>
          </footer>
        </div>
      </div>
    </div>
  </div>
  )
}
