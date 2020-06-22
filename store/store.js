import { createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

/*

store.subscribe(() => {
  console.log(`Store update ${store.getState()}`);
})

*/

const store = createStore(userReducer);
export default store;