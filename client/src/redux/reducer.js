import * as action from "../redux/actions/actionTypes";

const initialState = {
  batch: [],
  service: [],
  level1: [],
  detail: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.GET_BATCH: {
      return {
        ...state,
        batch: payload,
      };
    }
    case action.GET_SERVICE: {
      return {
        ...state,
        service: payload,
      };
    }
    case action.CREATE_BATCH: {
      return {
        ...state,
      };
    }
    case action.CREATE_SERVICE: {
      return {
        ...state,
      };
    }
    case action.CREATE_INVOICE: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
