import React from 'react';
import { IUserRequestModel } from '../interfaces/user';
import { Api } from '../lib/restapi/endpoints';

function Personnel() {
  async function AddPersonnel(){
    var payload = {id:"0",userid:"0"} as IUserRequestModel;
     const data = await Api.POST_CreatePersonnel(payload);
     console.log("Response",data)
    }
  
    async function ListAllPersonnel(){
       const data = await Api.GET_AllPersonnel();
       console.log("Response",data)
      }
  return (
   <>
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
                <button onClick={()=>AddPersonnel()} >Add Personnel</button> <button onClick={()=>AddPersonnel()} >Add Personnel</button>
                <button onClick={()=>ListAllPersonnel()} >List all Personnel</button> <button onClick={()=>ListAllPersonnel()} >List Personnel</button>
                
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
    </>
  );
}

export default Personnel;
