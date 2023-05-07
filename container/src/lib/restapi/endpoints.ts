import { GET, POST } from "./client";
import { IUserRequestModel, IUserResponseModel } from "../../interfaces/user";
import { IResponseObject } from "./response";
import { IPersonnelResponseModel } from "src/interfaces/personnel";

const url = "https://localhost:7247";


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
  }
};
