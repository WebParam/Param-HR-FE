import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IPersonnel, IPersonnelResponseModel } from "src/interfaces/personnel";
const axios = require("axios").default;

import Select from "react-select";
import Cookies from "universal-cookie";
import moment from "moment";
import { FaFile } from "react-icons/fa";
import { getProfessionTextById } from "../lib/data/professions";
import { ToastContainer, toast } from "react-toastify";
import { IProject } from "src/interfaces/project";
import { Api } from "../lib/restapi/endpoints";

export default function ProjectDetail() {
  const location = useLocation();

  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startDate, setstartDate] = useState<string>("");
  const [partnerid, setpartnerid] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [userid, setUserId] = useState<string>("");
  const [profilepicture, setrofilepicture] = useState<string>("");
  const [partners, setPartners] = useState<string>("");
  const [personnel, setPersonnel] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);

  const [NameError, setNameError] = useState<boolean>(false);
  const [DescriptionError, setDescriptionError] = useState<boolean>(false);
  const [EndDateError, setEndDateError] = useState<boolean>(false);
  const [startDateError, setstartDateError] = useState<boolean>(false);

  const projectDetails = (location.state?.data as IProject) ?? undefined;

  const cookies = new Cookies();
  const loggedInUser = cookies.get("param-hr-user");
  //console.log("allUserDetails", loggedInUser);

  const _loggedInUserId = loggedInUser?.id;

  const disableBtn = () => {
    setDisabled(false);
  };

  const HandleValidation = () => {
    if (
      name === "" ||
      description === "" ||
      endDate === "" ||
      startDate === ""
    ) {
      if (name === "") {
        setDisabled(true);
        setNameError(true);
        window.scrollTo(0, 0);
      }

      if (description === "") {
        setDisabled(true);
        setDescriptionError(true);
        window.scrollTo(0, 0);
      }
      if (endDate === "") {
        setDisabled(true);
        setEndDateError(true);
        window.scrollTo(0, 0);
      }

      if (startDate === "") {
        setDisabled(true);
        setstartDateError(true);
        window.scrollTo(0, 0);
      }
    }
    disableBtn();
  };

  const createFormFiles = async () => {
    const startDateObj = moment(startDate !== "" ? startDate : projectDetails?.startdate);
    const endDateObj = moment(endDate !== "" ? endDate : projectDetails?.enddate);
  
    const requestData = {
      name: name !== "" ? name : projectDetails.name || "",
      id: projectDetails?.id || id || "",
      userId: _loggedInUserId || "",
      description: description !== "" ? description : projectDetails?.description || "",
      startDate: startDateObj.isValid() ? startDateObj.toDate() : null,
      endDate: endDateObj.isValid() ? endDateObj.toDate() : null,
      profilepicture: profilepicture !== "" ? profilepicture : projectDetails?.profilepicture || "",
      partnerid: ""
    };
    
    const config = {
      headers: { "Content-Type": "application/json" }, // Assuming the server accepts JSON
    };
    
    

    const _id = toast.loading("Saving..", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    axios
      .put(
        "https://4e07-154-117-172-210.ngrok-free.app/Project/UpdateProject",
        requestData,
        config
      )
      .then((response: any) => {
        console.log("response", response);
        
        setName(response.data.name)
        setstartDate(response.data.startdate)
        setId(response.data.data.id);
        setdescription(response.data.description);
        setEndDate(response.data.enddate);
        setUserId(response.data.userid);
        toast.update(_id, {
          render: "Saved successfully",
          type: "success",
          isLoading: false,
        });
        handleComplete();
      })
      .catch((error: any) => {
        toast.update(_id, {
          render: "failed to save",
          type: "success",
          isLoading: false,
        });
        console.log(error);
      });
  };


  async function Add_Project() {
    const _id = toast.loading("Adding a Project..", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  
  
  
    const startDateObj = moment(startDate !== "" ? startDate : projectDetails?.startdate);
    const endDateObj = moment(endDate !== "" ? endDate : projectDetails?.enddate);
  
    const requestData = {
      id : "",
      name: name ||"" ,
      userid: _loggedInUserId || "",
      description: description || "",
      startdate: startDate,
      enddate: endDate,
      profilepicture: profilepicture || "",
      partnerid: ""
    };
    
  
    const project = await Api.POST_AddProject(requestData);
    console.log("new", project);
    if (project.error != false) {
      toast.update(_id, {
        render: "Failed to add project",
        type: "error",
        isLoading: false,
      });
      return;
    } else {
      toast.update(_id, {
        render: "Successfully added a new project.",
        type: "success",
        isLoading: false,
      });
      // cookies.set('param-hr-user', user.data, { path: '/' });
    }
  }

  const handleComplete = () => {
    navigate("/projects", {
      state: undefined,
    });
  };

  const handlePartnersChange = (selectedOptions: any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setPartners(selectedValuesString);
  };

  const handlePersonnelChange = (selectedOptions: any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setPersonnel(selectedValuesString);
  };

  const scaffold = (options: any) => {
    const values = options?.map((option: any) => option.value);
    return values.join(",");
  };

  function getOptionsFromString(
    optionsString: string,
    options: ISelectOption[]
  ) {
    const values = optionsString?.split(",");
    const selectedOptions = values?.map((value: string) => {
      return options.find((option: any) => option.value === value);
    });

    return selectedOptions;
  }

  interface ISelectOption {
    value: string;
    label: string;
  }

  const PartnersOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "swahili", label: "Swahili" },
    { value: "portugese", label: "Portugese" },
  ];

  const PersonnelOptions = [
    { value: "dotnet", label: ".Net" },
    { value: "js", label: "Javascript" },
    { value: "python", label: "Python" },
    { value: "cplus", label: "C/C+" },
    { value: "sql", label: "SQL" },
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
  ];

  return (
    <div id="mainContent" style={{ textAlign: "left" }}>
      <ToastContainer />
      <div className="container-fluid">
        <h4 className="c-grey-900 mT-10 mB-30">Project</h4>
        <div className="row bgc-white bd bdrs-3 p-20 mB-20">
          <>
            <div className="col-md-7">
              <div className="bgc-white p-20 bd">
                <div className="col-md-8">
                  <div
                    className="col-md-8"
                    style={{ float: "right", marginTop: "2%" }}
                  >
                    <h4
                      style={{ fontSize: "1.5em" }}
                      className="c-grey-900 mB-20"
                    >
                      {projectDetails?.name}
                    </h4>
                    <h6 className="c-grey-900">
                      {getProfessionTextById(projectDetails?.description) ?? ""}
                    </h6>
                  </div>
                  <div className="peer ">
                    <img
                      className="w-6r bdrs-50p"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                    />
                    <br />
                    <br />
                  </div>
                </div>

                <div className="mT-30">
                  <form>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>{" "}
                        {NameError ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <input
                          type="text"
                          defaultValue={projectDetails?.name ?? ""}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          id="name"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label" htmlFor="surname">
                          Description
                        </label>{" "}
                        {DescriptionError ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <input
                          type="text"
                          defaultValue={projectDetails?.description ?? ""}
                          onChange={(e) => setdescription(e.target.value)}
                          className="form-control"
                          id="surname"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label" htmlFor="nickname">
                          Start Date
                        </label>{" "}
                        {startDateError ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <input
                          type="text"
                          defaultValue={projectDetails?.startdate ?? ""}
                          onChange={(e) => setstartDate(e.target.value)}
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label" htmlFor="email">
                          End Date
                        </label>{" "}
                        {EndDateError ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <input
                          type="text"
                          defaultValue={projectDetails?.enddate ?? ""}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bgc-white p-20 bd">
                <h6
                  style={{ fontSize: "1.5em", marginTop: "2%" }}
                  className="c-grey-900"
                >
                  Partner &amp; Personnel
                </h6>
                <div className="mT-30">
                  <form>
                    <br />
                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label className="form-label" htmlFor="competencies">
                          Partners
                        </label>
                        {disabled ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <Select
                          defaultValue={PartnersOptions[0]}
                          onChange={handlePartnersChange}
                          isMulti
                          name="competencies"
                          options={PartnersOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>
                      <br />
                    </div>
                    <br />

                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label className="form-label" htmlFor="competencies">
                          Personnel
                        </label>
                        {disabled ? (
                          <span
                            style={{
                              color: "red",
                              marginLeft: "0.5em",
                              fontWeight: 600,
                            }}
                          >
                            *required field
                          </span>
                        ) : null}
                        <Select
                          defaultValue={PersonnelOptions[0]}
                          onChange={handlePersonnelChange}
                          isMulti
                          name="competencies"
                          options={PersonnelOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>
                      <br />
                    </div>
                    <br />

                    <div className="row">
                      <span className="peer"></span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="mb-3  col-md-12">
                        <div
                          className="col-md-5 m-5 checkbox checkbox-circle checkbox-info peers ai-c"
                          style={{ float: "left" }}
                        ></div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div className="mb-3">
                      <button
                        disabled={disabled}
                        type="button"
                        onMouseOut={() => setDisabled(false)}
                        onMouseEnter={HandleValidation}
                        onClick={() => {
                          if(projectDetails == undefined){
                            Add_Project()
                          }else{
                            createFormFiles()
                          }
                        }}
                        className="btn btn-primary btn-color"
                      >
                        Save changes
                      </button>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
