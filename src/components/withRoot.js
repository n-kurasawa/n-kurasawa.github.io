import React, { Component } from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, blueGrey } from 'material-ui/colors';

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
      
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

function withRoot(BaseComponent) {
  class WithRoot extends Component {

    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <AppWrapper>
            <BaseComponent />
          </AppWrapper>
        </MuiThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;