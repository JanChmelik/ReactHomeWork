import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-info-subtle vw-100 vh-100">
      {/* //#region container */}
      <div className="container bg-warning-subtle">
        {/* #region wrapping row */}
        <div className="row">
          {/* //#region 1stcol */}
          <div className="col-6"></div>
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
