import * as ActionType from "../constants/constant";

const initialState = {
  totalCoin: 100,
  betList: [
    {
      name: "bau",
      image: "../../imgBauCua/bau.PNG",
      betScore: 0,
    },
    {
      name: "cua",
      image: "../../imgBauCua/cua.PNG",
      betScore: 0,
    },
    {
      name: "tom",
      image: "../../imgBauCua/tom.PNG",
      betScore: 0,
    },
    {
      name: "ca",
      image: "../../imgBauCua/ca.PNG",
      betScore: 0,
    },
    {
      name: "nai",
      image: "../../imgBauCua/nai.PNG",
      betScore: 0,
    },
    {
      name: "ga",
      image: "../../imgBauCua/ga.PNG",
      betScore: 0,
    },
  ],
  dice: [
    { name: "bau", image: "../../imgBauCua/bau.PNG" },
    { name: "bau", image: "../../imgBauCua/bau.PNG" },
    { name: "bau", image: "../../imgBauCua/bau.PNG" },
  ],
};

const BetGameReducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case "PLAY_GAME":
      let arrayDiceRandom = [];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 6);
        //console.log(randomNumber);
        let diceRandom = {
          name: state.betList[randomNumber].name,
          image: state.betList[randomNumber].image,
        };
        arrayDiceRandom.push(diceRandom);
      }

      arrayDiceRandom.forEach((dice, index) => {
        //find each dice in the array
        let indexDice = state.betList.findIndex(
          (quanCuoc) => quanCuoc.name == dice.name
        );
        if (indexDice !== -1) {
          state.totalCoin += state.betList[indexDice].betScore;
        }
      });

      //resolve the problem of giving back the coin
      state.betList.forEach((quanCuoc, index) => {
        let indexQuanCuoc = arrayDiceRandom.findIndex(
          (randomDice) => randomDice.name === quanCuoc.name
        );
        if (indexQuanCuoc !== -1) {
          state.totalCoin += quanCuoc.betScore;
        }
      });
      //reset
      let resetArr = state.betList.map((quanCuoc, index) => {
        return { ...quanCuoc, betScore: 0 };
      });
      return { ...state, dice: arrayDiceRandom, betList: resetArr };

    case "BET":
      let listUpdate = [...state.betList];
      let index = listUpdate.findIndex(
        (quanCuoc) => quanCuoc.name === action.quanCuoc.name
      );
      if (index !== -1) {
        if (state.totalCoin > 0) {
          listUpdate[index].betScore += 10;
          state.totalCoin -= 10;
        }
      }

      return { ...state, betList: listUpdate };

    case "RESET_GAME":
      let resetArr1 = state.betList.map((quanCuoc, index) => {
        return { ...quanCuoc, betScore: 0 };
      });
      return { ...initialState, betList: resetArr1 };

    default:
      return { ...state };
  }
};

export default BetGameReducer;
