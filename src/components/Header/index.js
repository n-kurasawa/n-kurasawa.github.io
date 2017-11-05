import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Bar from './Bar'

const styles = theme => ({
  root: {
    backgroundImage: 'url(header.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '497px'
  },
  header: {
    flex: 1,
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    top: 200,
    left: 0,
    right: 0,
    margin: 'auto'
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { showHeader: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      this.setState({ showHeader: true });
    } else {
      this.setState({ showHeader: false });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Bar showHeader={this.state.showHeader}/>
        <div className={classes.root}>
          <Typography type="display1" align='center' className={classes.header}>
              Shut the fuck up and write some code.
          </Typography>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);