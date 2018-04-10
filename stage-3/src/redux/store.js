import reducer from "./reducer";
import reduxPromiseMiddleware from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
