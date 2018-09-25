import { gql } from "apollo-boost";


export const GOOGLE = gql`{
  profile {
    id
    email
    name
    short_description
  }
}
`;



export const GET_MESSAGES = gql`
  {
    messages {
      id
      message
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($message: String!) {
    addMessage(message: $message) {
      message
      id
    }
  }
`;
