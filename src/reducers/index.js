import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from 'redux-modal'
import drawer from "./drawer";
import todo from "./todo";

export default combineReducers({
  form: formReducer,
  modal: modalReducer,
  drawer,
  todo
});
