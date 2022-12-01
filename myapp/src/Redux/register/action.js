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
  dispatch(userRegisterloading());
  axios({
    url: `https://luck-admin.luckyroofs.com/api/social-users`,
    method: 'POST',
    data: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION:
        'Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195',
    },
  })
    .then((res) => {
      dispatch(userRegisterSuccess(res));
      console.log('res', res);
    })
    .catch((err) => userRegisterError());
};
