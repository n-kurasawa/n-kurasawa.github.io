import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

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

function Article(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <article>
        <div className={classes.articleInfo}>
          <Typography>
            2017.10.16
          </Typography>
        </div>
        <Typography type="title">
          ブログ始めました
        </Typography>
        <Divider className={classes.divider} />
        <Typography>
          こんにちは。この度ブログを開設しました！
          <br />
          これから頑張って書いていきます！
        </Typography>
      </article>
    </div>
  );
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
