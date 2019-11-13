import {
  FETCH_AVATAR_LOADING,
  FETCH_AVATAR_SUCCESS,
  FETCH_AVATAR_FAILURE
} from "../actions/actions";

const initialState = {
  characters: [],
  error: null,
  isLoading: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_AVATAR_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_AVATAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_AVATAR_FAILURE:
      return {
        ...state,
        characters: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
