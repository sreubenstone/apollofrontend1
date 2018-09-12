import React from "react";

const Msg = props => (
  <div className="card" style={{ width: "100%", marginTop: "10px" }}>
    <div className="card-body">
      <h5 key={props.message.id} className="card-title">
        {props.message.message}
      </h5>
    </div>
  </div>
);

export default Msg;
