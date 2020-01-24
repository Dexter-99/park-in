import React, { Component, Fragment } from "react";

export class Slot extends Component {
  render() {
    const color =
      this.props.slot.status === "unoccupied" ? "bg-danger" : "bg-success";
    return (
      <Fragment>
        <div
          className={`card ${color}  text-center`}
          style={{ height: "250px", width: "inherit", borderRadius: "10px" }}
        >
          <button
            className="btn btn-light mt-auto"
            style={{ borderRadius: "5px" }}
            onClick={() => this.props.onChangeColor(this.props.slot)}
          >
            {this.props.slot.status}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Slot;
