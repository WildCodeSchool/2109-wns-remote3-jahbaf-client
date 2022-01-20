import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation CreateTask($taskInput: TaskInput) {
        createTask(taskInput: $taskInput) {
            title
        }
    }
`;
