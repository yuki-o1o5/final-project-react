import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "../reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("article", JSON.stringify(store.getState()));
});

export default store;
