import { CreateTaskInfos } from 'models';

export interface TaskInformationsProps {
    /** Informations related to the project */
    taskInfos: Pick<CreateTaskInfos, 'title'>,

    /** Action to trigger when changing inputs content */
    updateTaskInfos: (value: {[key: string]: any}) => void
};
