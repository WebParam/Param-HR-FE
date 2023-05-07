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
    province: string,
    country : string,
    position:string,
    education:string
}

export interface IPersonnelRequestModel extends IPersonnel{
    

}

export interface IPersonnelResponseModel extends IPersonnel{
    data:IPersonnel,
    message?:string
}
