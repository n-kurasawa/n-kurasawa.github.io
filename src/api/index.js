import * as firebase from "firebase";
import config from "../config/"

firebase.initializeApp(config);

const getArticles = () => {
  return firebase.database().ref('articles').once('value').then((snapshot) => (
    snapshot.val()
  ));
}
export {
  getArticles
}