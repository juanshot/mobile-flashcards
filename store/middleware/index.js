import { applyMiddleware } from "redux";
import thunk from "./thunk";

export default applyMiddleware(thunk);
