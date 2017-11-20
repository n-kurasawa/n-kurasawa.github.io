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
  }
});

export default actions;