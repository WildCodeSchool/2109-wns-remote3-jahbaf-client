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

export const GET_PROJECT_BY_ID = gql`
mutation FindProjectById($id: String!) {
  findProjectById(id: $id) {
    project {
        id,
        name,
        description
    }
  }
}`;
