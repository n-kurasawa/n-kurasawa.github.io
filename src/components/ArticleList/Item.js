import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  articleInfo: {
    margin: '10px 0 10px 0'
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
    <Link to={`/article/${id}`} className={classes.link}>
      <Typography>
        {content}
      </Typography>
    </Link>
    <Link to={`/article/${id}`} className={classes.continuation}>
      <Typography>
        続きを読む
      </Typography>
    </Link>
  </section>
)

export default withStyles(styles)(Item);