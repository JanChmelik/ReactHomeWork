import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat";
// import handleData from "./functions/handleData";
import RbGroup from "./components/RbGroup";
//
function App() {
  //#region CONSTs
  // consts for ice-cream taste RbGroup
  const [tastePalete, setTastePalete] = useState([
    "strawberry",
    "blueberry",
    "smurfs",
    "gargamel",
  ]);
  const [taste, setTaste] = useState();
  //#endregion CONSTs
  //#region promt getting float for addition
  useEffect(() => {
    let float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    while (!validateFloat(float)) {
      float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    }
  }, []);
  //#endregion prompt getting float for addition
  //
  //#region handleData function
  const handleData = (data, source) => {
    switch (source) {
      case `rbg-taste`: {
        setTaste(data);
        break;
      }
      // case value:
      //   break;
      // case value:
      //   break;

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
              <p>Yours selected ice-cream: {taste}</p>
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
