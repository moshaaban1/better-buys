import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfile } from "../firebase/firebase.utils";

import { selectUser } from "../redux/user/user.reselect";
import { setCurrentUser } from "../redux/user/user.actions";

import DefaultLayout from "../layouts/default";

import "./App.style.css";

import routes from "../routes";

class App extends React.Component {
   componentDidMount() {
      auth.onAuthStateChanged(userAuth => {
         if (userAuth) {
            createUserProfile(userAuth).then(userRef => {
               userRef.onSnapshot(snapShot => {
                  this.props.setCurrentUser(snapShot.data());
               });
            });
         }
      });
   }

   render() {
      return (
         <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
               <DefaultLayout>
                  <Switch>
                     {routes.map((route, i) =>
                        route.auth ? (
                           <Route
                              path={route.path}
                              key={"route" + i}
                              render={() =>
                                 this.props.user ? (
                                    <Redirect to="/" />
                                 ) : (
                                    <Route {...route} key={"route" + i} />
                                 )
                              }
                           />
                        ) : (
                           <Route {...route} key={"route" + i} />
                        )
                     )}
                  </Switch>
               </DefaultLayout>
            </BrowserRouter>
         </>
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
