
export interface IProject{
    id?: string,
    name?: string,
    userid: any
    description: string
    profilepicture: string
    startdate: string 
    enddate: string 
    partnerid : string


}

export interface IProjectRequestModel extends IProject{
    isNew : boolean
}

export interface IProjectResponseModel extends IProject{
    project:IProject
}

export interface IGetProjectByIdModel{
   
    id : string,
 
}