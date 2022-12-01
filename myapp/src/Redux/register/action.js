import axios from 'axios';
//signup
export const USER_REGISTER_LOADING = 'USER_REGISTER_LOADING';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

//signup
const userRegisterloading = () => ({
  type: USER_REGISTER_LOADING,
});
const userRegisterSuccess = (payload) => ({
  type: USER_REGISTER_SUCCESS,
  payload,
});
const userRegisterError = () => ({
  type: USER_REGISTER_ERROR,
});

//post user

export const userRegister = (payload) => (dispatch) => {
  const API_url = process.env.REACT_APP_REGISTER_API_URL;
  const token = process.env.REACT_APP_JWT_TOKEN;
  dispatch(userRegisterloading());
  const payloadTwo = {
    data: {
      ...payload,
    },
  };
  axios({
    url: API_url,
    method: 'POST',
    data: JSON.stringify(payloadTwo),
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(userRegisterSuccess(res));
      console.log('res', res);
    })
    .catch((err) => userRegisterError());
};
