import {
  USER_REGISTER_ERROR,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
} from './action';

const initState = {
  loading: false,
  data: [],
  error: false,
};

export const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };

    case USER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
