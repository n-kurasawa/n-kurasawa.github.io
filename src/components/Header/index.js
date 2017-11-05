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
    position: 'absolute',
    top: 165,
    left:0,
    right:0,
    width: '80%',
    margin: 'auto'
  },
  subtitle: {
    marginTop: 10
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
          <div className={classes.header}>
            <Typography type="display1" color='inherit'>
              k_7016's Tech Blog
            </Typography>
            <Typography className={classes.subtitle} type="title" color='inherit'>
              戒めの２番
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);