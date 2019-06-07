import React from "react";
import "./buttoncomponent.css";
const Buttoncomponent = props => {
  return (
    <div className="button">
      <button
        // onClick={props.tablecreation}
        className="btn-style"
      >
        create
      </button>
    </div>
  );
};
export default Buttoncomponent;
//onClick={props.renderTable}
