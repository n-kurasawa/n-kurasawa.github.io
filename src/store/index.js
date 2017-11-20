import createStore from "redux-zero";

const initialState = { articles: [] };
const store = createStore(initialState);

export default store;