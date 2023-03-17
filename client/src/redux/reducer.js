import * as action from "../redux/actions/actionTypes";

const initialState = {
  batch: [],
  service: [],
  loggedUser:null,
  loggedAdmin:null,
  invoice: [],
  detail: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.LOGOUT_ADMIN: {
      return {
        ...state,
        loggedAdmin: {},
      };
    }
    case action.LOGIN_ADMIN: {
      return {
        ...state,
      };
    }
    case action.LOGOUT: {
      return {
        ...state,
        loggedUser: {},
      };
    }
    case action.LOGIN: {
      return {
        ...state,
      };
    }
    case action.GET_USER_PROFILE: {
      return {
        ...state,
   
        loggedUser: payload,
      };
    }
    case action.GET_ADMIN_PROFILE: {
      return {
        ...state,
        loggedAdmin: payload,
      };
    }
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
    case action.GET_INVOICE: {
      return {
        ...state,
        invoice: payload.reverse(),
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
    case action.CREATE_LIGHT_INVOICE: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
