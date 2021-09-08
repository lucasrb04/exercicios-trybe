const INITIAL_STATE = [];

function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;