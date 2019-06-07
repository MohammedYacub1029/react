import React from "react";
const Columncomponent = props => {
  return (
    <div className="column">
      <input
        className="column-input"
        type="number"
        name="columns"
        value={props.columns}
        onChange={props.columnsdynamic}
      />
      <p className="column-para">enter no of columns</p>
    </div>
  );
};
export default Columncomponent;
