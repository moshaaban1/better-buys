// function createStore(reducer) {
//    // The state
//    // Get the state
//    // Listen to the changes on the state
//    // Update the state

//    let state;
//    let listeners = [];

//    const getState = () => state;

//    const subscribe = listener => {
//       listeners.push(listener);
//       return () => {
//          listeners = listeners.filter(l => l !== listener);
//       };
//    };

//    const dispatch = action => {
//       state = reducer(state, action);
//       listeners.forEach(listener => listener());
//    };

//    return {
//       getState,
//       subscribe,
//       dispatch
//    };
// }

// module.exports = createStore;
