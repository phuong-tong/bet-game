import { PLAY_GAME, RESET_GAME, BET } from "../constants/constant";

export const playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};

export const resetGameAction = () => {
  return {
    type: RESET_GAME,
  };
};

export const betAction = (quanCuoc) => {
  return {
    type: BET,
    quanCuoc,
  };
};
