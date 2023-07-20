import { IPersonnel, IPersonnelResponseModel } from "src/interfaces/personnel";
import { IUserRequestModel, IUserResponseModel } from "../interfaces/user";
import { Api } from "../lib/restapi/endpoints";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import {
  getProfessionTextById,
  getSkillLevelById,
  skills,
  languages,
  competencies,
  getCountryById,
} from "../lib/data/professions";
import { toLower } from "lodash";
import { IProjectResponseModel } from "src/interfaces/project";

function Project() {
  const [filters, setFilters] = useState({ position: "0", experience: "0" });

  const handleSelectChange = (event: any, name: string) => {
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
  const [projects, setProjects] = useState<IProjectResponseModel[] | any>([]);

  function checkContainment(str1: string, str2: string) {
    const list1 = str1.split(",");
    const list2 = str2.split(",");
    const containsAll = list1.every((item) => list2.includes(item));
    return containsAll;
  }

  const handleCompetencyChange = (selectedOptions: any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setCompetencyFilter(selectedValuesString);
  };

  const handleSkillsChange = (selectedOptions: any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setSkillsFilter(selectedValuesString);
  };

  const handleLanguageChange = (selectedOptions: any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setLanguageFilter(selectedValuesString);
  };

  const scaffold = (options: any) => {
    const values = options?.map((option: any) => option.value);
    return values.join(",");
  };



  const filteredList = projects.filter((item: any) => {
    console.log("filters-lang", languageFilter, item.data.languages);
    return (
      (filters.position == "0" || item.data.proffession == filters.position) &&
      (filters.experience == "0" ||
        item.data.skillLevel == filters.experience) &&
      (competencyFlter == "" ||
        checkContainment(competencyFlter, item.data.competencies)) &&
      (languageFilter == "" ||
        checkContainment(languageFilter, item.data.languages)) &&
      (skillsFilter == "" || checkContainment(skillsFilter, item.data.skills))
    );
  });

  const navigate = useNavigate();

  async function ListAllProjects() {
    const data = await Api.GET_GetAllProjects();
    console.log("Response", data);
    setProjects(data);
  }

  useEffect(() => {
    ListAllProjects();
  }, []);

  const handleSelect = (project: IProjectResponseModel) => {
    console.log("projects", project);
    navigate("/projectdetails", {
      state: project,
    });
  };

  const handleNew = () => {
    navigate("/projectdetails", {
      state: undefined,
    });
  };

  console.log("RRRRRR", projects);

  return (
    <>
      <div id="mainContent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bgc-white bd bdrs-3 p-20 mB-20">
                <div onClick={handleNew}
                  className="row"
                  style={{ float: "right", marginRight: "10px" }}
                >
                  <Link
                    style={{
                      backgroundColor: "rgb(38, 63, 34)",
                      border: "none",
                      borderRadius: " 0px",
                      // marginLeft:"50%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                      width: "160px",
                    }}
                    className="btn btn-primary btn-color"
                    to="/projectdetails"
                  >
                    Add new
                  </Link>
                </div>

                <h4 style={{ fontSize: "25pt" }} className="c-grey-900 mB-20">
                  Projects
                </h4>

                <div
                  className="input-group"
                  style={{ width: "15%", float: "left", marginTop: "10px" }}
                >
                  <div className="input-group-text bgc-white bd bdwR-0">
                    <i className="ti-calendar" />
                  </div>
                  <input
                    type="date"
                    className="form-control bdc-grey-200 start-date"
                    placeholder="Available start date"
                    data-provide="datepicker"
                  />
                </div>
                <div
                  className="input-group"
                  style={{
                    width: "15%",
                    float: "left",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <div className="input-group-text bgc-white bd bdwR-0">
                    <i className="ti-calendar" />
                  </div>
                  <input
                    type="date"
                    className="form-control bdc-grey-200 start-date"
                    placeholder="Available end date"
                    data-provide="datepicker"
                  />
                </div>

                <div
                  className="input-group"
                  style={{
                    width: "10%",
                    float: "left",
                    marginTop: "10px",
                    marginLeft: "15px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min price"
                    id="minPrice"
                  />
                </div>
                <div
                  className="input-group"
                  style={{
                    width: "10%",
                    float: "left",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max price"
                    id="maxPrice"
                  />
                </div>
                <div
                  className="dropdown"
                  style={{ float: "left", margin: "10px", marginLeft: "5%" }}
                >
                  {/*  */}
                </div>
                <div
                  className="dropdown"
                  style={{ float: "left", margin: "10px" }}
                >
                  <select
                    onChange={(e) => handleSelectChange(e, "experience")}
                    id="inputState"
                    className="form-control"
                  >
                    <option selected={experienceFilter == "0"} value={"0"}>
                      Select Experience
                    </option>
                    <option selected={experienceFilter == "1"} value={"1"}>
                      Intern
                    </option>
                    <option selected={experienceFilter == "2"} value={"2"}>
                      Junior
                    </option>
                    <option selected={experienceFilter == "3"} value={"3"}>
                      Intermediate
                    </option>
                    <option selected={experienceFilter == "4"} value={"4"}>
                      Senior
                    </option>
                    <option selected={experienceFilter == "5"} value={"5"}>
                      Lead
                    </option>
                  </select>
                </div>

                <br />
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Angelica Kiogo
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="masonry-item col-md-12">
                          <div className="bgc-white p-20 bd">
                            <h6 className="c-grey-900">
                              Senior project manager
                            </h6>
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt=""
                              />
                            </div>
                            <div className="mT-30">
                              <form>
                                <div className="row">
                                  <div className="mb-3 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="inputPassword4"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputPassword4"
                                      placeholder="Angelica"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="inputPassword4"
                                    >
                                      Description
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputPassword4"
                                      placeholder="Kiongo"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="inputPassword4"
                                    >
                                      Nickname
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputPassword4"
                                      placeholder="Angie"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="inputEmail4"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      defaultValue="a.kiongo@ttstechnologies.com"
                                      className="form-control"
                                      id="inputEmail4"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="inputEmail4"
                                    >
                                      Rate
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputEmail4"
                                      placeholder="ZAR 740"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-4">
                                    <label
                                      className="form-label"
                                      htmlFor="inputZip"
                                    >
                                      Skill level
                                    </label>
                                    <select
                                      id="inputState"
                                      className="form-control"
                                    >
                                      <option selected>Senior</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="inputAddress"
                                  >
                                    Work Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="1234 Main St"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="inputAddress2"
                                  >
                                    Home Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    placeholder="Apartment, studio, or floor"
                                  />
                                </div>
                                <div className="row">
                                  <div className="mb-3 col-md-4">
                                    <label
                                      className="form-label"
                                      htmlFor="inputCity"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="Thika"
                                      className="form-control"
                                      id="inputCity"
                                    />
                                  </div>
                                  <div className="mb-3 col-md-4">
                                    <label
                                      className="form-label"
                                      htmlFor="inputState"
                                    >
                                      Province
                                    </label>
                                    <select
                                      id="inputState"
                                      className="form-control"
                                    >
                                      <option selected>Nairobi</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                  <div className="mb-3 col-md-4">
                                    <label
                                      className="form-label"
                                      htmlFor="inputZip"
                                    >
                                      Country
                                    </label>
                                    <select
                                      id="inputState"
                                      className="form-control"
                                    >
                                      <option selected>Kenya</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="mb-3 col-md-6">
                                    <label className="form-label fw-500">
                                      Birthdate
                                    </label>
                                    <div className="timepicker-input input-icon mb-3">
                                      <div className="input-group">
                                        <div className="input-group-text bgc-white bd bdwR-0">
                                          <i className="ti-calendar" />
                                        </div>
                                        <input
                                          type="text"
                                          className="form-control bdc-grey-200 start-date"
                                          placeholder="12-01-1982"
                                          data-provide="datepicker"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <div
                                    className="checkbox checkbox-circle checkbox-info peers ai-c"
                                    style={{ float: "left" }}
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      id="inputCall2"
                                      name="inputCheckboxesCall"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="inputCall2"
                                      className="form-label peers peer-greed js-sb ai-c"
                                    >
                                      <span className="peer peer-greed">
                                        English
                                      </span>
                                    </label>
                                  </div>
                                  <div
                                    className="checkbox checkbox-circle checkbox-info peers ai-c"
                                    style={{
                                      float: "left",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      id="inputCall2"
                                      name="inputCheckboxesCall"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="inputCall2"
                                      className="form-label peers peer-greed js-sb ai-c"
                                    >
                                      <span className="peer peer-greed">
                                        Swahili{" "}
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <br />
                                <div className="mb-3">
                                  <div
                                    className="checkbox checkbox-circle checkbox-info peers ai-c"
                                    style={{ float: "left" }}
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      id="inputCall2"
                                      name="inputCheckboxesCall"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="inputCall2"
                                      className="form-label peers peer-greed js-sb ai-c"
                                    >
                                      <span className="peer peer-greed">
                                        Degree{" "}
                                      </span>
                                    </label>
                                  </div>
                                  <div
                                    className="checkbox checkbox-circle checkbox-info peers ai-c"
                                    style={{
                                      float: "left",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      id="inputCall2"
                                      name="inputCheckboxesCall"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="inputCall2"
                                      className="form-label peers peer-greed js-sb ai-c"
                                    >
                                      <span className="peer peer-greed">
                                        Diploma{" "}
                                      </span>
                                    </label>
                                  </div>
                                  <div
                                    className="checkbox checkbox-circle checkbox-info peers ai-c"
                                    style={{
                                      float: "left",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    <input
                                      type="checkbox"
                                      defaultChecked
                                      id="inputCall2"
                                      name="inputCheckboxesCall"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="inputCall2"
                                      className="form-label peers peer-greed js-sb ai-c"
                                    >
                                      <span className="peer peer-greed">
                                        BPMN Certification{" "}
                                      </span>
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
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <a href="manage-personnel.html">
                          <button type="button" className="btn btn-primary">
                            Manage profile
                          </button>
                        </a>
                        <button type="button" disabled className="btn btn-dark">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="input-group"
                  style={{
                    width: "30%",
                    float: "left",
                    margin: "10px",
                    marginBottom: "15px",
                  }}
                ></div>
                <br />
                <br />
                <table
                  id="dataTable"
                  className="table table-striped table-bordered"
                  cellSpacing={0}
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {filteredList.length > 0 &&
                      filteredList.map((Project: any, index: number) => {
                        // Parse the dates into Date objects
                        const startDate = new Date(Project.data?.startdate);
                        const endDate = new Date(Project.data?.enddate);

                        // Format the dates to display in the desired format (YYYY-MM-DD)
                        const formattedStartDate = startDate
                          .toISOString()
                          .slice(0, 10);
                        const formattedEndDate = endDate
                          .toISOString()
                          .slice(0, 10);

                        return (
                          <tr
                            key={index}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              handleSelect(Project);
                            }}
                          >
                            <td>
                              <a>{Project.data?.name}</a>
                            </td>
                            <td>{Project.data?.description}</td>
                            <td>{formattedStartDate}</td>
                            <td>{formattedEndDate}</td>
                          </tr>
                        );
                      })}
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

export default Project;
