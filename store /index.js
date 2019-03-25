import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import cartReducer from "./reducers/cartReducer";
import coffeeReducer from "./reducers/coffeeReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  coffeeReducer: coffeeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
