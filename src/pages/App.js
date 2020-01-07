import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import { auth, createUserProfile } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "./App.style.css";

import routes from "../routes";

class App extends React.Component {
   componentDidMount() {
      auth.onAuthStateChanged(userAuth => {
         if (userAuth) {
            createUserProfile(userAuth).then(userRef => {
               userRef.onSnapshot(snapShot => {
                  this.props.dispatch({
                     type: "SET_USER",
                     payload: snapShot.data()
                  });
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
                                    <Redirect path="/" />
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

const mapStateToProps = state => ({
   user: state.user.user
});

export default connect(mapStateToProps)(App);
