export interface IProject {
    id: string,
    name: string,
    description: string,
    published: boolean,
}
export interface CreateProjectInfos {
    name: string,
    description?: string
};
