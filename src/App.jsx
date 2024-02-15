import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat";
// import handleData from "./functions/handleData"; //Refactoring handleData to separate file
import RbGroup from "./components/RbGroup";
import ChbGroup from "./components/ChbGroup";
import NumIn from "./components/NumImp";
import Select from "./components/Select";
import Range from "./components/Range";
import Clock from "./components/Clock";
import ProgressBar from "./components/ProgressBar";
import TextInp from "./components/TextBox";
import Button from "./components/Button";
//
function App() {
  //#region CONSTs
  //
  //#region consts for ice-cream
  // RBGROUP
  const [tastePalete, setTastePalete] = useState([
    "strawberry ",
    "blueberry ",
    "smurfs ",
    "gargamel ",
  ]);
  const [taste, setTaste] = useState();
  // CHECKBOXES
  const [sprinkles, setSprinkles] = useState(["nuts ", "chocolate ", "sirup "]);
  const [sprinkle, setSprinkle] = useState([]);
  //Scoops NumIn
  const [scoopsNo, setScoopsNo] = useState();
  const scoopsMin = 1;
  const scoopsMax = 4;
  // Cream option
  const [creamOptions, setCreamOptions] = useState([
    "Select",
    "low-fat",
    "medium-fat",
    "full-fat",
    "lactose-free",
    "vegan",
  ]);
  const [creamOption, setCreamOption] = useState();
  //#endregion consts for ice-cream
  //
  //#region consts for computer
  const minDiskSpace = 0;
  const maxDisckSpace = 100;
  const [rangeValue, setRangeValue] = useState(50);
  // PRGBarr
  let [prgCount, setPrgCount] = useState(0);
  const tickValue = 1000;
  const [tickAdditionToPrgCount, setTickAdd] = useState(25);
  //#endregion consts for computer
  const [txbValue1, setTxbValue1] = useState();
  const [txbValue2, setTxbValue2] = useState();
  //#region CONSTS for ADDITION
  let summ = 0;
  let [sumText, setSumText] = useState("");
  //#endregion CONSTS for ADDITION
  //
  //#endregion CONSTs
  // ########################### uncomment region prompt on finishing###################################
  //#region promt getting float for addition
  useEffect(() => {
    let float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    while (!validateFloat(float)) {
      float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    }
    setTxbValue1(parseFloat(float));
  }, []);
  //#endregion prompt getting float for addition
  //

  //#region timer prgBar instal progress
  useEffect(() => {
    const timer = setInterval(() => {
      if (prgCount < 100) {
        setPrgCount(prgCount + tickAdditionToPrgCount);
      }
    }, tickValue);
    console.log(prgCount + "a");
    // timer cleanup fction for resetin interval
    return () => clearInterval(timer);
  }, [prgCount]);
  //#endregion timer prgBar instal progress
  //
  //#region handleData function
  const handleData = (data, source) => {
    switch (source) {
      case `rbg-taste`: {
        setTaste(data);
        break;
      }
      case `chbg-sprinkling`: {
        setSprinkle(data);
        break;
      }
      case `numIn-scoops`: {
        if (data > scoopsMax) {
          setScoopsNo(scoopsMax);
        } else if (data < scoopsMin) {
          setScoopsNo(scoopsMin);
        } else {
          setScoopsNo(data);
        }
        break;
      }
      case `select-kindOfCream`: {
        setCreamOption(data);
        break;
      }
      case `range-discSpace`: {
        setRangeValue(data);
        break;
      }
      case "txb-1": {
        setTxbValue1(data);
        break;
      }
      case "txb-2": {
        setTxbValue2(data);
        break;
      }
      default:
        break;
    }
  };
  //#endregion handleData function
  //
  //#region handleEVENT
  const handleEvent = (source) => {
    switch (source) {
      case "btn-sum": {
        console.log("btn-sum clisked");
        console.log(
          `valid 1 ${validateFloat(txbValue1)} a 2 ${validateFloat(txbValue2)}`
        );
        if (validateFloat(txbValue1) && validateFloat(txbValue2)) {
          console.log("valid");
          summ = parseFloat(txbValue1) + parseFloat(txbValue2);
          setSumText(`Correct inputs, sum is ${summ}`);
        } else {
          setSumText("No correct input detected");
        }
        break;
      }

      default:
        break;
    }
  };
  //#endregion handleEVENT
  //
  return (
    <div className="bg-info-subtle vw-100 vh-100">
      {/* //#region container */}
      <div className="container bg-warning-subtle paddingtop">
        {/* #region wrapping row */}
        <div className="row margintop">
          {/* //#region 1stcol: ice-cream */}
          <div className="col-6">
            <section className="ice-cream">
              <p>
                Yours selected ice-cream:
                {scoopsNo == undefined
                  ? ""
                  : scoopsNo > 1
                  ? scoopsNo + " scoops "
                  : scoopsNo + " scoop "}{" "}
                {taste == undefined ? "" : "of " + taste + " flavour"}
                {sprinkle.length != 0
                  ? ", sprinkled with " + sprinkle + "on top."
                  : "."}
                <br />
                {creamOption === "Select" || creamOption == undefined
                  ? ""
                  : "Selected cream - " + creamOption}
              </p>
              {/* //#region RBGgroup taste choice*/}
              <RbGroup
                label="Select your taste"
                id="rbg-taste"
                dataIn={[
                  // tady by to chtelo nejakou funkci na propis
                  { label: tastePalete[0], value: tastePalete[0] },
                  { label: tastePalete[1], value: tastePalete[1] },
                  { label: tastePalete[2], value: tastePalete[2] },
                  { label: tastePalete[3], value: tastePalete[3] },
                ]}
                selectedValue={taste}
                handleData={handleData}
              />
              {/* //#endregion RBGgroup */}
              {/* //#region  ChbGroup SomethingOnTop */}
              <ChbGroup
                id="chbg-sprinkling"
                label="Sprinkling on top"
                handleData={handleData}
                dataIn={[
                  // tady by to chtelo nejakou funkci na propis
                  { label: sprinkles[0], value: sprinkles[0] },
                  { label: sprinkles[1], value: sprinkles[1] },
                  { label: sprinkles[2], value: sprinkles[2] },
                ]}
                selectedValue={sprinkle}
              />
              {/* #endregion ChbGroup SomethingOnTop */}
              {/* //#region NUMBER of SCOOPS */}
              <NumIn
                id="numIn-scoops"
                label="No. scoops (max 4)"
                min={scoopsMin}
                max={scoopsMax}
                handleData={handleData}
              />
              {/* //#endregion NUMBER of SCOOPS */}
              {/* //#region kind of ice-cream */}
              <Select
                id="select-kindOfCream"
                label="Choose your cream-dietary option"
                dataIn={creamOptions}
                handleData={handleData}
                selectedValue={creamOption}
              />
              {/* //#endregion kind of ice-cream */}
            </section>
            {/* //#region COMPUTER section */}
            <section className="computer">
              <Range
                id="range-discSpace"
                label={"Disk Space"}
                min={minDiskSpace}
                max={maxDisckSpace}
                handleData={handleData}
              />
              <p>
                <span>
                  <Clock /> {" , " + rangeValue + " % disc space left."}
                </span>
              </p>
            </section>
            {/* //#endregion COMPUTER section */}
          </div>
          {/* //#endregion 1stcol */}
          {/* //#region  2ndcol */}
          <div className="col-6">
            {/* //#region PROGRESSBAR */}
            <ProgressBar id="Prg-Instal" dataIn={prgCount} />
            <p>
              {" "}
              Instalation of ice-cream in progres, wait:{" "}
              {(100 - prgCount) / tickAdditionToPrgCount}
            </p>
            {/* //#endregion PROGRESSBAR */}
            {/* //#region 1st in row textinp*/}
            <div className="row">
              <div className="col-sm-6">
                <TextInp
                  id="txb-1"
                  label="First addend"
                  handleData={handleData}
                  dataIn={txbValue1}
                />
              </div>
              <div className="col-sm-6">
                <TextInp
                  id="txb-2"
                  label="Second addend"
                  handleData={handleData}
                  dataIn={txbValue2}
                />
              </div>
            </div>
            {/* //#endregion 1st in row textinp*/}
            {/* //#region 2nd in row  btn and text*/}
            <div className="row">
              <div className="col-6">
                {" "}
                <Button
                  className="margintop paddingtop"
                  id="btn-sum"
                  label={"Add together"}
                  handleEvent={handleEvent}></Button>
              </div>
              <div className="col-6">
                <p>{sumText}</p>
              </div>
            </div>
            {/* //#endregion 2nd in row */}
            {/* //#region 3rd in row */}
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            {/* //#endregion 3rd in row */}
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          </div>
          {/* //#endregion 2ndcol */}
        </div>
        {/* //#endregion wrapping row */}
      </div>
      {/* //#endregion container */}
    </div>
  );
}

export default App;
