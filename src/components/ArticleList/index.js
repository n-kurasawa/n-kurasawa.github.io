import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
  },
  articleInfo: {
    margin: '10px 0 10px 0'
  },
  divider: {
    margin: '50px 0 50px 0'
  },
  continuation: {
    textAlign: 'right',
    textDecoration: 'underline',
    color: theme.palette.text.disabled
  },
  link: {
    "&:hover": {
      textDecoration: 'underline',
    }
  }
});

const Item = ({id, date, title, content, classes}) => (
  <section>
    <Link to={`/article/${id}`}>
      <Typography type="title">
        {title}
      </Typography>
    </Link>
    <div className={classes.articleInfo}>
      <Typography>
        {date}
      </Typography>
    </div>
    <Link to="/article/1" className={classes.link}>
      <Typography>
        {content}
      </Typography>
    </Link>
    <Link to="/article/1" className={classes.continuation}>
      <Typography>
        続きを読む
      </Typography>
    </Link>
  </section>
)

function ArticleList(props) {
  const { classes, articles } = props;
  const list = articles.map((article) => {
    <Item {...article} />
  });
  return (
    <div className={classes.root}>
      {list}
    </div>
  );
}

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleList);
