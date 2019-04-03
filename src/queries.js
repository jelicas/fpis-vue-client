import {
  gql
} from "apollo-boost";


/* User queries*/
export const SIGNIN_USER = gql `
    query($username: String!, $password: String!) {
      signinUser(username: $username, password: $password) {
        token
      }
    }
  `;


/* User mutations*/
export const SIGNUP_USER = gql `
    mutation($username: String!, $email: String!, $password: String!) {
      signupUser(username: $username, email:$email, password: $password) {
        token
      }
    }
  `;