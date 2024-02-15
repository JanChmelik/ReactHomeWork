import React from "react";

function NumImp({ dataIn, label, handleData, id,min,max }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </>
  );
}

export default NumImp;
