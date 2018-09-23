import React from "react";

const Msg = props => (
  <div align="center">
    <div className="card" style={{ width: "55%", marginTop: "2px" }}>
      <div className="card-body">
        <h7 key={props.message.id} className="card-title">
          {props.message.message}
        </h7>
      </div>
    </div>
  </div>
);

export default Msg;
