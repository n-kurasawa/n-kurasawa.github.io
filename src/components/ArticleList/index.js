import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Item from './Item'
import { connect } from "redux-zero/react";
import actions from "../../actions/";

const mapToProps = ({ articles }) => ({ articles });

const styles = theme => ({
  root: {
  },
  divider: {
    margin: '50px 0 50px 0'
  },
});

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { classes, articles } = this.props;
    const list = articles.map((article) => (
      <div key={article.id}>
        <Item {...article} />
        <Divider className={classes.divider} />
      </div>
    ));
    return (
      <div className={classes.root}>
        {list}
      </div>
    );
  }
}

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapToProps, actions)(ArticleList));
