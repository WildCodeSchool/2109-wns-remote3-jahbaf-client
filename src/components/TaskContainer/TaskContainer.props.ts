export interface TaskContainerProps {
    /** Container name to be displayed at the top of the container */
    containerName: 'sprint' | 'backlog'

    /** Id of the project to create the task on */
    projectId: string
}
