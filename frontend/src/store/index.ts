// Import necessary redux functions and middlewares
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define your initial state and reducer function
const initialState = {};

// Action types
interface FetchDataAction {
  type: 'FETCH_DATA';
  payload: { data: string[] }; // Replace with actual data type
}

interface UpdateDataAction {
  type: 'UPDATE_DATA';
  payload: { data: string }; // Replace with actual data type
}

// Use a union type for the Redux action
type MyAction = FetchDataAction | UpdateDataAction;

// Use 'MyAction' as the action type in your rootReducer
const rootReducer = (state = initialState, action: MyAction) => {
  switch (action.type) {
    // Handle your actions here
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
