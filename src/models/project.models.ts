export interface IProject {
    id: string,
    name: string,
    description: string,
    published: boolean,
}
export interface CreateProjectInfos {
    name: string,
    role: string,
    description?: string,
    roleName?: string,
};

export interface Project {
    id: string,
    name: string,
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
    createdBy?: string
};
