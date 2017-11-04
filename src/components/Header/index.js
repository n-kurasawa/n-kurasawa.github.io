import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Bar from './Bar'

const styles = theme => ({
  root: {
    backgroundImage: 'url(header.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '497px'
  },
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
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);