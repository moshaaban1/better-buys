import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import Spinner from "../components/spinner/spinner.component";
import routes from "../routes";

export default function RoutesPages(props) {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <DefaultLayout>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
         </DefaultLayout>
      </BrowserRouter>
   );
}
