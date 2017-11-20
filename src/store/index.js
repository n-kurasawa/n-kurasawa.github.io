import createStore from "redux-zero";

const initialState = { articles: [], article: {} };
const store = createStore(initialState);

export default store;