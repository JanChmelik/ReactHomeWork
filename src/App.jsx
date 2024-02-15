import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat";
// import handleData from "./functions/handleData"; //Refactoring handleData to separate file
import RbGroup from "./components/RbGroup";
import ChbGroup from "./components/ChbGroup";
import NumIn from "./components/NumImp";
//
function App() {
  //#region CONSTs
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
  //#endregion consts for ice-cream
  //#endregion CONSTs
  // ########################### uncomment region prompt on finishing###################################
  // //#region promt getting float for addition
  // useEffect(() => {
  //   let float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
  //   while (!validateFloat(float)) {
  //     float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
  //   }
  // }, []);
  // //#endregion prompt getting float for addition
  // //
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

      default:
        break;
    }
  };
  //#endregion handleData function
  //
  //
  return (
    <div className="bg-info-subtle vw-100 vh-100">
      {/* //#region container */}
      <div className="container bg-warning-subtle">
        {/* #region wrapping row */}
        <div className="row">
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
                {taste == undefined ? "" : "of " + taste + " flavour, "}
                {sprinkle.length != 0 ? "with " + sprinkle + "on top" : ""}
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
            </section>
          </div>
          {/* //#endregion 1stcol */}
          {/* //#region  2ndcol */}
          <div className="col-6">
            {/* //#region 1st in row */}
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            {/* //#endregion 1st in row */}
            {/* //#region 2nd in row */}
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            {/* //#endregion 2nd in row */}
            {/* //#region 3rd in row */}
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            {/* //#endregion 3rd in row */}
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
