import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat";

//
function App() {
  useEffect(() => {
    let float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    while (!validateFloat(float)) {
      float = parseFloat(prompt(`Give a float number for addition`, `3.5`));
    }
  }, []);

  //
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
            section.ice-cream>p{`yours selected ice-cream:`}
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
