import React from "react";
const Rowcomponent = props => {
  return (
    <div className="row">
      <input
        className="row-input"
        type="number"
        name="rows"
        value={props.rows}
        onChange={props.rowsdynamic}
      />
      <p className="row-para">enter no of rows</p>
    </div>
  );
};
export default Rowcomponent;
