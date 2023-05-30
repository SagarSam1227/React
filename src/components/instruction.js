import React from "react";
import { useState } from "react";

export let updateMove

const Instruction = ({value})=>{
 let [move,setMove]  = useState(0);

 updateMove = (x)=>{
        setMove(move+x)
 }

 let moveElements = []
 for(let i = 1;i<=move;i++){
    moveElements.push(<h3>move {i}</h3>)
 }
 
 return (
    <React.Fragment>
        {
            moveElements
        }
    </React.Fragment>
 )
}

// export const incrementMove = () => {
//     Instruction.updateMove();
//   };
export default Instruction;


