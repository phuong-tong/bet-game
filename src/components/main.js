import React, { Component } from "react";
import Dice from "./dice";
import ListGame from "./listGame";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <ListGame />
        <Dice />
      </React.Fragment>
    );
  }
}
