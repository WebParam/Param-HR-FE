
export interface IProject{
    id?: string,


}

export interface IProjectRequestModel extends IProject{
    

}

export interface IProjectResponseModel extends IProject{
    project:IProject
}
