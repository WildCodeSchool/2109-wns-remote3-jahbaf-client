import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const LOGIN_QUERY: DocumentNode = gql`
query loginQuery($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      email
    }
  }
}`;

export const SIGNUP_MUTATION: DocumentNode = gql`
mutation signupMutation($email: String!, $password: String!) {
  signUp(email: $email, password: $password) {
    user {
      email
    }
  }
}`;
