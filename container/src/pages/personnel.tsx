
import { IPersonnelResponseModel } from 'src/interfaces/personnel';
import { IUserRequestModel, IUserResponseModel } from '../interfaces/user';
import { Api } from '../lib/restapi/endpoints';

import React, { useState, useEffect } from 'react';

function Personnel() {
  async function AddPersonnel(){
    var payload = {id:"0",userid:"0"} as IUserRequestModel;
     const data = await Api.POST_CreatePersonnel(payload);
     console.log("Response",data)
    }
  
    async function ListAllPersonnel(){
       const data = await Api.GET_AllPersonnel();
       console.log("Response",data)
       setPersonnel(data.data??[]);

      }

      useEffect(() => {
        ListAllPersonnel();
      }, [])

  const [personnel, setPersonnel] = useState<IPersonnelResponseModel[]>([]);
  console.log("Personnel",personnel)

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
                      <th>Experience</th>
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
                      <th>Experience</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date/ End date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {personnel.length>0 && personnel.map(person => 

                        <tr>
                        <td><a>{person.data.user?.name} {person.data.user?.surname}</a></td>
                        <td>{person.data.position}</td>
                        <td>{person.data.skillLevel}</td>
                        <td>{person.data.city}, {person.data.country}</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>{person.data.rate} /hour</td>
                        </tr>
                    )}
                   
                 
                
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
