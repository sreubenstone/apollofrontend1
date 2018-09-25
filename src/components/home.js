import React from "react";
import MsgControl from "./msgControl";
import Addline from "./addLine";

const Home = () => {
  return (
    <div align="center">
      <br />
      <br />
      <br />
      <div align="center">
        <img
          className="picsRounded"
          align="center"
          height="300"
          width="600"
          src="https://images.pexels.com/photos/262034/pexels-photo-262034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
      <h1> All Pick Up Lines</h1>
      <MsgControl />
      <br />
      <br />
      <h5> Submit Line Here Doggy</h5>
      <Addline />
    </div>
  );
};

export default Home;
