import React from "react";
import { withState } from "recompose";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { GET_MESSAGES, ADD_MESSAGE } from ".././queries.js";

const updateCache = (cache, { data: { addMessage } }) => {
  const { messages } = cache.readQuery({ query: GET_MESSAGES });

  cache.writeQuery({
    query: GET_MESSAGES,
    data: {
      messages: messages.concat(addMessage)
    }
  });
};

const enhance = withState("message", "setMessage", "");
export default enhance(({ message, setMessage }) => (
  <Mutation mutation={ADD_MESSAGE} update={updateCache} variables={{ message }}>
    {addMessage => (
      <form
        className="pa4 black-80"
        onSubmit={async e => {
          e.preventDefault();
          await addMessage({ variables: { message: message } });
          setMessage("");
        }}
      >
        <div className="measure">
          <label htmlFor="name" className="avenir f6 b db mb2">
            Submit Your Pick Up Line Home Boy
          </label>
          <input
            id="name"
            required
            value={message}
            className="avenir input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </form>
    )}
  </Mutation>
));
