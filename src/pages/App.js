import React, { Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
   MuiThemeProvider,
   createMuiTheme,
   CssBaseline
} from "@material-ui/core";

import { auth, createUserProfile } from "../firebase/firebase.auth";
import { selectUser } from "../redux/user/user.reselect";
import { setCurrentUser } from "../redux/user/user.actions";

import Spinner from "../components/spinner/spinner.component";
import ErrorBoundary from "../components/error-boundary/error.boundary";

import RoutesPages from "./routes-pages";
import GlobalStyle from "./GlobalStyle";
import DefaultLayout from "../layouts/default";
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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
               <DefaultLayout>
                  <ErrorBoundary>
                     <Suspense fallback={<Spinner />}>
                        <RoutesPages {...this.props} />
                     </Suspense>
                  </ErrorBoundary>
               </DefaultLayout>
            </BrowserRouter>
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
