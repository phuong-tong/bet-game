import React, { Component } from "react";
import { connect } from "react-redux";
import { betAction } from "../modules/action/action";

class ListGame extends Component {
  renderBetList = () => {
    return this.props.betList.map((quanCuoc, index) => {
      return (
        <div className="col-4" key={index}>
          <button
            className="text-center"
            onClick={() => this.props.bet(quanCuoc)}
          >
            <img src={quanCuoc.image} />
            <span style={{ fontSize: "50px", color: "red" }}>
              {quanCuoc.betScore}
            </span>
          </button>
        </div>
      );
    });
  };
  render() {
    //console.log(this.props.betList); //success
    return (
      <div>
        <div
          className="col-2"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Choose your bets
        </div>
        <div className="row">{this.renderBetList()}</div>
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = (state) => {
  return {
    betList: state.BetGameReducer.betList,
  };
};

//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    bet: (quanCuoc) => {
      dispatch(betAction(quanCuoc));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListGame);
