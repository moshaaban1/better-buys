import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import { auth, createUserProfile } from "../firebase/firebase.utils";
import "./App.style.css";

import routes from "../routes";

class App extends React.Component {
   state = {
      currentUser: null
   };

   componentDidMount() {
      auth.onAuthStateChanged(userAuth => {
         if (userAuth) {
            createUserProfile(userAuth).then(userRef => {
               userRef.onSnapshot(snapShot => {
                  this.setState({ currentUser: snapShot.data() });
               });
            });
         }
         this.setState({ currentUser: null });
      });
   }

   render() {
      return (
         <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
               <DefaultLayout user={this.state.currentUser}>
                  <Switch>
                     {routes.map(route => (
                        <Route
                           exact
                           path={route.path}
                           user={this.state.currentUser}
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

export default App;
{
   /* <Route
   exact
   path={route.path}
   user={this.state.currentUser}
   component={route.component}
   key={route.component}
/>; */
}
