import { IUser } from "./user"

export interface IPersonnel{
    id?: string,
    userid?: string,
    user:IUser,
    nickname : string,
    birthday : string,
    rate : string,
    skillLevel : string,
    workAddress : string,
    homeAddress : string,
    city : string,
    country : string,
    position:string,
    education:string,
    languages:string,
    skills:string,
    competencies:string,
    proffession:string,
    timezone:string,
    mastersInstitution:string,
    degreeInstitution:string,
    degreeType:string,
    mastersType:string

}

export interface IPersonnelRequestModel extends IPersonnel{
    

}

export interface IPersonnelResponseModel extends IPersonnel{
    data:IPersonnel,
    cv:string,
    message?:string
}
