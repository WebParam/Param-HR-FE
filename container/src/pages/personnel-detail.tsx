
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { IPersonnel, IPersonnelResponseModel } from 'src/interfaces/personnel';



export default function PersonnelDetail() {
  const location = useLocation();

 
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [skillLevel, setSkillLevel] = useState<string>("");
  const [workAddress, setWorkaddress] = useState<string>("");
  const [homeAddress, setHomeAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [province, setProvinces] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  
  const [position, setPosition] = useState<string>("");

  const [masters, setMasters] = useState<string>("");
  
  const [languages, setLanguage] = useState<string[]>([]);

  const [skills, setEducation] = useState<string[]>([]);
  const [cv, setCV] = useState<Blob|undefined>();
  const [degree, setDegree] = useState<Blob|undefined>();

  const [personnel, setPersonnel] = useState<IPersonnelResponseModel|undefined>(undefined);
// get userId
const userDetails = location.state?.data as IPersonnel??undefined;

const createFormFile=()=>{
  const formData = new FormData();
  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("nickname", nickname);
  formData.append("birthday", birthday);
  formData.append("rate", rate);
  formData.append("skillLevel", skillLevel);
  formData.append("workAddress", workAddress);
  formData.append("homeAddress", homeAddress);
  formData.append("city", city);
  formData.append("province", province);
  formData.append("country", country);
  formData.append("position", position);
 
  formData.append("masters", masters);
  formData.append("languages", "");
  formData.append("skills", "");
  if(cv) formData.append("cv", cv as Blob);
  if(degree) formData.append("degree", degree as Blob);

  return formData;
}

const saveCV=(e:any)=>{
 
    setCV(e.target.files[0]);
   
  }


  return (
      <div id="mainContent" style={{textAlign:"left"}}>
        <div className="container-fluid">
          <h4 className="c-grey-900 mT-10 mB-30">Personnel</h4>
          <div className="row bgc-white bd bdrs-3 p-20 mB-20">
                  <>
                       <h4 className="c-grey-900 mB-20">{userDetails?.user?.name} {userDetails?.user?.surname}</h4>
                      <div className="col-md-7">
                        <div className="bgc-white p-20 bd">
                          <div className="col-md-5">
                            <div className="peer mR-15">
                              <img className="w-6r bdrs-50p" src="https://randomuser.me/api/portraits/women/30.jpg" alt="" />
                              {/* <input type="file" class="form-control w-6r" id="exampleInputPassword1"> */}
                            </div>
                          </div>
                          <div className="col-md-8">
                            <h6 className="c-grey-900">{userDetails?.position}</h6>
                          </div>
                          <div className="mT-30">
                            <form>
                              <div className="row">
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="name">Name</label>
                                  <input type="text" defaultValue={userDetails.user.name} className="form-control" id="name" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="surname">Surname</label>
                                  <input type="text" defaultValue={userDetails.user.surname} className="form-control" id="surname"  />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="nickname">Nickname</label>
                                  <input type="text" defaultValue={userDetails.nickname} className="form-control" id="nickname" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="email">Email</label>
                                  <input type="email" defaultValue={userDetails.user.email} className="form-control" id="email" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="rate">Rate</label>
                                  <input type="text" defaultValue={userDetails.rate} className="form-control" id="rate"  />
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="skill">Skill level</label>
                                  <select id="inputState" className="form-control">
                                    <option selected>Senior</option>
                                    <option>...</option>
                                  </select>
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="workAddress">Work Address</label>
                                <input type="text" className="form-control" defaultValue={userDetails.workAddress} id="workAddress" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="homeAddress">Home Address</label>
                                <input type="text" className="form-control" defaultValue={userDetails.homeAddress} id="homeAddress" />
                              </div>
                              <div className="row">
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="city">City</label>
                                  <input type="text" id="city" defaultValue={userDetails.city} className="form-control"  />
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="inputState">Province</label>
                                  <select id="inputState" className="form-control">
                                    <option selected>Nairobi</option>
                                    <option>...</option>
                                  </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="country">Country</label>
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
                                      <input type="text" className="form-control bdc-grey-200 start-date" defaultValue={userDetails.birthday} data-provide="datepicker" />
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
                                  <label className="form-label" htmlFor="education">Education</label>
                                  <input type="text" className="form-control" id="education" defaultValue={userDetails.education}/>
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
                                      <input type="file" id="cv" name="cv" onChange={saveCV} />
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
                  </>
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
  )
}
