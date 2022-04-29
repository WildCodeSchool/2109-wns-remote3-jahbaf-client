export interface Task {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    statusId: string | null;
    sprintId: string | null;
    projectId: string;
    userId: string | null;
    title: string;
    points: number | null;
    priority: string | null;
    description: string | null;
}

export interface CreateTaskInfos {
    title: string,
    createdAt: Date,
    updatedAt: Date,
    projectId: string
};
