import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom'
import Transition from 'react-transition-group/Transition';

const styles = theme => ({
  root: {
    backgroundImage: 'url(/header_top.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const defaultStyle = {
  transition: 'all 300ms 0s ease',
  top: '50px',
  position: 'inherit',
}

const transitionStyles = {
  entering: { top: '50px' },
  entered: { top: 0 },
};

function Bar(props) {
  const { classes, showHeader, showTitle } = props;
  let style;
  if (!showHeader) {
    style = {boxShadow: '0 0 0 0'}
  }

  return (
    <AppBar className={classes.root} style={style}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Transition in={showTitle} timeout={300}>
          {(state) => (
            <Typography style={{
              ...defaultStyle,
              ...transitionStyles[state]}} type="title" color="inherit" className={classes.flex}>
              <Link to="/">k_7016's Tech Blog</Link>
            </Typography>
          )}
        </Transition>
      </Toolbar>
    </AppBar>
  );
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar)