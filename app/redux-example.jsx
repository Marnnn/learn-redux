var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  console.log('new action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

var action = {
  type: 'CHANGE_NAME',
  name: 'Graham'
};
store.dispatch(action);

console.log('name should be Graham', store.getState())
