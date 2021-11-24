import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
    mutation CreateProject($projectInput: ProjectInput!) {
      createProject(projectInput: $projectInput) {
        project {
            id,
            name,
            description
        }
      }
    }`;
