import * as action from "../redux/actions/actionTypes";

const initialState = {
  allCriminals: [],
  rewardCriminals: [],
  level1: [],
  detail: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
  

    default:
      return state;
  }
}
