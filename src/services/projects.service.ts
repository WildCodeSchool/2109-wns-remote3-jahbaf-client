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
  }
}
`;
export const FIND_ONE_PROJECT_BY_ID = gql`
query FindProjectById($id: String!) {
    findProjectById(id: $id) {
        id
        name
        description
    }
}
`;

export const UPDATE_PROJECT = gql`
    mutation UpdateProject($projectInput: UpdateProjectInput!) {
        updateProject(projectInput: $projectInput) {
            id,
            name,
            description
        }
    }
`;
