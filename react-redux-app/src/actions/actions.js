import axios from "axios";

export const FETCH_AVATAR_LOADING = "FETCH_AVATAR_LOADING";
export const FETCH_AVATAR_SUCCESS = "FETCH_AVATAR_SUCCESS";
export const FETCH_AVATAR_FAILURE = "FETCH_AVATAR_FAILURE";

export const avatarLoading = () => ({ type: FETCH_AVATAR_LOADING });
export const avatarSuccess = data => ({
  type: FETCH_AVATAR_SUCCESS,
  payload: data
});
export const avatarFailure = error => ({
  type: FETCH_AVATAR_FAILURE,
  payload: error
});

export const getAvatar = () => {
  return function(dispatch) {
    dispatch(avatarLoading());

    return axios
      .get(`https://last-airbender-api.herokuapp.com/api/v1/characters/`)
      // .then(response => console.log(response.data
      //   ))
      .then(response => dispatch(avatarSuccess(response.data)))
      .catch(error => dispatch(avatarFailure(error)));
  };
};
