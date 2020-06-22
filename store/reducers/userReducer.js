const initialState = {
  auth: false,
  username: "",
  imgId: ""
};
export const userReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_USER") {
    return {
      // You cant use the ...state in IE
      username: action.username,
      imgId: action.imgId,
      auth: action.auth
    };
  };
  return state;
};
