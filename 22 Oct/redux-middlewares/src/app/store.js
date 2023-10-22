import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import anotherMiddleware from "../middlewares/anotherMiddleware";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import counterReducer from "../reducers/counterReducer";


export const store = createStore(counterReducer,
    applyMiddleware(loggerMiddleware, anotherMiddleware)
);