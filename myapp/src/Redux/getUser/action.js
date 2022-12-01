import axios from 'axios';
import App from '../../App';
//signup
export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

//getting user
const getUserloading = () => ({
  type: GET_USER_LOADING,
});
const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});
const getUserError = (err) => ({
  type: GET_USER_ERROR,
  payload: err,
});

//get user

export const getUser = () => (dispatch) => {
  //url token
  const API_url = process.env.REACT_APP_REGISTER_API_URL;
  const token = process.env.REACT_APP_JWT_TOKEN;

  dispatch(getUserloading());

  axios({
    url: `${API_url}/?populate=*`,
    method: 'GET',
    headers: {
      AUTHORIZATION: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(getUserSuccess(res.data.data));
    })
    .catch((err) => dispatch(getUserError(err)));
};
