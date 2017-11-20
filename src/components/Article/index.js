import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { connect } from "redux-zero/react";
import actions from "../../actions/";

const mapToProps = ({ article }) => ({ article });

const styles = theme => ({
  root: {
  },
  articleInfo: {
    margin: '10px 0 10px 0'
  },
  divider: {
    margin: '20px 0 30px 0'
  }
});

class Article extends React.Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }
  render() {
    const { classes, article: { date, title, content } } = this.props;
    return (
      <div className={classes.root}>
        <article>
          <div className={classes.articleInfo}>
            <Typography>
              {date}
            </Typography>
          </div>
          <Typography type="title">
            {title}
          </Typography>
          <Divider className={classes.divider} />
          <Typography>
            {content}
          </Typography>
        </article>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapToProps, actions)(Article));
