import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Msg from "./msg";
import { GET_MESSAGES } from ".././queries.js";

const MsgControl = () => (
  <Query query={GET_MESSAGES}
  // variables={{
  //   type: match.params.type.toUpperCase() || "TOP",
  //   offset: 0,
  //   limit: 10
  // }}
  // fetchPolicy="cache-and-network"
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error :(</p>;

      return data.messages.map(currentMessage => (
        <Msg key={currentMessage.id} message={currentMessage} />
      ));
    }}
  </Query>
);

export default MsgControl;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// const FeedWithData = ({ match }) => (
//   <Query
//     query={FEED_QUERY}
//     variables={{
//       type: match.params.type.toUpperCase() || "TOP",
//       offset: 0,
//       limit: 10
//     }}
//     fetchPolicy="cache-and-network"
//   >
//     {({ data, fetchMore }) => (
//       <Feed
//         entries={data.feed || []}
//         onLoadMore={() =>
//           fetchMore({
//             variables: {
//               offset: data.feed.length
//             },
//             updateQuery: (prev, { fetchMoreResult }) => {
//               if (!fetchMoreResult) return prev;
//               return Object.assign({}, prev, {
//                 feed: [...prev.feed, ...fetchMoreResult.feed]
//               });
//             }
//           })
//         }
//       />
//     )}
//   </Query>
// );