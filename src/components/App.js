import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Header from './Header/';
import Container from './Container/';
import ArticleList from './ArticleList/'
import Article from './Article/'

import store from "../store/";
import { Provider } from "redux-zero/react"

const styles = theme => ({
  root: {
  },
});

function App(props) {
  const { classes } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.root}>
          <Header />
          <Container>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/article/:id' render={({match}) => (
              <Article {...props} match={match} />
            )} />
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));