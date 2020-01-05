const INITIAL_STATE = {
   currentUser: "Mohamed"
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "ADD_TODO":
         console.log(action.payload);
         break;

      default:
         return state;
   }
};

export default userReducer;
