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
                              <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/women/30.jpg" alt="" />
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
                <div className="row">
                  <div className="col-md-12">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">All personnel</h4>
                      <div className="input-group" style={{width: '20%', float: 'left', marginTop: '10px'}}>
                        <div className="input-group-text bgc-white bd bdwR-0">
                          <i className="ti-calendar" />
                        </div>
                        <input type="text" className="form-control bdc-grey-200 start-date" placeholder="Available start date" data-provide="datepicker" />
                      </div>
                      <div className="input-group" style={{width: '20%', float: 'left', marginTop: '10px', marginLeft: '5px'}}>
                        <div className="input-group-text bgc-white bd bdwR-0">
                          <i className="ti-calendar" />
                        </div>
                        <input type="text" className="form-control bdc-grey-200 start-date" placeholder="Available end date" data-provide="datepicker" />
                      </div>     
                      <div className="input-group" style={{width: '10%', float: 'left', marginTop: '10px', marginLeft: '15px'}}>
                        <input type="text" className="form-control" placeholder="Minimum price" id="inputZip" />
                      </div>
                      <div className="input-group" style={{width: '10%', float: 'left', marginTop: '10px', marginLeft: '5px'}}>
                        <input type="text" className="form-control" placeholder="Maximum price" id="inputZip" />
                      </div>
                      <div className="dropdown" style={{float: 'left', margin: '10px', marginLeft: '5%'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Skills
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">C#</a>
                          <a className="dropdown-item" href="#">Java</a>
                          <a className="dropdown-item" href="#">JS</a>
                          <a className="dropdown-item" href="#">PM</a>
                          <a className="dropdown-item" href="#">Python</a>
                        </div>
                      </div>
                      <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Company
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Param Solutions</a>
                          <a className="dropdown-item" href="#">Kwela</a>
                          <a className="dropdown-item" href="#">DDS</a>
                          <a className="dropdown-item" href="#">Jumla</a>
                          <a className="dropdown-item" href="#">Furai Software</a>
                          <a className="dropdown-item" href="#">IQ</a>
                        </div>
                      </div>
                      <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Position
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Engineer</a>
                          <a className="dropdown-item" href="#">Product Manager</a>
                          <a className="dropdown-item" href="#">Business Analyst</a>
                          <a className="dropdown-item" href="#">Architect</a>
                          <a className="dropdown-item" href="#">QA</a>
                        </div>
                      </div>
                      <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Experience
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Junior</a>
                          <a className="dropdown-item" href="#">Senior</a>
                          <a className="dropdown-item" href="#">Team lead</a>
                          <a className="dropdown-item" href="#">Manager</a>
                        </div>
                      </div>
                      <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Status
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Bench</a>
                          <a className="dropdown-item" href="#">Allocated</a>
                        </div>
                      </div>
                      <br />
                      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Angelica Kiogo</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                              <div className="masonry-item col-md-12">
                                <div className="bgc-white p-20 bd">
                                  <h6 className="c-grey-900">Senior project manager</h6>
                                  <div className="peer mR-15">
                                    <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
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
                                      </div><br />
                                      <div className="mb-3">
                                        <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                          <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                          <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Degree </span>
                                          </label>
                                        </div>
                                        <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left', marginLeft: '10px'}}>
                                          <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                          <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Diploma </span>
                                          </label>
                                        </div>
                                        <div className="checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left', marginLeft: '10px'}}>
                                          <input type="checkbox" defaultChecked id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                          <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">BPMN Certification </span>
                                          </label>
                                        </div>
                                      </div>
                                      {/* <br/>
                                    <button type="submit" class="btn btn-primary btn-color">Update</button> */}
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <a href="manage-personnel.html"><button type="button" className="btn btn-primary">Manage profile</button></a>
                              <button type="button" disabled className="btn btn-dark">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br /><br />
                      <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Status</th>
                            <th>Project end date</th>
                            <th>Rate</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date/ End date</th>
                            <th>Salary</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td><a>Tiger Nixon</a></td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                          </tr>
                          <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                          </tr>
                          <tr>
                            <td><a >Ashton Cox</a></td>
                            <td>Business Analyst</td>
                            <td>San Francisco</td>
                            <td>Allocated - <a>Discovery SA</a>   <span className="badge rounded-pill fl-r bgc-orange-500  lh-0 p-10">Closing soon</span></td>
                            <td>2022/05/18 - 2023/02/30</td>
                            <td>ZAR 650</td>
                          </tr>
                          <tr>
                            <td><a>Cedric Kamau</a></td>
                            <td>Senior Javascript Developer</td>
                            <td>Jumla - Kenya</td>
                            <td>Allocated - <a>Discovery SA</a>   <span className="badge rounded-pill fl-r bgc-orange-500  lh-0 p-10">Closing soon</span></td>
                            <td>2022/05/18 - 2023/02/30</td>
                            <td>ZAR 800</td>
                          </tr>
                          <tr>
                            <td><a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Airi Satou</a></td>
                            <td>Software developer</td>
                            <td>TTS - Zambia</td>
                            <td>Allocated - <a>Sanlam SKY</a></td>
                            <td>2022/11/28 - 2023/05/04</td>
                            <td>ZAR 700</td>
                          </tr>
                          <tr>
                            <td><a>Brielle Williamson</a></td>
                            <td>Software Architect</td>
                            <td>South Africa</td>
                            <td>Allocated (PT) - <a>AVIS</a> <span className="badge rounded-pill fl-r bgc-orange-500  lh-0 p-10">Closing soon</span>  <span className="badge rounded-pill fl-r bgc-deep-purple-500 lh-0 p-10">Part time</span></td>
                            <td>2023/11/06 - 2023/02/30</td>
                            <td>ZAR 1050</td>
                          </tr>
                          <tr>
                            <td>Herrod Chandler</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>$137,500</td>
                          </tr>
                          <tr>
                            <td>Rhona Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                            <td>2010/10/14</td>
                            <td>$327,900</td>
                          </tr>
                          <tr>
                            <td>Colleen Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                            <td>2009/09/15</td>
                            <td>$205,500</td>
                          </tr>
                          <tr>
                            <td>Sonya Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td>2008/12/13</td>
                            <td>$103,600</td>
                          </tr>
                          <tr>
                            <td>Jena Gaines</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                            <td>2008/12/19</td>
                            <td>$90,560</td>
                          </tr>
                          <tr>
                            <td>Quinn Flynn</td>
                            <td>Support Lead</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2013/03/03</td>
                            <td>$342,000</td>
                          </tr>
                          <tr>
                            <td>Charde Marshall</td>
                            <td>Regional Director</td>
                            <td>San Francisco</td>
                            <td>36</td>
                            <td>2008/10/16</td>
                            <td>$470,600</td>
                          </tr>
                          <tr>
                            <td>Haley Kennedy</td>
                            <td>Senior Marketing Designer</td>
                            <td>London</td>
                            <td>43</td>
                            <td>2012/12/18</td>
                            <td>$313,500</td>
                          </tr>
                          <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>19</td>
                            <td>2010/03/17</td>
                            <td>$385,750</td>
                          </tr>
                          <tr>
                            <td>Michael Silva</td>
                            <td>Marketing Designer</td>
                            <td>London</td>
                            <td>66</td>
                            <td>2012/11/27</td>
                            <td>$198,500</td>
                          </tr>
                          <tr>
                            <td>Paul Byrd</td>
                            <td>Chief Financial Officer (CFO)</td>
                            <td>New York</td>
                            <td>64</td>
                            <td>2010/06/09</td>
                            <td>$725,000</td>
                          </tr>
                          <tr>
                            <td>Gloria Little</td>
                            <td>Systems Administrator</td>
                            <td>New York</td>
                            <td>59</td>
                            <td>2009/04/10</td>
                            <td>$237,500</td>
                          </tr>
                          <tr>
                            <td><a>Bradley Greer</a></td>
                            <td>Software Engineer</td>
                            <td>Param Solutions - South Africa</td>
                            <td>Allocated - <a>Vodacom</a> </td>
                            <td>2023/11/06 - 2023/05/30</td>
                            <td>ZAR 850</td>
                          </tr>
                          <tr>
                            <td>Dai Rios</td>
                            <td>Personnel Lead</td>
                            <td>Edinburgh</td>
                            <td>35</td>
                            <td>2012/09/26</td>
                            <td>$217,500</td>
                          </tr>
                          <tr>
                            <td>Jenette Caldwell</td>
                            <td>Development Lead</td>
                            <td>New York</td>
                            <td>30</td>
                            <td>2011/09/03</td>
                            <td>$345,000</td>
                          </tr>
                          <tr>
                            <td>Yuri Berry</td>
                            <td>Chief Marketing Officer (CMO)</td>
                            <td>New York</td>
                            <td>40</td>
                            <td>2009/06/25</td>
                            <td>$675,000</td>
                          </tr>
                          <tr>
                            <td><a>Caesar Vance</a></td>
                            <td>Project Manager</td>
                            <td>South Africa</td>
                            <td>Allocated - <a>TYT </a> </td>
                            <td>2023/06/01 - 2023/06/01</td>
                            <td>ZAR 850</td>
                          </tr>
                          <tr>
                            <td>Doris Wilder</td>
                            <td>Sales Assistant</td>
                            <td>Sidney</td>
                            <td>23</td>
                            <td>2010/09/20</td>
                            <td>$85,600</td>
                          </tr>
                          <tr>
                            <td><a data-bs-toggle="modal" data-bs-target="#exampleModal">Angelica Kiongo</a></td>
                            <td>Project Manager</td>
                            <td>Wasp Africa -Kenya</td>
                            <td>Allocated - <a>TYT</a></td>
                            <td>2022/10/18 - 2023/09/02</td>
                            <td>ZAR 740</td>
                          </tr>
                          <tr>
                            <td>Gavin Joyce</td>
                            <td>Developer</td>
                            <td>Edinburgh</td>
                            <td>42</td>
                            <td>2010/12/22</td>
                            <td>$92,575</td>
                          </tr>
                          <tr>
                            <td>Jennifer Chang</td>
                            <td>Regional Director</td>
                            <td>Singapore</td>
                            <td>28</td>
                            <td>2010/11/14</td>
                            <td>$357,650</td>
                          </tr>
                          <tr>
                            <td><a>Brenden Wagner</a></td>
                            <td>Software Engineer</td>
                            <td>DDS - Zambia</td>
                            <td>Allocated - <a>Dept. Health SA</a> </td>
                            <td>2023/06/01 - 2023/06/01</td>
                            <td>ZAR 700</td>
                          </tr>
                          <tr>
                            <td>Fiona Green</td>
                            <td>Chief Operating Officer (COO)</td>
                            <td>San Francisco</td>
                            <td>48</td>
                            <td>2010/03/11</td>
                            <td>$850,000</td>
                          </tr>
                          <tr>
                            <td>Shou Itou</td>
                            <td>Regional Marketing</td>
                            <td>Tokyo</td>
                            <td>20</td>
                            <td>2011/08/14</td>
                            <td>$163,000</td>
                          </tr>
                          <tr>
                            <td>Michelle House</td>
                            <td>Integration Specialist</td>
                            <td>Sidney</td>
                            <td>37</td>
                            <td>2011/06/02</td>
                            <td>$95,400</td>
                          </tr>
                          <tr>
                            <td>Suki Burks</td>
                            <td>Developer</td>
                            <td>London</td>
                            <td>53</td>
                            <td>2009/10/22</td>
                            <td>$114,500</td>
                          </tr>
                          <tr>
                            <td>Prescott Bartlett</td>
                            <td>Technical Author</td>
                            <td>London</td>
                            <td>27</td>
                            <td>2011/05/07</td>
                            <td>$145,000</td>
                          </tr>
                          <tr>
                            <td>Gavin Cortez</td>
                            <td>Team Leader</td>
                            <td>San Francisco</td>
                            <td>22</td>
                            <td>2008/10/26</td>
                            <td>$235,500</td>
                          </tr>
                          <tr>
                            <td>Martena Mccray</td>
                            <td>Post-Sales support</td>
                            <td>Edinburgh</td>
                            <td>46</td>
                            <td>2011/03/09</td>
                            <td>$324,050</td>
                          </tr>
                          <tr>
                            <td>Unity Butler</td>
                            <td>Marketing Designer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td>2009/12/09</td>
                            <td>$85,675</td>
                          </tr>
                          <tr>
                            <td>Howard Hatfield</td>
                            <td>Office Manager</td>
                            <td>San Francisco</td>
                            <td>51</td>
                            <td>2008/12/16</td>
                            <td>$164,500</td>
                          </tr>
                          <tr>
                            <td>Hope Fuentes</td>
                            <td>Secretary</td>
                            <td>San Francisco</td>
                            <td>41</td>
                            <td>2010/02/12</td>
                            <td>$109,850</td>
                          </tr>
                          <tr>
                            <td>Vivian Harrell</td>
                            <td>Financial Controller</td>
                            <td>San Francisco</td>
                            <td>62</td>
                            <td>2009/02/14</td>
                            <td>$452,500</td>
                          </tr>
                          <tr>
                            <td>Timothy Mooney</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>37</td>
                            <td>2008/12/11</td>
                            <td>$136,200</td>
                          </tr>
                          <tr>
                            <td>Jackson Bradshaw</td>
                            <td>Director</td>
                            <td>New York</td>
                            <td>65</td>
                            <td>2008/09/26</td>
                            <td>$645,750</td>
                          </tr>
                          <tr>
                            <td>Olivia Liang</td>
                            <td>Support Engineer</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td>2011/02/03</td>
                            <td>$234,500</td>
                          </tr>
                          <tr>
                            <td><a>Bruno Nash</a></td>
                            <td>Software Engineer</td>
                            <td>Jumla - Uganda</td>
                            <td>Allocated - <a>Driftstack</a> </td>
                            <td>2023/08/01 - 2023/04/01</td>
                            <td>ZAR 890</td>
                          </tr>
                          <tr>
                            <td>Sakura Yamamoto</td>
                            <td>Support Engineer</td>
                            <td>Tokyo</td>
                            <td>37</td>
                            <td>2009/08/19</td>
                            <td>$139,575</td>
                          </tr>
                          <tr>
                            <td>Thor Walton</td>
                            <td>Developer</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2013/08/11</td>
                            <td>$98,540</td>
                          </tr>
                          <tr>
                            <td>Finn Camacho</td>
                            <td>Support Engineer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td>2009/07/07</td>
                            <td>$87,500</td>
                          </tr>
                          <tr>
                            <td>Serge Baldwin</td>
                            <td>Data Coordinator</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td>2012/04/09</td>
                            <td>$138,575</td>
                          </tr>
                          <tr>
                            <td>Zenaida Frank</td>
                            <td>Software Engineer</td>
                            <td>New York</td>
                            <td>63</td>
                            <td>2010/01/04</td>
                            <td>$125,250</td>
                          </tr>
                          <tr>
                            <td>Zorita Serrano</td>
                            <td>Software Engineer</td>
                            <td>San Francisco</td>
                            <td>56</td>
                            <td>2012/06/01</td>
                            <td>$115,000</td>
                          </tr>
                          <tr>
                            <td>Jennifer Acosta</td>
                            <td>Junior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>43</td>
                            <td>2013/02/01</td>
                            <td>$75,650</td>
                          </tr>
                          <tr>
                            <td><a>Cara Stevens</a></td>
                            <td>Business Analyst</td>
                            <td>South Africa</td>
                            <td>Bench <span className="badge rounded-pill fl-r bgc-green-500  lh-0 p-10">Un-allocated</span></td>
                            <td>n/a</td>
                            <td>ZAR 900</td>
                          </tr>
                          <tr>
                            <td>Hermione Butler</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>47</td>
                            <td>2011/03/21</td>
                            <td>$356,250</td>
                          </tr>
                          <tr>
                            <td>Lael Greer</td>
                            <td>Systems Administrator</td>
                            <td>London</td>
                            <td>21</td>
                            <td>2009/02/27</td>
                            <td>$103,500</td>
                          </tr>
                          <tr>
                            <td>Jonas Alexander</td>
                            <td>Developer</td>
                            <td>San Francisco</td>
                            <td>30</td>
                            <td>2010/07/14</td>
                            <td>$86,500</td>
                          </tr>
                          <tr>
                            <td>Shad Decker</td>
                            <td>Regional Director</td>
                            <td>Edinburgh</td>
                            <td>51</td>
                            <td>2008/11/13</td>
                            <td>$183,000</td>
                          </tr>
                          <tr>
                            <td>Michael Bruce</td>
                            <td>Javascript Developer</td>
                            <td>Singapore</td>
                            <td>29</td>
                            <td>2011/06/27</td>
                            <td>$183,000</td>
                          </tr>
                          <tr>
                            <td>Donna Snider</td>
                            <td>Customer Support</td>
                            <td>New York</td>
                            <td>27</td>
                            <td>2011/01/25</td>
                            <td>$112,000</td>
                          </tr>
                        </tbody>
                      </table>
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
