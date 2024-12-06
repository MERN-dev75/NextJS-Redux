import { combineReducers } from "redux";
import { updateContent } from "./Content/reducer";

const reducer = combineReducers({
  Data: updateContent,
});

export default reducer;
