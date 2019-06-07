import React from "react";
import "./dynamicrendering.css";
import Rowcomponent from "../formcomponent/inputfieldcomponent/rowcomponent/Rowcomponent";
import Columncomponent from "../formcomponent/inputfieldcomponent/columncomponent/Columncomponent";
import Buttomcomponent from "../formcomponent/buttoncomponent/Buttoncomponent";
export default class Dynamicrenering extends React.Component {
  state = {
    rows: "",
    columns: ""
  };

  onChangeValues = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitForm = e => {
    e.sample();
    this.setState({});
  };

  //  tablerendering=()=>{
  createtable = () => {
    let rows = [];
    rows = Array.from({ length: this.state.rows });
    let columns = [];
    columns = Array.from({ length: this.state.columns });
    return rows.map((numbers, index) => {
      return (
        <tr className="tr" key={index}>
          {columns.map((numbers, index) => {
            return (
              <td className="td" key={index}>
                {index}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  //  }
  render() {
    return (
      <div>
        <Rowcomponent rowsdynamic={this.onChangeValues} />
        <Columncomponent columnsdynamic={this.onChangeValues} />
        <Buttomcomponent tablecreation={this.tablerendering} />
        <table className="table">
          <tbody>{this.createtable()}</tbody>
        </table>
      </div>
    );
  }
}
