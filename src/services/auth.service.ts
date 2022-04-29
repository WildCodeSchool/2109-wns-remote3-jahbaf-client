import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const LOGIN_QUERY: DocumentNode = gql`
query loginQuery($email: String!, $password: String!) {
  login(email: $email, password: $password)
}`;

export const SIGNUP_MUTATION: DocumentNode = gql`
mutation signupMutation($email: String!, $password: String!) {
  signUp(email: $email, password: $password)
}`;

export const SELF_QUERY: DocumentNode = gql`
query selfQuery {
  self {
    user {
      name
      email
      confirmed
    }
  }
}`;

export const CONFIRM_ACCOUNT_MUTATION: DocumentNode = gql`
mutation confirmAccountMutation($token: String!) {
  confirmAccount(token: $token)
}`;

export const SEND_USER_EMAIL_QUERY: DocumentNode = gql`
query ($email: String!) {
  resetPasswordMail(email: $email)
}`;

export const RESET_PASSWORD_MUTATION: DocumentNode = gql`
mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password)
}`;
