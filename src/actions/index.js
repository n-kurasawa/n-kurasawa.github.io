import * as Api from '../api/';

const actions = ({ getState, setState }) => ({
  init() {
    return Promise.resolve()
      .then(() => (
        Api.getArticles()
      ))
      .then((articles) => {
        setState({ articles })
      })
  },
  getArticle(state, id) {
    return Promise.resolve()
    .then(() => (
      Api.getArticles()
    ))
    .then((articles) => {;
      return articles ? articles[id - 1] : {};
    })
    .then((article) => {
      setState({ article });
    });
  }
});

export default actions;