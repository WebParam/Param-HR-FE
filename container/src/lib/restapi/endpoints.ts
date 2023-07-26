import { GET, POST, PUT } from "./client";
import { IUserLoginModel, IUserRegisterModel, IUserRequestModel, IUserResetPasswordModel, IUserResponseModel, IUserVerifyOtpModel } from "../../interfaces/user";
import { IResponseObject } from "./response";
import {  IDeletePersonnelRequestModel, IPersonnelResponseModel } from "src/interfaces/personnel";
import { IProjectPersonnelResponseModel } from "src/interfaces/project-personnel";
import { IGetProjectByIdModel, IProject, IProjectResponseModel } from "src/interfaces/project";


export const url = "https://param-hr-be-dev.azurewebsites.net";



export const Api = {
  Base: url,
  GET_AllPersonnel: async():Promise<IResponseObject<IPersonnelResponseModel[]>> => {
    const response = await GET(`${url}/Personnel/GetAllPersonnel/`);
    return response;
  },
  GET_PersonnelById: async (payload: string): Promise<IResponseObject<IPersonnelResponseModel>> => {
    const response = await GET(`${url}/personnel/${payload}`);
    return response;
  },
  POST_CreatePersonnel: async (
    payload: IUserRequestModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Personnel/GetAllPersonnel`, payload);
    return response;
  },


  POST_Login: async (
    payload: IUserLoginModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Users/Login`, payload);
    return response;
  },


  POST_DeleteUser: async (
    payload: IDeletePersonnelRequestModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Users/DeleteUser`, payload);
    return response;
  },


  POST_Register: async (
    payload: IUserRegisterModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Users/AddUser`, payload);
    return response;
  },

  POST_ResetPassword: async (
    payload: IUserResetPasswordModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Users/SendResetPasswordOtp`, payload);
    return response;
  },

  POST_VerifyOtp: async (
    payload: IUserVerifyOtpModel
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/Users/ResetPassword`, payload);
    return response;
  },

  //MOCK

  GET_GetAllProjects: async (): Promise<IResponseObject<IProjectResponseModel[]>> => {
     const response = await GET(`${url}/Project/GetAllProjects/`);
    return response;
  
  },

  
  GetProjectById: async (payload: IGetProjectByIdModel): Promise<IResponseObject<IProjectResponseModel[]>> => {
    const response = await GET(`${url}/project/GetProjectById/${payload}`);
    return response;
    
  },
  
  GetAllPersonnelProjects: async (payload: string): Promise<IResponseObject<IProjectPersonnelResponseModel[]>> => {
    // const response = await GET(`${url}/personnel/${payload}`);
    // return response;
    return { error: false,
      message: "",
      data: [],
      status:0
      }
  },
  POST_AddProject: async (
    payload: IProject
  ): Promise<IResponseObject<IUserResponseModel>> => {
    const response = await POST(`${url}/project/AddProject`, payload);
    return response;
  },

  //mockdata 

};
