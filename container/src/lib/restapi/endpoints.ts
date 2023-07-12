import { GET, POST } from "./client";
import { IUserLoginModel, IUserRegisterModel, IUserRequestModel, IUserResponseModel } from "../../interfaces/user";
import { IResponseObject } from "./response";
import { IPersonnelResponseModel } from "src/interfaces/personnel";

const url = "https://param-hr-be-dev.azurewebsites.net";



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
  }

};
