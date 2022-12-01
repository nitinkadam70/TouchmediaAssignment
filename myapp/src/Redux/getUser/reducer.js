import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from './action';

const initState = {
  loading: false,
  data: [],
  error: false,
};

export const getUserReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };

    case GET_USER_ERROR:
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
