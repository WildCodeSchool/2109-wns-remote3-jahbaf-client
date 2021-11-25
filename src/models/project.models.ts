export interface CreateProjectInfos {
    name: string,
    description?: string
};

export interface Project extends CreateProjectInfos {
    id: string
}
