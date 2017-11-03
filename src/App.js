import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './components/withRoot';
import Header from './components/Header/';

const styles = theme => ({
  root: {
  },
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));