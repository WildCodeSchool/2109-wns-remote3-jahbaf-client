export interface CreateProjectInfos {
    name: string,
    description?: string
};

export interface Project {
    id: string,
    name: string,
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
    createdBy?: string
};
