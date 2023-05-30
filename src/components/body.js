import React from "react";
import Box from "./box";
import Instruction from "./instruction";

const Body = () => {
  return (
    <React.Fragment>
      <h1 className="heading">Have some fun 🤪</h1>
      <div className="main-container">
      <Box />
      <div className="instruction">

      <button onClick={(e)=>{
        window.location.reload()
      }} className="restart">re-start</button>
      {console.log(Instruction)}
      <Instruction value={0}/>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
