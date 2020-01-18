import types from "./user.types";

const INITIAL_STATE = {
   user: null,
   isLogging: false,
   errorMessage: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.SET_CURRENT_USER:
         return {
            ...state,
            user: action.payload
         };
      case types.EMAIL_SIGN_IN_START:
         return {
            ...state,
            isLogging: true
         };
      case types.EMAIL_SIGN_IN_SUCCESS:
         return {
            ...state,
            isLogging: false
         };
      case types.EMAIL_SIGN_IN_FAILURE:
         return {
            ...state,
            isLogging: false,
            errorMessage: action.payload
         };
      default:
         return state;
   }
};

export default userReducer;
