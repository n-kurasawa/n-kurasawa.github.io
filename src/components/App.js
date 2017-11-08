import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Header from './Header/';
import Container from './Container/';
import ArticleList from './ArticleList/'
import Article from './Article/'

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