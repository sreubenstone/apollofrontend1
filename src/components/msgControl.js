import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Msg from "./msg";
import { GET_MESSAGES } from ".././queries.js";

const MsgControl = () => (
  <Query query={GET_MESSAGES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error :(</p>;

      return data.messages.map(currentMessage => (
        <Msg message={currentMessage} />
      ));
    }}
  </Query>
);

export default MsgControl;
