import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import withRoot from './components/withRoot';
import Header from './components/Header/';
import Container from './components/Container/';
import ArticleList from './components/ArticleList/'
import Article from './components/Article/'

const styles = theme => ({
  root: {
  },
});

function App(props) {
  const { classes } = props;

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Container>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/article/:id' component={Article} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));