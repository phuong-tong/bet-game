import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameAction, resetGameAction } from "../modules/action/action";
import { Button, Container, Col, Row } from "react-bootstrap";

class Dice extends Component {
  renderDice = () => {
    return this.props.dice.map((item, index) => {
      return <img src={item.image} width={200} key={index} />;
    });
  };

  render() {
    //console.log(this.props.dice); //successfully log array of 3 dice
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <button
              className="btn btn-success"
              onClick={() => this.props.playGame()}
            >
              Play Game
            </button>
          </div>
          <div className="col-6"> {this.renderDice()}</div>
          <div className="col-2">
            <strong> Total coin: {this.props.totalCoin}</strong>
            {/* {this.props.totalCoin} */}
          </div>
          <div className="col-2">
            <button
              className="btn btn-danger"
              onClick={() => this.props.resetGame()}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = (state) => {
  return {
    dice: state.BetGameReducer.dice,
    totalCoin: state.BetGameReducer.totalCoin,
  };
};
//mapDispatchto Props
const mapDispatchtoProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(playGameAction());
    },
    resetGame: () => {
      dispatch(resetGameAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Dice);
