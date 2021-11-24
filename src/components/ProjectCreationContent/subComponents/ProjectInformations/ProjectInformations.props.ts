import { CreateProjectInfos } from 'models';

export interface ProjectInformationsProps {
    /** Informations related to the project */
    projectInfos: CreateProjectInfos,

    /** Action to trigger when changing inputs content */
    updateProjectInfos: (value: {[key: string]: any}) => void
};
