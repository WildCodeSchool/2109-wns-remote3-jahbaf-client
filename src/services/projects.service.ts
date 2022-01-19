import { gql } from '@apollo/client';

export const CREATE_PROJECT_MUTATION = gql`
    mutation Mutation($projectInput: ProjectInput!) {
      createProject(projectInput: $projectInput) {
            id,
            name,
            description
      }
}`;

export const GET_PROJECTS_QUERY = gql`
query Query {
  findManyProjects {
    id
    name
    description
    published
  }
}`;
