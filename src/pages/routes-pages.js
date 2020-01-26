import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../routes";

export default function RoutesPages(props) {
   return (
      <Switch>
         {routes.map((route, i) =>
            route.auth ? (
               <Route
                  path={route.path}
                  key={"route" + i}
                  render={() =>
                     props.user ? (
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
   );
}
