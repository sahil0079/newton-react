import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { counterReducer } from "./reducer";



const store = createStore(counterReducer, composeWithDevTools());

export default store;