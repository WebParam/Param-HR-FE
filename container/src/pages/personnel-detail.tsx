
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { IDeletePersonnelRequestModel, IPersonnel, IPersonnelResponseModel } from 'src/interfaces/personnel';
const axios = require("axios").default;

import Select from 'react-select';
import Cookies from 'universal-cookie';
import moment from 'moment'
import { FaFile } from 'react-icons/fa';
import { getProfessionTextById } from '../lib/data/professions';
import { ToastContainer, toast } from 'react-toastify';
import { Api } from '../lib/restapi/endpoints';
import { url } from '../lib/restapi/endpoints';


export default function PersonnelDetail() {
  const location = useLocation();

  const navigate = useNavigate();
 
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [skillLevel, setSkillLevel] = useState<string>("");  
  const [email, setEmail] = useState<string>("");
  const [workAddress, setWorkaddress] = useState<string>("");
  const [homeAddress, setHomeAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [country, setCountry] = useState<string>("0");  
  const [languages, setLanguage] = useState<string>("");
  const [contacts, setContacts] = useState<string>("");
  const [id, setId] = useState<string>(""); 
  const [competencies, setCompetencies] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [proffession, setProfession] = useState<string>("");  

  const [hasDegree, setHasDegree] = useState<boolean>(false);  
  const [degree, setDegree] = useState<Blob|undefined>();
  const [degreeUrl, setDegreeUrl] = useState<string>("");
  const [degreeType, setDegreeType] = useState<string>("0");
  const [degreeInstitution, setDegreeInstitution] = useState<string>("");

  const [hasMasters, setHasMasters] = useState<boolean>(false);
  const [masters, setMasters] = useState<Blob|undefined>();
  const [mastersType, setMastersType] = useState<string>("0");
  const [mastersUrl, setMastersUrl] = useState<string>("");
  const [mastersInstitution, setMastersInstitution] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);//disabling the button

  const [NameError , setNameError ] = useState<boolean>(false);
  const [SurnameError , setSurnameError ] = useState<boolean>(false);
  const [EmailError , setEmailError ] = useState<boolean>(false);
  const [BirthdayError , setBirthdayError] = useState<boolean>(false);
  const [SkillLevelError , setSkillLevelError ] = useState<boolean>(false);
  const [WorkAddressError , setWorkAddressError ] = useState<boolean>(false);
  const [HomeAddressError , setHomeAddressError ] = useState<boolean>(false);
  const [CityError , setCityError ] = useState<boolean>(false);
  const [TimezoneError , setTimezoneError ] = useState<boolean>(false);
  const [CountryError , setCountryError ] = useState<boolean>(false);
  const [LanguagesError , setLanguagesError] = useState<boolean>(false);
  const [CompetenciesError , setCompetenciesError] = useState<boolean>(false);
  const [SkillsError , setSkillsError ] = useState<boolean>(false);
  const [RateError , setRateError ] = useState<boolean>(false);
  const [ContactError , setContactError ] = useState<boolean>(false);
  const [PhoneError , setPhoneError ] = useState<boolean>(false);
  const [ProffesionError , setProffesionError ] = useState<boolean>(false);


  const [cv, setCV] = useState<Blob|undefined>();
  const [cvUrl, setcvUrl] = useState<string>("");

  const allUserDetails = location.state as IPersonnelResponseModel??undefined;
  const userDetails = location.state?.data as IPersonnel??undefined;

  const cookies = new Cookies();
  const loggedInUser = cookies.get('param-hr-user');
  console.log("allUserDetails",loggedInUser);
  const _loggedInUserId = loggedInUser?.id;

  const disableBtn = () => {
    setDisabled(false);
  }

  const HandleValidation = () => {

    if(userDetails?.user!=null){
       if((name === "" && userDetails?.user?.name=="") ||  (surname === ""  && userDetails?.user?.surname=="") || (birthday === "" && userDetails.birthday=="") || (rate === "" && userDetails?.rate=="")
    || (email === "" && userDetails?.user?.email=="" ) || (workAddress === "" && userDetails?.workAddress=="") || (homeAddress === "" && userDetails?.homeAddress=="" )|| (city === ""&& userDetails?.city=="" ) ||
    (timezone === "" && userDetails?.timezone=="" ) || (country === "" && userDetails?.country=="" ) || (languages === "" && userDetails?.languages=="")  || (contacts === "" && userDetails?.user?.contacts=="" )|| 
    (proffession === "" && userDetails?.proffession=="")  
    || (skillLevel === "" && userDetails?.skillLevel=="")){


      
      if (skillLevel === "" && userDetails?.skillLevel==""){
        setDisabled(true);
        setSkillLevelError(true)
        window.scrollTo(0, 0); 
      }

      if(name === "" && userDetails?.user?.name==""){
        setDisabled(true);
        setNameError(true)
        window.scrollTo(0, 0); 
      }
      if (proffession === "" && userDetails?.proffession=="")  {
        setDisabled(true);
        setProffesionError(true)
        window.scrollTo(0, 0); 
      }

      if (surname === ""  && userDetails?.user?.surname==""){
        setDisabled(true);
        setSurnameError(true)
        window.scrollTo(0, 0); 
      }

      if(birthday === "" && userDetails?.birthday==""){
        setDisabled(true);
        setBirthdayError(true)
        window.scrollTo(0, 0); 
      }

      if(rate === "" && userDetails?.rate==""){
        setDisabled(true);
        setRateError(true)
        window.scrollTo(0, 0); 
      }

      if (email === "" && userDetails?.user?.email=="" ){
        setDisabled(true);
        setEmailError(true)
        window.scrollTo(0, 0); 
      }

      if (workAddress === "" && userDetails?.workAddress=="") {
        setDisabled(true);
        setWorkAddressError(true)
        window.scrollTo(0, 0); 
      }

      if(homeAddress === "" && userDetails?.homeAddress=="" ){
        setDisabled(true);
        setHomeAddressError(true)
        window.scrollTo(0, 0); 
      }

      if (city === ""&& userDetails?.city=="" ){
        setDisabled(true);
        setCityError(true)
        window.scrollTo(0, 0); 
      }

      if (timezone === "" && userDetails?.timezone=="" ){
        setDisabled(true);
        setTimezoneError(true)
        window.scrollTo(0, 0); 
      }

      if (country === "" && userDetails?.country=="" ){
        setDisabled(true);
        setCountryError(true)
        window.scrollTo(0, 0); 
      }

      if(languages === "" && userDetails?.languages=="") {
        setDisabled(true);
        setLanguagesError(true)
        window.scrollTo(0, 0); 
      }

      
      if(contacts === "" && userDetails?.user?.contacts=="" ){
        setDisabled(true);
        setContactError(true)
        window.scrollTo(0, 0); 

      }
      if(!isFinite(Number(contacts)) || ( contacts.length != 10 && userDetails?.user.contacts=="" )){

        setPhoneError(true);
        setDisabled(true);
        window.scrollTo(0, 0); 
    }
  }
    }else{
      if(name === "" ||  surname === ""  || birthday === "" || rate === ""
      || email === ""  || workAddress === "" || homeAddress === "" || city === "" ||
      timezone === "" || country === "" || languages === "" || contacts === "" || proffession === "" 
      || skillLevel === ""){
  
  
        
        if(skillLevel === ""){
          setDisabled(true);
          setSkillLevelError(true)
          window.scrollTo(0, 0); 
        }
  
        if(name === ""){
          setDisabled(true);
          setNameError(true)
          window.scrollTo(0, 0); 
        }
        if(proffession === ""){
          setDisabled(true);
          setProffesionError(true)
          window.scrollTo(0, 0); 
        }
  
        if(surname === ""){
          setDisabled(true);
          setSurnameError(true)
          window.scrollTo(0, 0); 
        }
  
        if(birthday === ""){
          setDisabled(true);
          setBirthdayError(true)
          window.scrollTo(0, 0); 
        }
  
        if(rate === ""){
          setDisabled(true);
          setRateError(true)
          window.scrollTo(0, 0); 
        }
  
        if(email === ""){
          setDisabled(true);
          setEmailError(true)
          window.scrollTo(0, 0); 
        }
  
        if(workAddress === ""){
          setDisabled(true);
          setWorkAddressError(true)
          window.scrollTo(0, 0); 
        }
  
        if(homeAddress === ""){
          setDisabled(true);
          setHomeAddressError(true)
          window.scrollTo(0, 0); 
        }
  
        if(city === ""){
          setDisabled(true);
          setCityError(true)
          window.scrollTo(0, 0); 
        }
  
        if(timezone === ""){
          setDisabled(true);
          setTimezoneError(true)
          window.scrollTo(0, 0); 
        }
  
        if(country === ""){
          setDisabled(true);
          setCountryError(true)
          window.scrollTo(0, 0); 
        }
  
        if(languages === ""){
          setDisabled(true);
          setLanguagesError(true)
          window.scrollTo(0, 0); 
        }
  
        
        if(contacts === ""){
          setDisabled(true);
          setContactError(true)
          window.scrollTo(0, 0); 
  
        }else if(!isFinite(Number(contacts)) || contacts.length != 10){
  
          setPhoneError(true);
          setDisabled(true);
          window.scrollTo(0, 0); 
      }
    }  
    }
     
  disableBtn();
  }

  
async function DeleteUser() {
 

    const config = {
      headers: { "Content-Type": "application/json" }, // Assuming the server accepts JSON
    };
    
    

    const _id = toast.loading("Deleting personnel...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const payload = {
    UserId: userDetails?.userid??userId,
    } as IDeletePersonnelRequestModel; 

    axios
      .post(
        "https://4e07-154-117-172-210.ngrok-free.app/Users/DeleteUser",
        payload
        
      )
      .then((response: any) => {
        console.log("response", response);
       
        handleComplete();
      })
      .catch((error: any) => {
        toast.update(_id, {
          render: "failed to delete personnel",
          type: "success",
          isLoading: false,
        });
        console.log(error);
      });
  
}


const createFormFiles= async()=>{
 
  const formData = new FormData();
  formData.append("name", name!=""?name:userDetails?.user.name);
  formData.append("userId",userDetails?.userid??userId);
  formData.append("creatingUser",_loggedInUserId??"");
  formData.append("surname", surname!=""?surname:userDetails?.user.surname);
  formData.append("id", userDetails?.id??id);
  formData.append("nickname", nickname!=""?nickname:userDetails?.nickname);
  formData.append("birthday", birthday!=""?birthday:userDetails?.birthday);
  formData.append("rate", rate!=""?rate:userDetails?.rate);
  formData.append("skillLevel", skillLevel!=""?skillLevel:userDetails?.skillLevel);
  formData.append("workAddress", workAddress!=""?workAddress:userDetails?.workAddress);
  formData.append("homeAddress", homeAddress!=""?homeAddress:userDetails?.homeAddress);
  formData.append("city", city!=""?city:userDetails?.city);
  formData.append("timezone", timezone!=""?timezone:userDetails?.timezone);
  formData.append("country", country!=""?country:userDetails?.country);
  formData.append("proffession", proffession!=""?proffession:userDetails?.proffession);
  formData.append("email", email!=""?email:userDetails?.user.email);
  formData.append("timezone", timezone!=""?proffession:userDetails?.timezone);      
  formData.append("contacts", contacts!=""?contacts:userDetails?.user.contacts);

//  
  formData.append("degreeInstitution", hasDegree? degreeInstitution!=""?degreeInstitution:userDetails?.degreeInstitution:"");
  formData.append("degreeType", degreeType!=""?degreeType:userDetails?.degreeType);
  formData.append("mastersInstitution", hasMasters ? mastersInstitution!=""?mastersInstitution:userDetails?.mastersInstitution:"");
  formData.append("mastersType", mastersType!=""?mastersType:userDetails?.mastersType);

  formData.append("languages", languages!=""?languages:userDetails?.languages);

  formData.append("skills", skills!=""?skills:userDetails?.skills);
  formData.append("competencies", competencies!=""?competencies:userDetails?.competencies);



  if(cv) formData.append("cv", cv as Blob);
  if(degree) formData.append("degree", degree as Blob);  
  if(masters) formData.append("masters", masters as Blob);

 
  const config = {     
      headers: { 'content-type': 'multipart/form-data' }
  }
  


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

  axios.post(`${url}/Personnel/AddPersonnel`, formData, config)
      .then((response:any) => {
          console.log("response", response);
          setId(response.data.data.id);
          setUserId(response.data.data.user.id);
          setcvUrl(response.data.cv)
          setMastersUrl(response.data.masters);
          setDegreeUrl(response.data.degree);
          toast.update(_id, { render: "Saved successfully", type: "success", isLoading: false });
          handleComplete();
          
          
      })
      .catch((error:any) => {
        toast.update(_id, { render: "All is good", type: "success", isLoading: false });
          console.log(error);
      });

  }
  

  
  const handleComplete = () => {
   
    navigate('/personnel', {
      state: undefined
    });
  };
  const saveCV=(e:any)=>{
 
    setCV(e.target.files[0]);
   console.log(cv);
  }
  const saveMasters=(e:any)=>{
 
    setMasters(e.target.files[0]);
   console.log(cv);
  }
  const saveDegree=(e:any)=>{
 
    setDegree(e.target.files[0]);
   console.log(cv);
  }

  const handleEducationChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setLanguage(selectedValuesString);
  };

  const handleCompetenciesChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setCompetencies(selectedValuesString);
  };

  const handleSkillsChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setSkills(selectedValuesString);
  };


  const scaffold = (options:any) => {
    const values = options?.map((option:any) => option.value);
    return values.join(',');
  }

  function getOptionsFromString(optionsString:string, options:ISelectOption[]) {
    const values = optionsString?.split(',');
    const selectedOptions = values?.map((value:string) => {
      return options.find((option:any) => option.value === value);
    });

    return selectedOptions;
  

  }

  interface ISelectOption{
    value:string;
    label:string;
  }

    const languageOptions = [
      { value: 'english', label: 'English' },
      { value: 'french', label: 'French' },
      { value: 'swahili', label: 'Swahili' },
      { value: 'portugese', label: 'Portugese' }
    ];

    const skillOptions = [
      { value: 'software', label: 'Software Development' },
      { value: 'project', label: 'Project Management' },
      { value: 'testing', label: 'Software Testing' },
      { value: 'analyst', label: 'Business Analysis' },
      { value: 'devops', label: 'Devops' },
      { value: 'architecture', label: 'Software Architecture' }
    ];

    const competencyOptions = [                                 
      { value: 'dotnet', label: '.Net' },
      { value: 'js', label: 'Javascript' },
      { value: 'python', label: 'Python' },
      { value: 'cplus', label: 'C/C+' },
      { value: 'sql', label: 'SQL' },
      { value: 'react', label: 'React' },
      { value: 'angular', label: 'Angular' },
      { value: 'vue', label: 'Vue JS' },
      { value: 'blockchain', label: 'Blockchain' },
      { value: 'solidity', label: 'Solidity' },
      { value: 'ai', label: 'AI/ML' },
      { value: 'openai', label: 'Open AI' },
      { value: 'php', label: 'PHP' },
      { value: 'java', label: 'Java' },
      { value: 'aws', label: 'AWS' },
      { value: 'azure', label: 'Azure' },
      { value: 'docker', label: 'Docker' },
      { value: 'kubernates', label: 'Kubernates' },
      { value: 'truffle', label: 'Truffle Suite' },
      { value: 'git', label: 'Git' },
      { value: 'go', label: 'Go' },
      { value: 'powerapp', label: 'Power Apps' },
      { value: 'salesforce', label: 'Sales Force' },
      { value: 'sap', label: 'SAP' },
      { value: 'bpmn', label: 'BPMN' },
    ]

    console.log("country", country);
   
    
  return (
    
      <div id="mainContent" style={{textAlign:"left"}}>
         <ToastContainer />
        <div className="container-fluid">
          <h4 className="c-grey-900 mT-10 mB-30">Personnel</h4>
          <div className="row bgc-white bd bdrs-3 p-20 mB-20">
                  <>
                      
                      <div className="col-md-7">
                        <div className="bgc-white p-20 bd">
                          <div className="col-md-8">  
                          
                          <div className="col-md-8" style={{float: "right", marginTop:"2%"}}>
                          <h4 style={{fontSize:"1.5em"}} className="c-grey-900 mB-20">{userDetails?.user?.name} {userDetails?.user?.surname}</h4>
                            <h6  className="c-grey-900">{getProfessionTextById(userDetails?.proffession)??""}</h6>
                          </div>
                            <div className="peer ">
                              <img className="w-6r bdrs-50p" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                              <br/><br/>
                              {/* <input type="file" className="form-control w-6r" id="exampleInputPassword1"/> */}
                              
                            </div>
                            
                          </div>
                         
                        
                          <div className="mT-30">
                            <form>
                              <div className="row">
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="name">Name</label> {NameError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <input type="text" defaultValue={userDetails?.user?.name??""} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="surname">Surname</label>  {SurnameError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <input type="text" defaultValue={userDetails?.user?.surname??""} onChange={(e) => setSurname(e.target.value)}  className="form-control" id="surname"  />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="nickname">Nickname</label>
                                  <input type="text" defaultValue={userDetails?.nickname??""} onChange={(e) => setNickname(e.target.value)}  className="form-control" id="nickname" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="email">Email</label> {EmailError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <input type="email" defaultValue={userDetails?.user?.email??""} onChange={(e) => setEmail(e.target.value)}  className="form-control" id="email" />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="rate">Phone</label>{ContactError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  {PhoneError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*invalid phone number </span> : null}
                                  <input type="text" defaultValue={userDetails?.user?.contacts??""} onChange={(e) => setContacts(e.target.value)}  className="form-control" id="contact"  />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label fw-500">Birthdate</label>{BirthdayError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <div className="timepicker-input input-icon mb-3">
                                    <div className="input-group">
                                      <div className="input-group-text bgc-white bd bdwR-0">
                                        <i className="ti-calendar" />
                                      </div>
                                      <input type="date" className="form-control bdc-grey-200 start-date"  onChange={(e) => setBirthday(e.target.value)}  defaultValue={ moment( userDetails?.birthday).format('YYYY-MM-DD') } data-provide="datepicker" />
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="rate">Rate</label>{RateError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <input type="text" defaultValue={userDetails?.rate??""} onChange={(e) => setRate(e.target.value)}  className="form-control" id="rate"  />
                                </div>
                                
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="skill">Proffession</label>{ProffesionError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <select onChange={(e)=>setProfession(e.target.value)} id="inputState" className="form-control">
                                    <option selected={userDetails?.proffession=="0"?userDetails.proffession=="0": proffession=="0"} value={"0"} >Please select</option>
                                    <option selected={userDetails?.proffession=="1"?userDetails.proffession=="1": proffession=="1"} value={"1"}>Business analyst</option>
                                    <option selected={userDetails?.proffession=="2"?userDetails.proffession=="2": proffession=="2"} value={"2"}>Project manager</option>
                                    <option selected={userDetails?.proffession=="3"?userDetails.proffession=="3": proffession=="3"} value={"3"}>Software Developer</option>
                                    <option selected={userDetails?.proffession=="4"?userDetails.proffession=="4": proffession=="4"} value={"4"}>Software Tester</option>
                                  </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="skill">Skill level</label>{SkillLevelError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <select onChange={(e)=>setSkillLevel(e.target.value)}  id="inputState" className="form-control">
                                    <option selected={skillLevel=="0" || userDetails?.skillLevel=="0"} value={"0"}>Please select</option>
                                    <option selected={skillLevel=="1" || userDetails?.skillLevel=="1"} value={"1"}>Intern</option>
                                    <option selected={skillLevel=="2" || userDetails?.skillLevel=="2"}  value={"2"}>Junior</option>
                                    <option selected={skillLevel=="3" || userDetails?.skillLevel=="3"}  value={"3"}>Intermediate</option>
                                    <option selected={skillLevel=="4" || userDetails?.skillLevel=="4"}  value={"4"}>Senior</option>
                                    <option selected={skillLevel=="5" || userDetails?.skillLevel=="5"}  value={"5"}>Lead</option>
                                  </select>
                                </div>
                             
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="workAddress">Work Address </label>{WorkAddressError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                <input type="text" className="form-control"  onChange={(e) => setWorkaddress(e.target.value)}  defaultValue={userDetails?.workAddress??""} id="workAddress" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="homeAddress">Home Address</label>{HomeAddressError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                <input type="text" className="form-control"  onChange={(e) => setHomeAddress(e.target.value)}  defaultValue={userDetails?.homeAddress??""} id="homeAddress" />
                              </div>
                              <div className="row">
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="city">City</label>{CityError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <input type="text" id="city"  onChange={(e) => setCity(e.target.value)}  defaultValue={userDetails?.city??""} className="form-control"  />
                                </div>
                            
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="country">Country</label>
                                  {CountryError ?  <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 , position : "absolute"}}>*required field</span> : null}
                                  <select  onChange={(e)=>setCountry(e.target.value)}  id="inputState" className="form-control">
                                    <option value={"0"} selected={country=="0" || userDetails?.country =="0"}>South Africa</option>
                                    <option selected={country=="1" || userDetails?.country=="1"} value={"1"}>Kenya</option>
                                    <option selected={country=="2" || userDetails?.country=="2"} value={"2"}>Ghana</option>
                                    <option selected={country=="3" || userDetails?.country=="3"} value={"3"}>Botswana</option>
                                    <option selected={country=="4" || userDetails?.country =="4"} value={"4"}>Tanzania</option>
                                    <option selected={country=="5" || userDetails?.country=="5"} value={"5"}>Other</option>                                    
                                  </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label className="form-label" htmlFor="inputState">Timezone</label>{TimezoneError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <select  onChange={(e)=>setTimezone(e.target.value)}  id="inputState" className="form-control">
                                    <option selected={timezone === "0" || userDetails?.timezone=="0"} >Please select</option>
                                    <option selected={timezone === "GMT-11" || userDetails?.timezone=="GMT-11"} value="GMT-11">Coordinated Universal Time-11 (GMT-11)</option>
                                    <option selected={timezone === "GMT-10"|| userDetails?.timezone=="GMT-10"} value="GMT-10">Hawaii-Aleutian Standard Time (GMT-10)</option>
                                    <option selected={timezone === "GMT-9"|| userDetails?.timezone=="GMT-9"} value="GMT-9">Alaska Standard Time (GMT-9)</option>
                                    <option selected={timezone === "GMT-8"|| userDetails?.timezone=="GMT-8"} value="GMT-8">Pacific Standard Time (GMT-8)</option>
                                    <option selected={timezone === "GMT-7"|| userDetails?.timezone=="GMT-7"} value="GMT-7">Mountain Standard Time (GMT-7)</option>
                                    <option selected={timezone === "GMT-6"|| userDetails?.timezone=="GMT-6"} value="GMT-6">Central Standard Time (GMT-6)</option>
                                    <option selected={timezone === "GMT-5"|| userDetails?.timezone=="GMT-5"} value="GMT-5">Eastern Standard Time (GMT-5)</option>
                                    <option selected={timezone === "GMT-4"|| userDetails?.timezone=="GMT-4"} value="GMT-4">Atlantic Standard Time (GMT-4)</option>
                                    <option selected={timezone === "GMT-3"|| userDetails?.timezone=="GMT-3"} value="GMT-3">Greenwich Mean Time-3 (GMT-3)</option>
                                    <option selected={timezone === "GMT-2"|| userDetails?.timezone=="GMT-2"} value="GMT-2">Coordinated Universal Time-2 (GMT-2)</option>
                                    <option selected={timezone === "GMT-1"|| userDetails?.timezone=="GMT-1"} value="GMT-1">Central European Time-1 (GMT-1)</option>
                                    <option selected={timezone === "GMT+0"|| userDetails?.timezone=="GMT+0"} value="GMT+0">Coordinated Universal Time (GMT+0)</option>
                                    <option selected={timezone === "GMT+1"|| userDetails?.timezone=="GMT+1"} value="GMT+1">Central European Time (GMT+1)</option>
                                    <option selected={timezone === "GMT+2"|| userDetails?.timezone=="GMT+2"} value="GMT+2">Central African Time (GMT+2)</option>
                                    <option selected={timezone === "GMT+3"|| userDetails?.timezone=="GMT+3"} value="GMT+3">Moscow Standard Time (GMT+3)</option>
                                    <option selected={timezone === "GMT+4"|| userDetails?.timezone=="GMT+4"} value="GMT+4">Gulf Standard Time (GMT+4)</option>
                                    <option selected={timezone === "GMT+5"|| userDetails?.timezone=="GMT+5"} value="GMT+5">Pakistan Standard Time (GMT+5)</option>
                                    <option selected={timezone === "GMT+6"|| userDetails?.timezone=="GMT+6"} value="GMT+6">Bangladesh Standard Time (GMT+6)</option>
                                    <option selected={timezone === "GMT+7"|| userDetails?.timezone=="GMT+7"} value="GMT+7">Indochina Time (GMT+7)</option>
                                    <option selected={timezone === "GMT+8"|| userDetails?.timezone=="GMT+8"} value="GMT+8">China Standard Time (GMT+8)</option>
                                    <option selected={timezone === "GMT+9"|| userDetails?.timezone=="GMT+9"} value="GMT+9">Japan Standard Time (GMT+9)</option>
                                    <option selected={timezone === "GMT+10"|| userDetails?.timezone=="GMT+10"} value="GMT+10">Eastern Australia Time (GMT+10)</option>
                                    <option selected={timezone === "GMT+11"|| userDetails?.timezone=="GMT+11"} value="GMT+11">Solomon Standard Time (GMT+11)</option>
                                    <option selected={timezone === "GMT+12"|| userDetails?.timezone=="GMT_+12"} value="GMT+12">New Zealand Time (GMT+12)</option>
                                    <option selected={timezone === "GMT+13"|| userDetails?.timezone=="GMT+13"} value="GMT+13">Tonga Standard Time (GMT+13)</option>
                                    <option selected={timezone === "GMT+14"|| userDetails?.timezone=="GMT+14"}value="GMT+14">Line Islands Time (GMT+14)</option>  
                                  </select>
                                </div>
                              </div>
                            
                              
                              {/* <br/>
                                <button type="submit" class="btn btn-primary btn-color">Update</button> 
                                */}
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="bgc-white p-20 bd">
                          <h6 style={{fontSize:"1.5em", marginTop:"2%"}} className="c-grey-900">Skills &amp; Qualifications</h6>
                          <div className="mT-30">
                            <form>
                         
                              <br />
                              <div className="row">
                                <div className="mb-3 col-md-12">
                                  <label className="form-label" htmlFor="languages">Languages</label>{LanguagesError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <Select
                                  defaultValue={getOptionsFromString(userDetails?.languages,languageOptions)}
                                  onChange={handleEducationChange}
                                  isMulti
                                  name="colors"
                                  options={languageOptions}
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                />
                              
                                </div>
                                <br/>
                                {/* <span className="peer">
                                {
                                  languages.split(' ').map((lang,index)=>{
                                    return(
                                    
                                      <span className="badge rounded-pill  bg-info lh-0 p-10">{lang}</span>
                                     
                                    )
                                  })
                                }
                                 </span> */}
                                {/* <span className="peer">
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span>
                                </span> */}
                               
                              </div>
                              <br />

                              <div className="row">
                                <div className="mb-3 col-md-12">
                                  <label className="form-label" htmlFor="competencies">Competencies</label>{CompetenciesError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <Select
                                  defaultValue={getOptionsFromString(userDetails?.competencies,competencyOptions)}
                                  onChange={handleCompetenciesChange}
                                  isMulti
                                  name="competencies"
                                  options={competencyOptions
                                }
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                />
                                  {/* <input type="text" className="form-control" id="competencies"  onChange={(e) => setCompetencies(e.target.value)}  placeholder="Add language" /> */}
                                </div>
                                <br/>
                                {/* <span className="peer">
                                {
                                  competencies.split(' ').map((lang,index)=>{
                                    return(
                                    
                                      <span className="badge rounded-pill  bg-info lh-0 p-10">{lang}</span>
                                     
                                    )
                                  })
                                }
                                 </span> */}
                                {/* <span className="peer">
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span>
                                </span> */}
                               
                              </div>
                              <br />
                              
                              <div className="row">
                                <div className="mb-3 col-md-12">
                                  <label className="form-label" htmlFor="inputPassword4">Skills</label>{SkillsError ? <span style={{ color: 'red' , marginLeft : "0.5em", fontWeight : 600 }}>*required field</span> : null}
                                  <Select
                                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                                  defaultValue={getOptionsFromString(userDetails?.skills,skillOptions)}
                                  onChange={handleSkillsChange}
                                  isMulti
                                  name="skills"
                                  options={[
                                    { value: 'software', label: 'Software Development' },
                                    { value: 'project', label: 'Project Management' },
                                    { value: 'testing', label: 'Software Testing' },
                                    { value: 'analyst', label: 'Business Analysis' },
                                    { value: 'devops', label: 'Devops' },
                                    { value: 'architecture', label: 'Software Architecture' }

                                  ]
                                }
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                />
                                  {/* <input type="text" onChange={(e)=>setSkills(e.target.value)} className="form-control" id="skills" placeholder="Add skills" /> */}
                                </div>
                                
                                {/* <div class="mb-3"> */}
                                <span className="peer">
                                  {/* {
                                    skills?.split(' ')?.map((skill,index)=>{
                                      return(
                                        <span key={index} className="badge rounded-pill  bg-info lh-0 p-10">{skill}</span>
                                      )
                                    })
                                  } */}
                                  {/* <span className="badge rounded-pill  bg-info lh-0 p-10">PM</span>
                                  <span className="badge rounded-pill  bg-info lh-0 p-10">BPMN</span>
                                  <span className="badge rounded-pill  bgc-pink-500 lh-0 p-10">Scrum Master</span> */}
                                </span>
                                {/* </div> */}
                              </div><br />
                              <div className="row">
                               
                               {/* <div className="mb-3 col-md-9">
                                 <label className="form-label" htmlFor="education">University</label>
                                 <input type="text" className="form-control" id="education"  onChange={(e) => setEducation(e.target.value)}  defaultValue={userDetails?.education??""}/>
                               </div><br /><br /> */}
                               <div className="mb-3  col-md-12">
                                 <div className="col-md-5 m-5 checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                   <input type="checkbox" onChange={()=>setHasDegree(!hasDegree)} checked={hasDegree}  id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                   <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                     <span className="peer peer-greed">Degree/Diploma</span>
                                   </label><br /><br />
                                   <select onChange={(e)=>setDegreeType(e.target.value)} disabled={!hasDegree} id="inputState" className="form-control">
                                     <option selected={degreeType=="0" || userDetails?.degreeType=="0"} value={"0"}>Please select</option>
                                     <option selected={degreeType=="1" || userDetails?.degreeType=="1"} value={"1"}>Bachelor of Science in Computer Science</option>
                                     <option selected={degreeType=="2" || userDetails?.degreeType=="2"} value={"2"}>Bachelor of Science in Information Technology</option>
                                     <option selected={degreeType=="3" || userDetails?.degreeType=="3"} value={"3"}>Bachelor of Science in Software Engineering</option>
                                     <option selected={degreeType=="4" || userDetails?.degreeType=="4"} value={"4"}>Bachelor of Business Administration</option>
                                     <option selected={degreeType=="5" || userDetails?.degreeType=="5"} value={"5"}>Bachelor of Project Management</option>
                                     <option selected={degreeType=="6" || userDetails?.degreeType=="6"} value={"6"}>Diploma in Software Development</option>
                                     <option selected={degreeType=="7" || userDetails?.degreeType=="7"} value={"7"}>Diploma in Information Technology</option>
                                     <option selected={degreeType=="8" || userDetails?.degreeType=="8"} value={"8"}>Diploma in Web Development</option>
                                     <option selected={degreeType=="9" || userDetails?.degreeType=="9"} value={"9"}>Diploma in Project Management</option>
                                     <option selected={degreeType=="10" || userDetails?.degreeType=="10"} value={"10"}>Associate Degree in Computer Science</option>
                                   </select><br /><br/><br/>
                                  
                                   <input type="text" style={{ marginTop: '5%'}} disabled={!hasDegree} className="form-control" id="degree-inst"  onChange={(e) => setDegreeInstitution(e.target.value)} placeholder="University/ Tertiary Institution" defaultValue={userDetails?.degreeInstitution??""}/>
                                   <div >
                                    {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                    <a >
                                      <input style={{ marginTop: '5%', marginBottom:"2%"}} className="form-control"  disabled={!hasDegree} type="file" id="degree" name="degree" onChange={saveDegree} />

                                      </a>
                                      {degreeUrl!=="" || allUserDetails?.degree && <a target="_blank"  style={{textDecoration: "underline", color: "cornflowerblue"}} href={degreeUrl==""?allUserDetails?.degree:degreeUrl}><FaFile style={{float:"left", marginTop:"2%"}}/> View </a>}
                                  </div>
                                 </div>

                                 <div className="col-md-5 m-5 checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                   <input type="checkbox"  onChange={()=>setHasMasters(!hasMasters)} checked={hasMasters} defaultChecked={mastersType!=="0"} id="masterscheck" name="inputCheckboxesCall" className="peer" />
                                   <label htmlFor="masterscheck" className="form-label peers peer-greed js-sb ai-c">
                                     <span className="peer peer-greed">Masters </span>
                                   </label><br /><br />
                                   <select onChange={(e)=>setMastersType(e.target.value)}  disabled={!hasMasters} id="inputState" className="form-control">
                                     <option  value={"0"} >Please select</option>
                                     <option selected={mastersType=="1" || userDetails?.mastersType=="1"} value={"1"}>Master of Science in Software Engineering</option>
                                     <option selected={mastersType=="2" || userDetails?.mastersType=="2" } value={"2"}>Master of Science in Computer Science</option>
                                     <option selected={mastersType=="3" || userDetails?.mastersType=="3"} value={"3"}>Master of Science in Information Technology</option>
                                     <option selected={mastersType=="4" || userDetails?.mastersType=="4"} value={"4"}>Master of Science in Project Management</option>
                                     <option selected={mastersType=="5" || userDetails?.mastersType=="5"} value={"5"}>Master of Science in Business Administration (MBA)</option>
                                     <option selected={mastersType=="6" || userDetails?.mastersType=="6"} value={"6"}>Master of Science in Management Information Systems (MS MIS)</option>
                                     <option selected={mastersType=="7" || userDetails?.mastersType=="7"} value={"7"}>Master of Science in Information Systems Management (MS ISM)</option>
                                     <option selected={mastersType=="8" || userDetails?.mastersType=="8"} value={"8"}>Master of Science in Business Analytics (MS BA)</option>
                                     <option selected={mastersType=="9" || userDetails?.mastersType=="9"} value={"9"}>Master of Science in Data Science</option>
                                     <option selected={mastersType=="10" || userDetails?.mastersType=="10"} value={"10"}>Master of Science in Finance (MSF)</option>
                                     <option selected={mastersType=="11" || userDetails?.mastersType=="11"} value={"11"}>Master of Science in Marketing</option>
                                     <option selected={mastersType=="12" || userDetails?.mastersType=="12"} value={"12"}>Master of Science in Entrepreneurship and Innovation</option>
                                     <option selected={mastersType=="13" || userDetails?.mastersType=="13"} value={"13"}>Master of Science in Operations Management</option>
                                   </select><br /><br/><br/>
                                     
                                   <input type="text" style={{ marginTop: '5%'}} disabled={!hasMasters} className="form-control" id="masters"  onChange={(e) => setMastersInstitution(e.target.value)} 
                                   placeholder="University" defaultValue={userDetails?.mastersInstitution??""}/>
                                   <div style={{ marginTop: '5%'}}>
                                    {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                    <a>
                                      <input className="form-control" disabled={!hasMasters}  style={{ marginBottom:"2%"}} type="file" id="masters" name="masters" onChange={saveMasters} />
                                      </a>
                                      {mastersUrl!=="" || allUserDetails?.masters && <a target="_blank"  style={{textDecoration: "underline", color: "cornflowerblue"}} href={mastersUrl==""?allUserDetails?.masters:mastersUrl}><FaFile style={{float:"left", marginTop:"2%"}}/> View</a>}
                                  </div>
                                 </div>
                                 <div className="col-md-5 m-5 checkbox checkbox-circle checkbox-info peers ai-c" style={{float: 'left'}}>
                                 
                                 </div>
                               </div>
                             </div><br />
                              <div className="row">
                                <div className="col-md-9">
                                  <h6 className="form-label" style={{float: 'left'}}> Documents</h6>
                                </div>
                                <div className="mb-3 ">
                                 
                                  <div className='mb-3 col-md-9' style={{ marginLeft: '10px'}}>
                                    {/* <input type="checkbox" checked id="inputCall2" name="inputCheckboxesCall" class="peer"> */}
                                  
                                      <label htmlFor="" className="form-label peers peer-greed js-sb ai-c">
                                      <span className="peer peer-greed" style={{marginLeft: '5px', marginBottom:"2%"}}>   CV</span>
                                      </label>
                                      <input style={{marginBottom:"2%"}} className="form-control" type="file" id="cv" name="cv" onChange={saveCV} />
                                    {cvUrl!=="" || allUserDetails?.cv && <a target="_blank"  style={{marginTop:"2%", textDecoration: "underline", color: "cornflowerblue"}} 
                                    href={cvUrl==""?allUserDetails?.cv:cvUrl}><FaFile style={{float:"left", marginTop:"1%"}}/> View</a>}
                                  </div><br />
                               
                              
                                </div>
                              </div><br />
                              {/* <br/>
                                <button type="submit" class="btn btn-primary btn-color">Update</button> */}
                            <div className="mb-3">
    <button disabled={disabled} type="button" onMouseOut={() => setDisabled(false)} onMouseEnter={HandleValidation} onClick={() => createFormFiles()} className="btn btn-primary btn-color">Save changes</button>
    <button style = {{marginLeft:"13.5em", width : "100px"}}disabled={disabled} onClick = {DeleteUser} type="button" className="btn btn-danger btn-color ml-7">Delete</button>
</div>

                            

                          
                            </form>
                          </div>
                        </div>
                      </div>
                  </>
          </div>
         
        </div>
      </div>      
  )
}
