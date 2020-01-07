import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
                     {routes.map(route => (
                        <Route
                           exact
                           path={route.path}
                           component={route.component}
                           key={route.component}
                        />
                     ))}
                  </Switch>
               </DefaultLayout>
            </BrowserRouter>
         </>
      );
   }
}

export default connect()(App);
