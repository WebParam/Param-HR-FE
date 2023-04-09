import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import '../app/styles/index.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="App">
    <div>
      {/* <!-- #Left Sidebar ==================== --> */}
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
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                  <i className="c-orange-500 ti-user"></i>
                </span>
                <span className="title">Personnel</span>
                <span className="arrow">
                  <i className="ti-angle-right"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className='sidebar-link' href="personnel.html">Search</a>
                </li>
                <li>
                  <a className='sidebar-link' href="manage-personnel.html">Manage</a>
                </li>
              </ul>
            </li>
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

      {/* <!-- #Main ============================ --> */}
      <div className="page-container">
        {/* <!-- ### $Topbar ### --> */}
        <div className="header navbar">
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
                <a href="" className="dropdown-toggle no-after" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti-bell"></i>
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
                <a href="" className="dropdown-toggle no-after" data-bs-toggle="dropdown">
                  <i className="ti-email"></i>
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
                    <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt=""/>
                  </div>
                  <div className="peer">
                    <span className="fsz-sm c-grey-900">John Doe</span>
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

        {/* <!-- ### $App Screen Content ### --> */}
        <main className='main-content bgc-grey-100'>
          <div id='mainContent'>
            <div className="row gap-20 masonry pos-r">
              <div className="masonry-sizer col-md-6"></div>
              <div className="masonry-item  w-100">
                <div className="row gap-20">
                  {/* <!-- #Toatl Visits ==================== --> */}
                  <div className='col-md-3'>
                    <div className="layers bd bgc-white p-20">
                      <div className="layer w-100 mB-10">
                        <h6 className="lh-1">Deployed resources</h6>
                      </div>
                      <div className="layer w-100">
                        <div className="peers ai-sb fxw-nw">
                          <div className="peer peer-greed">
                            <span id="sparklinedash"></span>
                          </div>
                          <div className="peer">
                            <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- #Total Page Views ==================== --> */}
                  <div className='col-md-3'>
                    <div className="layers bd bgc-white p-20">
                      <div className="layer w-100 mB-10">
                        <h6 className="lh-1">On the bench</h6>
                      </div>
                      <div className="layer w-100">
                        <div className="peers ai-sb fxw-nw">
                          <div className="peer peer-greed">
                            <span id="sparklinedash2"></span>
                          </div>
                          <div className="peer">
                            <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- #Unique Visitors ==================== --> */}
                  <div className='col-md-3'>
                    <div className="layers bd bgc-white p-20">
                      <div className="layer w-100 mB-10">
                        <h6 className="lh-1">Website visits</h6>
                      </div>
                      <div className="layer w-100">
                        <div className="peers ai-sb fxw-nw">
                          <div className="peer peer-greed">
                            <span id="sparklinedash3"></span>
                          </div>
                          <div className="peer">
                            <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">~12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- #Bounce Rate ==================== --> */}
                  <div className='col-md-3'>
                    <div className="layers bd bgc-white p-20">
                      <div className="layer w-100 mB-10">
                        <h6 className="lh-1">Leads</h6>
                      </div>
                      <div className="layer w-100">
                        <div className="peers ai-sb fxw-nw">
                          <div className="peer peer-greed">
                            <span id="sparklinedash4"></span>
                          </div>
                          <div className="peer">
                            <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-12">
                {/* <!-- #Site Visits ==================== --> */}
                <div className="bd bgc-white">
                  <div className="peers fxw-nw@lg+ ai-s">
                    <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                      <div className="layers">
                        <div className="layer w-100 mB-10">
                          <h6 className="lh-1">Site Visits</h6>
                        </div>
                        <div className="layer w-100">
                          <div id="world-map-marker"></div>
                        </div>
                      </div>
                    </div>
                    <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                      <div className="layers">
                        <div className="layer w-100">
                          {/* <!-- Progress Bars --> */}
                          <div className="layers">
                            <div className="layer w-100">
                              <h5 className="mB-5">1k</h5>
                              <small className="fw-600 c-grey-700">Visitors From USA</small>
                              <span className="pull-right c-grey-600 fsz-sm">60%</span>
                              <div className="progress mT-10">
                                {/* <div className="progress-bar bgc-deep-purple-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}> <span className="visually-hidden">50% Complete</span></div> */}
                              </div>
                            </div>
                            <div className="layer w-100 mT-15">
                              <h5 className="mB-5">0.2K</h5>
                              <small className="fw-600 c-grey-700">Visitors From Europe</small>
                              <span className="pull-right c-grey-600 fsz-sm">30%</span>
                              <div className="progress mT-10">
                                {/* <div className="progress-bar bgc-green-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}> <span className="visually-hidden">80% Complete</span></div> */}
                              </div>
                            </div>
                            <div className="layer w-100 mT-15">
                              <h5 className="mB-5">0.2K</h5>
                              <small className="fw-600 c-grey-700">Visitors From South Africa</small>
                              <span className="pull-right c-grey-600 fsz-sm">30%</span>
                              <div className="progress mT-10">
                                {/* <div className="progress-bar bgc-light-blue-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}> <span className="visually-hidden">40% Complete</span></div> */}
                              </div>
                            </div>
                            <div className="layer w-100 mT-15">
                              <h5 className="mB-5">0.1K</h5>
                              <small className="fw-600 c-grey-700">Visitors From India</small>
                              <span className="pull-right c-grey-600 fsz-sm">8%</span>
                              <div className="progress mT-10">
                                {/* <div className="progress-bar bgc-blue-grey-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}> <span className="visually-hidden">90% Complete</span></div> */}
                              </div>
                            </div>
                          </div>

                          {/* <!-- Pie Charts --> */}
                          <div className="peers pT-20 mT-20 bdT fxw-nw@lg+ jc-sb ta-c gap-10">
                            <div className="peer">
                              <div className="easy-pie-chart" data-size='80' data-percent="75" data-bar-color='#f44336'>
                                <span></span>
                              </div>
                              <h6 className="fsz-sm">New Users</h6>
                            </div>
                            <div className="peer">
                              <div className="easy-pie-chart" data-size='80' data-percent="50" data-bar-color='#2196f3'>
                                <span></span>
                              </div>
                              <h6 className="fsz-sm">New Leads</h6>
                            </div>
                            <div className="peer">
                              <div className="easy-pie-chart" data-size='80' data-percent="90" data-bar-color='#ff9800'>
                                <span></span>
                              </div>
                              <h6 className="fsz-sm">Bounce Rate</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                {/* <!-- #Monthly Stats ==================== --> */}
                <div className="bd bgc-white">
                  <div className="layers">
                    <div className="layer w-100 pX-20 pT-20">
                      <h6 className="lh-1">Monthly allocations</h6>
                    </div>
                    <div className="layer w-100 p-20">
                      <canvas id="line-chart" height="220"></canvas>
                    </div>
                    <div className="layer bdT p-20 w-100">
                      <div className="peers ai-c jc-c gapX-20">
                        <div className="peer">
                          <span className="fsz-def fw-600 mR-10 c-grey-800">11% <i className="fa fa-level-up c-green-500"></i></span>
                          <small className="c-grey-500 fw-600">Deployed</small>
                        </div>
                        <div className="peer fw-600">
                          <span className="fsz-def fw-600 mR-10 c-grey-800">2% <i className="fa fa-level-down c-green-500"></i></span>
                          <small className="c-grey-500 fw-600">Bench</small>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                {/* <!-- #Todo ==================== --> */}
                <div className="bd bgc-white p-20">
                  <div className="layers">
                    <div className="layer w-100 mB-10">
                      <h6 className="lh-1">Most viewed</h6>
                    </div>
                    <div className="layer w-100">
                      <ul className="list-task list-group" data-role="tasklist">
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="peers ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Remember Mabunda (SSA)</span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">C#</span>
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">JS</span>
                                <span className="badge rounded-pill fl-r bgc-pink-500 lh-0 p-10">DevOps</span>
                                <span className="badge rounded-pill fl-r bgc-orange-500 lh-0 p-10">Architecture</span>
                                <span className="badge rounded-pill fl-r bgc-deep-purple-500 lh-0 p-10">Team Lead</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="peers ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Michael Lusaka (Premier Software) </span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">JS</span>
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">Python</span>
                                <span className="badge rounded-pill fl-r bgc-pink-500 lh-0 p-10">DevOps</span>
                                <span className="badge rounded-pill fl-r bgc-orange-500 lh-0 p-10">Architecture</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="peers ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall3" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Pamela Ogunrumbi (Tele)</span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bgc-green-500 lh-0 p-10">PM</span>
                                <span className="badge rounded-pill fl-r bgc-yellow-500 lh-0 p-10">Agile</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="peers ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall4" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Dennis Bwabhi </span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">JS</span>
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">Java</span>
                                <span className="badge rounded-pill fl-r bgc-pink-500 lh-0 p-10">DevOps</span>
                                <span className="badge rounded-pill fl-r bgc-orange-500 lh-0 p-10">Architecture</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="peers ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall5" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Esethu Gazi (Standard Dist.) </span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">C#</span>
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">JS</span>
                                <span className="badge rounded-pill fl-r bgc-pink-500 lh-0 p-10">DevOps</span>
                                <span className="badge rounded-pill fl-r bgc-orange-500 lh-0 p-10">Architecture</span>
                                <span className="badge rounded-pill fl-r bgc-deep-purple-500 lh-0 p-10">Team Lead</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="ai-c">
                            {/* <!-- <input type="checkbox" id="inputCall6" name="inputCheckboxesCall" className="peer"> --> */}
                            <label className="form-label peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Depesh Pillay (Param Solutions)</span>
                              <span className="peer">
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">C#</span>
                                <span className="badge rounded-pill fl-r bg-info lh-0 p-10">JS</span>
                                <span className="badge rounded-pill fl-r bgc-pink-500 lh-0 p-10">DevOps</span>
                                <span className="badge rounded-pill fl-r bgc-orange-500 lh-0 p-10">Architecture</span>
                                <span className="badge rounded-pill fl-r bgc-deep-purple-500 lh-0 p-10">Team Lead</span>
                              </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                {/* <!-- #Sales Report ==================== --> */}
                <div className="bd bgc-white">
                  <div className="layers">
                    <div className="layer w-100 p-20">
                      <h6 className="lh-1">Sales</h6>
                    </div>
                    <div className="layer w-100">
                      <div className="bgc-light-blue-500 c-white p-20">
                        <div className="peers ai-c jc-sb gap-40">
                          <div className="peer peer-greed">
                            <h5>February 2023</h5>
                            <p className="mB-0">Projects</p>
                          </div>
                          <div className="peer">
                            <h3 className="text-end">ZAR 4.02M</h3>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive p-20">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className=" bdwT-0">Client/Project</th>
                              <th className=" bdwT-0">Status</th>
                              <th className=" bdwT-0">Resources</th>
                              <th className=" bdwT-0">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="fw-600">AVIS / Lux Cars</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>8</td>
                              <td><span className="text-success">ZAR 1.1M</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Sanlam / Sanport</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>3</td>
                              <td><span className="text-success">ZAR 366K</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Sanlam / SKY</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>6</td>
                              <td><span className="text-success">ZAR 838K </span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Misc / TYT</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>2</td>
                              <td><span className="text-success">ZAR 282K</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Core Team /  Discovery</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>5</td>
                              <td><span className="text-success">ZAR 665K</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Sales / African Bank</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c rounded-pill">In progress</span></td>
                              <td>3</td>
                              <td><span className="text-success">ZAR 305K</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Service / African Bank</td>
                              <td><span className="badge bgc-yellow-50 c-yellow-700 p-10 lh-0 tt-c rounded-pill">Closed</span></td>
                              <td>3</td>
                              <td><span className="text-end">ZAR 565K</span></td>
                            </tr>
                          </tbody>
                        </table>
                       </div>
                    </div>
                  </div>
                  <div className="ta-c bdT w-100 p-20">
                    <a href="#">View all projects</a>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                {/* <!-- #Weather ==================== --> */}
                <div className="bd bgc-white">
                  <div className="layers">
                    <div className="layer w-100 pX-20 pT-20">
                      <h6 className="lh-1">Leads</h6>
                    </div>
                    <div className="layer w-100 p-20">
                      <canvas id="line-chart2" height="220"></canvas>
                    </div>
                    <div className="layer bdT p-20 w-100">
                      <div className="peers ai-c jc-c gapX-20">
                        <div className="peer">
                          <span className="fsz-def fw-600 mR-10 c-grey-800">8% <i className="fa fa-level-up c-green-500"></i></span>
                          <small className="c-grey-500 fw-600">from last month</small>
                        </div>
                        {/* <!-- <div className="peer fw-600">
                          <span className="fsz-def fw-600 mR-10 c-grey-800">2% <i className="fa fa-level-down c-green-500"></i></span>
                          <small className="c-grey-500 fw-600">Bench</small>
                        </div> --> */}
                       
                      </div>
                    </div>
                  </div>
                </div>  
                </div>
              </div>
              <div className="masonry-item col-md-6">
                {/* <!-- #Chat ==================== --> */}
                <div className="bd bgc-white">
                 
                </div>
              </div>
            </div>
        
        </main>

        {/* <!-- ### $App Screen Footer ### --> */}
        <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
          <span>Copyright © 2021 Designed by <a href="https://colorlib.com" target='_blank' title="Colorlib">Colorlib</a>. All rights reserved.</span>
        </footer>
      </div>
    </div>
  </div>
  )
}
