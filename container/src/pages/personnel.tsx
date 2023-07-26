
import { IPersonnel, IPersonnelResponseModel } from 'src/interfaces/personnel';
import { IUserRequestModel, IUserResponseModel } from '../interfaces/user';
import { Api } from '../lib/restapi/endpoints';
import {Link, useNavigate} from "react-router-dom"
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import { getProfessionTextById, getSkillLevelById,skills,languages,competencies, getCountryById  } from '../lib/data/professions';
import { toLower } from 'lodash';

function Personnel() {


  const [filters, setFilters] = useState({ "position": '0', "experience": '0' });

  const handleSelectChange = (event:any, name:string) => {
   
    const { value } = event.target;
    setFilters({ ...filters, [name]: value });
  };


  const [competencyFlter, setCompetencyFilter] = useState<string>("");
  const [languageFilter, setLanguageFilter] = useState<string>("");
  const [skillsFilter, setSkillsFilter] = useState<string>("");

  const [experienceFilter, setExperienceFilter] = useState<string>("0");
  const [companyFilter, setCompanyFilter] = useState<string>("");
  const [positionFilter, setPositionFilter] = useState<string>("0");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [minPriceFilter, setMinPriceFilter] = useState<string>("");
  const [maxPriceFilter, setMaxPriceFilter] = useState<string>("");
  const [startDateFilter, setStartDateFilter] = useState<string>("");
  const [endDateFilter, setEndDateFilter] = useState<string>("");
  const [personnel, setPersonnel] = useState<IPersonnelResponseModel[]>([]);
  
  function checkContainment(str1:string, str2:string) {
    const list1 = str1.split(",");
    const list2 = str2.split(",");
    const containsAll = list1.every(item => list2.includes(item));
    return containsAll;
  }

  const handleCompetencyChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setCompetencyFilter(selectedValuesString);
  };

  const handleSkillsChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setSkillsFilter(selectedValuesString);

  };

  const handleLanguageChange = (selectedOptions:any) => {
    
    const selectedValuesString = scaffold(selectedOptions);
    setLanguageFilter(selectedValuesString);

  };


  const scaffold = (options:any) => {
    const values = options?.map((option:any) => option.value);
    return values.join(',');
  }
  

  const filteredList = personnel.filter((item:any) => {
    console.log("filters-lang",languageFilter, item.data.languages);
    return (

   
      (filters.position == '0' || item.data.proffession ==filters.position) &&
      (filters.experience == '0' || item.data.skillLevel == filters.experience) &&
      (competencyFlter == "" || checkContainment(competencyFlter, item.data.competencies)) &&
      (languageFilter == "" || checkContainment(languageFilter, item.data.languages)) &&
      (skillsFilter == "" || checkContainment(skillsFilter, item.data.skills))
    );
  });


  
  const navigate = useNavigate();

    async function ListAllPersonnel(){
       const data = await Api.GET_AllPersonnel();
       console.log("Response",data)
       setPersonnel(data.data??[]);
    
      }

      useEffect(() => {
        ListAllPersonnel();
      }, [])

      const handleSelect = (user: IPersonnelResponseModel) => {
    console.log("User",user)
        navigate('/personnel-detail', {
          state: user
        });
      };
      
      const handleNew = () => {
    
        navigate('/personnel-detail', {
          state: undefined
        });
      };



