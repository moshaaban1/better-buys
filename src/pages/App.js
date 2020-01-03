import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import { auth } from "../firebase/firebase.utils";
import "./App.style.css";

import routes from "../routes";

class App extends React.Component {
   state = {
      currentUser: null
   };

   componentDidMount() {
      auth.onAuthStateChanged(user => {
         this.setState({ currentUser: user });
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

export default App;
