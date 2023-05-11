export interface IUser{
    id?: string,
    userid?: string,
    name : string,
    surname: string,
    email : string,
    contacts: string,
    // password : string,
}

export interface IUserRequestModel extends IUser{

}

export interface IUserResponseModel extends IUser{

}


export interface IUserLoginModel{
    email:string, 
    password:string
}

export interface IUserRegisterModel{
    name : string,
    surname: string,
    email : string,
    contacts: string,
    password : string,
}
