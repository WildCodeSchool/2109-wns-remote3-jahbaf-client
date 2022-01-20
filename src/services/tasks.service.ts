import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation CreateTask($taskInput: TaskInput) {
        createTask(taskInput: $taskInput) {
            title
        }
    }
`;

export const GET_TASKS_FROM_PROJECT = gql`
    query SelectAllTasksFromProject($selectAllTasksFromProjectId: String!) {
        selectAllTasksFromProject(id: $selectAllTasksFromProjectId) {
            title
        }
    }
`;
