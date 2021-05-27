import { createStore } from "redux";
import { logReducer } from "./reducer";

const store = createStore(logReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