console.log("RRRRRR", personnel);

  return (
   <>
      <div id="mainContent">
        <div className="container-fluid">
          {/* <h4 className="c-grey-900 mT-10 mB-30">Personnel</h4> */}
       
          <div className="row">
            <div className="col-md-12">
              <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <div className="row" style={{float:"right", marginRight:"10px"}}><Link style={{backgroundColor: "rgb(38, 63, 34)",
border: "none",
borderRadius:" 0px",
// marginLeft:"50%",
paddingLeft: "15%",
paddingRight: "15%",
width: "160px"}} className="btn btn-primary btn-color" to="/personnel-detail">Add new</Link></div>
          
                <h4  style={{fontSize:"25pt"}} className="c-grey-900 mB-20">Personnel</h4>
              
                <div className="input-group" style={{width: '15%', float: 'left', marginTop: '10px'}}>
                  <div className="input-group-text bgc-white bd bdwR-0">
                    <i className="ti-calendar" />
                  </div>
                  <input type="date" className="form-control bdc-grey-200 start-date" placeholder="Available start date" data-provide="datepicker" />
                </div>
                <div className="input-group" style={{width: '15%', float: 'left', marginTop: '10px', marginLeft: '5px'}}>
                  <div className="input-group-text bgc-white bd bdwR-0">
                    <i className="ti-calendar" />
                  </div>
                  <input type="date" className="form-control bdc-grey-200 start-date" placeholder="Available end date" data-provide="datepicker" />
                </div>     
                
                <div className="input-group" style={{width: '10%', float: 'left', marginTop: '10px', marginLeft: '15px'}}>
                  <input type="text" className="form-control" placeholder="Min price" id="minPrice" />
                </div>
                <div className="input-group" style={{width: '10%', float: 'left', marginTop: '10px', marginLeft: '5px'}}>
                  <input type="text" className="form-control" placeholder="Max price" id="maxPrice" />
                </div>
                <div className="dropdown" style={{float: 'left', margin: '10px', marginLeft: '5%'}}>
                  {/* <button onClick={()=>{clearOtherDropdowns(); toggleSkillsDropdown(!skillsDropdown)}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Skills
                  </button>
                  <div style={{display:skillsDropdown==true?"block":"none"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">C#</a>
                    <a className="dropdown-item" href="#">Java</a>
                    <a className="dropdown-item" href="#">JS</a>
                    <a className="dropdown-item" href="#">PM</a>
                    <a className="dropdown-item" href="#">Python</a>
                  </div> */}
               
                </div>
                {/* <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                  <button onClick={()=>{clearOtherDropdowns(); toggleCompanyDropdown(!companyDropdown)}}  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Company
                  </button>
                  <div  style={{display:companyDropdown==true?"block":"none"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Param Solutions</a>
                    <a className="dropdown-item" href="#">Kwela</a>
                    <a className="dropdown-item" href="#">DDS</a>
                    <a className="dropdown-item" href="#">Jumla</a>
                    <a className="dropdown-item" href="#">Furai Software</a>
                    <a className="dropdown-item" href="#">IQ</a>
                  </div>
                </div> */}
                <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                  {/* <button onClick={()=>{clearOtherDropdowns(); togglePositionDropdown(!positionDropdown)}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Position
                  </button>
                  <div  style={{display:positionDropdown==true?"block":"none"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={()=>{setPositionFilter("0"); filter();}}>Business Analyst</a>
                    <a className="dropdown-item" onClick={()=>{setPositionFilter("1"); filter();}}>Product manager</a>
                    <a className="dropdown-item" onClick={()=>{setPositionFilter("2"); filter();}}>Software developer</a>
                    <a className="dropdown-item" onClick={()=>{setPositionFilter("3"); filter();}}>Software tester</a>
                    <a className="dropdown-item" onClick={()=>{setPositionFilter("4"); filter();}}>Business analyst</a>
                  </div> */}
                     <select onChange={(e)=>handleSelectChange(e,"position")} id="inputState" className="form-control">
                                    <option selected={positionFilter=="0"} value={"0"} >Select Profession</option>
                                    <option selected={positionFilter=="1"} value={"1"}>Business analyst</option>
                                    <option selected={positionFilter=="2"} value={"2"}>Project manager</option>
                                    <option selected={positionFilter=="3"} value={"3"}>Software Developer</option>
                                    <option selected={positionFilter=="4"} value={"4"}>Software Tester</option>
                                  </select>
                </div>
                <div className="dropdown" style={{float: 'left', margin: '10px'}}>
             
                     <select onChange={(e)=>handleSelectChange(e, "experience")} id="inputState" className="form-control">
                        <option selected={experienceFilter=="0"} value={"0"} >Select Experience</option>
                        <option selected={experienceFilter=="1"} value={"1"}>Intern</option>
                        <option selected={experienceFilter=="2"} value={"2"}>Junior</option>
                        <option selected={experienceFilter=="3"} value={"3"}>Intermediate</option>
                        <option selected={experienceFilter=="4"} value={"4"}>Senior</option>
                        <option selected={experienceFilter=="5"} value={"5"}>Lead</option>
                      </select>
                </div>
                {/* <div className="dropdown" style={{float: 'left', margin: '10px'}}>
                  <button onClick={()=>{clearOtherDropdowns(); toggleStatusDropdown(!statusDropdown)}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Status
                  </button>
                  <div style={{display:statusDropdown==true?"block":"none"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Bench</a>
                    <a className="dropdown-item" href="#">Allocated</a>
                  </div>
                </div> */}
                
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
                              <img className="w-3r bdrs-50p" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
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
                <div className="input-group" style={{width: '30%', float: 'left',margin: '10px', marginBottom:"15px"}}>
             
                <Select
                  onChange={handleSkillsChange}
                  isMulti
                  name="skills"           
                  options={skills}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder={<div>Filter by skill set</div>}
                />  
                </div>
                <div className="input-group" style={{width: '30%', float: 'left',margin: '10px', marginBottom:"15px"}}>
                <Select
                  // defaultValue={competencies[0]}
                  onChange={handleCompetencyChange}
                  isMulti
                  name="competencies"
                  // styles={customStyles}
                  options={competencies}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder={<div>Filter by competencies</div>}
                />  
                </div>
                <div className="input-group" style={{width: '25%', float: 'left',margin: '10px', marginBottom:"15px"}}>
                <Select
                  // defaultValue={languages[0]}
                  onChange={handleLanguageChange}
                  isMulti
                  name="language"
                  options={[  {value:"english",label:"English"},
                  {value:"french",label:"French"},
                  {value:"swahili",label:"Swahili"},
                  {value:"portugese",label:"Portugese"}]}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder={<div>Filter by language</div>}
                />  
                  
                </div>
                <br /><br />          
                <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Experience</th>
                      <th>Competencies</th>
                      <th>Skills</th>
                      <th>Location</th>
                     
                      <th>Languages</th>
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
                      <th>Competencies</th>
                      <th>Skills</th>
                      <th>Location</th>
                     
                      <th>Languages</th>
                      <th>Status</th>
                      <th>Project end date</th>
                      <th>Rate</th>
                    </tr>
                  </tfoot>
                  <tbody>

                    {filteredList.length>0 && filteredList.map(person => 
                       
                        <tr style={{cursor:"pointer"}} onClick={()=>{handleSelect(person)}}>
                        <td><a>{person.data.user?.name} {person.data.user?.surname}</a></td>
                        <td>{getProfessionTextById(person.data.proffession)}</td>
                        <td>{getSkillLevelById(person.data.skillLevel)}</td>     
                        <td>
                        <span className="peer">
                                  {
                                    person.data.competencies?.split(',')?.map((skill,index)=>{
                                      return(
                                        <span key={index}  style={{backgroundColor: "rgb(38, 63, 34) !important"}} className="badge rounded-pill  bg-info lh-0 p-10">{skill}</span>
                                      )
                                    })
                                  }
                                  {/* <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span> */}  
                                </span>
                        
                        </td>
                        <td>
                        <span className="peer">
                                  {
                                    person.data.skills?.split(',')?.map((skill,index)=>{
                                      return(
                                        <span key={index}   style={{backgroundColor: "green !important"}}  className="badge rounded-pill  bg-info lh-0 p-10">{skill}</span>
                                      )
                                    })
                                  }
                                  {/* <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span> */}
                                </span>
                        
                        </td>
                       
                        <td>{person.data.city}, {getCountryById(person.data.country)}</td>
                        <td>
                        <span className="peer">
                                  {
                                    person.data.languages?.split(',')?.map((languages,index)=>{
                                      return(
                                        <span key={index}  style={{backgroundColor: "rgb(38, 63, 34) !important"}}  className="badge rounded-pill  bg-info lh-0 p-10">{languages}</span>
                                      )
                                    })
                                  }
                                  {/* <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span> */}
                                </span>
                        
                        </td>
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
