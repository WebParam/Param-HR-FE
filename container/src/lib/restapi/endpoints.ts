import { GET, POST } from "./client";
import { IUserLoginModel, IUserRegisterModel, IUserRequestModel, IUserResetPasswordModel, IUserResponseModel, IUserVerifyOtpModel } from "../../interfaces/user";
import { IResponseObject } from "./response";
import { IPersonnelResponseModel } from "src/interfaces/personnel";
import { IProjectPersonnelResponseModel } from "src/interfaces/project-personnel";

<<<<<<< Updated upstream
const url = "https://param-hr-portal-prod.azurewebsites.net";
=======

const url = "https://510c-154-117-172-210.ngrok-free.app";
>>>>>>> Stashed changes



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

  GetAllProjects: async (payload: string): Promise<IResponseObject<IProjectPersonnelResponseModel[]>> => {
    // const response = await GET(`${url}/personnel/${payload}`);
    // return response;
    return { error: false,
    message: "",
    data: [],
    status:0
    }
  },
  
  GetAllPersonnelProjects: async (payload: string): Promise<IResponseObject<IProjectPersonnelResponseModel[]>> => {
    // const response = await GET(`${url}/personnel/${payload}`);
    // return response;
    return { error: false,
      message: "",
      data: [],
      status:0
      }
  }

  //mockdata 

};
