import { gql } from '@apollo/client';

export const CREATE_PROJECT_MUTATION = gql`
    mutation Mutation($projectInput: ProjectInput!) {
      createProject(projectInput: $projectInput) {
            id,
            name,
            description
      }
    }`;
