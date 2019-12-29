import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.style.css";

import routes from "../routes";

class App extends React.Component {
   render() {
      return (
         <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            </BrowserRouter>
         </>
      );
   }
}

export default App;
