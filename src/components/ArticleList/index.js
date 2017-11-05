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

function ArticleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <section>
        <Link to="/article/1">
          <Typography type="title">
            ブログ始めました
          </Typography>
        </Link>
        <div className={classes.articleInfo}>
          <Typography>
            2017.10.16
          </Typography>
        </div>
        <Link to="/article/1" className={classes.link}>
          <Typography>
            こんにちは。この度ブログを開設しました！
            これから頑張って書いていきます！
          </Typography>
        </Link>
        <Link to="/article/1" className={classes.continuation}>
          <Typography>
            続きを読む
          </Typography>
        </Link>
      </section>
      <Divider className={classes.divider} />
      <section>
        <Typography type="title">
          ブログ始めました
        </Typography>
        <div className={classes.articleInfo}>
          <Typography>
            2017.10.16
          </Typography>
        </div>
        <Typography>
          こんにちは。この度ブログを開設しました！
          これから頑張って書いていきます！
        </Typography>
        <a href="#" className={classes.continuation}>
          <Typography>
            続きを読む
          </Typography>
        </a>
      </section>
      <Divider className={classes.divider} />
      <section>
        <Typography type="title">
          ブログ始めました
        </Typography>
        <div className={classes.articleInfo}>
          <Typography>
            2017.10.16
          </Typography>
        </div>
        <Typography>
          こんにちは。この度ブログを開設しました！
          これから頑張って書いていきます！
        </Typography>
        <a href="#" className={classes.continuation}>
          <Typography>
            続きを読む
          </Typography>
        </a>
      </section>
    </div>
  );
}

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleList);
