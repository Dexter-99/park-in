import React, { Component } from "react";
import Slot from "./Slot";
export class Parking extends Component {
  constructor() {
    super();
    this.state = {
      slots: [
        { id: 1, status: "unoccupied" },
        { id: 2, status: "unoccupied" },
        { id: 3, status: "unoccupied" },
        { id: 4, status: "unoccupied" },
        { id: 5, status: "unoccupied" },
        { id: 6, status: "unoccupied" },
        { id: 7, status: "unoccupied" },
        { id: 8, status: "unoccupied" },
        { id: 9, status: "unoccupied" }
      ]
    };
  }
  handleChange = item => {
    const items = [...this.state.slots];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].status === "unoccupied") {
      items[index].status = "occupied";
    } else {
      items[index].status = "unoccupied";
    }
    this.setState({ slots: items });
    console.log(this.state.slots);
  };
  render() {
    return (
      <div className="container" style={{ height: "80%", marginTop: "2rem" }}>
        <div className="grid-3 ">
          {this.state.slots.map(item => (
            <Slot key={item.id} slot={item} onChangeColor={this.handleChange} />
          ))}
        </div>
      </div>
    );
  }
}

export default Parking;
