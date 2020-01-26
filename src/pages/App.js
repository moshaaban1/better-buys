import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
   MuiThemeProvider,
   createMuiTheme,
   CssBaseline
} from "@material-ui/core";

import { auth, createUserProfile } from "../firebase/firebase.auth";
import { selectUser } from "../redux/user/user.reselect";
import { setCurrentUser } from "../redux/user/user.actions";

import RoutesPages from "./routes-pages";
import GlobalStyle from "./GlobalStyle";
import Theme from "./Theme";

const theme = createMuiTheme(Theme);

class App extends React.Component {
   componentDidMount() {
      this.unsubscribeForm = auth.onAuthStateChanged(userAuth => {
         if (userAuth) {
            createUserProfile(userAuth).then(userRef => {
               userRef.onSnapshot(snapShot => {
                  this.props.setCurrentUser(snapShot.data());
               });
            });
         }
      });
   }

   componentWillUnmount() {
      this.unsubscribeForm();
   }

   render() {
      return (
         <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <RoutesPages {...this.props} />
         </MuiThemeProvider>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   user: selectUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: payload => dispatch(setCurrentUser(payload))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
