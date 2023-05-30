import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import Instruction from "./instruction";
import { updateMove } from "./instruction";

function check(x, y, z) {
  if (x == y && x == z && (x || y || z)) {
    console.log("second", x, y, z);
    return true;
  } else {
    return false;
  }
}

const Box = () => {


  function checkMain() {
    const check1 = check(value1, value2, value3);
    const check2 = check(value4, value5, value6);
    const check3 = check(value7, value8, value9);
    const check4 = check(value1, value4, value7);
    const check5 = check(value2, value5, value8);
    const check6 = check(value3, value6, value9);
    const check7 = check(value1, value5, value9);
    const check8 = check(value3, value5, value7);

    if (
      check1 ||
      check2 ||
      check3 ||
      check4 ||
      check5 ||
      check6 ||
      check7 ||
      check8
    ) {
      return true;
    }
    return false;
  }

  let [value1, setValue1] = useState(false);
  let [value2, setValue2] = useState(false);
  let [value3, setValue3] = useState(false);
  let [value4, setValue4] = useState(false);
  let [value5, setValue5] = useState(false);
  let [value6, setValue6] = useState(false);
  let [value7, setValue7] = useState(false);
  let [value8, setValue8] = useState(false);
  let [value9, setValue9] = useState(false);

  let [clicked1, setClicked1] = useState(false);
  let [clicked2, setClicked2] = useState(false);
  let [clicked3, setClicked3] = useState(false);
  let [clicked4, setClicked4] = useState(false);
  let [clicked5, setClicked5] = useState(false);
  let [clicked6, setClicked6] = useState(false);
  let [clicked7, setClicked7] = useState(false);
  let [clicked8, setClicked8] = useState(false);
  let [clicked9, setClicked9] = useState(false);

  const [style1,setStyle1] = useState()
  const [style2,setStyle2] = useState()
  const [style3,setStyle3] = useState()
  const [style4,setStyle4] = useState()
  const [style5,setStyle5] = useState()
  const [style6,setStyle6] = useState()
  const [style7,setStyle7] = useState()
  const [style8,setStyle8] = useState()
  const [style9,setStyle9] = useState()

  

  const [xox, setXox] = useState("X");

  const [style,setStyle] = useState()

  function onclickMain(setClicked, setValue, clicked,setStyle) {
    console.log("first");
    if (!clicked) {
      if (xox === "X") {
        console.log("ifcase worked");
        setXox("O");
        setStyle({background: '#7fffd48a'})
        console.log(xox);
      } else {
        console.log("else case worked");
        setXox("X");
        setStyle({background: '#faebd7a1'})
      }
      console.log(xox, "xox is");
      console.log(setValue);
      setValue(xox);
      updateMove(1);
      setClicked(true);
      return true;
    }
  }

  useEffect(() => {
    const status = checkMain();
    if (status) {
      swal({
        icon: "success",
        title: "winner winner chicken dinner 🎉",
        text: `${xox=='X'?'O':'X'} win the match`,
        buttons: false,
        timer: 2000,
      }).then(() => {
        window.location.reload();
      });
    }
   else if(value1&&value2&&value3&&value4&&value5&&value6&&value7&&value8&&value9){
        swal({
            icon: "warning",
            title: "ooh its a draw! 😮",
            text: "  ",
            buttons: false,
            timer: 2000,
          }).then(() => {
            window.location.reload();
          });
    }
  });

  return (
    <React.Fragment>
      <div className="box">
        <div
          className="box-1" style={style1}
          onClick={(e) => {
            onclickMain(setClicked1, setValue1, clicked1,setStyle1);
          }}
        >
          <h1 id="okk">{value1}</h1>
        </div>

        <div
          className="box-2" style={style2}
          onClick={(e) => {
            onclickMain(setClicked2, setValue2, clicked2,setStyle2);
          }}
        >
          <h1>{value2}</h1>
        </div>

        <div
          className="box-3" style={style3}
          onClick={(e) => {
            onclickMain(setClicked3, setValue3, clicked3,setStyle3);
          }}
        >
          <h1>{value3}</h1>
        </div>
        <div
          className="box-4" style={style4}
          onClick={(e) => {
            onclickMain(setClicked4, setValue4, clicked4,setStyle4);
          }}
        >
          <h1>{value4}</h1>
        </div>
        <div
          className="box-5" style={style5}
          onClick={(e) => {
            onclickMain(setClicked5, setValue5, clicked5,setStyle5);
          }}
        >
          <h1>{value5}</h1>
        </div>
        <div
          className="box-6" style={style6}
          onClick={(e) => {
            onclickMain(setClicked6, setValue6, clicked6,setStyle6);
          }}
        >
          <h1>{value6}</h1>
        </div>
        <div
          className="box-7" style={style7}
          onClick={(e) => {
            onclickMain(setClicked7, setValue7, clicked7,setStyle7);
          }}
        >
          <h1>{value7}</h1>
        </div>
        <div
          className="box-8" style={style8}
          onClick={(e) => {
            onclickMain(setClicked8, setValue8, clicked8,setStyle8);
          }}
        >
          <h1>{value8}</h1>
        </div>
        <div
          className="box-9" style={style9}
          onClick={(e) => {
            onclickMain(setClicked9, setValue9, clicked9,setStyle9);
          }}
        >
          <h1>{value9}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Box;
