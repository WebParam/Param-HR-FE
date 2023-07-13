
export interface IProject{
    id?: string,


}

export interface IProjectLoginRequestModel extends IProject{
    

}

export interface IProjectLoginResponseModel extends IProject{
    project:IProject
}
