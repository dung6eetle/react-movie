const SET_LIKE_COUNTER = "SET_LIKE_COUNTER";

let initialState = {
  likeCounter: false,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_COUNTER:
      return {
        ...state,
        likeCounter: !state.likeCounter,
    };
    default:
      return state;
  }
};
export const setLikeCounter = (likeCounter) => {
    console.log('jopa')
  return {
    type: SET_LIKE_COUNTER,
    likeCounter
  }
}

export default resultReducer