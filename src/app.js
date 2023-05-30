import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/body";

const Container = () => {
  return (
   <Body/>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);
