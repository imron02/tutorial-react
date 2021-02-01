import { APP_INIT, SIGN_IN, SIGN_OUT } from "../utils/constant";

const initialState = {
  isLoading: true,
  userToken: null,
  isSignOut: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_INIT:
      return { ...state, isLoading: false };
    case SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isSignOut: false,
        userToken: action.payload
      };
    case SIGN_OUT:
      return { ...state, userToken: null, isSignOut: true };
    default:
      return state;
  }
};

export default loginReducer;
