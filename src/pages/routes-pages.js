import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import routes from "../routes";

export default function RoutesPages() {
   return (
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
   );
}
